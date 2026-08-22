export function Header() {
  return (
    <header className="mb-[18px] border-b border-paper-line py-3 text-center">
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
        Field Guide & Diagnosis Game
      </div>
      <h1 className="font-serif text-[40px] max-[400px]:text-[32px] font-bold my-1 tracking-[0.01em]">
        <span className="text-correct">🌿</span> Hortle
      </h1>
      <div className="text-sm italic text-ink-soft">
        Diagnose it. Treat it. Learn it.
      </div>
    </header>
  );
}
