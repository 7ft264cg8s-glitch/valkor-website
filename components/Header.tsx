"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { navigation } from "@/lib/siteData";

export function Header() {
  const [open, setOpen] = useState(false);
  const mobileMenuId = useId();

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-slate-900/10 bg-[#fffdf9]/[0.88] shadow-[0_8px_35px_rgba(15,23,42,0.045)] backdrop-blur-2xl">
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Valkor Systems home">
          <Image
            src="/valkor-logo.png"
            alt="Valkor Systems"
            width={156}
            height={45}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative whitespace-nowrap rounded-md px-1 py-3 text-sm font-semibold text-slate-600 transition duration-200 after:absolute after:inset-x-1 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-orange-700 after:transition-transform hover:text-slate-950 hover:after:scale-x-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden xl:block">
          <Button href="/#request-pilot" className="px-4 py-2.5 text-[13px]">
            Limited Pilot Review
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/80 text-slate-800 shadow-sm backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2 xl:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls={mobileMenuId}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div id={mobileMenuId} className="border-t border-slate-900/10 bg-[#fffdf9]/95 px-5 py-5 shadow-xl shadow-slate-950/10 backdrop-blur-xl xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-xl border-b border-slate-900/10 text-base font-medium text-slate-700 transition hover:text-orange-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/#request-pilot" onClick={() => setOpen(false)} className="mt-2 w-full">
              Request a Limited Pilot Review
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
