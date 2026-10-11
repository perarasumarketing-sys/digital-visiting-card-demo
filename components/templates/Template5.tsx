"use client";

import { useMemo, useState } from "react";
import { profile } from "@/components/data/profile";
import { template5Themes } from "@/components/data/themes";

const services = [
  {
    category: "Hair",
    name: "Signature Hair Cut",
    description: "Personalized cut and styling designed around your look.",
    price: "₹799",
    icon: "✂️",
  },
  {
    category: "Hair",
    name: "Luxury Hair Spa",
    description: "Deep nourishment treatment for softer, healthier hair.",
    price: "₹1,499",
    icon: "🫧",
  },
  {
    category: "Skin",
    name: "Glow Facial",
    description: "A refreshing facial treatment for a naturally radiant finish.",
    price: "₹1,299",
    icon: "✨",
  },
  {
    category: "Beauty",
    name: "Bridal Makeup",
    description: "Elegant bridal makeup tailored to your special day.",
    price: "₹7,999",
    icon: "💄",
  },
  {
    category: "Beauty",
    name: "Party Makeup",
    description: "Camera-ready makeup for celebrations and special occasions.",
    price: "₹2,499",
    icon: "💋",
  },
  {
    category: "Spa",
    name: "Relaxing Body Spa",
    description: "A calming experience designed to help you completely unwind.",
    price: "₹1,999",
    icon: "🌸",
  },
];

const categories = ["All", "Hair", "Skin", "Beauty", "Spa"];

const reviews = [
  {
    name: "Priya S",
    text: "Beautiful atmosphere and amazing service. I absolutely loved the experience.",
  },
  {
    name: "Anitha R",
    text: "The staff understood exactly what I wanted. Very professional and friendly.",
  },
  {
    name: "Divya K",
    text: "The perfect place for a little self-care. Will definitely visit again.",
  },
];

const themeEntries = Object.entries(template5Themes) as [
  keyof typeof template5Themes,
  (typeof template5Themes)[keyof typeof template5Themes],
][];

