import { c as createLucideIcon, j as jsxRuntimeExports, I as BookOpen, P as Printer, F as FileText, J as ChartNoAxesColumn, b as cn } from "./index-Cjc0hVuN.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleHelp = createLucideIcon("circle-help", __iconNode$1);
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
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const STEPS = [
  {
    step: "01",
    title: "Add Your First Order",
    description: "Tap the orange + button on the Orders tab to create a new print order. Fill in customer details, order type, quantity, and price.",
    icon: Printer
  },
  {
    step: "02",
    title: "Create a Quotation",
    description: "Use the Quotations tab to generate price estimates. The auto-calculator shows total price as you type. Convert quotes to orders in one tap.",
    icon: FileText
  },
  {
    step: "03",
    title: "Update Order Status",
    description: "Tap any order card to open details. Update the status from Pending → Printing → Ready → Delivered as the job progresses.",
    icon: Zap
  },
  {
    step: "04",
    title: "Track Your Revenue",
    description: "The Reports tab shows daily and monthly revenue charts, completed orders count, and outstanding payment totals at a glance.",
    icon: ChartNoAxesColumn
  }
];
const TIPS = [
  {
    id: "tip-1",
    text: "Use quotations first for new customers to lock in pricing before creating orders."
  },
  {
    id: "tip-2",
    text: "Set due dates with enough buffer — customers appreciate early delivery."
  },
  {
    id: "tip-3",
    text: "Check the Reports tab at end of day for a revenue summary."
  },
  {
    id: "tip-4",
    text: "Add phone numbers to orders for quick customer callbacks."
  }
];
const FAQ = [
  {
    id: "faq-1",
    q: "How do I mark an order as paid?",
    a: "Open the order detail, scroll to the payment field — it shows Paid or Unpaid. Edit the order to toggle the payment status."
  },
  {
    id: "faq-2",
    q: "Can I convert a quotation to an order?",
    a: "Yes! Open any quotation card and tap 'Convert to Order'. You'll be prompted to set a due date before the order is created."
  },
  {
    id: "faq-3",
    q: "How is daily revenue calculated?",
    a: "Daily revenue sums up the price of all orders placed or updated today. Monthly revenue covers the current billing month."
  },
  {
    id: "faq-4",
    q: "Can I search for a specific order?",
    a: "Use the search bar on the Orders tab. You can search by customer name or order ID (e.g. ORD-001)."
  },
  {
    id: "faq-5",
    q: "How do I delete an order?",
    a: "Open the order detail by tapping the card, then tap the Delete button at the bottom. This action cannot be undone."
  }
];
function StepCard({
  step,
  title,
  description,
  icon: Icon,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `tutorial.step.${index + 1}`,
      className: "bg-card rounded-xl p-4 shadow-card border border-border/50 flex gap-3",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono font-bold text-accent", children: step }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-foreground truncate", children: title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: description })
        ] })
      ]
    }
  );
}
function FAQItem({ q, a, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-ocid": `tutorial.faq.${index + 1}`,
      className: "bg-card rounded-xl p-4 shadow-card border border-border/50",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "w-4 h-4 text-accent flex-shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm text-foreground mb-1.5", children: q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: a })
        ] })
      ] })
    }
  );
}
function TutorialPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-5 pb-4", "data-ocid": "tutorial.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary rounded-2xl p-5 mb-6 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-4 -top-4 w-24 h-24 rounded-full bg-primary-foreground/5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-2 bottom-0 w-16 h-16 rounded-full bg-accent/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-5 h-5 text-primary-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-primary-foreground/80", children: "Getting Started" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-xl text-primary-foreground leading-tight mb-1", children: "PrintTrack Guide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary-foreground/70 leading-relaxed", children: "Everything you need to manage your printing business efficiently." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm text-foreground mb-3", children: "Quick Start Guide" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StepCard, { ...s, index: i }, s.step)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/10 rounded-2xl p-4 mb-6 border border-accent/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm text-foreground", children: "Pro Tips" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: TIPS.map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: "flex items-start gap-2 text-xs text-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 text-accent flex-shrink-0 mt-0.5" }),
            tip.text
          ]
        },
        tip.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm text-foreground mb-3", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: FAQ.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { ...item, index: i }, item.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-muted/40 rounded-2xl p-4 text-center",
        "data-ocid": "tutorial.support.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm text-foreground mb-1", children: "Need more help?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Reach out to our support team through caffeine.ai" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://caffeine.ai?utm_source=printtrack-help",
              target: "_blank",
              rel: "noreferrer",
              "data-ocid": "tutorial.support.link",
              className: cn(
                "inline-flex items-center gap-1.5 text-xs font-semibold text-accent",
                "transition-colors hover:text-accent/80"
              ),
              children: [
                "Visit caffeine.ai",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  TutorialPage as default
};
