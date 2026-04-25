import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

export interface CountryCode {
  code: string;
  dial: string;
  flag: string;
  name: string;
}

// Priority countries at top, then alphabetical
export const COUNTRY_CODES: CountryCode[] = [
  { code: "IN", dial: "+91", flag: "🇮🇳", name: "India" },
  { code: "US", dial: "+1", flag: "🇺🇸", name: "United States" },
  { code: "GB", dial: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "AE", dial: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "SA", dial: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "PK", dial: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "BD", dial: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "CA", dial: "+1", flag: "🇨🇦", name: "Canada" },
  { code: "AU", dial: "+61", flag: "🇦🇺", name: "Australia" },
  // Rest alphabetically
  { code: "AF", dial: "+93", flag: "🇦🇫", name: "Afghanistan" },
  { code: "AL", dial: "+355", flag: "🇦🇱", name: "Albania" },
  { code: "DZ", dial: "+213", flag: "🇩🇿", name: "Algeria" },
  { code: "AR", dial: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "AM", dial: "+374", flag: "🇦🇲", name: "Armenia" },
  { code: "AT", dial: "+43", flag: "🇦🇹", name: "Austria" },
  { code: "AZ", dial: "+994", flag: "🇦🇿", name: "Azerbaijan" },
  { code: "BH", dial: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "BY", dial: "+375", flag: "🇧🇾", name: "Belarus" },
  { code: "BE", dial: "+32", flag: "🇧🇪", name: "Belgium" },
  { code: "BZ", dial: "+501", flag: "🇧🇿", name: "Belize" },
  { code: "BO", dial: "+591", flag: "🇧🇴", name: "Bolivia" },
  { code: "BA", dial: "+387", flag: "🇧🇦", name: "Bosnia" },
  { code: "BR", dial: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "BN", dial: "+673", flag: "🇧🇳", name: "Brunei" },
  { code: "BG", dial: "+359", flag: "🇧🇬", name: "Bulgaria" },
  { code: "KH", dial: "+855", flag: "🇰🇭", name: "Cambodia" },
  { code: "CM", dial: "+237", flag: "🇨🇲", name: "Cameroon" },
  { code: "CL", dial: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "CN", dial: "+86", flag: "🇨🇳", name: "China" },
  { code: "CO", dial: "+57", flag: "🇨🇴", name: "Colombia" },
  { code: "HR", dial: "+385", flag: "🇭🇷", name: "Croatia" },
  { code: "CU", dial: "+53", flag: "🇨🇺", name: "Cuba" },
  { code: "CY", dial: "+357", flag: "🇨🇾", name: "Cyprus" },
  { code: "CZ", dial: "+420", flag: "🇨🇿", name: "Czech Republic" },
  { code: "DK", dial: "+45", flag: "🇩🇰", name: "Denmark" },
  { code: "DO", dial: "+1", flag: "🇩🇴", name: "Dominican Republic" },
  { code: "EC", dial: "+593", flag: "🇪🇨", name: "Ecuador" },
  { code: "EG", dial: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "ET", dial: "+251", flag: "🇪🇹", name: "Ethiopia" },
  { code: "FI", dial: "+358", flag: "🇫🇮", name: "Finland" },
  { code: "FR", dial: "+33", flag: "🇫🇷", name: "France" },
  { code: "GE", dial: "+995", flag: "🇬🇪", name: "Georgia" },
  { code: "DE", dial: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "GH", dial: "+233", flag: "🇬🇭", name: "Ghana" },
  { code: "GR", dial: "+30", flag: "🇬🇷", name: "Greece" },
  { code: "GT", dial: "+502", flag: "🇬🇹", name: "Guatemala" },
  { code: "HN", dial: "+504", flag: "🇭🇳", name: "Honduras" },
  { code: "HK", dial: "+852", flag: "🇭🇰", name: "Hong Kong" },
  { code: "HU", dial: "+36", flag: "🇭🇺", name: "Hungary" },
  { code: "IS", dial: "+354", flag: "🇮🇸", name: "Iceland" },
  { code: "ID", dial: "+62", flag: "🇮🇩", name: "Indonesia" },
  { code: "IR", dial: "+98", flag: "🇮🇷", name: "Iran" },
  { code: "IQ", dial: "+964", flag: "🇮🇶", name: "Iraq" },
  { code: "IE", dial: "+353", flag: "🇮🇪", name: "Ireland" },
  { code: "IL", dial: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "IT", dial: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "JP", dial: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "JO", dial: "+962", flag: "🇯🇴", name: "Jordan" },
  { code: "KZ", dial: "+7", flag: "🇰🇿", name: "Kazakhstan" },
  { code: "KE", dial: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "KW", dial: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "KG", dial: "+996", flag: "🇰🇬", name: "Kyrgyzstan" },
  { code: "LA", dial: "+856", flag: "🇱🇦", name: "Laos" },
  { code: "LB", dial: "+961", flag: "🇱🇧", name: "Lebanon" },
  { code: "LY", dial: "+218", flag: "🇱🇾", name: "Libya" },
  { code: "LT", dial: "+370", flag: "🇱🇹", name: "Lithuania" },
  { code: "LU", dial: "+352", flag: "🇱🇺", name: "Luxembourg" },
  { code: "MO", dial: "+853", flag: "🇲🇴", name: "Macau" },
  { code: "MY", dial: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "MV", dial: "+960", flag: "🇲🇻", name: "Maldives" },
  { code: "MX", dial: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "MD", dial: "+373", flag: "🇲🇩", name: "Moldova" },
  { code: "MN", dial: "+976", flag: "🇲🇳", name: "Mongolia" },
  { code: "MA", dial: "+212", flag: "🇲🇦", name: "Morocco" },
  { code: "MZ", dial: "+258", flag: "🇲🇿", name: "Mozambique" },
  { code: "MM", dial: "+95", flag: "🇲🇲", name: "Myanmar" },
  { code: "NP", dial: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "NL", dial: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "NZ", dial: "+64", flag: "🇳🇿", name: "New Zealand" },
  { code: "NG", dial: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "NO", dial: "+47", flag: "🇳🇴", name: "Norway" },
  { code: "OM", dial: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "PE", dial: "+51", flag: "🇵🇪", name: "Peru" },
  { code: "PH", dial: "+63", flag: "🇵🇭", name: "Philippines" },
  { code: "PL", dial: "+48", flag: "🇵🇱", name: "Poland" },
  { code: "PT", dial: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "QA", dial: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "RO", dial: "+40", flag: "🇷🇴", name: "Romania" },
  { code: "RU", dial: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "RW", dial: "+250", flag: "🇷🇼", name: "Rwanda" },
  { code: "SN", dial: "+221", flag: "🇸🇳", name: "Senegal" },
  { code: "RS", dial: "+381", flag: "🇷🇸", name: "Serbia" },
  { code: "SG", dial: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "SK", dial: "+421", flag: "🇸🇰", name: "Slovakia" },
  { code: "ZA", dial: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "KR", dial: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "ES", dial: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "LK", dial: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "SD", dial: "+249", flag: "🇸🇩", name: "Sudan" },
  { code: "SE", dial: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "CH", dial: "+41", flag: "🇨🇭", name: "Switzerland" },
  { code: "SY", dial: "+963", flag: "🇸🇾", name: "Syria" },
  { code: "TW", dial: "+886", flag: "🇹🇼", name: "Taiwan" },
  { code: "TJ", dial: "+992", flag: "🇹🇯", name: "Tajikistan" },
  { code: "TZ", dial: "+255", flag: "🇹🇿", name: "Tanzania" },
  { code: "TH", dial: "+66", flag: "🇹🇭", name: "Thailand" },
  { code: "TN", dial: "+216", flag: "🇹🇳", name: "Tunisia" },
  { code: "TR", dial: "+90", flag: "🇹🇷", name: "Turkey" },
  { code: "TM", dial: "+993", flag: "🇹🇲", name: "Turkmenistan" },
  { code: "UG", dial: "+256", flag: "🇺🇬", name: "Uganda" },
  { code: "UA", dial: "+380", flag: "🇺🇦", name: "Ukraine" },
  { code: "UY", dial: "+598", flag: "🇺🇾", name: "Uruguay" },
  { code: "UZ", dial: "+998", flag: "🇺🇿", name: "Uzbekistan" },
  { code: "VE", dial: "+58", flag: "🇻🇪", name: "Venezuela" },
  { code: "VN", dial: "+84", flag: "🇻🇳", name: "Vietnam" },
  { code: "YE", dial: "+967", flag: "🇾🇪", name: "Yemen" },
  { code: "ZM", dial: "+260", flag: "🇿🇲", name: "Zambia" },
  { code: "ZW", dial: "+263", flag: "🇿🇼", name: "Zimbabwe" },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  id?: string;
  "data-ocid"?: string;
}

