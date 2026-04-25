import { CURRENCIES, useCurrency } from "@/hooks/useCurrency";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface CurrencySelectorProps {
  className?: string;
  compact?: boolean;
}

export function CurrencySelector({
  className,
  compact = false,
}: CurrencySelectorProps) {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        data-ocid="currency.selector_button"
        className={cn(
          "flex items-center gap-1.5 bg-muted/60 hover:bg-muted rounded-lg transition-colors",
          compact ? "px-2 py-1" : "px-3 py-1.5",
        )}
        aria-label="Select currency"
      >
        <span
          className={cn(
            "font-mono font-semibold text-foreground",
            compact ? "text-sm" : "text-sm",
          )}
        >
          {currency.symbol}
        </span>
        {!compact && (
          <span className="text-xs text-muted-foreground">{currency.code}</span>
        )}
        <ChevronDown className="w-3 h-3 text-muted-foreground" />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
            role="button"
            tabIndex={-1}
            aria-label="Close dropdown"
          />
          <div
            className="absolute right-0 top-full mt-1 z-50 w-52 bg-card border border-border rounded-xl shadow-elevated overflow-hidden"
            data-ocid="currency.dropdown_menu"
          >
            <p className="text-[10px] font-medium text-muted-foreground px-3 pt-2 pb-1 uppercase tracking-wide">
              Select Currency
            </p>
            <div className="pb-1">
              {CURRENCIES.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    setCurrency(c);
                    setOpen(false);
                  }}
                  data-ocid={`currency.option.${c.code.toLowerCase()}`}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-muted/50 transition-colors text-left",
                    currency.code === c.code && "bg-accent/10",
                  )}
                >
                  <span className="font-mono font-bold text-sm w-8 text-foreground">
                    {c.symbol}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-foreground">
                      {c.code}
                    </p>
                    <p className="text-[10px] text-muted-foreground truncate">
                      {c.name}
                    </p>
                  </div>
                  {currency.code === c.code && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
