import { cn } from "@/lib/utils";
import { BarChart2, BookOpen, FileText, Printer } from "lucide-react";

export type TabId = "orders" | "quotations" | "reports" | "tutorial";

interface Tab {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TABS: Tab[] = [
  { id: "orders", label: "Orders", icon: Printer },
  { id: "quotations", label: "Quotations", icon: FileText },
  { id: "reports", label: "Reports", icon: BarChart2 },
  { id: "tutorial", label: "Tutorial", icon: BookOpen },
];

interface BottomNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-card border-t border-border shadow-header z-50"
      aria-label="Main navigation"
    >
      <div className="flex items-stretch h-16">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              data-ocid={`nav.${tab.id}.tab`}
              className={cn(
                "flex flex-1 flex-col items-center justify-center gap-0.5 py-2 transition-colors duration-200 relative",
                isActive
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground",
              )}
              aria-current={isActive ? "page" : undefined}
              aria-label={tab.label}
            >
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-accent" />
              )}
              <Icon
                className={cn(
                  "w-5 h-5 transition-transform duration-200",
                  isActive && "scale-110",
                )}
              />
              <span
                className={cn(
                  "text-[11px] font-medium leading-none",
                  isActive ? "font-semibold" : "",
                )}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
