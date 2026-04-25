import { c as createLucideIcon, f as useQueryClient, r as reactExports, u as useCurrency, j as jsxRuntimeExports, B as Button, F as FileText, a as ue } from "./index-Cjc0hVuN.js";
import { r as useMutation, u as useAddOrder, q as Plus, L as Label, I as Input, P as PhoneInput, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, T as Textarea, n as Trash2 } from "./useOrders-jgh0z93j.js";
import { u as useQuery, S as Skeleton } from "./skeleton-CYfH1Xre.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
];
const Calculator = createLucideIcon("calculator", __iconNode);
let _quotations = [];
let _nextQuoId = 1;
function genQuoId() {
  return `QUO-${String(_nextQuoId++).padStart(3, "0")}`;
}
function useQuotations() {
  return useQuery({
    queryKey: ["quotations"],
    queryFn: async () => [..._quotations]
  });
}
function useAddQuotation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const totalPrice = data.quantity * data.unitPrice;
      const quotation = {
        id: genQuoId(),
        ...data,
        totalPrice,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      _quotations = [quotation, ..._quotations];
      return quotation;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["quotations"] });
    }
  });
}
function useDeleteQuotation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      _quotations = _quotations.filter((q) => q.id !== id);
      return id;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["quotations"] });
    }
  });
}
function useConvertQuotationToOrder() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      quotationId,
      dueDate
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
        notes: quo.notes ?? ""
      };
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["quotations"] });
      qc.invalidateQueries({ queryKey: ["orders"] });
      qc.invalidateQueries({ queryKey: ["order-stats"] });
    }
  });
}
const ORDER_TYPES = [
  "Digital Print",
  "Offset Print",
  "Large Format",
  "Business Cards",
  "Banners",
  "Brochures",
  "Flyers",
  "Stickers",
  "Other"
];
function QuotationCard({
  quote,
  onDelete,
  onConvert
}) {
  const { currency } = useCurrency();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `quotations.item.${quote.id}`,
      className: "bg-card rounded-xl p-4 shadow-card border border-border/50",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm text-foreground truncate", children: quote.customerName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: quote.orderType })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-2 flex-shrink-0", children: quote.id })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg p-2 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Qty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: quote.quantity.toLocaleString() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg p-2 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Unit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-mono text-foreground", children: [
              currency.symbol,
              quote.unitPrice.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/10 rounded-lg p-2 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-accent", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-mono font-bold text-accent", children: [
              currency.symbol,
              quote.totalPrice.toFixed(2)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "flex-1 rounded-xl h-8 text-xs text-destructive border-destructive/30 hover:bg-destructive/10",
              "data-ocid": `quotations.delete_button.${quote.id}`,
              onClick: () => onDelete(quote.id),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5 mr-1" }),
                "Delete"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "flex-[2] rounded-xl h-8 text-xs",
              "data-ocid": `quotations.convert_button.${quote.id}`,
              onClick: () => onConvert(quote),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 mr-1" }),
                "Convert to Order"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ConvertModal({
  quote,
  onClose,
  onConfirm
}) {
  const [dueDate, setDueDate] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-end justify-center",
      "data-ocid": "quotations.convert.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 bg-foreground/30 backdrop-blur-sm",
            onClick: onClose,
            onKeyDown: (e) => e.key === "Escape" && onClose(),
            role: "button",
            tabIndex: -1,
            "aria-label": "Close"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-[480px] bg-card rounded-t-2xl shadow-elevated p-5 animate-tab-slide", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base mb-1", children: "Convert to Order" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-4", children: [
            "Set a due date for",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: quote.customerName }),
            "'s order."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "convertDue", className: "text-xs", children: "Due Date *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "convertDue",
                type: "datetime-local",
                "data-ocid": "quotations.convert.due_date.input",
                value: dueDate,
                onChange: (e) => setDueDate(e.target.value),
                className: "rounded-xl h-10 text-sm bg-background",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "flex-1 rounded-xl",
                "data-ocid": "quotations.convert.cancel_button",
                onClick: onClose,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "flex-[2] rounded-xl",
                "data-ocid": "quotations.convert.confirm_button",
                disabled: !dueDate,
                onClick: () => onConfirm(dueDate),
                children: "Convert"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function QuotationsPage() {
  const [showForm, setShowForm] = reactExports.useState(false);
  const [convertTarget, setConvertTarget] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    customerName: "",
    phoneNumber: "",
    orderType: "Digital Print",
    quantity: 100,
    unitPrice: 0.25,
    notes: ""
  });
  const { data: quotations = [], isLoading } = useQuotations();
  const addQuotation = useAddQuotation();
  const deleteQuotation = useDeleteQuotation();
  const convertToOrder = useConvertQuotationToOrder();
  const addOrder = useAddOrder();
  const { currency } = useCurrency();
  const estimatedTotal = form.quantity * form.unitPrice;
  function setField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await addQuotation.mutateAsync(form);
    ue.success("Quotation saved!");
    setShowForm(false);
    setForm({
      customerName: "",
      phoneNumber: "",
      orderType: "Digital Print",
      quantity: 100,
      unitPrice: 0.25,
      notes: ""
    });
  }
  async function handleDelete(id) {
    await deleteQuotation.mutateAsync(id);
    ue.success("Quotation deleted");
  }
  async function handleConvert(dueDate) {
    if (!convertTarget) return;
    const orderData = await convertToOrder.mutateAsync({
      quotationId: convertTarget.id,
      dueDate
    });
    await addOrder.mutateAsync(orderData);
    ue.success("Converted to order successfully!");
    setConvertTarget(null);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-5 pb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-xl text-foreground", children: "Quotations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          quotations.length,
          " active quotes"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          onClick: () => setShowForm(!showForm),
          "data-ocid": "quotations.add_button",
          className: "rounded-xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-1" }),
            "New Quote"
          ]
        }
      )
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card rounded-2xl shadow-elevated border border-border/50 p-5 mb-5 animate-fade-in",
        "data-ocid": "quotations.form",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-4 h-4 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm", children: "New Quotation" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Customer Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    "data-ocid": "quotations.customer_name.input",
                    value: form.customerName,
                    onChange: (e) => setField("customerName", e.target.value),
                    placeholder: "Full name",
                    className: "rounded-xl h-10 text-sm bg-background",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Phone Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PhoneInput,
                  {
                    "data-ocid": "quotations.phone.input",
                    value: form.phoneNumber,
                    onChange: (v) => setField("phoneNumber", v)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Order Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: form.orderType,
                    onValueChange: (v) => setField("orderType", v),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          "data-ocid": "quotations.order_type.select",
                          className: "rounded-xl h-10 text-sm bg-background",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ORDER_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Quantity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    min: 1,
                    "data-ocid": "quotations.quantity.input",
                    value: form.quantity,
                    onChange: (e) => setField("quantity", Number(e.target.value)),
                    className: "rounded-xl h-10 text-sm bg-background"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs", children: [
                  "Unit Price (",
                  currency.symbol,
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    min: 0,
                    step: 0.01,
                    "data-ocid": "quotations.unit_price.input",
                    value: form.unitPrice,
                    onChange: (e) => setField("unitPrice", Number(e.target.value)),
                    className: "rounded-xl h-10 text-sm bg-background"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Notes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    "data-ocid": "quotations.notes.textarea",
                    value: form.notes,
                    onChange: (e) => setField("notes", e.target.value),
                    placeholder: "Specifications...",
                    className: "rounded-xl text-sm bg-background resize-none",
                    rows: 2
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/10 rounded-xl p-3 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Estimated Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-lg text-accent", children: [
                currency.symbol,
                estimatedTotal.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                "data-ocid": "quotations.submit_button",
                className: "w-full rounded-xl h-11 font-semibold",
                disabled: addQuotation.isPending,
                children: "Save Quotation"
              }
            )
          ] })
        ]
      }
    ),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "quotations.loading_state", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 w-full rounded-xl" }, i)) }) : quotations.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "quotations.empty_state",
        className: "flex flex-col items-center justify-center py-12 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-10 h-10 text-muted-foreground/40 mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground mb-1", children: "No quotations yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Create a quote to get started" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "quotations.list", className: "space-y-3", children: quotations.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuotationCard,
      {
        quote: q,
        onDelete: handleDelete,
        onConvert: setConvertTarget
      },
      q.id
    )) }),
    convertTarget && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConvertModal,
      {
        quote: convertTarget,
        onClose: () => setConvertTarget(null),
        onConfirm: handleConvert
      }
    )
  ] });
}
export {
  QuotationsPage as default
};
