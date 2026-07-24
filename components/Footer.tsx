import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/lib/siteData";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Image
            src="/valkor-logo.png"
            alt="Valkor Systems"
            width={170}
            height={49}
            className="h-9 w-auto object-contain"
          />
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
            School-controlled operational awareness for pass accountability, attendance reconciliation,
            incident workflow, staff response, confidence, and audit records.
          </p>
          <p className="mt-2 max-w-md text-sm font-semibold leading-6 text-slate-700">
            Currently accepting pilot applications - Virginia and East Coast schools.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Contact:{" "}
            <a className="font-medium text-slate-950 transition hover:text-valkor-orange" href="mailto:jackson@valkorsystems.com">
              jackson@valkorsystems.com
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200/80 pt-6 text-sm text-slate-500">
        © {year} Valkor Systems. All rights reserved.
      </div>
    </footer>
  );
}