export default function Template5() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedTheme, setSelectedTheme] =
    useState<keyof typeof template5Themes>("plumRose");

  const theme = template5Themes[selectedTheme];

  const filteredServices = useMemo(() => {
    if (selectedCategory === "All") return services;

    return services.filter(
      (service) => service.category === selectedCategory
    );
  }, [selectedCategory]);

  const whatsappNumber = profile.whatsapp?.replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    `Hi ${profile.company || profile.name}, I would like to book an appointment.`
  );

  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : "#";

  const phoneLink = profile.phone ? `tel:${profile.phone}` : "#";

  return (
    <main
      className="min-h-screen transition-colors duration-500"
      style={{
        backgroundColor: theme.background,
        color: theme.primary,
      }}
    >
      {/* THEME SELECTOR */}
      <section className="mx-auto max-w-6xl px-5 pb-4 pt-5 sm:px-8 lg:px-10">
        <p
          className="mb-3 text-center text-[9px] font-black uppercase tracking-[0.3em]"
          style={{ color: `${theme.primary}70` }}
        >
          Choose Color Theme
        </p>

        <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
          {themeEntries.map(([key, item]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedTheme(key)}
              className={`rounded-2xl border px-2 py-3 text-[9px] font-black transition-all duration-300 ${
                selectedTheme === key
                  ? "scale-[1.03] shadow-lg"
                  : "opacity-65"
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
      </section>

      {/* HERO */}
      <section
        className="relative min-h-[760px] overflow-hidden text-white"
        style={{ backgroundColor: theme.primary }}
      >
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: `${theme.accent}25` }}
        />

        <div
          className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${theme.accent}18` }}
        />

        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-8 lg:px-10">
          {/* NAV */}
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-[9px] font-bold uppercase tracking-[0.35em]"
                style={{ color: theme.accent }}
              >
                Beauty • Wellness • You
              </p>

              <h1 className="mt-1 text-lg font-black">
                {profile.company || profile.name}
              </h1>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border px-4 py-2.5 text-[11px] font-bold transition hover:-translate-y-0.5"
              style={{
                borderColor: `${theme.background}20`,
                backgroundColor: `${theme.background}08`,
              }}
            >
              Book Now
            </a>
          </div>

          {/* HERO CONTENT */}
          <div className="grid items-center gap-12 pt-16 lg:grid-cols-2 lg:pt-24">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: theme.accent }}
              >
                Your beauty ritual
              </p>

              <h2 className="mt-5 max-w-xl text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Feel
                <br />
                <span
                  className="font-serif italic"
                  style={{ color: theme.accent }}
                >
                  beautiful.
                </span>
                <br />
                Be yourself.
              </h2>

              <p className="mt-7 max-w-lg text-base leading-7 text-white/55 sm:text-lg">
                {profile.bio ||
                  "A premium beauty destination created for hair, skin, makeup and complete relaxation."}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full px-7 py-4 text-sm font-black shadow-xl transition hover:-translate-y-1"
                  style={{
                    backgroundColor: theme.accent,
                    color: theme.primary,
                  }}
                >
                  Book Appointment
                </a>

                <a
                  href="#services"
                  className="rounded-full border px-7 py-4 text-sm font-bold transition hover:bg-white/10"
                  style={{ borderColor: `${theme.background}20` }}
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-10 flex items-center gap-5">
                <div className="flex -space-x-2">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs"
                    style={{
                      borderColor: theme.primary,
                      backgroundColor: theme.accent,
                    }}
                  >
                    ✨
                  </span>

                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs"
                    style={{
                      borderColor: theme.primary,
                      backgroundColor: theme.background,
                      color: theme.primary,
                    }}
                  >
                    ♡
                  </span>

                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs"
                    style={{
                      borderColor: theme.primary,
                      backgroundColor: theme.accent,
                    }}
                  >
                    ✦
                  </span>
                </div>

                <div>
                  <p className="text-sm font-bold">Loved by 500+ clients</p>

                  <p className="mt-0.5 text-[10px] uppercase tracking-widest text-white/35">
                    Premium beauty experience
                  </p>
                </div>
              </div>
            </div>

            {/* LUXURY VISUAL */}
            <div className="relative mx-auto w-full max-w-md">
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border shadow-2xl"
                style={{
                  borderColor: `${theme.background}18`,
                  background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})`,
                }}
              >
                <div
                  className="absolute inset-5 rounded-[2rem] border"
                  style={{ borderColor: `${theme.background}25` }}
                />

                <div
                  className="absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm"
                  style={{
                    borderColor: `${theme.background}30`,
                    backgroundColor: `${theme.background}12`,
                  }}
                >
                  <div className="text-center">
                    <div className="text-7xl">🌸</div>

                    <p
                      className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em]"
                      style={{ color: `${theme.background}CC` }}
                    >
                      Beauty Studio
                    </p>
                  </div>
                </div>

                <div
                  className="absolute left-5 top-5 rounded-2xl px-4 py-3 shadow-xl"
                  style={{
                    backgroundColor: theme.background,
                    color: theme.primary,
                  }}
                >
                  <p className="text-[9px] font-bold uppercase tracking-widest opacity-50">
                    Signature
                  </p>

                  <p className="mt-1 text-sm font-black">Beauty Ritual</p>
                </div>

                <div
                  className="absolute bottom-5 right-5 rounded-2xl px-4 py-3 backdrop-blur"
                  style={{
                    backgroundColor: `${theme.primary}E6`,
                  }}
                >
                  <p
                    className="text-[9px] font-bold uppercase tracking-widest"
                    style={{ color: theme.accent }}
                  >
                    Today
                  </p>

                  <p className="mt-1 text-sm font-bold">
                    Appointments Open
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div
            className="mt-16 grid grid-cols-3 border-t pt-7"
            style={{ borderColor: `${theme.background}18` }}
          >
            <div>
              <p className="text-2xl font-black">4.9★</p>
              <p className="mt-1 text-[9px] uppercase tracking-widest text-white/35">
                Client Rating
              </p>
            </div>

            <div
              className="border-l pl-5"
              style={{ borderColor: `${theme.background}18` }}
            >
              <p className="text-2xl font-black">500+</p>
              <p className="mt-1 text-[9px] uppercase tracking-widest text-white/35">
                Happy Clients
              </p>
            </div>

            <div
              className="border-l pl-5"
              style={{ borderColor: `${theme.background}18` }}
            >
              <p className="text-2xl font-black">8+</p>
              <p className="mt-1 text-[9px] uppercase tracking-widest text-white/35">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="mx-auto max-w-6xl px-5 pt-6 sm:px-8 lg:px-10">
        <div
          className="grid grid-cols-3 gap-2 rounded-[2rem] border bg-white p-2 shadow-sm"
          style={{ borderColor: `${theme.primary}12` }}
        >
          <a
            href={phoneLink}
            className="rounded-[1.5rem] px-3 py-4 text-center transition"
            style={{ color: theme.primary }}
          >
            <span className="text-xl">☎</span>
            <p className="mt-1 text-[11px] font-bold">Call</p>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-[1.5rem] px-3 py-4 text-center transition"
            style={{
              backgroundColor: `${theme.accent}18`,
              color: theme.primary,
            }}
          >
            <span className="text-xl">💬</span>
            <p className="mt-1 text-[11px] font-bold">WhatsApp</p>
          </a>

          <a
            href={profile.mapUrl || "#"}
            target="_blank"
            rel="noreferrer"
            className="rounded-[1.5rem] px-3 py-4 text-center transition"
            style={{ color: theme.primary }}
          >
            <span className="text-xl">📍</span>
            <p className="mt-1 text-[11px] font-bold">Location</p>
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p
              className="text-xs font-black uppercase tracking-[0.3em]"
              style={{ color: theme.accent }}
            >
              The Philosophy
            </p>

            <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Beauty begins
              <br />
              <span
                className="font-serif italic"
                style={{ color: theme.accent }}
              >
                with you.
              </span>
            </h3>
          </div>

          <div>
            <p
              className="text-base leading-8"
              style={{ color: `${theme.primary}99` }}
            >
              We believe beauty is personal. Every appointment starts with
              understanding your style, your preferences and what makes you
              feel confident.
            </p>

            <p
              className="mt-5 text-base leading-8"
              style={{ color: `${theme.primary}99` }}
            >
              From everyday hair care to special-event makeup and relaxing spa
              rituals, every service is designed around you.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="text-white"
        style={{ backgroundColor: theme.primary }}
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="text-center">
            <p
              className="text-xs font-black uppercase tracking-[0.3em]"
              style={{ color: theme.accent }}
            >
              Our Services
            </p>

            <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Your self-care menu
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/45">
              Thoughtfully selected treatments for hair, skin, beauty and
              relaxation.
            </p>
          </div>

          {/* FILTER */}
          <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => {
              const active = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition"
                  style={{
                    backgroundColor: active
                      ? theme.accent
                      : `${theme.background}08`,
                    color: active
                      ? theme.primary
                      : `${theme.background}80`,
                    border: active
                      ? `1px solid ${theme.accent}`
                      : `1px solid ${theme.background}15`,
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* SERVICE CARDS */}
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {filteredServices.map((service) => (
              <div
                key={service.name}
                className="group rounded-[1.8rem] border p-5 transition hover:-translate-y-1"
                style={{
                  borderColor: `${theme.background}15`,
                  backgroundColor: `${theme.background}08`,
                }}
              >
                <div className="flex gap-4">
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl"
                    style={{ backgroundColor: theme.accent }}
                  >
                    {service.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p
                          className="text-[9px] font-bold uppercase tracking-[0.2em]"
                          style={{ color: theme.accent }}
                        >
                          {service.category}
                        </p>

                        <h4 className="mt-1 font-black">
                          {service.name}
                        </h4>
                      </div>

                      <p
                        className="shrink-0 text-sm font-black"
                        style={{ color: theme.accent }}
                      >
                        {service.price}
                      </p>
                    </div>

                    <p className="mt-3 text-xs leading-5 text-white/40">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full px-7 py-4 text-sm font-black transition hover:-translate-y-1"
              style={{
                backgroundColor: theme.accent,
                color: theme.primary,
              }}
            >
              Book Your Treatment →
            </a>
          </div>
        </div>
      </section>

      {/* BEAUTY RITUAL */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          <div
            className="rounded-[2rem] p-7 md:col-span-2"
            style={{
              backgroundColor: theme.accent,
              color: theme.primary,
            }}
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] opacity-50">
              Signature Experience
            </p>

            <h3 className="mt-4 max-w-lg text-3xl font-black tracking-tight sm:text-4xl">
              Take a moment to slow down, relax and feel your best.
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-6 opacity-70">
              Our beauty rituals combine professional care with a calm,
              welcoming environment.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full px-6 py-3.5 text-xs font-black"
              style={{
                backgroundColor: theme.primary,
                color: theme.background,
              }}
            >
              Reserve Your Moment
            </a>
          </div>

          <div
            className="rounded-[2rem] p-7 shadow-sm ring-1"
            style={{
              backgroundColor: theme.background,
              color: theme.primary,
              boxShadow: `0 0 0 1px ${theme.primary}12`,
            }}
          >
            <div className="text-5xl">🪞</div>

            <h4 className="mt-8 text-2xl font-black">
              Personalized
              <br />
              Beauty
            </h4>

            <p
              className="mt-4 text-sm leading-6"
              style={{ color: `${theme.primary}80` }}
            >
              Every service begins with understanding your individual needs.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIALIST */}
      <section
        className="border-y bg-white"
        style={{ borderColor: `${theme.primary}12` }}
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative">
              <div
                className="aspect-square max-w-md overflow-hidden rounded-[2.5rem] p-5"
                style={{
                  background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})`,
                }}
              >
                <div
                  className="flex h-full items-center justify-center rounded-[2rem] border bg-white/10"
                  style={{ borderColor: `${theme.background}25` }}
                >
                  <div className="text-center text-white">
                    <div className="text-8xl">💇‍♀️</div>

                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em]">
                      Beauty Specialist
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p
                className="text-xs font-black uppercase tracking-[0.3em]"
                style={{ color: theme.accent }}
              >
                Meet Your Beauty Expert
              </p>

              <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                {profile.name || "Your Beauty Specialist"}
              </h3>

              <p
                className="mt-2 text-sm font-bold"
                style={{ color: theme.accent }}
              >
                {profile.role || "Beauty & Wellness Specialist"}
              </p>

              <p
                className="mt-6 text-base leading-8"
                style={{ color: `${theme.primary}99` }}
              >
                {profile.bio ||
                  "Passionate about helping every client feel confident, comfortable and beautifully themselves."}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div
                  className="rounded-2xl p-5"
                  style={{ backgroundColor: theme.background }}
                >
                  <p className="text-2xl font-black">8+</p>

                  <p
                    className="mt-1 text-[10px] uppercase tracking-widest"
                    style={{ color: `${theme.primary}60` }}
                  >
                    Years Experience
                  </p>
                </div>

                <div
                  className="rounded-2xl p-5 text-white"
                  style={{ backgroundColor: theme.primary }}
                >
                  <p className="text-2xl font-black">500+</p>

                  <p className="mt-1 text-[10px] uppercase tracking-widest text-white/40">
                    Clients Served
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="text-center">
          <p
            className="text-xs font-black uppercase tracking-[0.3em]"
            style={{ color: theme.accent }}
          >
            Client Love
          </p>

          <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Kind words from our clients
          </h3>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[2rem] border bg-white p-7 shadow-sm"
              style={{ borderColor: `${theme.primary}12` }}
            >
              <div style={{ color: theme.accent }}>★★★★★</div>

              <p
                className="mt-5 text-sm leading-7"
                style={{ color: `${theme.primary}85` }}
              >
                “{review.text}”
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black"
                  style={{
                    backgroundColor: theme.primary,
                    color: theme.background,
                  }}
                >
                  {review.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-black">{review.name}</p>

                  <p
                    className="text-[9px] uppercase tracking-widest"
                    style={{ color: `${theme.primary}55` }}
                  >
                    Verified Client
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOURS + LOCATION */}
      <section
        className="text-white"
        style={{ backgroundColor: theme.primary }}
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {/* HOURS */}
            <div
              className="rounded-[2rem] border p-7 sm:p-9"
              style={{
                borderColor: `${theme.background}15`,
                backgroundColor: `${theme.background}08`,
              }}
            >
              <p
                className="text-xs font-black uppercase tracking-[0.25em]"
                style={{ color: theme.accent }}
              >
                Studio Hours
              </p>

              <h3 className="mt-3 text-3xl font-black">
                When we're here for you.
              </h3>

              <div className="mt-8 space-y-4">
                {[
                  ["Monday — Friday", "10:00 AM — 8:00 PM"],
                  ["Saturday", "10:00 AM — 9:00 PM"],
                  ["Sunday", "11:00 AM — 6:00 PM"],
                ].map(([day, time]) => (
                  <div
                    key={day}
                    className="flex items-center justify-between border-b pb-4 text-sm"
                    style={{ borderColor: `${theme.background}15` }}
                  >
                    <span className="text-white/45">{day}</span>
                    <span className="font-bold">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* LOCATION */}
            <div
              className="rounded-[2rem] p-7 sm:p-9"
              style={{
                backgroundColor: theme.background,
                color: theme.primary,
              }}
            >
              <p
                className="text-xs font-black uppercase tracking-[0.25em]"
                style={{ color: theme.accent }}
              >
                Visit Us
              </p>

              <h3 className="mt-3 text-3xl font-black">
                Your beautiful escape.
              </h3>

              <div className="mt-7 flex gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl"
                  style={{
                    backgroundColor: theme.primary,
                    color: theme.background,
                  }}
                >
                  📍
                </div>

                <div>
                  <p className="text-sm font-bold leading-6">
                    {profile.address || "Your salon address"}
                  </p>

                  <a
                    href={profile.mapUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-xs font-black"
                    style={{ color: theme.accent }}
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div
                className="mt-8 border-t pt-6"
                style={{ borderColor: `${theme.primary}12` }}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: `${theme.primary}55` }}
                >
                  Appointment Enquiries
                </p>

                <a
                  href={phoneLink}
                  className="mt-2 block text-lg font-black"
                >
                  {profile.phone || "Call us"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="px-5 py-20 text-center sm:px-8"
        style={{
          backgroundColor: theme.accent,
          color: theme.primary,
        }}
      >
        <p className="text-xs font-black uppercase tracking-[0.3em] opacity-50">
          Your next appointment
        </p>

        <h3 className="mx-auto mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-6xl">
          A little time
          <br />
          just for you.
        </h3>

        <p className="mx-auto mt-5 max-w-md text-sm leading-6 opacity-65">
          Step in, slow down and leave feeling your absolute best.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-7 py-4 text-sm font-black transition hover:-translate-y-1"
            style={{
              backgroundColor: theme.primary,
              color: theme.background,
            }}
          >
            Book Appointment
          </a>

          <a
            href={phoneLink}
            className="rounded-full border px-7 py-4 text-sm font-black transition hover:bg-white/20"
            style={{ borderColor: `${theme.primary}30` }}
          >
            Call Studio
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-5 py-10 text-white sm:px-8"
        style={{ backgroundColor: theme.primary }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-black">
                {profile.company || profile.name}
              </p>

              <p className="mt-1 text-xs text-white/35">
                Beauty • Wellness • Confidence
              </p>
            </div>

            <div className="flex gap-3">
              {profile.social?.instagram && (
                <a
                  href={profile.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border text-[10px] font-bold transition hover:bg-white/10"
                  style={{ borderColor: `${theme.background}15` }}
                >
                  IG
                </a>
              )}

              {profile.social?.facebook && (
                <a
                  href={profile.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border text-[10px] font-bold transition hover:bg-white/10"
                  style={{ borderColor: `${theme.background}15` }}
                >
                  FB
                </a>
              )}
            </div>
          </div>

          <div
            className="mt-8 border-t pt-6 text-center text-[9px] uppercase tracking-widest text-white/20"
            style={{ borderColor: `${theme.background}15` }}
          >
            © {new Date().getFullYear()}{" "}
            {profile.company || profile.name}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* MOBILE BOOKING BAR */}
      <div
        className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 gap-2 rounded-full border p-2 shadow-2xl backdrop-blur-xl sm:hidden"
        style={{
          backgroundColor: `${theme.primary}F5`,
          borderColor: `${theme.background}15`,
        }}
      >
        <a
          href={phoneLink}
          className="flex flex-1 items-center justify-center rounded-full py-3 text-xs font-black"
          style={{
            backgroundColor: `${theme.background}12`,
            color: theme.background,
          }}
        >
          ☎ Call
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="flex flex-[1.5] items-center justify-center rounded-full py-3 text-xs font-black"
          style={{
            backgroundColor: theme.accent,
            color: theme.primary,
          }}
        >
          ✨ Book Appointment
        </a>
      </div>
    </main>
  );
}