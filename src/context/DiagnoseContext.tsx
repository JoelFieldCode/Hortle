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
import { pickOtherThan, prepareRow, scoreGuess } from "../lib/game";
import type { ActiveRow, Guess, Specimen } from "../types";

const MAX_ATTEMPTS = 5;

type DiagnoseStats = { solved: number; streak: number };

type DiagnoseContextValue = {
  target: Specimen;
  guesses: Guess[];
  lockedMask: (string | null)[];
  row: ActiveRow;
  gameOver: boolean;
  gameWon: boolean;
  secondClueUsed: boolean;
  status: string;
  stats: DiagnoseStats;
  attemptsLeft: number;
  maxAttempts: number;
  startCase: () => void;
  handleKey: (key: string) => void;
  submitGuess: () => boolean;
  giveUp: () => void;
  revealSecondClue: () => void;
};

const DiagnoseContext = createContext<DiagnoseContextValue | null>(null);

export function DiagnoseProvider({ children }: { children: ReactNode }) {
  const lastTargetName = useRef<string | null>(null);
  const [target, setTarget] = useState<Specimen>(() => {
    const picked = pickOtherThan(SPECIMENS, null);
    lastTargetName.current = picked.name;
    return picked;
  });
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [lockedMask, setLockedMask] = useState<(string | null)[]>(() =>
    new Array(target.guess.length).fill(null),
  );
  const [row, setRow] = useState<ActiveRow>(() =>
    prepareRow(new Array(target.guess.length).fill(null)),
  );
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [secondClueUsed, setSecondClueUsed] = useState(false);
  const [status, setStatus] = useState("");
  const [stats, setStats] = useState<DiagnoseStats>({ solved: 0, streak: 0 });

  const startCase = useCallback(() => {
    const next = pickOtherThan(SPECIMENS, lastTargetName.current);
    lastTargetName.current = next.name;
    const mask = new Array<string | null>(next.guess.length).fill(null);
    setTarget(next);
    setGuesses([]);
    setLockedMask(mask);
    setRow(prepareRow(mask));
    setGameOver(false);
    setGameWon(false);
    setSecondClueUsed(false);
    setStatus("");
  }, []);

  const handleKey = useCallback(
    (key: string) => {
      if (gameOver) return;
      if (key === "ENTER") return;

      if (key === "BACK") {
        setRow((current) => {
          if (current.inputPtr === 0) return current;
          const inputPtr = current.inputPtr - 1;
          const currentRowArr = [...current.currentRowArr];
          currentRowArr[current.unlockedIndices[inputPtr]] = "";
          return { ...current, currentRowArr, inputPtr };
        });
        return;
      }

      if (/^[A-Z]$/.test(key)) {
        setRow((current) => {
          if (current.inputPtr >= current.unlockedIndices.length) return current;
          const currentRowArr = [...current.currentRowArr];
          currentRowArr[current.unlockedIndices[current.inputPtr]] = key;
          return { ...current, currentRowArr, inputPtr: current.inputPtr + 1 };
        });
      }
    },
    [gameOver],
  );

  const submitGuess = useCallback(() => {
    if (gameOver) return false;

    if (row.inputPtr < row.unlockedIndices.length) {
      setStatus("Keep going — the diagnosis needs more letters.");
      return false;
    }

    const guessArr = row.currentRowArr.slice();
    const result = scoreGuess(guessArr, target.guess);
    const nextGuesses = [...guesses, { word: guessArr.join(""), result }];
    const won = result.every((cell) => cell === "correct");
    const nextMask = lockedMask.map((letter, i) =>
      result[i] === "correct" ? guessArr[i] : letter,
    );

    setGuesses(nextGuesses);
    setLockedMask(nextMask);

    if (won) {
      setGameOver(true);
      setGameWon(true);
      setStats((prev) => ({ solved: prev.solved + 1, streak: prev.streak + 1 }));
      setStatus("Correctly diagnosed! Here's the full specimen record:");
    } else if (nextGuesses.length >= MAX_ATTEMPTS) {
      setGameOver(true);
      setGameWon(false);
      setStats((prev) => ({ ...prev, streak: 0 }));
      setStatus("Out of attempts. Here's what it actually was:");
    } else {
      setRow(prepareRow(nextMask));
      setStatus(`Attempt ${nextGuesses.length} of ${MAX_ATTEMPTS} logged.`);
    }

    return true;
  }, [gameOver, guesses, lockedMask, row, target]);

  const giveUp = useCallback(() => {
    if (gameOver) return;
    setGameOver(true);
    setGameWon(false);
    setStats((prev) => ({ ...prev, streak: 0 }));
    setStatus("Revealed — here's the specimen record:");
  }, [gameOver]);

  const revealSecondClue = useCallback(() => {
    setSecondClueUsed(true);
  }, []);

  const attemptsLeft = Math.max(0, MAX_ATTEMPTS - guesses.length);

  const value = useMemo(
    () => ({
      target,
      guesses,
      lockedMask,
      row,
      gameOver,
      gameWon,
      secondClueUsed,
      status,
      stats,
      attemptsLeft,
      maxAttempts: MAX_ATTEMPTS,
      startCase,
      handleKey,
      submitGuess,
      giveUp,
      revealSecondClue,
    }),
    [
      target,
      guesses,
      lockedMask,
      row,
      gameOver,
      gameWon,
      secondClueUsed,
      status,
      stats,
      attemptsLeft,
      startCase,
      handleKey,
      submitGuess,
      giveUp,
      revealSecondClue,
    ],
  );

  return (
    <DiagnoseContext.Provider value={value}>{children}</DiagnoseContext.Provider>
  );
}

export function useDiagnose() {
  const context = useContext(DiagnoseContext);
  if (!context) {
    throw new Error("useDiagnose must be used within DiagnoseProvider");
  }
  return context;
}
