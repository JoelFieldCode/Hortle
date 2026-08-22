import { Button } from "../Button";
import { Chip } from "../Chip";
import { SpecimenCard } from "../SpecimenCard";
import { useStudy } from "../../context/StudyContext";
import type { Category } from "../../types";

const FILTERS: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "pest", label: "Pests" },
  { key: "disease", label: "Diseases" },
  { key: "disorder", label: "Disorders" },
];

const onStyles: Record<Category | "all", string> = {
  all: "bg-ink text-paper border-ink",
  pest: "bg-pest text-white border-pest",
  disease: "bg-disease text-white border-disease",
  disorder: "bg-disorder text-white border-disorder",
};

export function StudyPanel() {
  const { deck, index, flipped, filters, toggleFilter, flip, next, prev, shuffleDeck } =
    useStudy();
  const card = deck[index];

  return (
    <section>
      <div className="mb-4 flex flex-wrap justify-center gap-1.5">
        {FILTERS.map((filter) => {
          const on =
            filter.key === "all"
              ? filters.size === 3
              : filters.has(filter.key);
          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => toggleFilter(filter.key)}
              className={`cursor-pointer rounded-full border border-paper-line bg-card px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-ink-soft ${
                on ? onStyles[filter.key] : ""
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {card ? (
        <>
          <div className="mx-auto max-w-[480px]" style={{ perspective: "1400px" }}>
            <button
              type="button"
              onClick={flip}
              className="relative min-h-[300px] w-full cursor-pointer text-left"
            >
              {!flipped ? (
                <div className="flex min-h-[300px] flex-col items-center justify-center rounded-[10px] border border-paper-line bg-card px-[22px] py-[26px] text-center shadow-card">
                  <Chip category={card.category} />
                  <div className="mb-3.5 mt-2 text-[54px]">{card.emoji}</div>
                  <div className="mb-2.5 font-serif text-2xl">{card.name}</div>
                  <div className="mt-2.5 text-xs italic text-ink-soft">
                    Tap the card to reveal treatment
                  </div>
                </div>
              ) : (
                <SpecimenCard specimen={card} />
              )}
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-2.5">
            <Button variant="ghost" type="button" onClick={prev}>
              ← Prev
            </Button>
            <Button variant="ghost" type="button" onClick={shuffleDeck}>
              Shuffle
            </Button>
            <Button type="button" onClick={next}>
              Next →
            </Button>
          </div>
          <div className="mt-2.5 text-center font-mono text-[11px] text-ink-soft">
            Card {index + 1} of {deck.length}
          </div>
        </>
      ) : (
        <div className="mt-2.5 text-center font-mono text-[11px] text-ink-soft">
          No cards match this filter.
        </div>
      )}
    </section>
  );
}
