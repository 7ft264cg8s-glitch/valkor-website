"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { formInterests, reviewInterests } from "@/lib/siteData";

const fieldClass =
  "min-h-12 w-full rounded-2xl border border-slate-900/15 bg-[#fffdfa]/95 px-4 py-3.5 text-base text-slate-950 shadow-[0_1px_2px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-slate-400 hover:border-slate-900/25 focus-visible:border-orange-700 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-orange-700/10";

function Field({
  label,
  children,
  className = ""
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`group block ${className}`}>
      <span className="text-sm font-semibold tracking-[-0.01em] text-slate-700 transition-colors duration-200 group-focus-within:text-orange-800">
        {label}
      </span>
      <div className="mt-2.5">{children}</div>
    </label>
  );
}

export function PilotRequestForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields = {
      name: String(formData.get("name") ?? "").trim(),
      role: String(formData.get("role") ?? "").trim(),
      schoolDistrict: String(formData.get("school_district") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      schoolSize: String(formData.get("school_size") ?? "").trim(),
      mainConcern: String(formData.get("main_concern") ?? "").trim(),
      interestedIn: String(formData.get("interested_in") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim()
    };

    const missing = [
      fields.name,
      fields.role,
      fields.schoolDistrict,
      fields.email,
      fields.mainConcern,
      fields.interestedIn,
      fields.message
    ].some((value) => !value);
    if (missing) {
      setSuccess(false);
      setError("Please complete all required fields before requesting a pilot review.");
      return;
    }

    const body = [
      "Valkor Limited Pilot Review Request",
      "",
      `Name: ${fields.name}`,
      `Role: ${fields.role}`,
      `School / District: ${fields.schoolDistrict}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone || "Not provided"}`,
      `School Size: ${fields.schoolSize || "Not provided"}`,
      `Primary Operational Concern: ${fields.mainConcern}`,
      `Interested In: ${fields.interestedIn}`,
      "",
      "Message:",
      fields.message
    ].join("\n");

    const mailto = `mailto:jackson@valkorsystems.com?subject=${encodeURIComponent(
      "Valkor Limited Pilot Review Request"
    )}&body=${encodeURIComponent(body)}`;

    setError("");
    setSuccess(true);
    window.location.href = mailto;
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[2rem] border border-white/75 bg-[#fffdfa]/95 p-5 text-slate-950 shadow-[0_32px_90px_rgba(2,6,23,0.25)] ring-1 ring-slate-950/10 backdrop-blur-xl before:pointer-events-none before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-orange-500/55 before:to-transparent sm:p-8"
    >
      <div className="mb-7 border-b border-slate-900/10 pb-6">
        <h3 className="font-display text-2xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-[1.75rem]">
          Limited pilot request
        </h3>
        <p className="mt-2.5 max-w-xl text-sm leading-6 text-slate-600">
          Share the basics and Valkor will follow up with a limited pilot review path.
        </p>
      </div>
      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <Field label="Name">
          <input className={fieldClass} name="name" autoComplete="name" required />
        </Field>
        <Field label="Role">
          <input className={fieldClass} name="role" autoComplete="organization-title" required />
        </Field>
        <Field label="School / district">
          <input className={fieldClass} name="school_district" autoComplete="organization" required />
        </Field>
        <Field label="Email">
          <input className={fieldClass} name="email" type="email" autoComplete="email" required />
        </Field>
        <Field label="Phone">
          <input className={fieldClass} name="phone" type="tel" autoComplete="tel" />
        </Field>
        <Field label="School size">
          <input className={fieldClass} name="school_size" placeholder="Example: 650 students" />
        </Field>
        <Field label="Primary operational concern">
          <select className={fieldClass} name="main_concern" defaultValue="" required>
            <option value="" disabled>
              Select operational concern
            </option>
            {formInterests.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
        <Field label="Interested in">
          <select className={fieldClass} name="interested_in" defaultValue="" required>
            <option value="" disabled>
              Select next step
            </option>
            {reviewInterests.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message">
          <textarea className={`${fieldClass} min-h-36 resize-y`} name="message" required />
        </Field>
      </div>
      {error ? (
        <p
          className="mt-5 rounded-2xl border border-red-200 bg-red-50/90 px-4 py-3.5 text-sm font-semibold leading-6 text-red-800 shadow-sm shadow-red-950/5"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          {error}
        </p>
      ) : null}
      {success ? (
        <p
          className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50/90 px-4 py-3.5 text-sm font-semibold leading-6 text-emerald-800 shadow-sm shadow-emerald-950/5"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          Your email client should open with the pilot request details. If it does not, email
          jackson@valkorsystems.com directly.
        </p>
      ) : null}
      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-orange-950/10 bg-orange-700 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(194,65,12,0.22)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-orange-800 hover:shadow-[0_18px_42px_rgba(154,52,18,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-px"
      >
        Request a limited pilot review
      </button>
    </form>
  );
}
