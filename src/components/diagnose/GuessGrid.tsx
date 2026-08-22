import { useDiagnose } from "../../context/DiagnoseContext";
import type { Guess, TileResult } from "../../types";

const resultClass: Record<TileResult, string> = {
  correct: "bg-correct border-correct text-white",
  present: "bg-present border-present text-white",
  absent: "bg-absent border-absent text-white",
};

function Tile({
  letter,
  state,
}: {
  letter: string;
  state?: TileResult | "filled" | "locked" | "reveal" | "empty";
}) {
  const extra =
    state === "filled"
      ? "border-ink-soft scale-[1.03]"
      : state === "locked"
        ? `${resultClass.correct} shadow-[inset_0_0_0_2px_rgba(255,255,255,0.55)]`
        : state === "reveal"
          ? "bg-card border-dashed border-disorder text-disorder"
          : state && state in resultClass
            ? resultClass[state as TileResult]
            : "";

  return (
    <div
      className={`flex size-[clamp(24px,7vw,40px)] shrink-0 items-center justify-center rounded-md border-2 border-paper-line bg-tile font-mono text-[clamp(13px,3.4vw,18px)] font-bold uppercase text-ink transition ${extra}`}
    >
      {letter}
    </div>
  );
}

function AttemptRow({
  wordLens,
  guess,
  isCurrent,
  isReveal,
  lockedMask,
  currentRowArr,
  targetGuess,
}: {
  wordLens: number[];
  guess?: Guess;
  isCurrent?: boolean;
  isReveal?: boolean;
  lockedMask: (string | null)[];
  currentRowArr: string[];
  targetGuess: string;
}) {
  let cursor = 0;
  return (
    <div
      className={`flex w-full flex-col items-center gap-1 ${wordLens.length === 1 ? "[&_.word-group]:justify-start" : ""} ${isReveal ? "opacity-[0.92]" : ""}`}
    >
      {wordLens.map((len, groupIndex) => {
        const start = cursor;
        cursor += len;
        return (
          <div
            key={`${groupIndex}-${start}`}
            className={`word-group flex max-w-full flex-wrap justify-center gap-1.5 ${
              groupIndex > 0
                ? "mt-2.5 w-full border-t border-dashed border-paper-line pt-2.5"
                : ""
            }`}
          >
            {Array.from({ length: len }, (_, i) => {
              const c = start + i;
              if (guess) {
                return (
                  <Tile
                    key={c}
                    letter={guess.word[c]}
                    state={guess.result[c]}
                  />
                );
              }
              if (isReveal) {
                return (
                  <Tile key={c} letter={targetGuess[c]} state="reveal" />
                );
              }
              if (isCurrent) {
                if (lockedMask[c] !== null) {
                  return (
                    <Tile key={c} letter={lockedMask[c] ?? ""} state="locked" />
                  );
                }
                if (currentRowArr[c]) {
                  return (
                    <Tile key={c} letter={currentRowArr[c]} state="filled" />
                  );
                }
              }
              return <Tile key={c} letter="" state="empty" />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export function GuessGrid() {
  const { target, guesses, lockedMask, row, gameOver, gameWon, attemptsLeft } =
    useDiagnose();
  const wordLens = target.wordLens ?? [target.guess.length];
  const showRevealRow = gameOver && !gameWon;
  const rowsToShow = guesses.length + (gameOver ? (showRevealRow ? 1 : 0) : 1);

  return (
    <div className="mb-[18px] flex flex-col items-center justify-center gap-[18px] md:flex-row">
      <div className="flex w-full justify-center">
        <div className="flex w-full flex-col items-center gap-3.5">
          {Array.from({ length: rowsToShow }, (_, r) => (
            <AttemptRow
              key={r}
              wordLens={wordLens}
              guess={guesses[r]}
              isCurrent={r === guesses.length && !gameOver}
              isReveal={r === guesses.length && showRevealRow}
              lockedMask={lockedMask}
              currentRowArr={row.currentRowArr}
              targetGuess={target.guess}
            />
          ))}
        </div>
      </div>
      <div className="flex min-w-[54px] shrink-0 flex-col items-center justify-center pl-4">
        <div
          className={`font-serif text-[34px] font-bold leading-none ${
            attemptsLeft <= 1 ? "text-disease" : "text-ink"
          }`}
        >
          {attemptsLeft}
        </div>
        <div className="mt-1 text-center font-mono text-[10px] uppercase leading-[1.3] tracking-[0.08em] text-ink-soft">
          attempts
          <br />
          left
        </div>
      </div>
    </div>
  );
}
