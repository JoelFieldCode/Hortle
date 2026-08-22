import { CATEGORY_LABEL } from "../data/specimens";
import type { Category } from "../types";

const styles: Record<Category, string> = {
  pest: "bg-pest-bg text-pest",
  disease: "bg-disease-bg text-disease",
  disorder: "bg-disorder-bg text-disorder",
};

export function Chip({
  category,
  className = "",
}: {
  category: Category;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] uppercase px-2.5 py-1 rounded-full font-semibold ${styles[category]} ${className}`}
    >
      {CATEGORY_LABEL[category]}
    </span>
  );
}
