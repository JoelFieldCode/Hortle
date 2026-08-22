import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { SPECIMENS } from "../data/specimens";
import { shuffle } from "../lib/game";
import type { Category, Specimen } from "../types";

const ALL_CATEGORIES: Category[] = ["pest", "disease", "disorder"];

type StudyContextValue = {
  deck: Specimen[];
  index: number;
  flipped: boolean;
  filters: Set<Category>;
  toggleFilter: (key: Category | "all") => void;
  flip: () => void;
  next: () => void;
  prev: () => void;
  shuffleDeck: () => void;
};

const StudyContext = createContext<StudyContextValue | null>(null);

export function StudyProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Set<Category>>(
    () => new Set(ALL_CATEGORIES),
  );
  const [deck, setDeck] = useState<Specimen[]>(SPECIMENS);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const rebuild = useCallback((nextFilters: Set<Category>) => {
    setDeck(SPECIMENS.filter((item) => nextFilters.has(item.category)));
    setIndex(0);
    setFlipped(false);
  }, []);

  const toggleFilter = useCallback(
    (key: Category | "all") => {
      setFilters((current) => {
        const next = new Set(current);
        if (key === "all") {
          ALL_CATEGORIES.forEach((cat) => next.add(cat));
        } else if (next.has(key) && next.size > 1) {
          next.delete(key);
        } else {
          next.add(key);
        }
        rebuild(next);
        return next;
      });
    },
    [rebuild],
  );

  const flip = useCallback(() => {
    if (deck.length === 0) return;
    setFlipped((value) => !value);
  }, [deck.length]);

  const next = useCallback(() => {
    if (deck.length === 0) return;
    setIndex((i) => (i + 1) % deck.length);
    setFlipped(false);
  }, [deck.length]);

  const prev = useCallback(() => {
    if (deck.length === 0) return;
    setIndex((i) => (i - 1 + deck.length) % deck.length);
    setFlipped(false);
  }, [deck.length]);

  const shuffleDeck = useCallback(() => {
    setDeck((current) => shuffle(current));
    setIndex(0);
    setFlipped(false);
  }, []);

  const value = useMemo(
    () => ({
      deck,
      index,
      flipped,
      filters,
      toggleFilter,
      flip,
      next,
      prev,
      shuffleDeck,
    }),
    [deck, index, flipped, filters, toggleFilter, flip, next, prev, shuffleDeck],
  );

  return <StudyContext.Provider value={value}>{children}</StudyContext.Provider>;
}

export function useStudy() {
  const context = useContext(StudyContext);
  if (!context) throw new Error("useStudy must be used within StudyProvider");
  return context;
}
