import { AddOrderModal } from "@/components/orders/AddOrderModal";
import { OrderDetailModal } from "@/components/orders/OrderDetailModal";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useCurrency } from "@/hooks/useCurrency";
import { useOrderStats, useOrders } from "@/hooks/useOrders";
import { cn } from "@/lib/utils";
import type { Order, OrderStatus } from "@/types";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Plus,
  Printer,
  Search,
} from "lucide-react";
import { useState } from "react";

const STATUS_CONFIG: Record<
  OrderStatus,
  {
    label: string;
    variant: "default" | "secondary" | "destructive" | "outline";
    className: string;
  }
> = {
  pending: {
    label: "PENDING",
    variant: "secondary",
    className: "bg-muted text-muted-foreground",
  },
  printing: {
    label: "PRINTING",
    variant: "default",
    className: "bg-primary/10 text-primary border-primary/20",
  },
  ready: {
    label: "READY",
    variant: "default",
    className: "bg-accent/15 text-accent border-accent/25 font-bold",
  },
  delivered: {
    label: "DELIVERED",
    variant: "outline",
    className: "text-muted-foreground",
  },
  cancelled: { label: "CANCELLED", variant: "destructive", className: "" },
};

function StatCard({
  value,
  label,
  icon: Icon,
  highlight,
  index,
}: {
  value: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  highlight?: boolean;
  index: number;
}) {
  return (
    <div
      data-ocid={`stats.card.${index + 1}`}
      className={cn(
        "rounded-xl p-3.5 flex flex-col gap-2 shadow-card",
        highlight ? "bg-accent text-accent-foreground" : "bg-card",
      )}
    >
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "text-3xl font-display font-bold leading-none",
            highlight ? "text-accent-foreground" : "text-foreground",
          )}
        >
          {value}
        </span>
        <Icon
          className={cn(
            "w-5 h-5 mt-0.5",
            highlight ? "text-accent-foreground/80" : "text-muted-foreground",
          )}
        />
      </div>
      <span
        className={cn(
          "text-xs font-medium",
          highlight ? "text-accent-foreground/80" : "text-muted-foreground",
        )}
      >
        {label}
      </span>
    </div>
  );
}

function OrderCard({ order, onClick }: { order: Order; onClick: () => void }) {
  const cfg = STATUS_CONFIG[order.status];
  const { currency } = useCurrency();
  const due = new Date(order.dueDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <button
      type="button"
      onClick={onClick}
      data-ocid={`orders.item.${order.id}`}
      className="w-full text-left bg-card rounded-xl p-4 shadow-card hover:shadow-elevated transition-shadow duration-200 border border-border/50"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="min-w-0 flex-1">
          <p className="font-display font-semibold text-sm text-foreground truncate">
            {order.customerName}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {order.orderType}
          </p>
        </div>
        <Badge
          variant="outline"
          className={cn(
            "text-[10px] px-2 py-0.5 ml-2 flex-shrink-0 border",
            cfg.className,
          )}
        >
          {cfg.label}
        </Badge>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div>
          <p className="text-[10px] text-muted-foreground">Price</p>
          <p className="font-mono font-semibold text-sm text-foreground">
            {currency.symbol}
            {order.price.toFixed(2)}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-muted-foreground">Due Date</p>
          <p className="text-xs text-foreground">{due}</p>
        </div>
      </div>
    </button>
  );
}

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const { data: orders = [], isLoading } = useOrders(search || undefined);
  const { data: stats } = useOrderStats();

  return (
    <div className="px-4 pt-5 pb-4">
      {/* Welcome */}
      <div className="mb-5">
        <p className="text-xs text-muted-foreground">Welcome Back!</p>
        <h1 className="font-display font-bold text-xl text-foreground">
          Orders Dashboard
        </h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <StatCard
          value={stats?.total ?? 0}
          label="Total Orders"
          icon={Printer}
          index={0}
        />
        <StatCard
          value={stats?.pending ?? 0}
          label="Pending"
          icon={Clock}
          index={1}
        />
        <StatCard
          value={stats?.ready ?? 0}
          label="Ready"
          icon={CheckCircle2}
          highlight
          index={2}
        />
        <StatCard
          value={stats?.unpaid ?? 0}
          label="Unpaid"
          icon={AlertCircle}
          index={3}
        />
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search customers or order IDs..."
          data-ocid="orders.search_input"
          className="pl-9 bg-card border-border/60 rounded-xl h-10 text-sm"
        />
      </div>

      {/* Orders List */}
      <div className="mb-4">
        <h2 className="font-display font-semibold text-sm text-foreground mb-3">
          Active Orders{" "}
          <span className="text-muted-foreground font-normal">
            ({orders.length})
          </span>
        </h2>

        {isLoading ? (
          <div className="space-y-3" data-ocid="orders.loading_state">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-24 w-full rounded-xl" />
            ))}
          </div>
        ) : orders.length === 0 ? (
          <div
            data-ocid="orders.empty_state"
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <Printer className="w-10 h-10 text-muted-foreground/40 mb-3" />
            <p className="font-display font-semibold text-foreground mb-1">
              No orders found
            </p>
            <p className="text-xs text-muted-foreground">
              {search
                ? "Try adjusting your search"
                : "Tap + to add your first order"}
            </p>
          </div>
        ) : (
          <div data-ocid="orders.list" className="space-y-3">
            {orders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onClick={() => setSelectedOrder(order)}
              />
            ))}
          </div>
        )}
      </div>

      {/* FAB */}
      <button
        type="button"
        onClick={() => setShowAddModal(true)}
        data-ocid="orders.add_button"
        className="fixed bottom-20 right-4 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-elevated flex items-center justify-center transition-smooth hover:scale-105 active:scale-95 z-30"
        aria-label="Add new order"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Modals */}
      {selectedOrder && (
        <OrderDetailModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
      {showAddModal && <AddOrderModal onClose={() => setShowAddModal(false)} />}
    </div>
  );
}
