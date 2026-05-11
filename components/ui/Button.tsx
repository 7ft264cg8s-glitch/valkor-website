import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  showArrow?: boolean;
};

const variants = {
  primary:
    "bg-valkor-orange text-white shadow-sm shadow-orange-200/70 hover:bg-valkor-orangeDark active:translate-y-px",
  secondary:
    "border border-slate-200 bg-white text-slate-900 shadow-sm hover:border-slate-300 hover:bg-slate-50 active:translate-y-px",
  ghost: "text-slate-700 hover:bg-slate-100 active:translate-y-px"
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
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-valkor-orange/80 focus:ring-offset-2 focus:ring-white ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </Link>
  );
}
