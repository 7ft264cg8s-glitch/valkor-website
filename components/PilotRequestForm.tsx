"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { formInterests } from "@/lib/siteData";

const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-950 shadow-sm shadow-slate-200/40 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100";

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
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <div className="mt-2">{children}</div>
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
      mainInterest: String(formData.get("main_interest") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim()
    };

    const missing = Object.values(fields).some((value) => !value);
    if (missing) {
      setSuccess(false);
      setError("Please complete all required fields before requesting a pilot review.");
      return;
    }

    const body = [
      "Valkor Pilot Review Request",
      "",
      `Name: ${fields.name}`,
      `Role: ${fields.role}`,
      `School / District: ${fields.schoolDistrict}`,
      `Email: ${fields.email}`,
      `Main Interest: ${fields.mainInterest}`,
      "",
      "Message:",
      fields.message
    ].join("\n");

    const mailto = `mailto:jackson@valkorsystems.com?subject=${encodeURIComponent(
      "Valkor Pilot Review Request"
    )}&body=${encodeURIComponent(body)}`;

    setError("");
    setSuccess(true);
    window.location.href = mailto;
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-slate-200 bg-white p-5 text-slate-950 shadow-2xl shadow-black/20 sm:p-7"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-950">Pilot request</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Share the basics and Valkor will follow up with a controlled review path.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
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
        <Field label="Main interest" className="sm:col-span-2">
          <select className={fieldClass} name="main_interest" defaultValue="" required>
            <option value="" disabled>
              Select interest
            </option>
            {formInterests.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Message">
          <textarea className={`${fieldClass} min-h-32 resize-y`} name="message" required />
        </Field>
      </div>
      {error ? (
        <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700">
          {error}
        </p>
      ) : null}
      {success ? (
        <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-sm font-semibold leading-6 text-emerald-700">
          Your email client should open with the pilot request details. If it does not, email
          jackson@valkorsystems.com directly.
        </p>
      ) : null}
      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-orange-500/20 bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-600/20 transition duration-300 hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-600/25 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        Request Pilot Review
      </button>
    </form>
  );
}
