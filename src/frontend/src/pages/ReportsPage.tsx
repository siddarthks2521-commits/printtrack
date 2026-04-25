import { CurrencySelector } from "@/components/CurrencySelector";
import { Skeleton } from "@/components/ui/skeleton";
import { useCurrency } from "@/hooks/useCurrency";
import { useReports } from "@/hooks/useReports";
import { cn } from "@/lib/utils";
import type { DailyRevenue, MonthlyRevenue } from "@/types";
import { AlertCircle, CheckSquare, TrendingUp, Wallet } from "lucide-react";

function MetricCard({
  label,
  value,
  sub,
  icon: Icon,
  accent,
  index,
}: {
  label: string;
  value: string;
  sub?: string;
  icon: React.ComponentType<{ className?: string }>;
  accent?: boolean;
  index: number;
}) {
  return (
    <div
      data-ocid={`reports.metric.${index + 1}`}
      className={cn(
        "rounded-xl p-4 shadow-card",
        accent ? "bg-accent text-accent-foreground" : "bg-card",
      )}
    >
      <div className="flex items-start justify-between mb-2">
        <Icon
          className={cn(
            "w-5 h-5",
            accent ? "text-accent-foreground/80" : "text-muted-foreground",
          )}
        />
      </div>
      <p
        className={cn(
          "font-mono font-bold text-2xl leading-none",
          accent ? "text-accent-foreground" : "text-foreground",
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "text-[11px] mt-1.5 font-medium",
          accent ? "text-accent-foreground/80" : "text-muted-foreground",
        )}
      >
        {label}
      </p>
      {sub && (
        <p
          className={cn(
            "text-[10px] mt-0.5",
            accent ? "text-accent-foreground/60" : "text-muted-foreground/60",
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function BarChart({
  data,
  max,
}: { data: { label: string; value: number }[]; max: number }) {
  return (
    <div className="flex items-end gap-1 h-24">
      {data.map((d) => (
        <div key={d.label} className="flex-1 flex flex-col items-center gap-1">
          <div
            className="w-full rounded-t-sm bg-primary/20 relative overflow-hidden"
            style={{ height: "80px" }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm transition-all duration-500"
              style={{ height: `${max > 0 ? (d.value / max) * 100 : 0}%` }}
            />
          </div>
          <span className="text-[9px] text-muted-foreground">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

function DailyChart({ history }: { history: DailyRevenue[] }) {
  const max = Math.max(...history.map((d) => d.revenue), 1);
  const data = history.slice(-7).map((d) => ({
    label: new Date(d.date)
      .toLocaleDateString("en-US", { weekday: "short" })
      .slice(0, 1),
    value: d.revenue,
  }));
  return <BarChart data={data} max={max} />;
}

function MonthlyChart({ history }: { history: MonthlyRevenue[] }) {
  const max = Math.max(...history.map((d) => d.revenue), 1);
  const data = history.map((d) => ({ label: d.month, value: d.revenue }));
  return <BarChart data={data} max={max} />;
}

export default function ReportsPage() {
  const { data: report, isLoading } = useReports();
  const { currency } = useCurrency();

  // Format value — show "k" for thousands
  function fmt(amount: number) {
    if (amount >= 1000)
      return `${currency.symbol}${(amount / 1000).toFixed(1)}k`;
    return `${currency.symbol}${amount.toFixed(0)}`;
  }

  if (isLoading) {
    return (
      <div
        className="px-4 pt-5 pb-4 space-y-4"
        data-ocid="reports.loading_state"
      >
        <Skeleton className="h-8 w-40" />
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-24 rounded-xl" />
          ))}
        </div>
        <Skeleton className="h-48 rounded-xl" />
        <Skeleton className="h-48 rounded-xl" />
      </div>
    );
  }

  if (!report) return null;

  return (
    <div className="px-4 pt-5 pb-4" data-ocid="reports.page">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="font-display font-bold text-xl text-foreground">
            Reports
          </h1>
          <p className="text-xs text-muted-foreground">
            Analytics &amp; performance overview
          </p>
        </div>
        <CurrencySelector />
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <MetricCard
          label="Today's Revenue"
          value={fmt(report.dailyRevenue)}
          icon={Wallet}
          accent
          index={0}
        />
        <MetricCard
          label="Monthly Revenue"
          value={fmt(report.monthlyRevenue)}
          icon={TrendingUp}
          index={1}
        />
        <MetricCard
          label="Orders Completed"
          value={String(report.ordersCompleted)}
          icon={CheckSquare}
          index={2}
        />
        <MetricCard
          label="Pending Payments"
          value={fmt(report.pendingPaymentsTotal)}
          sub={`${report.pendingPaymentsCount} unpaid orders`}
          icon={AlertCircle}
          index={3}
        />
      </div>

      {/* Daily Revenue Chart */}
      <div
        className="bg-card rounded-2xl shadow-card p-4 mb-4 border border-border/50"
        data-ocid="reports.daily_chart"
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display font-semibold text-sm text-foreground">
            Daily Revenue
          </h2>
          <span className="text-[10px] text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full">
            Last 7 days
          </span>
        </div>
        <DailyChart history={report.dailyHistory} />
        <div className="mt-3 pt-3 border-t border-border">
          <div className="flex justify-between text-xs text-muted-foreground">
            {report.dailyHistory.slice(-7).map((d) => (
              <div key={d.date} className="text-center">
                <p className="font-mono text-foreground font-medium">
                  {currency.symbol}
                  {d.revenue.toFixed(0)}
                </p>
                <p className="text-[10px]">{d.ordersCount}x</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Revenue Chart */}
      <div
        className="bg-card rounded-2xl shadow-card p-4 mb-4 border border-border/50"
        data-ocid="reports.monthly_chart"
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display font-semibold text-sm text-foreground">
            Monthly Revenue
          </h2>
          <span className="text-[10px] text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full">
            6 months
          </span>
        </div>
        <MonthlyChart history={report.monthlyHistory} />
      </div>

      {/* Monthly Breakdown Table */}
      <div
        className="bg-card rounded-2xl shadow-card p-4 border border-border/50"
        data-ocid="reports.breakdown_table"
      >
        <h2 className="font-display font-semibold text-sm text-foreground mb-3">
          Monthly Breakdown
        </h2>
        <div className="space-y-2">
          {report.monthlyHistory.map((m) => (
            <div
              key={m.month}
              className="flex items-center justify-between py-2 border-b border-border/40 last:border-0"
            >
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-xs font-medium text-foreground">
                  {m.month}
                </span>
                <span className="text-xs text-muted-foreground">
                  {m.ordersCount} orders
                </span>
              </div>
              <span className="font-mono font-semibold text-sm text-foreground">
                {currency.symbol}
                {m.revenue.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
