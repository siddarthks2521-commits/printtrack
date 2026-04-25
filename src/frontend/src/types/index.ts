export type OrderStatus =
  | "pending"
  | "printing"
  | "ready"
  | "delivered"
  | "cancelled";

export type OrderType =
  | "Digital Print"
  | "Offset Print"
  | "Large Format"
  | "Business Cards"
  | "Banners"
  | "Brochures"
  | "Flyers"
  | "Stickers"
  | "Other";

export interface Order {
  id: string;
  customerName: string;
  phoneNumber: string;
  orderType: OrderType;
  quantity: number;
  price: number;
  dueDate: string;
  notes?: string;
  status: OrderStatus;
  isPaid: boolean;
  createdAt: string;
}

export interface Quotation {
  id: string;
  customerName: string;
  phoneNumber: string;
  orderType: OrderType;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  notes?: string;
  createdAt: string;
}

export interface DailyRevenue {
  date: string;
  revenue: number;
  ordersCount: number;
}

export interface MonthlyRevenue {
  month: string;
  revenue: number;
  ordersCount: number;
}

export interface ReportSummary {
  dailyRevenue: number;
  monthlyRevenue: number;
  ordersCompleted: number;
  pendingPaymentsTotal: number;
  pendingPaymentsCount: number;
  dailyHistory: DailyRevenue[];
  monthlyHistory: MonthlyRevenue[];
}

export interface OrderFormData {
  customerName: string;
  phoneNumber: string;
  orderType: OrderType;
  quantity: number;
  price: number;
  dueDate: string;
  notes: string;
}

export interface QuotationFormData {
  customerName: string;
  phoneNumber: string;
  orderType: OrderType;
  quantity: number;
  unitPrice: number;
  notes: string;
}
