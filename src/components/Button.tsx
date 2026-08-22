import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "submit";

const variants: Record<Variant, string> = {
  primary:
    "border-ink bg-ink text-paper hover:opacity-95",
  ghost: "border-ink bg-transparent text-ink",
  submit:
    "border-correct bg-correct text-white text-[15px] px-8 py-3.5 rounded-[10px] shadow-[0_3px_0_#2e6144,0_6px_14px_rgba(62,124,87,0.25)] active:translate-y-0.5 active:shadow-[0_1px_0_#2e6144] disabled:bg-absent disabled:border-absent disabled:shadow-none disabled:opacity-55",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={`font-sans text-[13px] font-semibold px-4 py-2.5 rounded-[7px] border cursor-pointer focus-visible:outline-2 focus-visible:outline-disorder focus-visible:outline-offset-2 disabled:cursor-default ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
