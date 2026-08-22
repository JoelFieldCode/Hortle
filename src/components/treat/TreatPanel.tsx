import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../Button";
import { Chip } from "../Chip";
import { useTreat } from "../../context/TreatContext";

type TreatFormValues = {
  treatments: number[];
};

export function TreatPanel() {
  const { target, options, submitted, lastResult, stats, startCase, scorePlan } =
    useTreat();
  const needed = target.actions.length;

  const { control, handleSubmit, reset, setError, clearErrors, formState } =
    useForm<TreatFormValues>({
      defaultValues: { treatments: [] },
    });

  useEffect(() => {
    reset({ treatments: [] });
  }, [target.name, options, reset]);

  const onSubmit = handleSubmit((values) => {
    if (submitted) return;
    if (values.treatments.length < needed) {
      const remaining = needed - values.treatments.length;
      setError("treatments", {
        message: `Select ${remaining} more treatment${remaining === 1 ? "" : "s"} before submitting.`,
      });
      return;
    }
    scorePlan(values.treatments);
  });

  return (
    <section>
      <div className="mb-5 rounded-[10px] border border-paper-line bg-card px-5 py-[18px] text-center shadow-card">
        <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft">
          Patient file
        </div>
        <Chip category={target.category} />
        <h2 className="font-serif text-[22px] my-2">
          {target.emoji} {target.name}
        </h2>
        <div className="font-serif text-lg leading-normal text-ink">
          {target.symptoms}
        </div>
      </div>

      <p className="mb-3.5 text-center text-sm text-ink-soft">
        Select the {needed} treatments you'd use for this case.
      </p>

      <form onSubmit={onSubmit}>
        <Controller
          name="treatments"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col">
              {options.map((opt, idx) => {
                const selected = field.value.includes(idx);
                let resultClass = "";
                let mark = selected ? "✓" : "";
                let tag = "";

                if (submitted) {
                  if (opt.correct && selected) {
                    resultClass = "border-correct bg-pest-bg";
                    mark = "✓";
                    tag = "Correct choice";
                  } else if (opt.correct && !selected) {
                    resultClass = "border-present bg-[#fbf3e4]";
                    mark = "!";
                    tag = "Missed — this helps too";
                  } else if (!opt.correct && selected) {
                    resultClass = "border-disease bg-disease-bg";
                    mark = "✕";
                    tag = "Not for this case";
                  } else {
                    resultClass = "opacity-55";
                    mark = "";
                  }
                }

                const boxSelected =
                  selected && !submitted
                    ? "bg-ink border-ink text-white"
                    : submitted && opt.correct && selected
                      ? "bg-correct border-correct text-white"
                      : submitted && opt.correct && !selected
                        ? "border-present bg-transparent text-present"
                        : submitted && !opt.correct && selected
                          ? "bg-disease border-disease text-white"
                          : "border-paper-line";

                return (
                  <button
                    key={`${opt.text}-${idx}`}
                    type="button"
                    disabled={submitted}
                    role="checkbox"
                    aria-checked={selected}
                    onClick={() => {
                      if (submitted) return;
                      if (selected) {
                        field.onChange(field.value.filter((i) => i !== idx));
                        clearErrors("treatments");
                        return;
                      }
                      if (field.value.length >= needed) {
                        setError("treatments", {
                          message: `You've already picked ${needed} — deselect one first if you'd like to change your answer.`,
                        });
                        return;
                      }
                      field.onChange([...field.value, idx]);
                      clearErrors("treatments");
                    }}
                    className={`mb-2 flex items-start gap-3 rounded-[9px] border-[1.5px] border-paper-line bg-card px-4 py-3 text-left text-sm leading-snug transition ${
                      submitted ? "cursor-default" : "cursor-pointer hover:border-ink-soft"
                    } ${selected && !submitted ? "border-ink" : ""} ${resultClass}`}
                  >
                    <span
                      className={`mt-0.5 flex size-5 min-w-5 items-center justify-center rounded-[5px] border-2 text-[13px] ${boxSelected}`}
                    >
                      {mark}
                    </span>
                    <span>
                      {opt.text}
                      {tag && (
                        <span className="mt-0.5 block font-mono text-[9.5px] uppercase tracking-[0.06em] text-ink-soft">
                          {tag}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        />

        <div className="my-2 min-h-5 text-center text-sm font-semibold text-ink">
          {formState.errors.treatments?.message ||
            (lastResult
              ? lastResult.perfect
                ? `Spot on — all ${lastResult.totalCorrect} correct treatments selected.`
                : `${lastResult.correctlySelected} of ${lastResult.totalCorrect} correct treatments selected${
                    lastResult.wronglySelected > 0
                      ? `, ${lastResult.wronglySelected} that wouldn't help.`
                      : "."
                  }`
              : "\u00a0")}
        </div>

        <div className="my-3.5 flex justify-center gap-2.5">
          {!submitted ? (
            <Button variant="submit" type="submit">
              Submit treatment plan
            </Button>
          ) : (
            <Button variant="ghost" type="button" onClick={startCase}>
              Next patient →
            </Button>
          )}
        </div>
      </form>

      <div className="mt-2.5 text-center font-mono text-[11px] text-ink-soft">
        Plans attempted: {stats.attempts} · Spot-on: {stats.perfect}
      </div>
    </section>
  );
}
