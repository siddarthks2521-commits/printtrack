import { AppHeader } from "@/components/layout/AppHeader";
import { BottomNav } from "@/components/layout/BottomNav";
import type { TabId } from "@/components/layout/BottomNav";
import { Toaster } from "@/components/ui/sonner";
import { CurrencyProvider } from "@/hooks/useCurrency";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Suspense, lazy, useState } from "react";

const OrdersPage = lazy(() => import("@/pages/OrdersPage"));
const QuotationsPage = lazy(() => import("@/pages/QuotationsPage"));
const ReportsPage = lazy(() => import("@/pages/ReportsPage"));
const TutorialPage = lazy(() => import("@/pages/TutorialPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30_000,
    },
  },
});

const TAB_SUBTITLES: Record<TabId, string> = {
  orders: "Orders Dashboard",
  quotations: "Quotations",
  reports: "Reports & Analytics",
  tutorial: "Tutorial & Help",
};

function AppShell() {
  const [activeTab, setActiveTab] = useState<TabId>("orders");

  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <div className="w-full max-w-[480px] min-h-screen flex flex-col bg-background relative">
        <AppHeader subtitle={TAB_SUBTITLES[activeTab]} />

        <main className="flex-1 pb-16 overflow-y-auto">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-48">
                <div className="w-6 h-6 rounded-full border-2 border-accent border-t-transparent animate-spin" />
              </div>
            }
          >
            <div
              key={activeTab}
              className="animate-tab-slide"
              data-ocid={`${activeTab}.page`}
            >
              {activeTab === "orders" && <OrdersPage />}
              {activeTab === "quotations" && <QuotationsPage />}
              {activeTab === "reports" && <ReportsPage />}
              {activeTab === "tutorial" && <TutorialPage />}
            </div>
          </Suspense>
        </main>

        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <QueryClientProvider client={queryClient}>
        <CurrencyProvider>
          <AppShell />
          <Toaster position="top-center" richColors />
        </CurrencyProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
