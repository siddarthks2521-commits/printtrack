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
import { Textarea } from "@/components/ui/textarea";
import { useCurrency } from "@/hooks/useCurrency";
import { useAddOrder } from "@/hooks/useOrders";
import type { OrderFormData, OrderType } from "@/types";
import { X } from "lucide-react";
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

interface AddOrderModalProps {
  onClose: () => void;
}

export function AddOrderModal({ onClose }: AddOrderModalProps) {
  const addOrder = useAddOrder();
  const { currency } = useCurrency();
  const [form, setForm] = useState<OrderFormData>({
    customerName: "",
    phoneNumber: "",
    orderType: "Digital Print",
    quantity: 1,
    price: 0,
    dueDate: "",
    notes: "",
  });

  function set<K extends keyof OrderFormData>(key: K, value: OrderFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.customerName || !form.dueDate) return;
    await addOrder.mutateAsync(form);
    toast.success("Order added successfully!");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      data-ocid="add_order.dialog"
    >
      <div
        className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={-1}
        aria-label="Close modal"
      />
      <div className="relative w-full max-w-[480px] bg-card rounded-t-2xl shadow-elevated animate-tab-slide max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-border flex-shrink-0">
          <h2 className="font-display font-bold text-base text-foreground">
            New Order
          </h2>
          <button
            type="button"
            onClick={onClose}
            data-ocid="add_order.close_button"
            className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1">
          <div className="px-5 py-4 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 space-y-1.5">
                <Label htmlFor="customerName" className="text-xs font-medium">
                  Customer Name *
                </Label>
                <Input
                  id="customerName"
                  data-ocid="add_order.customer_name.input"
                  value={form.customerName}
                  onChange={(e) => set("customerName", e.target.value)}
                  placeholder="Full name"
                  className="rounded-xl h-10 text-sm bg-background"
                  required
                />
              </div>
              <div className="col-span-2 space-y-1.5">
                <Label htmlFor="phone" className="text-xs font-medium">
                  Phone Number
                </Label>
                <PhoneInput
                  id="phone"
                  data-ocid="add_order.phone.input"
                  value={form.phoneNumber}
                  onChange={(v) => set("phoneNumber", v)}
                />
              </div>
              <div className="col-span-2 space-y-1.5">
                <Label className="text-xs font-medium">Order Type *</Label>
                <Select
                  value={form.orderType}
                  onValueChange={(v) => set("orderType", v as OrderType)}
                >
                  <SelectTrigger
                    data-ocid="add_order.order_type.select"
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
                <Label htmlFor="qty" className="text-xs font-medium">
                  Quantity
                </Label>
                <Input
                  id="qty"
                  type="number"
                  min={1}
                  data-ocid="add_order.quantity.input"
                  value={form.quantity}
                  onChange={(e) => set("quantity", Number(e.target.value))}
                  className="rounded-xl h-10 text-sm bg-background"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="price" className="text-xs font-medium">
                  Price ({currency.symbol})
                </Label>
                <Input
                  id="price"
                  type="number"
                  min={0}
                  step={0.01}
                  data-ocid="add_order.price.input"
                  value={form.price}
                  onChange={(e) => set("price", Number(e.target.value))}
                  className="rounded-xl h-10 text-sm bg-background"
                />
              </div>
              <div className="col-span-2 space-y-1.5">
                <Label htmlFor="dueDate" className="text-xs font-medium">
                  Due Date *
                </Label>
                <Input
                  id="dueDate"
                  type="datetime-local"
                  data-ocid="add_order.due_date.input"
                  value={form.dueDate}
                  onChange={(e) => set("dueDate", e.target.value)}
                  className="rounded-xl h-10 text-sm bg-background"
                  required
                />
              </div>
              <div className="col-span-2 space-y-1.5">
                <Label htmlFor="notes" className="text-xs font-medium">
                  Notes
                </Label>
                <Textarea
                  id="notes"
                  data-ocid="add_order.notes.textarea"
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  placeholder="Special instructions..."
                  className="rounded-xl text-sm bg-background resize-none"
                  rows={3}
                />
              </div>
            </div>
          </div>
          <div className="px-5 pb-6 flex-shrink-0">
            <Button
              type="submit"
              data-ocid="add_order.submit_button"
              className="w-full rounded-xl h-11 font-semibold"
              disabled={addOrder.isPending}
            >
              {addOrder.isPending ? "Saving..." : "Save Order"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
