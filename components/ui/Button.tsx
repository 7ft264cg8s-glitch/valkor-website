import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "secondaryDark" | "ghost";
  showArrow?: boolean;
};

const variants = {
  primary:
    "border border-orange-950/10 bg-orange-700 text-white shadow-[0_10px_30px_rgba(194,65,12,0.18)] hover:-translate-y-0.5 hover:bg-orange-800 hover:shadow-[0_15px_38px_rgba(154,52,18,0.24)] active:translate-y-px",
  secondary:
    "border border-slate-900/15 bg-white/[0.78] text-slate-900 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-slate-900/25 hover:bg-white active:translate-y-px",
  secondaryDark:
    "border border-white/15 bg-white/[0.08] text-white shadow-sm shadow-black/20 backdrop-blur hover:border-white/25 hover:bg-white/[0.14] active:translate-y-px",
  ghost: "text-slate-700 hover:bg-white/70 active:translate-y-px"
};

export function Button({
  href,
  children,
  variant = "primary",
  showArrow = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </Link>
  );
}
