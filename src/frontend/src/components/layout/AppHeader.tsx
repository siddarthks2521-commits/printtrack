import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface AppHeaderProps {
  subtitle?: string;
}

export function AppHeader({ subtitle }: AppHeaderProps) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 bg-card border-b border-border shadow-header">
      <div className="flex items-center justify-between px-4 h-14 max-w-[480px] mx-auto">
        {/* Branding */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-card flex-shrink-0">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4.5 h-4.5"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="7"
                width="18"
                height="12"
                rx="2"
                stroke="oklch(var(--primary-foreground))"
                strokeWidth="1.8"
              />
              <path
                d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
                stroke="oklch(var(--primary-foreground))"
                strokeWidth="1.8"
              />
              <circle cx="17" cy="12" r="1" fill="oklch(var(--accent))" />
              <path
                d="M7 15h6"
                stroke="oklch(var(--primary-foreground))"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base leading-tight text-foreground tracking-tight">
              PrintTrack
            </span>
            {subtitle && (
              <span className="text-[11px] text-muted-foreground leading-none">
                {subtitle}
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            data-ocid="header.theme_toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-8 h-8 rounded-full text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
