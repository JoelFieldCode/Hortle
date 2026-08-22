import { Chip } from "./Chip";
import { specimenId } from "../data/specimens";
import type { Specimen } from "../types";

function Field({ label, body }: { label: string; body: string }) {
  return (
    <div className="my-3">
      <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-soft mb-0.5">
        {label}
      </div>
      <div className="text-[14.5px] leading-[1.55] text-ink">{body}</div>
    </div>
  );
}

export function SpecimenCard({ specimen }: { specimen: Specimen }) {
  const id = String(specimenId(specimen.name)).padStart(2, "0");

  return (
    <div className="relative mx-auto mt-1.5 max-w-[480px] overflow-hidden rounded-t-[4px] rounded-b-[10px] border border-paper-line bg-card px-[22px] pb-[22px] pt-[26px] shadow-card">
      <div
        className="absolute inset-x-0 top-0 h-2.5 bg-repeat-x"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-paper) 3px, transparent 3.5px)",
          backgroundSize: "16px 10px",
          backgroundPosition: "center top",
        }}
      />
      <div className="font-mono text-[11px] tracking-[0.08em] text-ink-soft">
        No. {id}
      </div>
      <Chip category={specimen.category} className="mb-2" />
      <h2 className="font-serif text-[26px] max-[400px]:text-[22px] mt-1 mb-2.5">
        <span className="mr-2 text-[30px]">{specimen.emoji}</span>
        {specimen.name}
      </h2>
      <Field label="Symptoms" body={specimen.symptoms} />
      <Field label="Cause" body={specimen.cause} />
      <hr className="my-3.5 border-none border-t border-dashed border-paper-line" />
      <Field label="Treatment" body={specimen.treatment} />
      <Field label="Prevention" body={specimen.prevention} />
    </div>
  );
}
