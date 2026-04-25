import { PhoneInput } from "@/components/PhoneInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useCurrency } from "@/hooks/useCurrency";
import { useAddOrder } from "@/hooks/useOrders";
import {
  useAddQuotation,
  useConvertQuotationToOrder,
  useDeleteQuotation,
  useQuotations,
} from "@/hooks/useQuotations";
import { cn } from "@/lib/utils";
import type { OrderType, Quotation, QuotationFormData } from "@/types";
import { ArrowRight, Calculator, FileText, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ORDER_TYPES: OrderType[] = [
  "Digital Print",
  "Offset Print",
  "Large Format",
  "Business Cards",
  "Banners",
  "Brochures",
  "Flyers",
  "Stickers",
  "Other",
];

function QuotationCard({
  quote,
  onDelete,
  onConvert,
}: {
  quote: Quotation;
  onDelete: (id: string) => void;
  onConvert: (quote: Quotation) => void;
}) {
  const { currency } = useCurrency();
  return (
    <div
      data-ocid={`quotations.item.${quote.id}`}
      className="bg-card rounded-xl p-4 shadow-card border border-border/50"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="min-w-0 flex-1">
          <p className="font-display font-semibold text-sm text-foreground truncate">
            {quote.customerName}
          </p>
          <p className="text-xs text-muted-foreground">{quote.orderType}</p>
        </div>
        <span className="text-xs text-muted-foreground ml-2 flex-shrink-0">
          {quote.id}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-muted/40 rounded-lg p-2 text-center">
          <p className="text-[10px] text-muted-foreground">Qty</p>
          <p className="text-sm font-medium text-foreground">
            {quote.quantity.toLocaleString()}
          </p>
        </div>
        <div className="bg-muted/40 rounded-lg p-2 text-center">
          <p className="text-[10px] text-muted-foreground">Unit</p>
          <p className="text-sm font-mono text-foreground">
            {currency.symbol}
            {quote.unitPrice.toFixed(2)}
          </p>
        </div>
        <div className="bg-accent/10 rounded-lg p-2 text-center">
          <p className="text-[10px] text-accent">Total</p>
          <p className="text-sm font-mono font-bold text-accent">
            {currency.symbol}
            {quote.totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 rounded-xl h-8 text-xs text-destructive border-destructive/30 hover:bg-destructive/10"
          data-ocid={`quotations.delete_button.${quote.id}`}
          onClick={() => onDelete(quote.id)}
        >
          <Trash2 className="w-3.5 h-3.5 mr-1" />
          Delete
        </Button>
        <Button
          size="sm"
          className="flex-[2] rounded-xl h-8 text-xs"
          data-ocid={`quotations.convert_button.${quote.id}`}
          onClick={() => onConvert(quote)}
        >
          <ArrowRight className="w-3.5 h-3.5 mr-1" />
          Convert to Order
        </Button>
      </div>
    </div>
  );
}

function ConvertModal({
  quote,
  onClose,
  onConfirm,
}: {
  quote: Quotation;
  onClose: () => void;
  onConfirm: (dueDate: string) => void;
}) {
  const [dueDate, setDueDate] = useState("");
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      data-ocid="quotations.convert.dialog"
    >
      <div
        className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={-1}
        aria-label="Close"
      />
      <div className="relative w-full max-w-[480px] bg-card rounded-t-2xl shadow-elevated p-5 animate-tab-slide">
        <h3 className="font-display font-bold text-base mb-1">
          Convert to Order
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          Set a due date for{" "}
          <span className="font-medium text-foreground">
            {quote.customerName}
          </span>
          's order.
        </p>
        <div className="space-y-1.5 mb-5">
          <Label htmlFor="convertDue" className="text-xs">
            Due Date *
          </Label>
          <Input
            id="convertDue"
            type="datetime-local"
            data-ocid="quotations.convert.due_date.input"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="rounded-xl h-10 text-sm bg-background"
            required
          />
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1 rounded-xl"
            data-ocid="quotations.convert.cancel_button"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="flex-[2] rounded-xl"
            data-ocid="quotations.convert.confirm_button"
            disabled={!dueDate}
            onClick={() => onConfirm(dueDate)}
          >
            Convert
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function QuotationsPage() {
  const [showForm, setShowForm] = useState(false);
  const [convertTarget, setConvertTarget] = useState<Quotation | null>(null);
  const [form, setForm] = useState<QuotationFormData>({
    customerName: "",
    phoneNumber: "",
    orderType: "Digital Print",
    quantity: 100,
    unitPrice: 0.25,
    notes: "",
  });

  const { data: quotations = [], isLoading } = useQuotations();
  const addQuotation = useAddQuotation();
  const deleteQuotation = useDeleteQuotation();
  const convertToOrder = useConvertQuotationToOrder();
  const addOrder = useAddOrder();
  const { currency } = useCurrency();

  const estimatedTotal = form.quantity * form.unitPrice;

  function setField<K extends keyof QuotationFormData>(
    key: K,
    value: QuotationFormData[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await addQuotation.mutateAsync(form);
    toast.success("Quotation saved!");
    setShowForm(false);
    setForm({
      customerName: "",
      phoneNumber: "",
      orderType: "Digital Print",
      quantity: 100,
      unitPrice: 0.25,
      notes: "",
    });
  }

  async function handleDelete(id: string) {
    await deleteQuotation.mutateAsync(id);
    toast.success("Quotation deleted");
  }

  async function handleConvert(dueDate: string) {
    if (!convertTarget) return;
    const orderData = await convertToOrder.mutateAsync({
      quotationId: convertTarget.id,
      dueDate,
    });
    await addOrder.mutateAsync(orderData);
    toast.success("Converted to order successfully!");
    setConvertTarget(null);
  }

  return (
    <div className="px-4 pt-5 pb-4">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="font-display font-bold text-xl text-foreground">
            Quotations
          </h1>
          <p className="text-xs text-muted-foreground">
            {quotations.length} active quotes
          </p>
        </div>
        <Button
          size="sm"
          onClick={() => setShowForm(!showForm)}
          data-ocid="quotations.add_button"
          className="rounded-xl"
        >
          <Plus className="w-4 h-4 mr-1" />
          New Quote
        </Button>
      </div>

      {/* Create Form */}
      {showForm && (
        <div
          className="bg-card rounded-2xl shadow-elevated border border-border/50 p-5 mb-5 animate-fade-in"
          data-ocid="quotations.form"
        >
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="w-4 h-4 text-accent" />
            <h2 className="font-display font-semibold text-sm">
              New Quotation
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 space-y-1.5">
                <Label className="text-xs">Customer Name *</Label>
                <Input
                  data-ocid="quotations.customer_name.input"
                  value={form.customerName}
                  onChange={(e) => setField("customerName", e.target.value)}
                  placeholder="Full name"
                  className="rounded-xl h-10 text-sm bg-background"
                  required
                />
              </div>
              <div className="col-span-2 space-y-1.5">
                <Label className="text-xs">Phone Number</Label>
                <PhoneInput
                  data-ocid="quotations.phone.input"
                  value={form.phoneNumber}
                  onChange={(v) => setField("phoneNumber", v)}
                />
              </div>
              <div className="col-span-2 space-y-1.5">
                <Label className="text-xs">Order Type</Label>
                <Select
                  value={form.orderType}
                  onValueChange={(v) => setField("orderType", v as OrderType)}
                >
                  <SelectTrigger
                    data-ocid="quotations.order_type.select"
                    className="rounded-xl h-10 text-sm bg-background"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ORDER_TYPES.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Quantity</Label>
                <Input
                  type="number"
                  min={1}
                  data-ocid="quotations.quantity.input"
                  value={form.quantity}
                  onChange={(e) => setField("quantity", Number(e.target.value))}
                  className="rounded-xl h-10 text-sm bg-background"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">
                  Unit Price ({currency.symbol})
                </Label>
                <Input
                  type="number"
                  min={0}
                  step={0.01}
                  data-ocid="quotations.unit_price.input"
                  value={form.unitPrice}
                  onChange={(e) =>
                    setField("unitPrice", Number(e.target.value))
                  }
                  className="rounded-xl h-10 text-sm bg-background"
                />
              </div>
              <div className="col-span-2 space-y-1.5">
                <Label className="text-xs">Notes</Label>
                <Textarea
                  data-ocid="quotations.notes.textarea"
                  value={form.notes}
                  onChange={(e) => setField("notes", e.target.value)}
                  placeholder="Specifications..."
                  className="rounded-xl text-sm bg-background resize-none"
                  rows={2}
                />
              </div>
            </div>

            {/* Price Preview */}
            <div className="bg-accent/10 rounded-xl p-3 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Estimated Total
              </span>
              <span className="font-mono font-bold text-lg text-accent">
                {currency.symbol}
                {estimatedTotal.toFixed(2)}
              </span>
            </div>

            <Button
              type="submit"
              data-ocid="quotations.submit_button"
              className="w-full rounded-xl h-11 font-semibold"
              disabled={addQuotation.isPending}
            >
              Save Quotation
            </Button>
          </form>
        </div>
      )}

      {/* Quotations List */}
      {isLoading ? (
        <div className="space-y-3" data-ocid="quotations.loading_state">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-40 w-full rounded-xl" />
          ))}
        </div>
      ) : quotations.length === 0 ? (
        <div
          data-ocid="quotations.empty_state"
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <FileText className="w-10 h-10 text-muted-foreground/40 mb-3" />
          <p className="font-display font-semibold text-foreground mb-1">
            No quotations yet
          </p>
          <p className="text-xs text-muted-foreground">
            Create a quote to get started
          </p>
        </div>
      ) : (
        <div data-ocid="quotations.list" className="space-y-3">
          {quotations.map((q) => (
            <QuotationCard
              key={q.id}
              quote={q}
              onDelete={handleDelete}
              onConvert={setConvertTarget}
            />
          ))}
        </div>
      )}

      {convertTarget && (
        <ConvertModal
          quote={convertTarget}
          onClose={() => setConvertTarget(null)}
          onConfirm={handleConvert}
        />
      )}
    </div>
  );
}
