import { cn } from "@/lib/utils";
import {
  BarChart2,
  BookOpen,
  ChevronRight,
  FileText,
  HelpCircle,
  Printer,
  Zap,
} from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Add Your First Order",
    description:
      "Tap the orange + button on the Orders tab to create a new print order. Fill in customer details, order type, quantity, and price.",
    icon: Printer,
  },
  {
    step: "02",
    title: "Create a Quotation",
    description:
      "Use the Quotations tab to generate price estimates. The auto-calculator shows total price as you type. Convert quotes to orders in one tap.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Update Order Status",
    description:
      "Tap any order card to open details. Update the status from Pending → Printing → Ready → Delivered as the job progresses.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Track Your Revenue",
    description:
      "The Reports tab shows daily and monthly revenue charts, completed orders count, and outstanding payment totals at a glance.",
    icon: BarChart2,
  },
];

const TIPS = [
  {
    id: "tip-1",
    text: "Use quotations first for new customers to lock in pricing before creating orders.",
  },
  {
    id: "tip-2",
    text: "Set due dates with enough buffer — customers appreciate early delivery.",
  },
  {
    id: "tip-3",
    text: "Check the Reports tab at end of day for a revenue summary.",
  },
  {
    id: "tip-4",
    text: "Add phone numbers to orders for quick customer callbacks.",
  },
];

const FAQ = [
  {
    id: "faq-1",
    q: "How do I mark an order as paid?",
    a: "Open the order detail, scroll to the payment field — it shows Paid or Unpaid. Edit the order to toggle the payment status.",
  },
  {
    id: "faq-2",
    q: "Can I convert a quotation to an order?",
    a: "Yes! Open any quotation card and tap 'Convert to Order'. You'll be prompted to set a due date before the order is created.",
  },
  {
    id: "faq-3",
    q: "How is daily revenue calculated?",
    a: "Daily revenue sums up the price of all orders placed or updated today. Monthly revenue covers the current billing month.",
  },
  {
    id: "faq-4",
    q: "Can I search for a specific order?",
    a: "Use the search bar on the Orders tab. You can search by customer name or order ID (e.g. ORD-001).",
  },
  {
    id: "faq-5",
    q: "How do I delete an order?",
    a: "Open the order detail by tapping the card, then tap the Delete button at the bottom. This action cannot be undone.",
  },
];

function StepCard({
  step,
  title,
  description,
  icon: Icon,
  index,
}: {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  index: number;
}) {
  return (
    <div
      data-ocid={`tutorial.step.${index + 1}`}
      className="bg-card rounded-xl p-4 shadow-card border border-border/50 flex gap-3"
    >
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-mono font-bold text-accent">
            {step}
          </span>
          <h3 className="font-display font-semibold text-sm text-foreground truncate">
            {title}
          </h3>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  return (
    <div
      data-ocid={`tutorial.faq.${index + 1}`}
      className="bg-card rounded-xl p-4 shadow-card border border-border/50"
    >
      <div className="flex items-start gap-2.5">
        <HelpCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
        <div className="min-w-0">
          <p className="font-display font-semibold text-sm text-foreground mb-1.5">
            {q}
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function TutorialPage() {
  return (
    <div className="px-4 pt-5 pb-4" data-ocid="tutorial.page">
      {/* Hero */}
      <div className="bg-primary rounded-2xl p-5 mb-6 relative overflow-hidden">
        <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-primary-foreground/5" />
        <div className="absolute -right-2 bottom-0 w-16 h-16 rounded-full bg-accent/20" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-primary-foreground" />
            <span className="text-xs font-medium text-primary-foreground/80">
              Getting Started
            </span>
          </div>
          <h1 className="font-display font-bold text-xl text-primary-foreground leading-tight mb-1">
            PrintTrack Guide
          </h1>
          <p className="text-xs text-primary-foreground/70 leading-relaxed">
            Everything you need to manage your printing business efficiently.
          </p>
        </div>
      </div>

      {/* Quick Steps */}
      <div className="mb-6">
        <h2 className="font-display font-semibold text-sm text-foreground mb-3">
          Quick Start Guide
        </h2>
        <div className="space-y-3">
          {STEPS.map((s, i) => (
            <StepCard key={s.step} {...s} index={i} />
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-accent/10 rounded-2xl p-4 mb-6 border border-accent/20">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-4 h-4 text-accent" />
          <h2 className="font-display font-semibold text-sm text-foreground">
            Pro Tips
          </h2>
        </div>
        <ul className="space-y-2">
          {TIPS.map((tip) => (
            <li
              key={tip.id}
              className="flex items-start gap-2 text-xs text-foreground"
            >
              <ChevronRight className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
              {tip.text}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      <div className="mb-6">
        <h2 className="font-display font-semibold text-sm text-foreground mb-3">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {FAQ.map((item, i) => (
            <FAQItem key={item.id} {...item} index={i} />
          ))}
        </div>
      </div>

      {/* Support Footer */}
      <div
        className="bg-muted/40 rounded-2xl p-4 text-center"
        data-ocid="tutorial.support.card"
      >
        <p className="font-display font-semibold text-sm text-foreground mb-1">
          Need more help?
        </p>
        <p className="text-xs text-muted-foreground mb-3">
          Reach out to our support team through caffeine.ai
        </p>
        <a
          href="https://caffeine.ai?utm_source=printtrack-help"
          target="_blank"
          rel="noreferrer"
          data-ocid="tutorial.support.link"
          className={cn(
            "inline-flex items-center gap-1.5 text-xs font-semibold text-accent",
            "transition-colors hover:text-accent/80",
          )}
        >
          Visit caffeine.ai
          <ChevronRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
