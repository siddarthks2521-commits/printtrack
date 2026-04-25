import type { DailyRevenue, MonthlyRevenue, ReportSummary } from "@/types";
import { useQuery } from "@tanstack/react-query";

// Generate realistic report data from the last 30 days
function buildReportData(): ReportSummary {
  const today = new Date();

  const dailyHistory: DailyRevenue[] = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (13 - i));
    const base = 600 + Math.sin(i * 0.8) * 250;
    return {
      date: d.toISOString().split("T")[0],
      revenue: Math.round(base * (0.8 + Math.random() * 0.4) * 100) / 100,
      ordersCount: Math.floor(3 + Math.random() * 8),
    };
  });

  const monthlyHistory: MonthlyRevenue[] = [
    { month: "Nov", revenue: 12400, ordersCount: 48 },
    { month: "Dec", revenue: 18200, ordersCount: 71 },
    { month: "Jan", revenue: 14600, ordersCount: 56 },
    { month: "Feb", revenue: 16800, ordersCount: 64 },
    { month: "Mar", revenue: 21300, ordersCount: 82 },
    { month: "Apr", revenue: 17900, ordersCount: 68 },
  ];

  const todayRevenue = dailyHistory[dailyHistory.length - 1]?.revenue ?? 0;
  const currentMonth = today.toLocaleString("en-US", { month: "short" });
  const currentMonthEntry = monthlyHistory.find(
    (m) => m.month === currentMonth,
  );
  const monthRevenue = currentMonthEntry?.revenue ?? 0;

  return {
    dailyRevenue: todayRevenue,
    monthlyRevenue: Math.round(monthRevenue * 100) / 100,
    ordersCompleted: 95,
    pendingPaymentsTotal: 1139.99,
    pendingPaymentsCount: 4,
    dailyHistory,
    monthlyHistory,
  };
}

const _reportData = buildReportData();

export function useReports() {
  return useQuery<ReportSummary>({
    queryKey: ["reports"],
    queryFn: async () => ({ ..._reportData }),
    staleTime: 5 * 60 * 1000,
  });
}

export function useGetDailyRevenue() {
  return useQuery<DailyRevenue[]>({
    queryKey: ["reports", "daily"],
    queryFn: async () => _reportData.dailyHistory,
    staleTime: 5 * 60 * 1000,
  });
}

export function useGetMonthlyRevenue() {
  return useQuery<MonthlyRevenue[]>({
    queryKey: ["reports", "monthly"],
    queryFn: async () => _reportData.monthlyHistory,
    staleTime: 5 * 60 * 1000,
  });
}

export function useGetOrdersCompletedCount() {
  return useQuery<number>({
    queryKey: ["reports", "completed"],
    queryFn: async () => _reportData.ordersCompleted,
    staleTime: 5 * 60 * 1000,
  });
}

export function useGetPendingPaymentsInfo() {
  return useQuery<{ total: number; count: number }>({
    queryKey: ["reports", "pending-payments"],
    queryFn: async () => ({
      total: _reportData.pendingPaymentsTotal,
      count: _reportData.pendingPaymentsCount,
    }),
    staleTime: 5 * 60 * 1000,
  });
}
