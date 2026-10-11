"use client";

import { useState } from "react";
import { profile } from "@/components/data/profile";
import { template2Themes } from "@/components/data/themes";

const properties = [
  {
    type: "FEATURED PROPERTY",
    title: "Modern Luxury Residence",
    location: "Prime City Location",
    price: "₹85 Lakhs",
    beds: "3 Beds",
    baths: "3 Baths",
    area: "2,450 sq.ft",
    tag: "FOR SALE",
  },
  {
    type: "PREMIUM LISTING",
    title: "Contemporary Family Villa",
    location: "Peaceful Residential Area",
    price: "₹1.25 Cr",
    beds: "4 Beds",
    baths: "4 Baths",
    area: "3,200 sq.ft",
    tag: "NEW",
  },
  {
    type: "INVESTMENT",
    title: "Prime Commercial Space",
    location: "High Growth Business District",
    price: "₹72 Lakhs",
    beds: "Ground Floor",
    baths: "Parking",
    area: "1,800 sq.ft",
    tag: "HOT",
  },
  {
    type: "LUXURY HOME",
    title: "Elegant Garden Villa",
    location: "Premium Gated Community",
    price: "₹1.65 Cr",
    beds: "4 Beds",
    baths: "5 Baths",
    area: "3,850 sq.ft",
    tag: "PREMIUM",
  },
  {
    type: "CITY APARTMENT",
    title: "Modern City Apartment",
    location: "Central Business District",
    price: "₹68 Lakhs",
    beds: "3 Beds",
    baths: "2 Baths",
    area: "1,650 sq.ft",
    tag: "POPULAR",
  },
];

const themeEntries = Object.entries(template2Themes) as [
  keyof typeof template2Themes,
  (typeof template2Themes)[keyof typeof template2Themes],
][];

