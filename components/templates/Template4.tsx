"use client";

import { useState } from "react";
import { profile } from "@/components/data/profile";
import { template4Themes } from "@/components/data/themes";

const menuItems = [
  {
    category: "Chef's Specials",
    name: "Chef's Special Platter",
    description: "A generous selection of our signature favorites.",
    price: "₹499",
    icon: "🍽️",
  },
  {
    category: "Main Course",
    name: "Creamy Alfredo Pasta",
    description: "Creamy pasta finished with herbs and parmesan.",
    price: "₹349",
    icon: "🍝",
  },
  {
    category: "Main Course",
    name: "Classic Grilled Chicken",
    description: "Tender grilled chicken with fresh seasonal sides.",
    price: "₹399",
    icon: "🍗",
  },
  {
    category: "Pizza",
    name: "Four Cheese Pizza",
    description: "Four rich cheeses on our signature thin crust.",
    price: "₹449",
    icon: "🍕",
  },
  {
    category: "Beverages",
    name: "Signature Cold Coffee",
    description: "Smooth chilled coffee with our house blend.",
    price: "₹199",
    icon: "☕",
  },
  {
    category: "Desserts",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center.",
    price: "₹249",
    icon: "🍫",
  },
];

const categories = [
  "All",
  "Chef's Specials",
  "Main Course",
  "Pizza",
  "Beverages",
  "Desserts",
];

const reviews = [
  {
    name: "Arun Kumar",
    text: "Amazing food, beautiful atmosphere and excellent service.",
  },
  {
    name: "Priya S",
    text: "The pasta and cold coffee were absolutely delicious.",
  },
  {
    name: "Rahul M",
    text: "A lovely place for dinner with family and friends.",
  },
];

const themeEntries = Object.entries(template4Themes) as [
  keyof typeof template4Themes,
  (typeof template4Themes)[keyof typeof template4Themes],
][];

