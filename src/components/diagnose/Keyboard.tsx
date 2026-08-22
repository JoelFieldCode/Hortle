import { useDiagnose } from "../../context/DiagnoseContext";

const KB_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACK"],
];

export function Keyboard() {
  const { handleKey, submitGuess, gameOver } = useDiagnose();

  return (
    <div className="mb-1.5 flex w-full flex-col items-stretch gap-1.5">
      {KB_ROWS.map((keys) => (
        <div key={keys.join("")} className="flex w-full justify-center gap-[5px]">
          {keys.map((key) => {
            const wide = key === "ENTER" || key === "BACK";
            return (
              <button
                key={key}
                type="button"
                disabled={gameOver}
                onClick={() => (key === "ENTER" ? submitGuess() : handleKey(key))}
                className={`min-w-0 flex-1 cursor-pointer select-none rounded-md border border-paper-line bg-card py-[clamp(11px,3.6vw,16px)] text-center font-sans text-[clamp(13px,3.8vw,17px)] font-semibold text-ink transition active:translate-y-px focus-visible:outline-2 focus-visible:outline-disorder focus-visible:outline-offset-2 ${
                  wide
                    ? "max-w-[90px] flex-[2.6_1_0] px-1 text-[clamp(9px,2.8vw,12px)] tracking-[-0.02em]"
                    : "max-w-[44px]"
                }`}
              >
                {key === "BACK" ? "⌫" : key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
