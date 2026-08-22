import type { ActiveRow, Specimen, TileResult } from "../types";

export function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function pickOtherThan(
  pool: Specimen[],
  lastName: string | null,
): Specimen {
  const filtered = pool.filter((item) => item.name !== lastName);
  const source = filtered.length ? filtered : pool;
  return source[Math.floor(Math.random() * source.length)];
}

export function scoreGuess(guessArr: string[], target: string): TileResult[] {
  const length = target.length;
  const result: TileResult[] = new Array(length).fill("absent");
  const remaining: Record<string, number> = {};

  for (let i = 0; i < length; i++) {
    if (guessArr[i] === target[i]) {
      result[i] = "correct";
    } else {
      remaining[target[i]] = (remaining[target[i]] || 0) + 1;
    }
  }

  for (let i = 0; i < length; i++) {
    if (result[i] !== "correct") {
      const ch = guessArr[i];
      if (remaining[ch] > 0) {
        result[i] = "present";
        remaining[ch]--;
      }
    }
  }

  return result;
}

export function prepareRow(lockedMask: (string | null)[]): ActiveRow {
  const currentRowArr = lockedMask.map((letter) => letter ?? "");
  const unlockedIndices: number[] = [];
  lockedMask.forEach((letter, i) => {
    if (letter === null) unlockedIndices.push(i);
  });
  return { currentRowArr, unlockedIndices, inputPtr: 0 };
}
