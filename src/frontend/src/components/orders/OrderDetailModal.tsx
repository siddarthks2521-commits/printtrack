import { PhoneInput } from "@/components/PhoneInput";
import { Badge } from "@/components/ui/badge";
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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useCurrency } from "@/hooks/useCurrency";
import {
  useDeleteOrder,
  useUpdateOrder,
  useUpdateOrderStatus,
} from "@/hooks/useOrders";
import { cn } from "@/lib/utils";
import type { Order, OrderStatus, OrderType } from "@/types";
import { CheckCircle2, Edit2, Trash2, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const STATUS_OPTIONS: { value: OrderStatus; label: string }[] = [
  { value: "pending", label: "Pending" },
  { value: "printing", label: "Printing" },
  { value: "ready", label: "Ready" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];

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

interface EditFormState {
  customerName: string;
  phoneNumber: string;
  orderType: OrderType;
  quantity: string;
  price: string;
  dueDate: string;
  notes: string;
  isPaid: boolean;
}

interface OrderDetailModalProps {
  order: Order;
  onClose: () => void;
}

export function OrderDetailModal({ order, onClose }: OrderDetailModalProps) {
  const [status, setStatus] = useState<OrderStatus>(order.status);
  const [editMode, setEditMode] = useState(false);
  const [editForm, setEditForm] = useState<EditFormState>({
    customerName: order.customerName,
    phoneNumber: order.phoneNumber,
    orderType: order.orderType,
    quantity: String(order.quantity),
    price: String(order.price),
    dueDate: order.dueDate.slice(0, 16),
    notes: order.notes ?? "",
    isPaid: order.isPaid,
  });

  const updateStatus = useUpdateOrderStatus();
  const updateOrder = useUpdateOrder();
  const deleteOrder = useDeleteOrder();
  const { currency } = useCurrency();

  const due = new Date(order.dueDate).toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  async function handleStatusChange(val: string) {
    const newStatus = val as OrderStatus;
    setStatus(newStatus);
    await updateStatus.mutateAsync({ id: order.id, status: newStatus });
    toast.success("Status updated");
  }

  async function handleDelete() {
    await deleteOrder.mutateAsync(order.id);
    toast.success("Order deleted");
    onClose();
  }

  async function handleSaveEdit() {
    await updateOrder.mutateAsync({
      id: order.id,
      data: {
        customerName: editForm.customerName,
        phoneNumber: editForm.phoneNumber,
        orderType: editForm.orderType,
        quantity: Number(editForm.quantity),
        price: Number(editForm.price),
        dueDate: editForm.dueDate,
        notes: editForm.notes,
        isPaid: editForm.isPaid,
      },
    });
    toast.success("Order updated");
    setEditMode(false);
  }

  function field(key: keyof EditFormState, value: string | boolean) {
    setEditForm((f) => ({ ...f, [key]: value }));
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      data-ocid="orders.dialog"
    >
      <div
        className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={-1}
        aria-label="Close modal"
      />
      <div className="relative w-full max-w-[480px] bg-card rounded-t-2xl shadow-elevated animate-tab-slide max-h-[90dvh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-border flex-shrink-0">
          <div>
            <p className="font-display font-bold text-base text-foreground">
              {editMode ? "Edit Order" : order.customerName}
            </p>
            <p className="text-xs text-muted-foreground">{order.id}</p>
          </div>
          <div className="flex items-center gap-1">
            {!editMode && (
              <button
                type="button"
                onClick={() => setEditMode(true)}
                data-ocid="orders.edit_button"
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Edit order"
              >
                <Edit2 className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              data-ocid="orders.close_button"
              className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 px-5 py-4 space-y-4">
          {editMode ? (
            <>
              <div className="space-y-1.5">
                <Label className="text-xs" htmlFor="edit-name">
                  Customer Name
                </Label>
                <Input
                  id="edit-name"
                  data-ocid="orders.edit.customerName_input"
                  value={editForm.customerName}
                  onChange={(e) => field("customerName", e.target.value)}
                  className="rounded-xl h-10"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs" htmlFor="edit-phone">
                  Phone Number
                </Label>
                <PhoneInput
                  id="edit-phone"
                  data-ocid="orders.edit.phoneNumber_input"
                  value={editForm.phoneNumber}
                  onChange={(v) => field("phoneNumber", v)}
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Order Type</Label>
                <Select
                  value={editForm.orderType}
                  onValueChange={(v) => field("orderType", v)}
                >
                  <SelectTrigger
                    data-ocid="orders.edit.orderType_select"
                    className="bg-background border-border rounded-xl h-10"
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
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs" htmlFor="edit-qty">
                    Quantity
                  </Label>
                  <Input
                    id="edit-qty"
                    data-ocid="orders.edit.quantity_input"
                    type="number"
                    min="1"
                    value={editForm.quantity}
                    onChange={(e) => field("quantity", e.target.value)}
                    className="rounded-xl h-10"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs" htmlFor="edit-price">
                    Price ({currency.symbol})
                  </Label>
                  <Input
                    id="edit-price"
                    data-ocid="orders.edit.price_input"
                    type="number"
                    min="0"
                    step="0.01"
                    value={editForm.price}
                    onChange={(e) => field("price", e.target.value)}
                    className="rounded-xl h-10"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs" htmlFor="edit-due">
                  Due Date
                </Label>
                <Input
                  id="edit-due"
                  data-ocid="orders.edit.dueDate_input"
                  type="datetime-local"
                  value={editForm.dueDate}
                  onChange={(e) => field("dueDate", e.target.value)}
                  className="rounded-xl h-10"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs" htmlFor="edit-notes">
                  Notes
                </Label>
                <Textarea
                  id="edit-notes"
                  data-ocid="orders.edit.notes_textarea"
                  value={editForm.notes}
                  onChange={(e) => field("notes", e.target.value)}
                  className="rounded-xl resize-none"
                  rows={3}
                />
              </div>
              <div className="flex items-center justify-between bg-muted/40 rounded-xl px-4 py-3">
                <Label
                  className="text-sm font-medium text-foreground"
                  htmlFor="edit-paid"
                >
                  Mark as Paid
                </Label>
                <Switch
                  id="edit-paid"
                  data-ocid="orders.edit.isPaid_switch"
                  checked={editForm.isPaid}
                  onCheckedChange={(v) => field("isPaid", v)}
                />
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-muted/40 rounded-lg p-3">
                  <p className="text-[10px] text-muted-foreground mb-1">
                    Order Type
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {order.orderType}
                  </p>
                </div>
                <div className="bg-muted/40 rounded-lg p-3">
                  <p className="text-[10px] text-muted-foreground mb-1">
                    Quantity
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {order.quantity.toLocaleString()}
                  </p>
                </div>
                <div className="bg-muted/40 rounded-lg p-3">
                  <p className="text-[10px] text-muted-foreground mb-1">
                    Price
                  </p>
                  <p className="text-sm font-mono font-bold text-foreground">
                    {currency.symbol}
                    {order.price.toFixed(2)}
                  </p>
                </div>
                <div className="bg-muted/40 rounded-lg p-3">
                  <p className="text-[10px] text-muted-foreground mb-1">
                    Payment
                  </p>
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-[10px]",
                      order.isPaid
                        ? "text-chart-5 border-chart-5/30 bg-chart-5/10"
                        : "text-destructive border-destructive/30 bg-destructive/10",
                    )}
                  >
                    {order.isPaid ? "Paid" : "Unpaid"}
                  </Badge>
                </div>
              </div>

              <div className="bg-muted/40 rounded-lg p-3">
                <p className="text-[10px] text-muted-foreground mb-1">
                  Due Date
                </p>
                <p className="text-sm text-foreground">{due}</p>
              </div>

              {order.phoneNumber && (
                <div className="bg-muted/40 rounded-lg p-3">
                  <p className="text-[10px] text-muted-foreground mb-1">
                    Phone
                  </p>
                  <p className="text-sm text-foreground">{order.phoneNumber}</p>
                </div>
              )}

              {order.notes && (
                <div className="bg-muted/40 rounded-lg p-3">
                  <p className="text-[10px] text-muted-foreground mb-1">
                    Notes
                  </p>
                  <p className="text-sm text-foreground">{order.notes}</p>
                </div>
              )}

              {/* Status Update */}
              <div>
                <p className="text-xs font-medium text-foreground mb-2">
                  Update Status
                </p>
                <Select value={status} onValueChange={handleStatusChange}>
                  <SelectTrigger
                    data-ocid="orders.status_select"
                    className="bg-card border-border rounded-xl h-10"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {STATUS_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex gap-3 px-5 pb-6 pt-3 border-t border-border/60 flex-shrink-0">
          {editMode ? (
            <>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 rounded-xl"
                data-ocid="orders.edit.cancel_button"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                className="flex-[2] rounded-xl"
                data-ocid="orders.edit.save_button"
                onClick={handleSaveEdit}
                disabled={updateOrder.isPending}
              >
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
                Save Changes
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="destructive"
                size="sm"
                className="flex-1 rounded-xl"
                data-ocid="orders.delete_button"
                onClick={handleDelete}
                disabled={deleteOrder.isPending}
              >
                <Trash2 className="w-4 h-4 mr-1.5" />
                Delete
              </Button>
              <Button
                size="sm"
                className="flex-[2] rounded-xl"
                data-ocid="orders.confirm_button"
                onClick={onClose}
              >
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
                Done
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