export default function Template4() {
  const [selectedTheme, setSelectedTheme] =
    useState<keyof typeof template4Themes>("espressoTerracotta");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const theme = template4Themes[selectedTheme];

  const filteredMenu =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

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
        className="mx-auto max-w-md overflow-hidden rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.25)] ring-1 ring-black/10 transition-colors duration-500"
        style={{ backgroundColor: theme.background }}
      >
        {/* HERO */}
        <section
          className="relative min-h-[500px] overflow-hidden px-6 pb-8 pt-8 text-white"
          style={{ backgroundColor: theme.primary }}
        >
          {/* Decorative background */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute -right-20 -top-16 h-72 w-72 rounded-full border"
              style={{ borderColor: `${theme.accent}25` }}
            />

            <div
              className="absolute right-8 top-12 h-36 w-36 rounded-full border"
              style={{ borderColor: `${theme.accent}18` }}
            />

            <div
              className="absolute bottom-0 left-0 h-48 w-full"
              style={{
                background: `linear-gradient(to top, ${theme.accent}10, transparent)`,
              }}
            />

            <div
              className="absolute bottom-8 left-8 h-28 w-28 rounded-full"
              style={{ backgroundColor: `${theme.accent}08` }}
            />
          </div>

          <div className="relative z-10">
            {/* Top */}
            <div className="flex items-start justify-between">
              <div>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.3em]"
                  style={{ color: theme.accent }}
                >
                  Restaurant & Café
                </p>

                <p className="mt-1 text-[11px] text-white/45">
                  Good Food • Good Moments
                </p>
              </div>

              <div
                className="rounded-full border px-3 py-1.5 text-[9px] font-bold"
                style={{
                  borderColor: `${theme.accent}50`,
                  color: theme.accent,
                }}
              >
                OPEN TODAY
              </div>
            </div>

            {/* Hero copy */}
            <div className="mt-24">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                Welcome to our table
              </p>

              <h1 className="mt-3 text-[48px] font-bold leading-[0.92] tracking-[-0.04em]">
                Taste the
                <br />
                <span style={{ color: theme.accent }}>moment.</span>
              </h1>

              <p className="mt-6 max-w-[290px] text-sm leading-6 text-white/50">
                Fresh flavors, warm hospitality and memorable moments
                made for every occasion.
              </p>
            </div>

            {/* Restaurant identity */}
            <div
              className="absolute bottom-7 left-6 right-6 rounded-2xl border p-4 backdrop-blur-md"
              style={{
                backgroundColor: `${theme.background}0D`,
                borderColor: `${theme.background}18`,
              }}
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                Presented by
              </p>

              <div className="mt-1 flex items-center justify-between">
                <p className="text-sm font-bold">{profile.company}</p>

                <span
                  className="text-lg"
                  style={{ color: theme.accent }}
                >
                  ✦
                </span>
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
              📞 Call Us
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
            Our Story
          </p>

          <h2
            className="mt-2 text-2xl font-bold tracking-tight"
            style={{ color: theme.primary }}
          >
            Made with passion.
          </h2>

          <p
            className="mt-4 text-sm leading-7"
            style={{ color: `${theme.primary}70` }}
          >
            Every dish begins with quality ingredients, thoughtful
            preparation and a love for great food. We create a space
            where delicious food and good conversations come together.
          </p>
        </section>

        {/* MENU */}
        <section className="px-6 pb-9">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ color: `${theme.primary}65` }}
          >
            Our Menu
          </p>

          <div className="mt-2 flex items-end justify-between">
            <h2
              className="text-2xl font-bold"
              style={{ color: theme.primary }}
            >
              Signature Menu
            </h2>

            <span
              className="text-[9px] font-bold"
              style={{ color: theme.accent }}
            >
              {menuItems.length} ITEMS
            </span>
          </div>

          {/* Categories */}
          <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => {
              const active = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap rounded-full border px-3 py-2 text-[9px] font-bold transition-all"
                  style={{
                    backgroundColor: active
                      ? theme.primary
                      : theme.background,
                    color: active
                      ? theme.background
                      : theme.primary,
                    borderColor: active
                      ? theme.primary
                      : `${theme.primary}18`,
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Menu items */}
          <div className="mt-4 space-y-3">
            {filteredMenu.map((item, index) => (
              <article
                key={item.name}
                className="rounded-[24px] border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: theme.background,
                  borderColor: `${theme.accent}25`,
                }}
              >
                <div className="flex gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl"
                    style={{
                      backgroundColor: `${theme.accent}15`,
                    }}
                  >
                    {item.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p
                          className="text-[8px] font-bold uppercase tracking-[0.18em]"
                          style={{ color: `${theme.primary}45` }}
                        >
                          {item.category}
                        </p>

                        <h3
                          className="mt-1 text-sm font-bold"
                          style={{ color: theme.primary }}
                        >
                          {item.name}
                        </h3>
                      </div>

                      <p
                        className="shrink-0 text-sm font-bold"
                        style={{ color: theme.accent }}
                      >
                        {item.price}
                      </p>
                    </div>

                    <p
                      className="mt-2 text-[10px] leading-5"
                      style={{ color: `${theme.primary}60` }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CHEF RECOMMENDATION */}
        <section
          className="px-6 py-9"
          style={{ backgroundColor: `${theme.primary}06` }}
        >
          <p
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ color: theme.accent }}
          >
            Chef's Recommendation
          </p>

          <div
            className="mt-4 overflow-hidden rounded-[28px] text-white"
            style={{ backgroundColor: theme.primary }}
          >
            <div className="relative h-48 overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent}55)`,
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl">🍽️</span>
              </div>

              <div
                className="absolute left-4 top-4 rounded-full px-3 py-1.5 text-[8px] font-bold"
                style={{
                  backgroundColor: theme.accent,
                  color: theme.primary,
                }}
              >
                CHEF'S CHOICE
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold">
                Chef's Special Platter
              </h3>

              <p className="mt-2 text-xs leading-6 text-white/50">
                A carefully selected combination of our most loved
                flavors, created for a complete dining experience.
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span
                  className="text-xl font-bold"
                  style={{ color: theme.accent }}
                >
                  ₹499
                </span>

                <a
                  href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
                    "Hi, I would like to know more about the Chef's Special Platter."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl px-4 py-3 text-[10px] font-bold"
                  style={{
                    backgroundColor: theme.background,
                    color: theme.primary,
                  }}
                >
                  Enquire
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="px-6 py-9">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ color: `${theme.primary}65` }}
          >
            The Experience
          </p>

          <h2
            className="mt-2 text-2xl font-bold"
            style={{ color: theme.primary }}
          >
            More than a meal.
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {[
              ["✦", "Fresh Ingredients"],
              ["♡", "Warm Hospitality"],
              ["◉", "Cozy Ambience"],
              ["★", "Made With Care"],
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
                  className="text-xl"
                  style={{ color: theme.accent }}
                >
                  {icon}
                </span>

                <p
                  className="mt-3 text-[10px] font-bold"
                  style={{ color: theme.primary }}
                >
                  {title}
                </p>
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
            Guest Reviews
          </p>

          <h2
            className="mt-2 text-2xl font-bold"
            style={{ color: theme.primary }}
          >
            Loved by our guests.
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

        {/* HOURS + LOCATION */}
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
            Come dine with us.
          </h2>

          <div
            className="mt-5 rounded-[28px] border p-5"
            style={{
              backgroundColor: theme.background,
              borderColor: `${theme.accent}25`,
            }}
          >
            <p
              className="text-sm font-bold"
              style={{ color: theme.primary }}
            >
              🕐 Opening Hours
            </p>

            <div className="mt-4 space-y-3">
              {[
                ["Monday - Friday", "11:00 AM - 10:00 PM"],
                ["Saturday", "11:00 AM - 11:00 PM"],
                ["Sunday", "11:00 AM - 10:00 PM"],
              ].map(([day, time]) => (
                <div
                  key={day}
                  className="flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0"
                  style={{ borderColor: `${theme.primary}10` }}
                >
                  <span
                    className="text-[10px]"
                    style={{ color: `${theme.primary}60` }}
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

            <div
              className="mt-5 border-t pt-5"
              style={{ borderColor: `${theme.primary}10` }}
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
            Your Table Awaits
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight">
            Good food.
            <br />
            Great moments.
          </h2>

          <p className="mx-auto mt-4 max-w-[280px] text-xs leading-6 text-white/45">
            Get in touch with us for reservations, celebrations and
            special occasions.
          </p>

          <a
            href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
              "Hi, I would like to make a reservation."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl px-6 py-3.5 text-xs font-bold"
            style={{
              backgroundColor: theme.background,
              color: theme.primary,
            }}
          >
            Reserve a Table
          </a>
        </section>

        {/* FOOTER */}
        <footer
          className="px-6 py-7 text-center"
          style={{ backgroundColor: theme.background }}
        >
          <div
            className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl text-lg"
            style={{
              backgroundColor: theme.primary,
              color: theme.accent,
            }}
          >
            ✦
          </div>

          <p
            className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: theme.primary }}
          >
            {profile.company}
          </p>

          <p
            className="mt-1 text-[10px]"
            style={{ color: `${theme.primary}50` }}
          >
            Taste • Gather • Enjoy
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
            💬 Reserve
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