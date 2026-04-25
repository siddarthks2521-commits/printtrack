import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface AddOrderArgs {
    customerName: string;
    dueDate: string;
    orderType: OrderType;
    notes: string;
    quantity: bigint;
    phoneNumber: string;
    price: number;
}
export interface Quotation {
    id: QuotationId;
    customerName: string;
    createdAt: Timestamp;
    orderType: OrderType;
    quantity: bigint;
    unitPrice: number;
    phoneNumber: string;
    totalPrice: number;
}
export type Timestamp = bigint;
export interface PendingPaymentsInfo {
    totalUnpaidAmount: number;
    totalUnpaidOrders: bigint;
}
export type QuotationId = bigint;
export interface UpdateOrderArgs {
    id: OrderId;
    customerName: string;
    status: OrderStatus;
    dueDate: string;
    isPaid: boolean;
    orderType: OrderType;
    notes: string;
    quantity: bigint;
    phoneNumber: string;
    price: number;
}
export interface MonthlyRevenueResult {
    month: bigint;
    revenue: number;
    year: bigint;
    ordersCount: bigint;
}
export interface AddQuotationArgs {
    customerName: string;
    orderType: OrderType;
    quantity: bigint;
    unitPrice: number;
    phoneNumber: string;
}
export interface DailyRevenueResult {
    revenue: number;
    date: string;
    ordersCount: bigint;
}
export interface Order {
    id: OrderId;
    customerName: string;
    status: OrderStatus;
    createdAt: Timestamp;
    dueDate: string;
    isPaid: boolean;
    orderType: OrderType;
    notes: string;
    quantity: bigint;
    phoneNumber: string;
    price: number;
}
export type OrderId = bigint;
export enum OrderStatus {
    Delivered = "Delivered",
    Ready = "Ready",
    Pending = "Pending"
}
export enum OrderType {
    Print = "Print",
    Custom = "Custom",
    Digital = "Digital"
}
export interface backendInterface {
    addOrder(args: AddOrderArgs): Promise<Order>;
    addQuotation(args: AddQuotationArgs): Promise<Quotation>;
    convertQuotationToOrder(quotationId: QuotationId, dueDate: string, notes: string): Promise<Order | null>;
    deleteOrder(id: OrderId): Promise<boolean>;
    deleteQuotation(id: QuotationId): Promise<boolean>;
    getDailyRevenue(date: string): Promise<DailyRevenueResult>;
    getMonthlyRevenue(year: bigint, month: bigint): Promise<MonthlyRevenueResult>;
    getOrder(id: OrderId): Promise<Order | null>;
    getOrders(): Promise<Array<Order>>;
    getOrdersCompletedCount(): Promise<bigint>;
    getPendingPaymentsInfo(): Promise<PendingPaymentsInfo>;
    getQuotations(): Promise<Array<Quotation>>;
    updateOrder(args: UpdateOrderArgs): Promise<boolean>;
    updateOrderStatus(id: OrderId, newStatus: OrderStatus): Promise<boolean>;
}
