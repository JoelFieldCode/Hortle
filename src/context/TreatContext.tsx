import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { SPECIMENS } from "../data/specimens";
import { pickOtherThan, shuffle } from "../lib/game";
import type { Specimen, TreatOption } from "../types";

type TreatStats = { attempts: number; perfect: number };

type TreatResult = {
  perfect: boolean;
  correctlySelected: number;
  wronglySelected: number;
  totalCorrect: number;
};

type TreatContextValue = {
  target: Specimen;
  options: TreatOption[];
  submitted: boolean;
  lastResult: TreatResult | null;
  stats: TreatStats;
  startCase: () => void;
  scorePlan: (selectedIndices: number[]) => TreatResult;
};

const TreatContext = createContext<TreatContextValue | null>(null);

function buildOptions(target: Specimen): TreatOption[] {
  const correct = target.actions.map((text) => ({ text, correct: true }));
  const others = SPECIMENS.filter((item) => item.name !== target.name).flatMap(
    (item) => item.actions,
  );
  const distractors = shuffle(others)
    .slice(0, 3)
    .map((text) => ({ text, correct: false }));
  return shuffle([...correct, ...distractors]);
}

export function TreatProvider({ children }: { children: ReactNode }) {
  const lastTreatName = useRef<string | null>(null);
  const [target, setTarget] = useState<Specimen>(() => {
    const picked = pickOtherThan(SPECIMENS, null);
    lastTreatName.current = picked.name;
    return picked;
  });
  const [options, setOptions] = useState<TreatOption[]>(() =>
    buildOptions(target),
  );
  const [submitted, setSubmitted] = useState(false);
  const [lastResult, setLastResult] = useState<TreatResult | null>(null);
  const [stats, setStats] = useState<TreatStats>({ attempts: 0, perfect: 0 });

  const startCase = useCallback(() => {
    const next = pickOtherThan(SPECIMENS, lastTreatName.current);
    lastTreatName.current = next.name;
    setTarget(next);
    setOptions(buildOptions(next));
    setSubmitted(false);
    setLastResult(null);
  }, []);

  const scorePlan = useCallback(
    (selectedIndices: number[]): TreatResult => {
      const totalCorrect = options.filter((opt) => opt.correct).length;
      let correctlySelected = 0;
      let wronglySelected = 0;
      options.forEach((opt, idx) => {
        if (opt.correct && selectedIndices.includes(idx)) correctlySelected++;
        if (!opt.correct && selectedIndices.includes(idx)) wronglySelected++;
      });
      const perfect =
        correctlySelected === totalCorrect && wronglySelected === 0;
      const result = {
        perfect,
        correctlySelected,
        wronglySelected,
        totalCorrect,
      };
      setSubmitted(true);
      setLastResult(result);
      setStats((prev) => ({
        attempts: prev.attempts + 1,
        perfect: prev.perfect + (perfect ? 1 : 0),
      }));
      return result;
    },
    [options],
  );

  const value = useMemo(
    () => ({
      target,
      options,
      submitted,
      lastResult,
      stats,
      startCase,
      scorePlan,
    }),
    [target, options, submitted, lastResult, stats, startCase, scorePlan],
  );

  return <TreatContext.Provider value={value}>{children}</TreatContext.Provider>;
}

export function useTreat() {
  const context = useContext(TreatContext);
  if (!context) throw new Error("useTreat must be used within TreatProvider");
  return context;
}