/** Parses a stored full phone string like "+91 98765 43210" → { dial: "+91", number: "98765 43210" } */
function parsePhone(value: string): { dial: string; number: string } {
  if (!value) return { dial: "+91", number: "" };
  const match = value.match(/^(\+\d{1,4})\s*(.*)/);
  if (match) {
    const found = COUNTRY_CODES.find((c) => c.dial === match[1]);
    if (found) return { dial: match[1], number: match[2] };
  }
  return { dial: "+91", number: value };
}

export function PhoneInput({
  value,
  onChange,
  className,
  id,
  "data-ocid": dataOcid,
}: PhoneInputProps) {
  const parsed = parsePhone(value);
  const [selectedDial, setSelectedDial] = useState(parsed.dial);
  const [localNumber, setLocalNumber] = useState(parsed.number);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry =
    COUNTRY_CODES.find((c) => c.dial === selectedDial) ?? COUNTRY_CODES[0];

  const filtered = search
    ? COUNTRY_CODES.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dial.includes(search),
      )
    : COUNTRY_CODES;

  function handleDial(country: CountryCode) {
    setSelectedDial(country.dial);
    setOpen(false);
    setSearch("");
    const full = `${country.dial} ${localNumber}`.trim();
    onChange(full);
  }

  function handleNumber(e: React.ChangeEvent<HTMLInputElement>) {
    const num = e.target.value;
    setLocalNumber(num);
    const full = `${selectedDial} ${num}`.trim();
    onChange(full);
  }

  return (
    <div className={cn("flex gap-1.5", className)} data-ocid={dataOcid}>
      {/* Dial code dropdown */}
      <div className="relative flex-shrink-0">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="h-10 px-2.5 flex items-center gap-1 bg-background border border-input rounded-xl text-sm hover:bg-muted/50 transition-colors min-w-[80px]"
          aria-label="Select country code"
        >
          <span className="text-base leading-none">{selectedCountry.flag}</span>
          <span className="text-xs font-mono text-foreground">
            {selectedDial}
          </span>
          <ChevronDown className="w-3 h-3 text-muted-foreground ml-0.5" />
        </button>

        {open && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => {
                setOpen(false);
                setSearch("");
              }}
              onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
              role="button"
              tabIndex={-1}
              aria-label="Close dropdown"
            />
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 mt-1 z-50 w-64 bg-card border border-border rounded-xl shadow-elevated overflow-hidden"
            >
              <div className="p-2 border-b border-border">
                <input
                  // eslint-disable-next-line jsx-a11y/no-autofocus
                  ref={(el) => el?.focus()}
                  type="text"
                  placeholder="Search country..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-2 py-1.5 text-xs bg-background border border-input rounded-lg outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div className="max-h-48 overflow-y-auto">
                {filtered.map((c) => (
                  <button
                    key={`${c.code}-${c.dial}`}
                    type="button"
                    onClick={() => handleDial(c)}
                    className="w-full flex items-center gap-2 px-3 py-2 hover:bg-muted/50 text-left transition-colors"
                  >
                    <span className="text-base leading-none w-5">{c.flag}</span>
                    <span className="text-xs text-muted-foreground font-mono w-10 flex-shrink-0">
                      {c.dial}
                    </span>
                    <span className="text-xs text-foreground truncate">
                      {c.name}
                    </span>
                  </button>
                ))}
                {filtered.length === 0 && (
                  <p className="text-xs text-muted-foreground text-center py-4">
                    No results
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Number input */}
      <input
        id={id}
        type="tel"
        value={localNumber}
        onChange={handleNumber}
        placeholder="Enter number"
        className="flex-1 h-10 px-3 bg-background border border-input rounded-xl text-sm outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-colors min-w-0"
      />
    </div>
  );
}
