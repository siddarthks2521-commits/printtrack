import type { Order, OrderFormData, OrderStatus } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Empty store — no seed data
let _orders: Order[] = [];
let _nextId = 1;

function genId(): string {
  return `ORD-${String(_nextId++).padStart(3, "0")}`;
}

export function useOrders(search?: string) {
  return useQuery<Order[]>({
    queryKey: ["orders", search],
    queryFn: async () => {
      if (!search) return [..._orders];
      const q = search.toLowerCase();
      return _orders.filter(
        (o) =>
          o.customerName.toLowerCase().includes(q) ||
          o.id.toLowerCase().includes(q),
      );
    },
  });
}

export function useOrder(id: string) {
  return useQuery<Order | undefined>({
    queryKey: ["order", id],
    queryFn: async () => _orders.find((o) => o.id === id),
    enabled: !!id,
  });
}

export function useOrderStats() {
  return useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const total = _orders.length;
      const pending = _orders.filter((o) => o.status === "pending").length;
      const ready = _orders.filter((o) => o.status === "ready").length;
      const unpaid = _orders.filter((o) => !o.isPaid).length;
      return { total, pending, ready, unpaid };
    },
  });
}

export function useAddOrder() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: OrderFormData) => {
      const order: Order = {
        id: genId(),
        ...data,
        status: "pending",
        isPaid: false,
        createdAt: new Date().toISOString(),
      };
      _orders = [order, ..._orders];
      return order;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["orders"] });
      qc.invalidateQueries({ queryKey: ["order-stats"] });
    },
  });
}

export function useUpdateOrder() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: { id: string; data: Partial<OrderFormData & { isPaid: boolean }> }) => {
      _orders = _orders.map((o) => (o.id === id ? { ...o, ...data } : o));
      return _orders.find((o) => o.id === id)!;
    },
    onSuccess: (order) => {
      qc.invalidateQueries({ queryKey: ["orders"] });
      qc.invalidateQueries({ queryKey: ["order", order.id] });
      qc.invalidateQueries({ queryKey: ["order-stats"] });
    },
  });
}

export function useDeleteOrder() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      _orders = _orders.filter((o) => o.id !== id);
      return id;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["orders"] });
      qc.invalidateQueries({ queryKey: ["order-stats"] });
    },
  });
}

export function useUpdateOrderStatus() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, status }: { id: string; status: OrderStatus }) => {
      _orders = _orders.map((o) => (o.id === id ? { ...o, status } : o));
      return _orders.find((o) => o.id === id)!;
    },
    onSuccess: (order) => {
      qc.invalidateQueries({ queryKey: ["orders"] });
      qc.invalidateQueries({ queryKey: ["order", order.id] });
      qc.invalidateQueries({ queryKey: ["order-stats"] });
      qc.invalidateQueries({ queryKey: ["reports"] });
    },
  });
}
