import type { Quotation, QuotationFormData } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Empty store — no seed data
let _quotations: Quotation[] = [];
let _nextQuoId = 1;

function genQuoId(): string {
  return `QUO-${String(_nextQuoId++).padStart(3, "0")}`;
}

export function useQuotations() {
  return useQuery<Quotation[]>({
    queryKey: ["quotations"],
    queryFn: async () => [..._quotations],
  });
}

export function useAddQuotation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: QuotationFormData) => {
      const totalPrice = data.quantity * data.unitPrice;
      const quotation: Quotation = {
        id: genQuoId(),
        ...data,
        totalPrice,
        createdAt: new Date().toISOString(),
      };
      _quotations = [quotation, ..._quotations];
      return quotation;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["quotations"] });
    },
  });
}

export function useDeleteQuotation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      _quotations = _quotations.filter((q) => q.id !== id);
      return id;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["quotations"] });
    },
  });
}

export function useConvertQuotationToOrder() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      quotationId,
      dueDate,
    }: {
      quotationId: string;
      dueDate: string;
    }) => {
      const quo = _quotations.find((q) => q.id === quotationId);
      if (!quo) throw new Error("Quotation not found");

      _quotations = _quotations.filter((q) => q.id !== quotationId);

      return {
        customerName: quo.customerName,
        phoneNumber: quo.phoneNumber,
        orderType: quo.orderType,
        quantity: quo.quantity,
        price: quo.totalPrice,
        dueDate,
        notes: quo.notes ?? "",
      };
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["quotations"] });
      qc.invalidateQueries({ queryKey: ["orders"] });
      qc.invalidateQueries({ queryKey: ["order-stats"] });
    },
  });
}
