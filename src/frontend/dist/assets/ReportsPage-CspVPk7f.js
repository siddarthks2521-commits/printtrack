import { c as createLucideIcon, u as useCurrency, r as reactExports, j as jsxRuntimeExports, b as cn, C as CURRENCIES } from "./index-Cjc0hVuN.js";
import { C as ChevronDown, u as useQuery, S as Skeleton } from "./skeleton-CYfH1Xre.js";
import { C as CircleAlert } from "./circle-alert-Bsm47dXp.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5", key: "1uzm8b" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const SquareCheckBig = createLucideIcon("square-check-big", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
];
const Wallet = createLucideIcon("wallet", __iconNode);
function CurrencySelector({
  className,
  compact = false
}) {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen(!open),
        "data-ocid": "currency.selector_button",
        className: cn(
          "flex items-center gap-1.5 bg-muted/60 hover:bg-muted rounded-lg transition-colors",
          compact ? "px-2 py-1" : "px-3 py-1.5"
        ),
        "aria-label": "Select currency",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "font-mono font-semibold text-foreground",
                compact ? "text-sm" : "text-sm"
              ),
              children: currency.symbol
            }
          ),
          !compact && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: currency.code }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3 text-muted-foreground" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "fixed inset-0 z-40",
          onClick: () => setOpen(false),
          onKeyDown: (e) => e.key === "Escape" && setOpen(false),
          role: "button",
          tabIndex: -1,
          "aria-label": "Close dropdown"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "absolute right-0 top-full mt-1 z-50 w-52 bg-card border border-border rounded-xl shadow-elevated overflow-hidden",
          "data-ocid": "currency.dropdown_menu",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-medium text-muted-foreground px-3 pt-2 pb-1 uppercase tracking-wide", children: "Select Currency" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-1", children: CURRENCIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setCurrency(c);
                  setOpen(false);
                },
                "data-ocid": `currency.option.${c.code.toLowerCase()}`,
                className: cn(
                  "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-muted/50 transition-colors text-left",
                  currency.code === c.code && "bg-accent/10"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-sm w-8 text-foreground", children: c.symbol }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground", children: c.code }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: c.name })
                  ] }),
                  currency.code === c.code && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" })
                ]
              },
              c.code
            )) })
          ]
        }
      )
    ] })
  ] });
}
function buildReportData() {
  var _a;
  const today = /* @__PURE__ */ new Date();
  const dailyHistory = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (13 - i));
    const base = 600 + Math.sin(i * 0.8) * 250;
    return {
      date: d.toISOString().split("T")[0],
      revenue: Math.round(base * (0.8 + Math.random() * 0.4) * 100) / 100,
      ordersCount: Math.floor(3 + Math.random() * 8)
    };
  });
  const monthlyHistory = [
    { month: "Nov", revenue: 12400, ordersCount: 48 },
    { month: "Dec", revenue: 18200, ordersCount: 71 },
    { month: "Jan", revenue: 14600, ordersCount: 56 },
    { month: "Feb", revenue: 16800, ordersCount: 64 },
    { month: "Mar", revenue: 21300, ordersCount: 82 },
    { month: "Apr", revenue: 17900, ordersCount: 68 }
  ];
  const todayRevenue = ((_a = dailyHistory[dailyHistory.length - 1]) == null ? void 0 : _a.revenue) ?? 0;
  const currentMonth = today.toLocaleString("en-US", { month: "short" });
  const currentMonthEntry = monthlyHistory.find(
    (m) => m.month === currentMonth
  );
  const monthRevenue = (currentMonthEntry == null ? void 0 : currentMonthEntry.revenue) ?? 0;
  return {
    dailyRevenue: todayRevenue,
    monthlyRevenue: Math.round(monthRevenue * 100) / 100,
    ordersCompleted: 95,
    pendingPaymentsTotal: 1139.99,
    pendingPaymentsCount: 4,
    dailyHistory,
    monthlyHistory
  };
}
const _reportData = buildReportData();
function useReports() {
  return useQuery({
    queryKey: ["reports"],
    queryFn: async () => ({ ..._reportData }),
    staleTime: 5 * 60 * 1e3
  });
}
function MetricCard({
  label,
  value,
  sub,
  icon: Icon,
  accent,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `reports.metric.${index + 1}`,
      className: cn(
        "rounded-xl p-4 shadow-card",
        accent ? "bg-accent text-accent-foreground" : "bg-card"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Icon,
          {
            className: cn(
              "w-5 h-5",
              accent ? "text-accent-foreground/80" : "text-muted-foreground"
            )
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: cn(
              "font-mono font-bold text-2xl leading-none",
              accent ? "text-accent-foreground" : "text-foreground"
            ),
            children: value
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: cn(
              "text-[11px] mt-1.5 font-medium",
              accent ? "text-accent-foreground/80" : "text-muted-foreground"
            ),
            children: label
          }
        ),
        sub && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: cn(
              "text-[10px] mt-0.5",
              accent ? "text-accent-foreground/60" : "text-muted-foreground/60"
            ),
            children: sub
          }
        )
      ]
    }
  );
}
function BarChart({
  data,
  max
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1 h-24", children: data.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-full rounded-t-sm bg-primary/20 relative overflow-hidden",
        style: { height: "80px" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm transition-all duration-500",
            style: { height: `${max > 0 ? d.value / max * 100 : 0}%` }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground", children: d.label })
  ] }, d.label)) });
}
function DailyChart({ history }) {
  const max = Math.max(...history.map((d) => d.revenue), 1);
  const data = history.slice(-7).map((d) => ({
    label: new Date(d.date).toLocaleDateString("en-US", { weekday: "short" }).slice(0, 1),
    value: d.revenue
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BarChart, { data, max });
}
function MonthlyChart({ history }) {
  const max = Math.max(...history.map((d) => d.revenue), 1);
  const data = history.map((d) => ({ label: d.month, value: d.revenue }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BarChart, { data, max });
}
function ReportsPage() {
  const { data: report, isLoading } = useReports();
  const { currency } = useCurrency();
  function fmt(amount) {
    if (amount >= 1e3)
      return `${currency.symbol}${(amount / 1e3).toFixed(1)}k`;
    return `${currency.symbol}${amount.toFixed(0)}`;
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "px-4 pt-5 pb-4 space-y-4",
        "data-ocid": "reports.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 rounded-xl" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 rounded-xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 rounded-xl" })
        ]
      }
    );
  }
  if (!report) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-5 pb-4", "data-ocid": "reports.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-xl text-foreground", children: "Reports" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Analytics & performance overview" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CurrencySelector, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MetricCard,
        {
          label: "Today's Revenue",
          value: fmt(report.dailyRevenue),
          icon: Wallet,
          accent: true,
          index: 0
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MetricCard,
        {
          label: "Monthly Revenue",
          value: fmt(report.monthlyRevenue),
          icon: TrendingUp,
          index: 1
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MetricCard,
        {
          label: "Orders Completed",
          value: String(report.ordersCompleted),
          icon: SquareCheckBig,
          index: 2
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MetricCard,
        {
          label: "Pending Payments",
          value: fmt(report.pendingPaymentsTotal),
          sub: `${report.pendingPaymentsCount} unpaid orders`,
          icon: CircleAlert,
          index: 3
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card rounded-2xl shadow-card p-4 mb-4 border border-border/50",
        "data-ocid": "reports.daily_chart",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm text-foreground", children: "Daily Revenue" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full", children: "Last 7 days" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DailyChart, { history: report.dailyHistory }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 pt-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between text-xs text-muted-foreground", children: report.dailyHistory.slice(-7).map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-foreground font-medium", children: [
              currency.symbol,
              d.revenue.toFixed(0)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px]", children: [
              d.ordersCount,
              "x"
            ] })
          ] }, d.date)) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card rounded-2xl shadow-card p-4 mb-4 border border-border/50",
        "data-ocid": "reports.monthly_chart",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm text-foreground", children: "Monthly Revenue" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full", children: "6 months" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MonthlyChart, { history: report.monthlyHistory })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card rounded-2xl shadow-card p-4 border border-border/50",
        "data-ocid": "reports.breakdown_table",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm text-foreground mb-3", children: "Monthly Breakdown" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: report.monthlyHistory.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between py-2 border-b border-border/40 last:border-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-xs font-medium text-foreground", children: m.month }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                    m.ordersCount,
                    " orders"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-semibold text-sm text-foreground", children: [
                  currency.symbol,
                  m.revenue.toLocaleString()
                ] })
              ]
            },
            m.month
          )) })
        ]
      }
    )
  ] });
}
export {
  ReportsPage as default
};
