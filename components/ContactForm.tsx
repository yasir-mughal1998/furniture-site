"use client";

import { useState, type FormEvent } from "react";
import { site, whatsappLink } from "@/lib/site";
import { ArrowIcon } from "./ui/Icons";

const requirements = [
  "Custom furniture for my home",
  "Office furniture",
  "Restaurant / café furniture",
  "Hotel furniture",
  "Brand / bulk manufacturing",
  "Something else",
] as const;

type Fields = {
  name: string;
  phone: string;
  email: string;
  requirement: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", phone: "", email: "", requirement: "", message: "" };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please tell us your name.";
  if (!/^[+\d][\d\s()-]{6,}$/.test(values.phone.trim())) errors.phone = "Please enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.requirement) errors.requirement = "Please choose what you need.";
  if (values.message.trim().length < 10) errors.message = "A few words about your project, please.";
  return errors;
}

function composeMessage(v: Fields) {
  return [
    `New inquiry via ${site.name} website`,
    ``,
    `Name: ${v.name}`,
    `Phone: ${v.phone}`,
    `Email: ${v.email}`,
    `Requirement: ${v.requirement}`,
    ``,
    v.message,
  ].join("\n");
}

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<Fields | null>(null);

  const update = (field: keyof Fields) => (value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setSubmitted(values);
    setValues(empty);
  };

  if (submitted) {
    const body = composeMessage(submitted);
    return (
      <div className="border border-charcoal/10 bg-sand/60 p-8 sm:p-12" role="status">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">Inquiry prepared</p>
        <h3 className="mt-5 font-display text-4xl font-light text-charcoal">
          Thank you, {submitted.name.split(" ")[0]}.
        </h3>
        <p className="mt-5 max-w-md leading-relaxed text-stone">
          Send your inquiry to us directly on WhatsApp or by email — our studio replies within one working
          day with next steps and a consultation time.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsappLink(body)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-charcoal px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-ivory transition-colors duration-500 hover:bg-walnut"
          >
            Send via WhatsApp
          </a>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent(
              `Project inquiry — ${submitted.requirement}`,
            )}&body=${encodeURIComponent(body)}`}
            className="inline-flex items-center justify-center gap-3 border border-charcoal/25 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-charcoal transition-colors duration-500 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
          >
            Send via Email
          </a>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(null)}
          className="mt-8 text-[11px] uppercase tracking-[0.22em] text-stone underline-offset-4 hover:text-charcoal hover:underline"
        >
          Start a new inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
      <Field label="Full name" name="name" value={values.name} onChange={update("name")} error={errors.name} autoComplete="name" />
      <Field label="Phone" name="phone" type="tel" value={values.phone} onChange={update("phone")} error={errors.phone} autoComplete="tel" />
      <Field
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={update("email")}
        error={errors.email}
        autoComplete="email"
        className="sm:col-span-2"
      />

      <div className="sm:col-span-2">
        <label htmlFor="requirement" className="text-[11px] font-medium uppercase tracking-[0.24em] text-stone">
          Requirement
        </label>
        <div className="relative mt-3">
          <select
            id="requirement"
            name="requirement"
            value={values.requirement}
            onChange={(e) => update("requirement")(e.target.value)}
            aria-invalid={Boolean(errors.requirement)}
            aria-describedby={errors.requirement ? "requirement-error" : undefined}
            className={`w-full appearance-none border-b bg-transparent py-3 pr-8 text-lg text-charcoal outline-none transition-colors focus:border-gold ${
              errors.requirement ? "border-red-700/60" : "border-charcoal/20"
            } ${values.requirement ? "" : "text-stone/70"}`}
          >
            <option value="" disabled>
              Select what you need
            </option>
            {requirements.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute top-1/2 right-0 size-4 -translate-y-1/2 text-stone"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        {errors.requirement && (
          <p id="requirement-error" className="mt-2 text-xs text-red-800">
            {errors.requirement}
          </p>
        )}
      </div>

      <Field
        label="Tell us about your project"
        name="message"
        value={values.message}
        onChange={update("message")}
        error={errors.message}
        multiline
        className="sm:col-span-2"
        placeholder="Piece, dimensions, wood preferences, timeline…"
      />

      <div className="flex flex-col gap-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-relaxed text-stone">
          We respond within one working day. Your details are only used to reply to your inquiry.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-3 bg-charcoal px-10 py-5 text-[12px] font-medium uppercase tracking-[0.22em] text-ivory transition-colors duration-500 hover:bg-walnut"
        >
          Send Inquiry
          <ArrowIcon className="size-4 transition-transform duration-500 ease-luxe group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: keyof Fields;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  multiline?: boolean;
  className?: string;
  autoComplete?: string;
  placeholder?: string;
};

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  multiline = false,
  className = "",
  autoComplete,
  placeholder,
}: FieldProps) {
  const base = `w-full border-b bg-transparent py-3 text-lg text-charcoal outline-none transition-colors placeholder:text-stone/50 focus:border-gold ${
    error ? "border-red-700/60" : "border-charcoal/20"
  }`;
  const describedBy = error ? `${name}-error` : undefined;

  return (
    <div className={className}>
      <label htmlFor={name} className="text-[11px] font-medium uppercase tracking-[0.24em] text-stone">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={`${base} mt-3 resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={`${base} mt-3`}
        />
      )}
      {error && (
        <p id={`${name}-error`} className="mt-2 text-xs text-red-800">
          {error}
        </p>
      )}
    </div>
  );
}
