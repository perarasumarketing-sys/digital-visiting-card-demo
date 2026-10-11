"use client";

import { useState } from "react";
import { profile } from "@/components/data/profile";
import { template10Themes } from "@/components/data/themes";

export default function Template10() {
  const [themeKey, setThemeKey] =
    useState<keyof typeof template10Themes>("midnightGold");

  const theme = template10Themes[themeKey];

  const services = [
    {
      icon: "📊",
      title: "Tax & Compliance",
      text: "Professional tax planning, filing and compliance support.",
    },
    {
      icon: "⚖️",
      title: "Legal Advisory",
      text: "Practical legal guidance for individuals and businesses.",
    },
    {
      icon: "💼",
      title: "Business Consulting",
      text: "Strategic guidance for business planning and growth.",
    },
    {
      icon: "📑",
      title: "Financial Advisory",
      text: "Clear financial planning and professional advisory services.",
    },
  ];

  const specializations = [
    "Income Tax",
    "GST & Compliance",
    "Business Advisory",
    "Legal Documentation",
    "Financial Planning",
    "Corporate Consulting",
  ];

  const process = [
    ["01", "Understand", "We understand your requirement and objectives."],
    ["02", "Analyse", "We carefully analyse the situation and requirements."],
    ["03", "Advise", "You receive clear and practical professional guidance."],
    ["04", "Execute", "We support you through the required process."],
  ];

  const reviews = [
    "Professional guidance and clear communication throughout the process.",
    "Very helpful approach with practical advice for our business.",
    "The entire process was handled professionally and efficiently.",
  ];

  const whatsappLink = `https://wa.me/${profile.whatsapp}`;

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: theme.background,
        color: theme.primary,
      }}
    >
      {/* THEME SELECTOR */}
      <section
        className="border-b px-4 py-3"
        style={{
          backgroundColor: theme.primary,
          borderColor: theme.accent,
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <p className="text-xs font-semibold tracking-wide text-white">
            Choose Theme
          </p>

          <div className="flex gap-2 overflow-x-auto">
            {Object.entries(template10Themes).map(([key, item]) => (
              <button
                key={key}
                onClick={() =>
                  setThemeKey(key as keyof typeof template10Themes)
                }
                className="whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold transition"
                style={{
                  backgroundColor:
                    themeKey === key ? theme.accent : "transparent",
                  color: themeKey === key ? theme.primary : "white",
                  borderColor: theme.accent,
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* HERO */}
      <section
        className="relative overflow-hidden px-5 pb-16 pt-14 sm:px-8 lg:px-12"
        style={{ backgroundColor: theme.primary }}
      >
        <div
          className="absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: theme.accent }}
        />

        <div
          className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: theme.accent }}
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p
              className="mb-4 text-sm font-bold uppercase tracking-[0.25em]"
              style={{ color: theme.accent }}
            >
              Professional Advisory
            </p>

            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Trusted Advice.
              <span
                className="block"
                style={{ color: theme.accent }}
              >
                Clear Decisions.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Professional CA, legal and business consulting services built
              around clarity, trust and long-term relationships.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${profile.phone}`}
                className="rounded-full px-6 py-3 text-sm font-black"
                style={{
                  backgroundColor: theme.accent,
                  color: theme.primary,
                }}
              >
                Call Now
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border px-6 py-3 text-sm font-black text-white"
                style={{ borderColor: theme.accent }}
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* PROFESSIONAL CARD */}
          <div className="relative">
            <div
              className="rounded-[2rem] border p-5 shadow-2xl"
              style={{
                borderColor: `${theme.accent}66`,
                backgroundColor: `${theme.background}10`,
              }}
            >
              <div
                className="rounded-[1.5rem] p-7"
                style={{ backgroundColor: theme.background }}
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
                  style={{
                    backgroundColor: theme.primary,
                    color: theme.accent,
                  }}
                >
                  ⚖️
                </div>

                <p
                  className="mt-6 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: theme.accent }}
                >
                  Professional Services
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  {profile.name}
                </h2>

                <p className="mt-1 text-sm font-semibold opacity-60">
                  {profile.role}
                </p>

                <div
                  className="my-6 h-px"
                  style={{ backgroundColor: `${theme.primary}18` }}
                />

                <div className="space-y-4">
                  {[
                    ["✓", "Confidential Advisory"],
                    ["✓", "Practical Solutions"],
                    ["✓", "Professional Support"],
                  ].map(([icon, text]) => (
                    <div
                      key={text}
                      className="flex items-center gap-3 text-sm font-semibold"
                    >
                      <span style={{ color: theme.accent }}>{icon}</span>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="px-4 py-5 sm:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["📞", "Call"],
            ["💬", "WhatsApp"],
            ["📋", "Services"],
            ["📍", "Office"],
          ].map(([icon, label]) => (
            <a
              key={label}
              href={
                label === "Call"
                  ? `tel:${profile.phone}`
                  : label === "WhatsApp"
                    ? whatsappLink
                    : label === "Services"
                      ? "#services"
                      : "#office"
              }
              target={label === "WhatsApp" ? "_blank" : undefined}
              rel={label === "WhatsApp" ? "noreferrer" : undefined}
              className="rounded-2xl border bg-white p-4 text-center shadow-sm transition hover:-translate-y-1"
              style={{ borderColor: `${theme.accent}55` }}
            >
              <div className="text-2xl">{icon}</div>

              <p
                className="mt-2 text-sm font-bold"
                style={{ color: theme.primary }}
              >
                {label}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              About The Practice
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Professional Guidance You Can Rely On
            </h2>

            <p className="mt-5 text-sm leading-7 opacity-70 sm:text-base">
              {profile.bio}
            </p>

            <p className="mt-4 text-sm leading-7 opacity-70">
              Our approach focuses on understanding your situation first,
              explaining the available options clearly and helping you move
              forward with confidence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ["10+", "Years Experience"],
              ["500+", "Clients Served"],
              ["100%", "Confidential"],
              ["1:1", "Personal Advisory"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border bg-white p-6"
                style={{ borderColor: `${theme.accent}55` }}
              >
                <p
                  className="text-3xl font-black"
                  style={{ color: theme.accent }}
                >
                  {value}
                </p>

                <p className="mt-2 text-xs font-semibold opacity-60">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="px-5 py-16 sm:px-8 lg:px-12"
        style={{ backgroundColor: `${theme.primary}08` }}
      >
        <div className="mx-auto max-w-6xl">
          <div>
            <p
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              Services
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Areas Of Professional Support
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 opacity-65">
              Comprehensive advisory services for individuals,
              professionals and growing businesses.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: `${theme.accent}55` }}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                  style={{
                    backgroundColor: `${theme.accent}20`,
                  }}
                >
                  {service.icon}
                </div>

                <h3 className="mt-5 text-lg font-black">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 opacity-65">
                  {service.text}
                </p>

                <a
                  href={`${whatsappLink}?text=${encodeURIComponent(
                    `Hi, I would like to enquire about ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block text-xs font-black"
                  style={{ color: theme.accent }}
                >
                  Enquire →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              Specializations
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Focused Expertise
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {specializations.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border bg-white p-5"
                style={{ borderColor: `${theme.accent}55` }}
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full font-black"
                  style={{
                    backgroundColor: theme.primary,
                    color: theme.accent,
                  }}
                >
                  ✓
                </span>

                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="px-5 py-16 sm:px-8 lg:px-12"
        style={{ backgroundColor: theme.primary }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center text-white">
            <p
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Simple. Clear. Professional.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {process.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border p-6"
                style={{
                  borderColor: `${theme.accent}55`,
                  backgroundColor: `${theme.background}0D`,
                }}
              >
                <p
                  className="text-3xl font-black"
                  style={{ color: theme.accent }}
                >
                  {number}
                </p>

                <h3 className="mt-5 font-black text-white">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <p
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              Client Experience
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Trusted By Our Clients
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((review, index) => (
              <article
                key={index}
                className="rounded-3xl border bg-white p-6"
                style={{ borderColor: `${theme.accent}55` }}
              >
                <div
                  className="text-lg"
                  style={{ color: theme.accent }}
                >
                  ★★★★★
                </div>

                <p className="mt-4 text-sm leading-7 opacity-70">
                  “{review}”
                </p>

                <p
                  className="mt-5 text-xs font-bold"
                  style={{ color: theme.primary }}
                >
                  Client
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICE */}
      <section
        id="office"
        className="px-5 py-16 sm:px-8 lg:px-12"
        style={{ backgroundColor: `${theme.primary}08` }}
      >
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <p
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              Our Office
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Let&apos;s Discuss Your Requirement
            </h2>

            <p className="mt-5 text-sm leading-7 opacity-65">
              Contact us to schedule a consultation or discuss your
              professional requirement.
            </p>

            <div className="mt-7 space-y-4 text-sm font-semibold">
              <p>📍 {profile.address}</p>
              <p>📞 {profile.phone}</p>
              <p>✉️ {profile.email}</p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${profile.phone}`}
                className="rounded-full px-6 py-3 text-sm font-black"
                style={{
                  backgroundColor: theme.primary,
                  color: "white",
                }}
              >
                Call Office
              </a>

              <a
                href={profile.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border px-6 py-3 text-sm font-black"
                style={{
                  borderColor: theme.primary,
                  color: theme.primary,
                }}
              >
                View Location
              </a>
            </div>
          </div>

          <div
            className="flex min-h-[300px] items-center justify-center rounded-[2rem] border"
            style={{
              backgroundColor: `${theme.accent}18`,
              borderColor: `${theme.accent}55`,
            }}
          >
            <div className="text-center">
              <div className="text-6xl">🏢</div>

              <p
                className="mt-5 text-xl font-black"
                style={{ color: theme.primary }}
              >
                Professional Office
              </p>

              <p className="mt-2 text-sm opacity-60">
                Confidential consultations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="px-5 py-16 sm:px-8 lg:px-12"
        style={{ backgroundColor: theme.accent }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p
            className="text-sm font-black uppercase tracking-[0.2em]"
            style={{ color: theme.primary }}
          >
            Start A Conversation
          </p>

          <h2
            className="mt-3 text-3xl font-black sm:text-5xl"
            style={{ color: theme.primary }}
          >
            Need Professional Advice?
          </h2>

          <p
            className="mx-auto mt-4 max-w-xl text-sm leading-7"
            style={{ color: `${theme.primary}CC` }}
          >
            Tell us about your requirement and let&apos;s discuss the next
            step.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${profile.phone}`}
              className="rounded-full px-7 py-3 text-sm font-black"
              style={{
                backgroundColor: theme.primary,
                color: "white",
              }}
            >
              Call Now
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border px-7 py-3 text-sm font-black"
              style={{
                borderColor: theme.primary,
                color: theme.primary,
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-5 py-10 sm:px-8"
        style={{
          backgroundColor: theme.primary,
          color: "white",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p
                className="text-lg font-black"
                style={{ color: theme.accent }}
              >
                {profile.company}
              </p>

              <p className="mt-1 text-xs text-white/50">
                Professional. Trusted. Confidential.
              </p>
            </div>

            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 border-t p-3 md:hidden"
        style={{
          backgroundColor: theme.primary,
          borderColor: theme.accent,
        }}
      >
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
          <a
            href={`tel:${profile.phone}`}
            className="rounded-xl py-3 text-center text-sm font-black"
            style={{
              backgroundColor: theme.accent,
              color: theme.primary,
            }}
          >
            📞 Call
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border py-3 text-center text-sm font-black text-white"
            style={{ borderColor: theme.accent }}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>

      <div className="h-20 md:hidden" />
    </main>
  );
}