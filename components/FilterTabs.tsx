"use client";

type FilterTabsProps<T extends string> = {
  options: readonly T[];
  value: T | "All";
  onChange: (value: T | "All") => void;
  counts?: Record<string, number>;
  label: string;
};

export function FilterTabs<T extends string>({
  options,
  value,
  onChange,
  counts,
  label,
}: FilterTabsProps<T>) {
  const all: (T | "All")[] = ["All", ...options];

  return (
    <div
      role="tablist"
      aria-label={label}
      className="-mx-6 flex gap-8 overflow-x-auto px-6 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:gap-10 sm:px-0 [&::-webkit-scrollbar]:hidden"
    >
      {all.map((option) => {
        const active = option === value;
        return (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option)}
            className={`group relative shrink-0 pb-3 text-[12px] font-medium whitespace-nowrap uppercase tracking-[0.22em] transition-colors duration-300 ${
              active ? "text-charcoal" : "text-stone hover:text-charcoal"
            }`}
          >
            {option}
            {counts && (
              <sup className="ml-1.5 font-display text-[11px] tracking-normal text-gold">
                {counts[option]}
              </sup>
            )}
            <span
              className={`absolute inset-x-0 bottom-0 h-px origin-left bg-gold transition-transform duration-500 ease-luxe ${
                active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