export default function Template2() {
  const [selectedTheme, setSelectedTheme] =
    useState<keyof typeof template2Themes>("navyGold");

  const theme = template2Themes[selectedTheme];

  return (
    <main
      className="min-h-screen px-3 pb-28 pt-4 transition-colors duration-500 sm:px-6 sm:py-10"
      style={{ backgroundColor: theme.background }}
    >
      {/* Theme Selector */}
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

      {/* Main Card */}
      <div
        className="mx-auto max-w-md overflow-hidden rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.28)] ring-1 ring-black/10 transition-colors duration-500"
        style={{ backgroundColor: theme.background }}
      >
        {/* HERO */}
        <section
          className="relative min-h-[510px] overflow-hidden px-6 pb-8 pt-7 text-white"
          style={{ backgroundColor: theme.primary }}
        >
          {/* Architectural background */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute -right-24 -top-20 h-72 w-72 rounded-full border"
              style={{ borderColor: `${theme.accent}35` }}
            />

            <div
              className="absolute -right-10 top-0 h-52 w-52 rounded-full border"
              style={{ borderColor: `${theme.accent}20` }}
            />

            <div
              className="absolute bottom-0 left-0 h-64 w-24 skew-x-[-12deg]"
              style={{ backgroundColor: `${theme.accent}10` }}
            />

            <div
              className="absolute bottom-0 left-20 h-80 w-20 skew-x-[-12deg]"
              style={{ backgroundColor: `${theme.background}08` }}
            />

            <div
              className="absolute bottom-0 right-8 h-72 w-28 skew-x-[10deg]"
              style={{ backgroundColor: `${theme.accent}08` }}
            />

            <div
              className="absolute bottom-0 right-0 h-52 w-20"
              style={{ backgroundColor: `${theme.background}06` }}
            />
          </div>

          <div className="relative z-10">
            {/* Top */}
            <div className="flex items-start justify-between">
              <div>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.28em]"
                  style={{ color: theme.accent }}
                >
                  Real Estate
                </p>

                <p className="mt-1 text-[11px] text-white/45">
                  Premium Properties
                </p>
              </div>

              <div
                className="rounded-full border px-3 py-1.5 text-[9px] font-bold tracking-wider"
                style={{
                  borderColor: `${theme.accent}50`,
                  color: theme.accent,
                }}
              >
                TRUSTED
              </div>
            </div>

            {/* Hero Copy */}
            <div className="mt-28">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                Find your place
              </p>

              <h1 className="mt-3 text-[52px] font-bold leading-[0.9] tracking-[-0.04em]">
                Your next
                <br />
                <span style={{ color: theme.accent }}>address.</span>
              </h1>

              <p className="mt-6 max-w-[285px] text-sm leading-6 text-white/50">
                Discover premium homes, investment properties and spaces
                designed for the way you want to live.
              </p>
            </div>

            {/* Advisor mini card */}
            <div
              className="absolute bottom-7 left-6 right-6 rounded-2xl border p-4 backdrop-blur-md"
              style={{
                backgroundColor: `${theme.background}0D`,
                borderColor: `${theme.background}18`,
              }}
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                Your Property Advisor
              </p>

              <div className="mt-1 flex items-center justify-between">
                <p className="text-sm font-bold">{profile.name}</p>

                <p
                  className="text-[10px] font-semibold"
                  style={{ color: theme.accent }}
                >
                  {profile.company}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACTIONS */}
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
              📞 Call Agent
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

        {/* STATS */}
        <section className="px-6 pb-8 pt-8">
          <div className="grid grid-cols-3 gap-2.5">
            {[
              ["120+", "Properties"],
              ["15+", "Years"],
              ["98%", "Happy Clients"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-2xl border px-2 py-4 text-center"
                style={{
                  backgroundColor: `${theme.primary}05`,
                  borderColor: `${theme.accent}25`,
                }}
              >
                <p
                  className="text-lg font-bold"
                  style={{ color: theme.primary }}
                >
                  {number}
                </p>

                <p
                  className="mt-1 text-[8px] font-bold uppercase tracking-wider"
                  style={{ color: `${theme.primary}55` }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROPERTIES */}
        <section className="px-6 pb-9">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ color: `${theme.primary}65` }}
          >
            Property Collection
          </p>

          <div className="mt-2 flex items-end justify-between">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: theme.primary }}
            >
              Featured Properties
            </h2>

            <span
              className="text-[10px] font-bold"
              style={{ color: theme.accent }}
            >
              05 LISTINGS
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {properties.map((property, index) => (
              <article
                key={property.title}
                className="overflow-hidden rounded-[28px] border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: theme.background,
                  borderColor: `${theme.accent}22`,
                }}
              >
                {/* Visual */}
                <div
                  className="relative h-44 overflow-hidden"
                  style={{ backgroundColor: theme.primary }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}, ${theme.primary}D9)`,
                    }}
                  />

                  {/* Building */}
                  <div
                    className="absolute bottom-0 left-7 h-32 w-28"
                    style={{ backgroundColor: `${theme.background}10` }}
                  >
                    <div className="grid grid-cols-3 gap-2 p-3">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <span
                          key={i}
                          className="h-3 rounded-[2px]"
                          style={{
                            backgroundColor: `${theme.accent}60`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div
                    className="absolute bottom-0 right-8 h-24 w-36"
                    style={{ backgroundColor: `${theme.background}08` }}
                  />

                  <div
                    className="absolute left-4 top-4 rounded-full px-3 py-1.5 text-[8px] font-bold"
                    style={{
                      backgroundColor: theme.accent,
                      color: theme.primary,
                    }}
                  >
                    {property.tag}
                  </div>

                  <span className="absolute right-4 top-4 text-[10px] font-semibold text-white/35">
                    0{index + 1}
                  </span>
                </div>

                {/* Details */}
                <div className="p-5">
                  <p
                    className="text-[8px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: `${theme.primary}55` }}
                  >
                    {property.type}
                  </p>

                  <h3
                    className="mt-2 text-lg font-bold leading-6"
                    style={{ color: theme.primary }}
                  >
                    {property.title}
                  </h3>

                  <p
                    className="mt-1 text-[11px]"
                    style={{ color: `${theme.primary}60` }}
                  >
                    📍 {property.location}
                  </p>

                  <p
                    className="mt-4 text-xl font-bold"
                    style={{ color: theme.accent }}
                  >
                    {property.price}
                  </p>

                  <div
                    className="mt-4 flex flex-wrap gap-x-3 gap-y-2 border-t pt-4 text-[9px] font-semibold"
                    style={{
                      borderColor: `${theme.primary}12`,
                      color: `${theme.primary}60`,
                    }}
                  >
                    <span>🛏 {property.beds}</span>
                    <span>🚿 {property.baths}</span>
                    <span>⌂ {property.area}</span>
                  </div>

                  <a
                    href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
                      `Hi, I'm interested in ${property.title} (${property.price}). Please share more details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center rounded-xl px-4 py-3 text-[10px] font-bold transition-all active:scale-95"
                    style={{
                      backgroundColor: theme.primary,
                      color: theme.background,
                    }}
                  >
                    Enquire About Property
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WHY US */}
        <section
          className="px-6 py-9"
          style={{ backgroundColor: `${theme.primary}07` }}
        >
          <p
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ color: `${theme.primary}65` }}
          >
            Why Choose Us
          </p>

          <h2
            className="mt-2 text-2xl font-bold tracking-tight"
            style={{ color: theme.primary }}
          >
            More than a property.
          </h2>

          <div className="mt-5 space-y-3">
            {[
              ["01", "Curated Properties", "Selected opportunities that matter."],
              ["02", "Local Expertise", "Deep knowledge of the market."],
              ["03", "Trusted Guidance", "Support from search to closing."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="flex gap-4 rounded-2xl border p-4"
                style={{
                  backgroundColor: theme.background,
                  borderColor: `${theme.accent}20`,
                }}
              >
                <span
                  className="text-[10px] font-bold"
                  style={{ color: theme.accent }}
                >
                  {number}
                </span>

                <div>
                  <h3
                    className="text-sm font-bold"
                    style={{ color: theme.primary }}
                  >
                    {title}
                  </h3>

                  <p
                    className="mt-1 text-[11px] leading-5"
                    style={{ color: `${theme.primary}60` }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ADVISOR */}
        <section className="px-6 py-9">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ color: `${theme.primary}65` }}
          >
            Your Advisor
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
              Property Consultant
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
              Speak With Me
            </a>
          </div>
        </section>

        {/* LOCATION */}
        <section className="px-6 pb-9">
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

        {/* CTA */}
        <section
          className="px-6 py-11 text-center text-white"
          style={{ backgroundColor: theme.primary }}
        >
          <p
            className="text-[9px] font-bold uppercase tracking-[0.25em]"
            style={{ color: theme.accent }}
          >
            Let's Find Your Place
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight">
            Your next chapter
            <br />
            starts here.
          </h2>

          <p className="mx-auto mt-4 max-w-[280px] text-xs leading-6 text-white/45">
            Tell us what you're looking for and we'll help you find the right
            property.
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
            Start a Conversation
          </a>
        </section>

        {/* FOOTER */}
        <footer
          className="px-6 py-7 text-center"
          style={{ backgroundColor: theme.background }}
        >
          <div
            className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold"
            style={{
              backgroundColor: theme.primary,
              color: theme.background,
            }}
          >
            RE
          </div>

          <p
            className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: theme.primary }}
          >
            Premium Real Estate
          </p>

          <p
            className="mt-1 text-[10px]"
            style={{ color: `${theme.primary}50` }}
          >
            Find • Invest • Belong
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
          className="mx-auto flex max-w-md gap-2 rounded-2xl border p-2 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
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