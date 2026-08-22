import { useApp } from "../context/AppContext";
import type { AppMode } from "../types";

const TABS: { id: AppMode; label: string }[] = [
  { id: "diagnose", label: "Diagnose" },
  { id: "treat", label: "Treat It" },
  { id: "study", label: "Study Deck" },
];

export function Tabs() {
  const { mode, setMode } = useApp();

  return (
    <nav className="mb-5 flex justify-center gap-2">
      {TABS.map((tab) => {
        const active = mode === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            aria-current={active ? "page" : undefined}
            onClick={() => setMode(tab.id)}
            className={`rounded-full border px-[18px] py-2 font-sans text-[13px] font-semibold tracking-[0.02em] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-disorder focus-visible:outline-offset-2 hover:-translate-y-px ${
              active
                ? "border-ink bg-ink text-paper"
                : "border-paper-line bg-card text-ink-soft"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
