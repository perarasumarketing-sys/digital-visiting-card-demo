"use client";

import { useState } from "react";
import { profile } from "@/components/data/profile";
import { template3Themes } from "@/components/data/themes";

const services = [
  {
    title: "General Consultation",
    description: "Professional consultation for everyday health needs.",
    icon: "🩺",
  },
  {
    title: "Health Checkups",
    description: "Routine health checks and preventive care support.",
    icon: "❤️",
  },
  {
    title: "Medicine Support",
    description: "Guidance and support for your medication needs.",
    icon: "💊",
  },
  {
    title: "Wellness Care",
    description: "Simple guidance to support a healthier lifestyle.",
    icon: "🌿",
  },
];

const reviews = [
  {
    name: "Arun Kumar",
    text: "Friendly service and professional care. Very satisfied.",
  },
  {
    name: "Priya S",
    text: "The staff explained everything clearly and patiently.",
  },
  {
    name: "Rahul M",
    text: "A clean, trustworthy and comfortable experience.",
  },
];

const themeEntries = Object.entries(template3Themes) as [
  keyof typeof template3Themes,
  (typeof template3Themes)[keyof typeof template3Themes],
][];

export default function Template3() {
  const [selectedTheme, setSelectedTheme] =
    useState<keyof typeof template3Themes>("medicalTeal");

  const theme = template3Themes[selectedTheme];

  return (
    <main
      className="min-h-screen px-3 pb-28 pt-4 transition-colors duration-500 sm:px-6 sm:py-10"
      style={{ backgroundColor: theme.background }}
    >
      {/* THEME SELECTOR */}
      <div className="mx-auto mb-5 max-w-md">
        <p
          className="mb-3 text-center text-[10px] font-bold uppercase tracking-[0.25em]"
          style={{ color: `${theme.primary}80` }}
        >
          Choose Color Theme
        </p>

        <div className="grid grid-cols-3 gap-2">
          {themeEntries.map(([key, item]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedTheme(key)}
              className={`rounded-2xl border px-2 py-3 text-[10px] font-bold transition-all duration-300 ${
                selectedTheme === key
                  ? "scale-[1.03] shadow-lg"
                  : "opacity-70"
              }`}
              style={{
                backgroundColor: item.primary,
                color: item.background,
                borderColor:
                  selectedTheme === key ? item.accent : "transparent",
              }}
            >
              <span className="block">{item.name}</span>

              <span
                className="mx-auto mt-2 block h-1.5 w-10 rounded-full"
                style={{ backgroundColor: item.accent }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CARD */}
      <div
        className="mx-auto max-w-md overflow-hidden rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.2)] ring-1 ring-black/10 transition-colors duration-500"
        style={{ backgroundColor: theme.background }}
      >
        {/* HERO */}
        <section
          className="relative overflow-hidden px-6 pb-9 pt-8 text-white"
          style={{ backgroundColor: theme.primary }}
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute -right-24 -top-20 h-72 w-72 rounded-full border"
              style={{ borderColor: `${theme.accent}25` }}
            />

            <div
              className="absolute -right-8 top-16 h-40 w-40 rounded-full border"
              style={{ borderColor: `${theme.accent}18` }}
            />

            <div
              className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full"
              style={{ backgroundColor: `${theme.accent}08` }}
            />
          </div>

          <div className="relative z-10">
            {/* Top label */}
            <div className="flex items-start justify-between">
              <div>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.3em]"
                  style={{ color: theme.accent }}
                >
                  Healthcare
                </p>

                <p className="mt-1 text-[11px] text-white/45">
                  Care You Can Trust
                </p>
              </div>

              <div
                className="rounded-full border px-3 py-1.5 text-[9px] font-bold"
                style={{
                  borderColor: `${theme.accent}50`,
                  color: theme.accent,
                }}
              >
                TRUSTED CARE
              </div>
            </div>

            {/* Hero content */}
            <div className="mt-20">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: theme.accent,
                  color: theme.primary,
                }}
              >
                <span className="text-3xl">✚</span>
              </div>

              <p className="mt-7 text-[11px] uppercase tracking-[0.2em] text-white/45">
                Your health matters
              </p>

              <h1 className="mt-3 text-[44px] font-bold leading-[0.95] tracking-[-0.04em]">
                Better care.
                <br />
                <span style={{ color: theme.accent }}>Better health.</span>
              </h1>

              <p className="mt-5 max-w-[290px] text-sm leading-6 text-white/55">
                Professional healthcare support with a simple,
                comfortable and trusted approach.
              </p>
            </div>

            {/* Profile mini card */}
            <div
              className="mt-8 rounded-2xl border p-4"
              style={{
                backgroundColor: `${theme.background}0D`,
                borderColor: `${theme.background}18`,
              }}
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                Healthcare Professional
              </p>

              <div className="mt-2 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold">{profile.name}</p>

                  <p className="mt-1 text-[10px] text-white/45">
                    {profile.company}
                  </p>
                </div>

                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: theme.accent,
                    color: theme.primary,
                  }}
                >
                  {profile.name.charAt(0)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK ACTIONS */}
        <section className="relative z-20 -mt-5 px-5">
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center justify-center gap-2 rounded-2xl px-4 py-4 text-xs font-bold shadow-xl transition-all hover:-translate-y-1 active:scale-95"
              style={{
                backgroundColor: theme.background,
                color: theme.primary,
              }}
            >
              📞 Call Now
            </a>

            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl px-4 py-4 text-xs font-bold shadow-xl transition-all hover:-translate-y-1 active:scale-95"
              style={{
                backgroundColor: theme.primary,
                color: theme.background,
              }}
            >
              💬 WhatsApp
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="px-6 pb-9 pt-9">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ color: `${theme.primary}65` }}
          >
            About Us
          </p>

          <h2
            className="mt-2 text-2xl font-bold tracking-tight"
            style={{ color: theme.primary }}
          >
            Care that puts you first.
          </h2>

          <p
            className="mt-4 text-sm leading-7"
            style={{ color: `${theme.primary}75` }}
          >
            We believe healthcare should feel simple, respectful and
            accessible. Our focus is on providing dependable support
            while making every patient feel comfortable and informed.
          </p>
        </section>

        {/* SERVICES */}
        <section className="px-6 pb-9">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ color: `${theme.primary}65` }}
          >
            Our Services
          </p>

          <h2
            className="mt-2 text-2xl font-bold tracking-tight"
            style={{ color: theme.primary }}
          >
            Healthcare support
          </h2>

          <div className="mt-5 space-y-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-[24px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: theme.background,
                  borderColor: `${theme.accent}25`,
                }}
              >
                <div className="flex gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl"
                    style={{
                      backgroundColor: `${theme.accent}20`,
                    }}
                  >
                    {service.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        className="text-sm font-bold"
                        style={{ color: theme.primary }}
                      >
                        {service.title}
                      </h3>

                      <span
                        className="text-[9px] font-bold"
                        style={{ color: theme.accent }}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <p
                      className="mt-2 text-[11px] leading-5"
                      style={{ color: `${theme.primary}60` }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section
          className="px-6 py-9"
          style={{ backgroundColor: `${theme.primary}06` }}
        >
          <p
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ color: `${theme.primary}65` }}
          >
            Why Choose Us
          </p>

          <h2
            className="mt-2 text-2xl font-bold"
            style={{ color: theme.primary }}
          >
            Your comfort matters.
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {[
              ["✓", "Trusted Care"],
              ["♡", "Patient Focus"],
              ["24/7", "Support"],
              ["★", "Professional"],
            ].map(([icon, title]) => (
              <div
                key={title}
                className="rounded-2xl border p-4"
                style={{
                  backgroundColor: theme.background,
                  borderColor: `${theme.accent}20`,
                }}
              >
                <span
                  className="text-lg font-bold"
                  style={{ color: theme.accent }}
                >
                  {icon}
                </span>

                <p
                  className="mt-2 text-[10px] font-bold"
                  style={{ color: theme.primary }}
                >
                  {title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROFESSIONAL */}
        <section className="px-6 py-9">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ color: `${theme.primary}65` }}
          >
            Meet Your Professional
          </p>

          <div
            className="mt-5 rounded-[28px] p-6 text-white shadow-xl"
            style={{ backgroundColor: theme.primary }}
          >
            <div
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 text-2xl font-bold"
              style={{
                borderColor: theme.accent,
                color: theme.accent,
              }}
            >
              {profile.name.charAt(0)}
            </div>

            <h3 className="mt-4 text-center text-xl font-bold">
              {profile.name}
            </h3>

            <p
              className="mt-1 text-center text-[10px] font-semibold"
              style={{ color: theme.accent }}
            >
              Healthcare Professional
            </p>

            <p className="mt-4 text-center text-xs leading-6 text-white/50">
              {profile.bio}
            </p>

            <a
              href={`tel:${profile.phone}`}
              className="mt-5 flex items-center justify-center rounded-xl px-4 py-3 text-[10px] font-bold"
              style={{
                backgroundColor: theme.background,
                color: theme.primary,
              }}
            >
              Contact Professional
            </a>
          </div>
        </section>

        {/* APPOINTMENT */}
        <section className="px-6 pb-9">
          <div
            className="rounded-[28px] border p-6"
            style={{
              backgroundColor: `${theme.accent}10`,
              borderColor: `${theme.accent}30`,
            }}
          >
            <p
              className="text-[10px] font-bold uppercase tracking-[0.25em]"
              style={{ color: theme.accent }}
            >
              Appointment
            </p>

            <h2
              className="mt-2 text-2xl font-bold"
              style={{ color: theme.primary }}
            >
              Need a consultation?
            </h2>

            <p
              className="mt-3 text-xs leading-6"
              style={{ color: `${theme.primary}65` }}
            >
              Get in touch with us to discuss your requirements and
              schedule a convenient time.
            </p>

            <a
              href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
                "Hi, I would like to book a consultation."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center rounded-xl px-4 py-3.5 text-[10px] font-bold"
              style={{
                backgroundColor: theme.primary,
                color: theme.background,
              }}
            >
              Book Appointment
            </a>
          </div>
        </section>

        {/* WORKING HOURS */}
        <section className="px-6 pb-9">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ color: `${theme.primary}65` }}
          >
            Availability
          </p>

          <h2
            className="mt-2 text-2xl font-bold"
            style={{ color: theme.primary }}
          >
            Working Hours
          </h2>

          <div
            className="mt-5 overflow-hidden rounded-[24px] border"
            style={{ borderColor: `${theme.accent}25` }}
          >
            {[
              ["Monday - Friday", "9:00 AM - 7:00 PM"],
              ["Saturday", "9:00 AM - 5:00 PM"],
              ["Sunday", "By Appointment"],
            ].map(([day, time]) => (
              <div
                key={day}
                className="flex items-center justify-between border-b px-5 py-4 last:border-b-0"
                style={{
                  backgroundColor: theme.background,
                  borderColor: `${theme.primary}10`,
                }}
              >
                <span
                  className="text-[10px] font-semibold"
                  style={{ color: `${theme.primary}65` }}
                >
                  {day}
                </span>

                <span
                  className="text-[10px] font-bold"
                  style={{ color: theme.primary }}
                >
                  {time}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section
          className="px-6 py-9"
          style={{ backgroundColor: `${theme.primary}06` }}
        >
          <p
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ color: `${theme.primary}65` }}
          >
            Patient Reviews
          </p>

          <h2
            className="mt-2 text-2xl font-bold"
            style={{ color: theme.primary }}
          >
            What patients say
          </h2>

          <div className="mt-5 space-y-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-[24px] border p-5"
                style={{
                  backgroundColor: theme.background,
                  borderColor: `${theme.accent}20`,
                }}
              >
                <div
                  className="text-sm tracking-widest"
                  style={{ color: theme.accent }}
                >
                  ★★★★★
                </div>

                <p
                  className="mt-3 text-xs leading-6"
                  style={{ color: `${theme.primary}70` }}
                >
                  “{review.text}”
                </p>

                <p
                  className="mt-3 text-[10px] font-bold"
                  style={{ color: theme.primary }}
                >
                  {review.name}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* LOCATION */}
        <section className="px-6 py-9">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ color: `${theme.primary}65` }}
          >
            Visit Us
          </p>

          <h2
            className="mt-2 text-2xl font-bold"
            style={{ color: theme.primary }}
          >
            Our Location
          </h2>

          <div
            className="mt-5 rounded-[28px] border p-5"
            style={{
              backgroundColor: theme.background,
              borderColor: `${theme.accent}25`,
            }}
          >
            <p
              className="text-sm font-bold leading-6"
              style={{ color: theme.primary }}
            >
              📍 {profile.address}
            </p>

            <a
              href={profile.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center rounded-xl px-4 py-3 text-[10px] font-bold"
              style={{
                backgroundColor: theme.primary,
                color: theme.background,
              }}
            >
              Open in Google Maps ↗
            </a>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="px-6 py-11 text-center text-white"
          style={{ backgroundColor: theme.primary }}
        >
          <p
            className="text-[9px] font-bold uppercase tracking-[0.25em]"
            style={{ color: theme.accent }}
          >
            Your Health Comes First
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight">
            Let's take care
            <br />
            of your health.
          </h2>

          <p className="mx-auto mt-4 max-w-[280px] text-xs leading-6 text-white/45">
            Contact us today for professional support and guidance.
          </p>

          <a
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl px-6 py-3.5 text-xs font-bold"
            style={{
              backgroundColor: theme.background,
              color: theme.primary,
            }}
          >
            Contact Us
          </a>
        </section>

        {/* FOOTER */}
        <footer
          className="px-6 py-7 text-center"
          style={{ backgroundColor: theme.background }}
        >
          <div
            className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold"
            style={{
              backgroundColor: theme.primary,
              color: theme.background,
            }}
          >
            +
          </div>

          <p
            className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: theme.primary }}
          >
            Trusted Healthcare
          </p>

          <p
            className="mt-1 text-[10px]"
            style={{ color: `${theme.primary}50` }}
          >
            Care • Trust • Wellness
          </p>

          <div
            className="mx-auto mt-5 h-px w-10"
            style={{ backgroundColor: theme.accent }}
          />

          <p
            className="mt-4 text-[9px]"
            style={{ color: `${theme.primary}35` }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>
      </div>

      {/* MOBILE STICKY BAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:hidden">
        <div
          className="mx-auto flex max-w-md gap-2 rounded-2xl border p-2 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          style={{
            backgroundColor: `${theme.primary}F5`,
            borderColor: `${theme.accent}30`,
          }}
        >
          <a
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center rounded-xl px-3 py-3 text-[10px] font-bold"
            style={{
              backgroundColor: theme.background,
              color: theme.primary,
            }}
          >
            💬 WhatsApp
          </a>

          <a
            href={`tel:${profile.phone}`}
            className="flex flex-1 items-center justify-center rounded-xl px-3 py-3 text-[10px] font-bold"
            style={{
              backgroundColor: `${theme.background}15`,
              color: theme.background,
            }}
          >
            📞 Call
          </a>
        </div>
      </div>
    </main>
  );
}