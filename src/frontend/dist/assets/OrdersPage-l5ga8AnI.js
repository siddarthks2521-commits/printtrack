import { c as createLucideIcon, u as useCurrency, r as reactExports, j as jsxRuntimeExports, B as Button, a as ue, S as Slot, b as cn, d as cva, e as useComposedRefs, P as Printer } from "./index-Cjc0hVuN.js";
import { u as useAddOrder, L as Label, I as Input, P as PhoneInput, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, T as Textarea, e as useControllableState, f as Primitive, g as composeEventHandlers, h as usePrevious, i as useSize, j as createContextScope, k as useUpdateOrderStatus, l as useUpdateOrder, m as useDeleteOrder, n as Trash2, o as useOrders, p as useOrderStats, q as Plus } from "./useOrders-jgh0z93j.js";
import { S as Skeleton } from "./skeleton-CYfH1Xre.js";
import { C as CircleAlert } from "./circle-alert-Bsm47dXp.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
];
const Pen = createLucideIcon("pen", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const ORDER_TYPES$1 = [
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
function AddOrderModal({ onClose }) {
  const addOrder = useAddOrder();
  const { currency } = useCurrency();
  const [form, setForm] = reactExports.useState({
    customerName: "",
    phoneNumber: "",
    orderType: "Digital Print",
    quantity: 1,
    price: 0,
    dueDate: "",
    notes: ""
  });
  function set(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.customerName || !form.dueDate) return;
    await addOrder.mutateAsync(form);
    ue.success("Order added successfully!");
    onClose();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-end justify-center",
      "data-ocid": "add_order.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 bg-foreground/30 backdrop-blur-sm",
            onClick: onClose,
            onKeyDown: (e) => e.key === "Escape" && onClose(),
            role: "button",
            tabIndex: -1,
            "aria-label": "Close modal"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-[480px] bg-card rounded-t-2xl shadow-elevated animate-tab-slide max-h-[90vh] flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 pt-5 pb-4 border-b border-border flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-base text-foreground", children: "New Order" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                "data-ocid": "add_order.close_button",
                className: "w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                "aria-label": "Close",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "overflow-y-auto flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-4 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "customerName", className: "text-xs font-medium", children: "Customer Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "customerName",
                    "data-ocid": "add_order.customer_name.input",
                    value: form.customerName,
                    onChange: (e) => set("customerName", e.target.value),
                    placeholder: "Full name",
                    className: "rounded-xl h-10 text-sm bg-background",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", className: "text-xs font-medium", children: "Phone Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PhoneInput,
                  {
                    id: "phone",
                    "data-ocid": "add_order.phone.input",
                    value: form.phoneNumber,
                    onChange: (v) => set("phoneNumber", v)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "Order Type *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: form.orderType,
                    onValueChange: (v) => set("orderType", v),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          "data-ocid": "add_order.order_type.select",
                          className: "rounded-xl h-10 text-sm bg-background",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ORDER_TYPES$1.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "qty", className: "text-xs font-medium", children: "Quantity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "qty",
                    type: "number",
                    min: 1,
                    "data-ocid": "add_order.quantity.input",
                    value: form.quantity,
                    onChange: (e) => set("quantity", Number(e.target.value)),
                    className: "rounded-xl h-10 text-sm bg-background"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "price", className: "text-xs font-medium", children: [
                  "Price (",
                  currency.symbol,
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "price",
                    type: "number",
                    min: 0,
                    step: 0.01,
                    "data-ocid": "add_order.price.input",
                    value: form.price,
                    onChange: (e) => set("price", Number(e.target.value)),
                    className: "rounded-xl h-10 text-sm bg-background"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dueDate", className: "text-xs font-medium", children: "Due Date *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "dueDate",
                    type: "datetime-local",
                    "data-ocid": "add_order.due_date.input",
                    value: form.dueDate,
                    onChange: (e) => set("dueDate", e.target.value),
                    className: "rounded-xl h-10 text-sm bg-background",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "notes", className: "text-xs font-medium", children: "Notes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "notes",
                    "data-ocid": "add_order.notes.textarea",
                    value: form.notes,
                    onChange: (e) => set("notes", e.target.value),
                    placeholder: "Special instructions...",
                    className: "rounded-xl text-sm bg-background resize-none",
                    rows: 3
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-6 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                "data-ocid": "add_order.submit_button",
                className: "w-full rounded-xl h-11 font-semibold",
                disabled: addOrder.isPending,
                children: addOrder.isPending ? "Saving..." : "Save Order"
              }
            ) })
          ] })
        ] })
      ]
    }
  );
}
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
var SWITCH_NAME = "Switch";
var [createSwitchContext] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...switchProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked ?? false,
      onChange: onCheckedChange,
      caller: SWITCH_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...switchProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }
);
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = reactExports.forwardRef(
  ({
    __scopeSwitch,
    control,
    checked,
    bubbles = true,
    ...props
  }, forwardedRef) => {
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var Root = Switch$1;
var Thumb = SwitchThumb;
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
const STATUS_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "printing", label: "Printing" },
  { value: "ready", label: "Ready" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" }
];
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
function OrderDetailModal({ order, onClose }) {
  const [status, setStatus] = reactExports.useState(order.status);
  const [editMode, setEditMode] = reactExports.useState(false);
  const [editForm, setEditForm] = reactExports.useState({
    customerName: order.customerName,
    phoneNumber: order.phoneNumber,
    orderType: order.orderType,
    quantity: String(order.quantity),
    price: String(order.price),
    dueDate: order.dueDate.slice(0, 16),
    notes: order.notes ?? "",
    isPaid: order.isPaid
  });
  const updateStatus = useUpdateOrderStatus();
  const updateOrder = useUpdateOrder();
  const deleteOrder = useDeleteOrder();
  const { currency } = useCurrency();
  const due = new Date(order.dueDate).toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  async function handleStatusChange(val) {
    const newStatus = val;
    setStatus(newStatus);
    await updateStatus.mutateAsync({ id: order.id, status: newStatus });
    ue.success("Status updated");
  }
  async function handleDelete() {
    await deleteOrder.mutateAsync(order.id);
    ue.success("Order deleted");
    onClose();
  }
  async function handleSaveEdit() {
    await updateOrder.mutateAsync({
      id: order.id,
      data: {
        customerName: editForm.customerName,
        phoneNumber: editForm.phoneNumber,
        orderType: editForm.orderType,
        quantity: Number(editForm.quantity),
        price: Number(editForm.price),
        dueDate: editForm.dueDate,
        notes: editForm.notes,
        isPaid: editForm.isPaid
      }
    });
    ue.success("Order updated");
    setEditMode(false);
  }
  function field(key, value) {
    setEditForm((f) => ({ ...f, [key]: value }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-end justify-center",
      "data-ocid": "orders.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 bg-foreground/30 backdrop-blur-sm",
            onClick: onClose,
            onKeyDown: (e) => e.key === "Escape" && onClose(),
            role: "button",
            tabIndex: -1,
            "aria-label": "Close modal"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-[480px] bg-card rounded-t-2xl shadow-elevated animate-tab-slide max-h-[90dvh] flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 pt-5 pb-4 border-b border-border flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-base text-foreground", children: editMode ? "Edit Order" : order.customerName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: order.id })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              !editMode && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setEditMode(true),
                  "data-ocid": "orders.edit_button",
                  className: "w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                  "aria-label": "Edit order",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  "data-ocid": "orders.close_button",
                  className: "w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                  "aria-label": "Close",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto flex-1 px-5 py-4 space-y-4", children: editMode ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", htmlFor: "edit-name", children: "Customer Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "edit-name",
                  "data-ocid": "orders.edit.customerName_input",
                  value: editForm.customerName,
                  onChange: (e) => field("customerName", e.target.value),
                  className: "rounded-xl h-10"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", htmlFor: "edit-phone", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                PhoneInput,
                {
                  id: "edit-phone",
                  "data-ocid": "orders.edit.phoneNumber_input",
                  value: editForm.phoneNumber,
                  onChange: (v) => field("phoneNumber", v)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Order Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: editForm.orderType,
                  onValueChange: (v) => field("orderType", v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        "data-ocid": "orders.edit.orderType_select",
                        className: "bg-background border-border rounded-xl h-10",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ORDER_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", htmlFor: "edit-qty", children: "Quantity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "edit-qty",
                    "data-ocid": "orders.edit.quantity_input",
                    type: "number",
                    min: "1",
                    value: editForm.quantity,
                    onChange: (e) => field("quantity", e.target.value),
                    className: "rounded-xl h-10"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs", htmlFor: "edit-price", children: [
                  "Price (",
                  currency.symbol,
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "edit-price",
                    "data-ocid": "orders.edit.price_input",
                    type: "number",
                    min: "0",
                    step: "0.01",
                    value: editForm.price,
                    onChange: (e) => field("price", e.target.value),
                    className: "rounded-xl h-10"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", htmlFor: "edit-due", children: "Due Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "edit-due",
                  "data-ocid": "orders.edit.dueDate_input",
                  type: "datetime-local",
                  value: editForm.dueDate,
                  onChange: (e) => field("dueDate", e.target.value),
                  className: "rounded-xl h-10"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", htmlFor: "edit-notes", children: "Notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "edit-notes",
                  "data-ocid": "orders.edit.notes_textarea",
                  value: editForm.notes,
                  onChange: (e) => field("notes", e.target.value),
                  className: "rounded-xl resize-none",
                  rows: 3
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-muted/40 rounded-xl px-4 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  className: "text-sm font-medium text-foreground",
                  htmlFor: "edit-paid",
                  children: "Mark as Paid"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  id: "edit-paid",
                  "data-ocid": "orders.edit.isPaid_switch",
                  checked: editForm.isPaid,
                  onCheckedChange: (v) => field("isPaid", v)
                }
              )
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-1", children: "Order Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: order.orderType })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-1", children: "Quantity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: order.quantity.toLocaleString() })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-1", children: "Price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-mono font-bold text-foreground", children: [
                  currency.symbol,
                  order.price.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-1", children: "Payment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: cn(
                      "text-[10px]",
                      order.isPaid ? "text-chart-5 border-chart-5/30 bg-chart-5/10" : "text-destructive border-destructive/30 bg-destructive/10"
                    ),
                    children: order.isPaid ? "Paid" : "Unpaid"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-1", children: "Due Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: due })
            ] }),
            order.phoneNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-1", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: order.phoneNumber })
            ] }),
            order.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-1", children: "Notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: order.notes })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground mb-2", children: "Update Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: status, onValueChange: handleStatusChange, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    "data-ocid": "orders.status_select",
                    className: "bg-card border-border rounded-xl h-10",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STATUS_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: opt.value, children: opt.label }, opt.value)) })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 px-5 pb-6 pt-3 border-t border-border/60 flex-shrink-0", children: editMode ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "flex-1 rounded-xl",
                "data-ocid": "orders.edit.cancel_button",
                onClick: () => setEditMode(false),
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "flex-[2] rounded-xl",
                "data-ocid": "orders.edit.save_button",
                onClick: handleSaveEdit,
                disabled: updateOrder.isPending,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 mr-1.5" }),
                  "Save Changes"
                ]
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "destructive",
                size: "sm",
                className: "flex-1 rounded-xl",
                "data-ocid": "orders.delete_button",
                onClick: handleDelete,
                disabled: deleteOrder.isPending,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 mr-1.5" }),
                  "Delete"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "flex-[2] rounded-xl",
                "data-ocid": "orders.confirm_button",
                onClick: onClose,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 mr-1.5" }),
                  "Done"
                ]
              }
            )
          ] }) })
        ] })
      ]
    }
  );
}
const STATUS_CONFIG = {
  pending: {
    label: "PENDING",
    variant: "secondary",
    className: "bg-muted text-muted-foreground"
  },
  printing: {
    label: "PRINTING",
    variant: "default",
    className: "bg-primary/10 text-primary border-primary/20"
  },
  ready: {
    label: "READY",
    variant: "default",
    className: "bg-accent/15 text-accent border-accent/25 font-bold"
  },
  delivered: {
    label: "DELIVERED",
    variant: "outline",
    className: "text-muted-foreground"
  },
  cancelled: { label: "CANCELLED", variant: "destructive", className: "" }
};
function StatCard({
  value,
  label,
  icon: Icon,
  highlight,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `stats.card.${index + 1}`,
      className: cn(
        "rounded-xl p-3.5 flex flex-col gap-2 shadow-card",
        highlight ? "bg-accent text-accent-foreground" : "bg-card"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "text-3xl font-display font-bold leading-none",
                highlight ? "text-accent-foreground" : "text-foreground"
              ),
              children: value
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Icon,
            {
              className: cn(
                "w-5 h-5 mt-0.5",
                highlight ? "text-accent-foreground/80" : "text-muted-foreground"
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "text-xs font-medium",
              highlight ? "text-accent-foreground/80" : "text-muted-foreground"
            ),
            children: label
          }
        )
      ]
    }
  );
}
function OrderCard({ order, onClick }) {
  const cfg = STATUS_CONFIG[order.status];
  const { currency } = useCurrency();
  const due = new Date(order.dueDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick,
      "data-ocid": `orders.item.${order.id}`,
      className: "w-full text-left bg-card rounded-xl p-4 shadow-card hover:shadow-elevated transition-shadow duration-200 border border-border/50",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm text-foreground truncate", children: order.customerName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: order.orderType })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: cn(
                "text-[10px] px-2 py-0.5 ml-2 flex-shrink-0 border",
                cfg.className
              ),
              children: cfg.label
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono font-semibold text-sm text-foreground", children: [
              currency.symbol,
              order.price.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Due Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground", children: due })
          ] })
        ] })
      ]
    }
  );
}
function OrdersPage() {
  const [search, setSearch] = reactExports.useState("");
  const [selectedOrder, setSelectedOrder] = reactExports.useState(null);
  const [showAddModal, setShowAddModal] = reactExports.useState(false);
  const { data: orders = [], isLoading } = useOrders(search || void 0);
  const { data: stats } = useOrderStats();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-5 pb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Welcome Back!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-xl text-foreground", children: "Orders Dashboard" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          value: (stats == null ? void 0 : stats.total) ?? 0,
          label: "Total Orders",
          icon: Printer,
          index: 0
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          value: (stats == null ? void 0 : stats.pending) ?? 0,
          label: "Pending",
          icon: Clock,
          index: 1
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          value: (stats == null ? void 0 : stats.ready) ?? 0,
          label: "Ready",
          icon: CircleCheck,
          highlight: true,
          index: 2
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          value: (stats == null ? void 0 : stats.unpaid) ?? 0,
          label: "Unpaid",
          icon: CircleAlert,
          index: 3
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: search,
          onChange: (e) => setSearch(e.target.value),
          placeholder: "Search customers or order IDs...",
          "data-ocid": "orders.search_input",
          className: "pl-9 bg-card border-border/60 rounded-xl h-10 text-sm"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-semibold text-sm text-foreground mb-3", children: [
        "Active Orders",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-normal", children: [
          "(",
          orders.length,
          ")"
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "orders.loading_state", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full rounded-xl" }, i)) }) : orders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "orders.empty_state",
          className: "flex flex-col items-center justify-center py-12 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-10 h-10 text-muted-foreground/40 mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground mb-1", children: "No orders found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: search ? "Try adjusting your search" : "Tap + to add your first order" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "orders.list", className: "space-y-3", children: orders.map((order) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        OrderCard,
        {
          order,
          onClick: () => setSelectedOrder(order)
        },
        order.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setShowAddModal(true),
        "data-ocid": "orders.add_button",
        className: "fixed bottom-20 right-4 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-elevated flex items-center justify-center transition-smooth hover:scale-105 active:scale-95 z-30",
        "aria-label": "Add new order",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-6 h-6" })
      }
    ),
    selectedOrder && /* @__PURE__ */ jsxRuntimeExports.jsx(
      OrderDetailModal,
      {
        order: selectedOrder,
        onClose: () => setSelectedOrder(null)
      }
    ),
    showAddModal && /* @__PURE__ */ jsxRuntimeExports.jsx(AddOrderModal, { onClose: () => setShowAddModal(false) })
  ] });
}
export {
  OrdersPage as default
};
