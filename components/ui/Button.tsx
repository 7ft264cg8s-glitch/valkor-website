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
    "border border-orange-500/20 bg-orange-600 text-white shadow-lg shadow-orange-600/20 hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-600/25 active:translate-y-px",
  secondary:
    "border border-slate-200/80 bg-white/[0.88] text-slate-900 shadow-sm shadow-slate-200/60 backdrop-blur hover:border-slate-300 hover:bg-white hover:shadow-md active:translate-y-px",
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
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/70 focus:ring-offset-2 focus:ring-white ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </Link>
  );
}
