"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { navigation } from "@/lib/siteData";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-slate-200/70 bg-white/95 shadow-sm shadow-slate-200/40 backdrop-blur-2xl">
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-3" aria-label="Valkor Systems home">
          <Image
            src="/valkor-logo.png"
            alt="Valkor Systems"
            width={156}
            height={45}
            priority
            className="h-8 w-auto object-contain contrast-125 saturate-110 brightness-95"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-1 py-2 text-sm font-semibold text-slate-600 transition duration-200 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-500/70 focus:ring-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="#request-pilot" className="px-4 py-2.5 text-[13px] shadow-md shadow-orange-600/15 hover:shadow-lg hover:shadow-orange-600/20">
            Request Pilot Review
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-800 shadow-sm shadow-slate-200/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-cyan-500/70 focus:ring-offset-2 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white/95 px-5 py-5 shadow-xl shadow-slate-200/60 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg text-base font-medium text-slate-700 transition hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-500/70 focus:ring-offset-2"
              >
                {item.label}
              </Link>
            ))}
            <Button href="#request-pilot" onClick={() => setOpen(false)} className="mt-2 w-full">
              Request Pilot Review
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
