import { useEffect } from "react";
import { Button } from "../Button";
import { GuessGrid } from "./GuessGrid";
import { Keyboard } from "./Keyboard";
import { SpecimenCard } from "../SpecimenCard";
import { useApp } from "../../context/AppContext";
import { useDiagnose } from "../../context/DiagnoseContext";

export function DiagnosePanel() {
  const { mode } = useApp();
  const {
    target,
    gameOver,
    secondClueUsed,
    status,
    stats,
    handleKey,
    submitGuess,
    giveUp,
    startCase,
    revealSecondClue,
  } = useDiagnose();

  useEffect(() => {
    if (mode !== "diagnose") return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (gameOver) return;
      const key = event.key.toUpperCase();
      if (key === "ENTER") submitGuess();
      else if (key === "BACKSPACE") handleKey("BACK");
      else if (/^[A-Z]$/.test(key)) handleKey(key);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mode, gameOver, handleKey, submitGuess]);

  return (
    <section>
      <div className="mb-5 rounded-[10px] border border-paper-line bg-card px-5 py-[18px] text-center shadow-card">
        <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft">
          Case notes
        </div>
        <div className="font-serif text-lg leading-normal text-ink">
          {target.clue}
        </div>
        {secondClueUsed && (
          <div className="mt-2.5 border-t border-dashed border-paper-line pt-2.5 font-serif text-[15px] text-ink-soft">
            Likely cause: {target.cause}
          </div>
        )}
        <Button
          variant="ghost"
          className="mt-3.5 px-3.5 py-1.5 text-xs disabled:opacity-45"
          disabled={secondClueUsed || gameOver}
          onClick={revealSecondClue}
        >
          {secondClueUsed ? "Second clue used" : "Need a second clue?"}
        </Button>
      </div>

      <div className="mb-2.5 min-h-5 text-center text-[13px] font-semibold text-green-700">
        {status || "\u00a0"}
      </div>

      <GuessGrid />
      <Keyboard />

      <div className="my-3.5 flex justify-center gap-2.5">
        {!gameOver && (
          <Button variant="submit" type="button" onClick={submitGuess}>
            Submit diagnosis
          </Button>
        )}
      </div>

      <div className="my-3.5 flex justify-center gap-2.5">
        <Button variant="ghost" type="button" onClick={giveUp} disabled={gameOver}>
          Reveal specimen
        </Button>
        {gameOver && (
          <Button type="button" onClick={startCase}>
            Next case →
          </Button>
        )}
      </div>

      <div className="mt-2.5 text-center font-mono text-[11px] text-ink-soft">
        Diagnosed: {stats.solved} · Current streak: {stats.streak}
      </div>

      {gameOver && (
        <div className="mt-4">
          <SpecimenCard specimen={target} />
        </div>
      )}
    </section>
  );
}
