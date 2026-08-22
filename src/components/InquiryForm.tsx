"use client";

import { useState } from "react";
import { PRODUCTS } from "@/content/products";
import { COMPANY, RFQ_SUBJECT } from "@/content/site";

const inputCls =
  "w-full rounded-xl border border-rule-strong bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-faint";
const labelCls =
  "mb-1.5 block font-mono text-[0.6875rem] tracking-[0.14em] text-ink-soft uppercase";

/**
 * Bulk-order inquiry form. The site is a static export with no backend, so
 * submitting composes the structured RFQ email in the buyer's mail client.
 */
export function InquiryForm() {
  const [form, setForm] = useState({
    company: "",
    email: "",
    product: "",
    grade: "",
    volume: "",
    port: "",
    message: "",
  });

  const set = (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = [
      `Company: ${form.company}`,
      `Contact email: ${form.email}`,
      `Product: ${form.product}`,
      `Blend & EC grade: ${form.grade}`,
      `Monthly volume: ${form.volume}`,
      `Destination port: ${form.port}`,
      form.message ? `\n${form.message}` : "",
    ]
      .join("\r\n")
      .trim();
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      RFQ_SUBJECT,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-rule bg-paper p-6 shadow-sm shadow-ink/5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-company" className={labelCls}>
            Company
          </label>
          <input
            id="inq-company"
            type="text"
            required
            autoComplete="organization"
            placeholder="Your company"
            className={inputCls}
            value={form.company}
            onChange={set("company")}
          />
        </div>
        <div>
          <label htmlFor="inq-email" className={labelCls}>
            Work email
          </label>
          <input
            id="inq-email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputCls}
            value={form.email}
            onChange={set("email")}
          />
        </div>
        <div>
          <label htmlFor="inq-product" className={labelCls}>
            Product
          </label>
          <select
            id="inq-product"
            required
            className={inputCls}
            value={form.product}
            onChange={set("product")}
          >
            <option value="" disabled>
              Select a product
            </option>
            {PRODUCTS.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Custom blend / other">Custom blend / other</option>
          </select>
        </div>
        <div>
          <label htmlFor="inq-grade" className={labelCls}>
            Blend &amp; EC grade
          </label>
          <input
            id="inq-grade"
            type="text"
            placeholder="e.g. 70:30, washed, low-EC"
            className={inputCls}
            value={form.grade}
            onChange={set("grade")}
          />
        </div>
        <div>
          <label htmlFor="inq-volume" className={labelCls}>
            Monthly volume
          </label>
          <input
            id="inq-volume"
            type="text"
            required
            placeholder="e.g. 2 × 40 ft HC"
            className={inputCls}
            value={form.volume}
            onChange={set("volume")}
          />
        </div>
        <div>
          <label htmlFor="inq-port" className={labelCls}>
            Destination port
          </label>
          <input
            id="inq-port"
            type="text"
            required
            placeholder="e.g. Rotterdam"
            className={inputCls}
            value={form.port}
            onChange={set("port")}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="inq-message" className={labelCls}>
            Anything else <span className="normal-case">(optional)</span>
          </label>
          <textarea
            id="inq-message"
            rows={4}
            placeholder="Crop, timeline, existing substrate spec…"
            className={inputCls}
            value={form.message}
            onChange={set("message")}
          />
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-green px-7 py-3 font-mono text-sm font-medium tracking-wide text-paper shadow-sm shadow-green/30 transition-all hover:-translate-y-0.5 hover:bg-green-deep"
        >
          Send inquiry
        </button>
        <p className="max-w-xs font-mono text-xs leading-relaxed text-ink-faint">
          Opens as a pre-filled email in your mail client — or write to{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-green-deep hover:underline"
          >
            {COMPANY.email}
          </a>{" "}
          directly.
        </p>
      </div>
    </form>
  );
}
