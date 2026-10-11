"use client";

import { useMemo, useState } from "react";
import { profile } from "@/components/data/profile";
import { template6Themes } from "@/components/data/themes";

const products = [
  {
    category: "Sarees",
    name: "Elegant Silk Saree",
    price: "₹2,499",
    tag: "NEW",
    icon: "🥻",
  },
  {
    category: "Women",
    name: "Premium Chudidar",
    price: "₹1,499",
    tag: "POPULAR",
    icon: "👗",
  },
  {
    category: "Men",
    name: "Classic Formal Shirt",
    price: "₹999",
    tag: "BEST SELLER",
    icon: "👔",
  },
  {
    category: "Kids",
    name: "Festive Kids Wear",
    price: "₹899",
    tag: "NEW",
    icon: "🧒",
  },
  {
    category: "Women",
    name: "Designer Kurti",
    price: "₹1,299",
    tag: "TRENDING",
    icon: "✨",
  },
  {
    category: "Men",
    name: "Premium Cotton Shirt",
    price: "₹1,199",
    tag: "FAVORITE",
    icon: "👕",
  },
];

const categories = ["All", "Sarees", "Women", "Men", "Kids"];

const reviews = [
  {
    name: "Priya S",
    text: "Beautiful collection and very good quality. The staff were also very helpful.",
  },
  {
    name: "Karthik R",
    text: "Good variety of clothes with reasonable prices. Highly recommended.",
  },
  {
    name: "Anitha K",
    text: "Lovely designs and excellent service. I found exactly what I wanted.",
  },
];

const themeEntries = Object.entries(template6Themes) as [
  keyof typeof template6Themes,
  (typeof template6Themes)[keyof typeof template6Themes],
][];

export default function Template6() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedTheme, setSelectedTheme] =
    useState<keyof typeof template6Themes>("burgundyLuxe");

  const theme = template6Themes[selectedTheme];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;

    return products.filter(
      (product) => product.category === selectedCategory
    );
  }, [selectedCategory]);

  const whatsappNumber = profile.whatsapp?.replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    `Hi ${profile.company || profile.name}, I would like to know more about your clothing collection.`
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
        className="relative overflow-hidden text-white"
        style={{ backgroundColor: theme.primary }}
      >
        <div
          className="absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: `${theme.accent}25` }}
        />

        <div
          className="absolute -left-32 bottom-0 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: `${theme.accent}15` }}
        />

        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-7 sm:px-8 lg:px-10">
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-[9px] font-bold uppercase tracking-[0.35em]"
                style={{ color: theme.accent }}
              >
                Fashion • Style • You
              </p>

              <h1 className="mt-1 text-lg font-black">
                {profile.company || profile.name}
              </h1>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border px-4 py-2.5 text-[10px] font-bold"
              style={{
                borderColor: `${theme.background}20`,
                backgroundColor: `${theme.background}08`,
              }}
            >
              Shop Now
            </a>
          </div>

          {/* HERO CONTENT */}
          <div className="grid items-center gap-12 pt-16 lg:grid-cols-2 lg:pt-24">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: theme.accent }}
              >
                New Collection
              </p>

              <h2 className="mt-5 text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Wear
                <br />
                <span style={{ color: theme.accent }}>your style.</span>
                <br />
                Every day.
              </h2>

              <p className="mt-7 max-w-lg text-base leading-7 text-white/55">
                Discover carefully selected fashion for every occasion —
                elegant, comfortable and made to feel like you.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#collection"
                  className="rounded-full px-7 py-4 text-sm font-black shadow-xl"
                  style={{
                    backgroundColor: theme.accent,
                    color: theme.primary,
                  }}
                >
                  Explore Collection
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border px-7 py-4 text-sm font-bold"
                  style={{ borderColor: `${theme.background}20` }}
                >
                  WhatsApp Us
                </a>
              </div>

              <div className="mt-10 flex items-center gap-5">
                <div className="flex -space-x-2">
                  {["✦", "♡", "✧"].map((icon, index) => (
                    <span
                      key={index}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs"
                      style={{
                        borderColor: theme.primary,
                        backgroundColor:
                          index === 1 ? theme.background : theme.accent,
                        color: theme.primary,
                      }}
                    >
                      {icon}
                    </span>
                  ))}
                </div>

                <div>
                  <p className="text-sm font-bold">Loved by 1000+ customers</p>

                  <p className="mt-0.5 text-[10px] uppercase tracking-widest text-white/35">
                    Quality • Style • Service
                  </p>
                </div>
              </div>
            </div>

            {/* FASHION VISUAL */}
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
                    <div className="text-7xl">👗</div>

                    <p
                      className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em]"
                      style={{ color: `${theme.background}CC` }}
                    >
                      New Collection
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
                    Season
                  </p>

                  <p className="mt-1 text-sm font-black">
                    New Arrivals
                  </p>
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
                    Special
                  </p>

                  <p className="mt-1 text-sm font-bold">
                    New Styles In Store
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
              <p className="text-2xl font-black">1000+</p>

              <p className="mt-1 text-[9px] uppercase tracking-widest text-white/35">
                Customers
              </p>
            </div>

            <div
              className="border-l pl-5"
              style={{ borderColor: `${theme.background}18` }}
            >
              <p className="text-2xl font-black">500+</p>

              <p className="mt-1 text-[9px] uppercase tracking-widest text-white/35">
                Styles
              </p>
            </div>

            <div
              className="border-l pl-5"
              style={{ borderColor: `${theme.background}18` }}
            >
              <p className="text-2xl font-black">4.9★</p>

              <p className="mt-1 text-[9px] uppercase tracking-widest text-white/35">
                Rating
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
            className="rounded-[1.5rem] px-3 py-4 text-center"
            style={{ color: theme.primary }}
          >
            <span className="text-xl">☎</span>
            <p className="mt-1 text-[11px] font-bold">Call</p>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-[1.5rem] px-3 py-4 text-center"
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
            className="rounded-[1.5rem] px-3 py-4 text-center"
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
              Our Story
            </p>

            <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Fashion that
              <br />
              feels like
              <br />
              <span
                className="font-serif italic"
                style={{ color: theme.accent }}
              >
                you.
              </span>
            </h3>
          </div>

          <div>
            <p
              className="text-base leading-8"
              style={{ color: `${theme.primary}90` }}
            >
              We bring together timeless designs, modern trends and everyday
              comfort to create a collection for the whole family.
            </p>

            <p
              className="mt-5 text-base leading-8"
              style={{ color: `${theme.primary}90` }}
            >
              From festive occasions to everyday essentials, discover pieces
              that fit your personality and your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section
        id="collection"
        className="text-white"
        style={{ backgroundColor: theme.primary }}
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="text-center">
            <p
              className="text-xs font-black uppercase tracking-[0.3em]"
              style={{ color: theme.accent }}
            >
              Our Collection
            </p>

            <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Find your next favorite
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/45">
              Explore our latest collection for women, men, kids and special
              occasions.
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

          {/* PRODUCTS */}
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <article
                key={product.name}
                className="overflow-hidden rounded-[2rem] border transition hover:-translate-y-1"
                style={{
                  borderColor: `${theme.background}15`,
                  backgroundColor: `${theme.background}08`,
                }}
              >
                {/* PRODUCT VISUAL */}
                <div
                  className="relative flex h-52 items-center justify-center"
                  style={{
                    background: `linear-gradient(145deg, ${theme.accent}28, ${theme.background}08)`,
                  }}
                >
                  <div className="text-8xl drop-shadow-2xl">
                    {product.icon}
                  </div>

                  <span
                    className="absolute left-4 top-4 rounded-full px-3 py-1.5 text-[8px] font-black"
                    style={{
                      backgroundColor: theme.accent,
                      color: theme.primary,
                    }}
                  >
                    {product.tag}
                  </span>

                  <span className="absolute right-4 top-4 text-[10px] font-bold text-white/30">
                    0{index + 1}
                  </span>
                </div>

                {/* DETAILS */}
                <div className="p-5">
                  <p
                    className="text-[8px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: theme.accent }}
                  >
                    {product.category}
                  </p>

                  <h4 className="mt-2 text-lg font-black">
                    {product.name}
                  </h4>

                  <p
                    className="mt-3 text-xl font-black"
                    style={{ color: theme.accent }}
                  >
                    {product.price}
                  </p>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hi, I'm interested in ${product.name} (${product.price}). Please share more details.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 flex items-center justify-center rounded-xl px-4 py-3 text-[10px] font-black"
                    style={{
                      backgroundColor: theme.background,
                      color: theme.primary,
                    }}
                  >
                    Enquire About Product
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <div
          className="overflow-hidden rounded-[2.5rem] p-8 sm:p-12"
          style={{
            backgroundColor: theme.accent,
            color: theme.primary,
          }}
        >
          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] opacity-50">
                Special Collection
              </p>

              <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Dress beautifully.
                <br />
                Feel confident.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-6 opacity-70">
                Visit our store and discover new arrivals, seasonal styles and
                special collections.
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
                Ask About New Arrivals →
              </a>
            </div>

            <div className="text-center">
              <div className="text-8xl">🛍️</div>

              <p className="mt-3 text-[10px] font-black uppercase tracking-[0.25em] opacity-50">
                New Styles Every Season
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section
        className="border-y"
        style={{
          borderColor: `${theme.primary}12`,
          backgroundColor: `${theme.primary}05`,
        }}
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="text-center">
            <p
              className="text-xs font-black uppercase tracking-[0.3em]"
              style={{ color: theme.accent }}
            >
              Why Shop With Us
            </p>

            <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              More than just clothes.
            </h3>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              [
                "01",
                "Quality First",
                "Carefully selected fabrics and products.",
              ],
              [
                "02",
                "Latest Styles",
                "Fresh collections inspired by modern fashion.",
              ],
              [
                "03",
                "Friendly Service",
                "Personal attention from choosing to purchase.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-[2rem] border bg-white p-7"
                style={{ borderColor: `${theme.primary}12` }}
              >
                <p
                  className="text-xs font-black"
                  style={{ color: theme.accent }}
                >
                  {number}
                </p>

                <h4
                  className="mt-5 text-xl font-black"
                  style={{ color: theme.primary }}
                >
                  {title}
                </h4>

                <p
                  className="mt-3 text-sm leading-6"
                  style={{ color: `${theme.primary}65` }}
                >
                  {description}
                </p>
              </div>
            ))}
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
            Customer Love
          </p>

          <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            What our customers say
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
                style={{ color: `${theme.primary}80` }}
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
                    style={{ color: `${theme.primary}45` }}
                  >
                    Happy Customer
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
                Store Hours
              </p>

              <h3 className="mt-3 text-3xl font-black">
                Come visit us.
              </h3>

              <div className="mt-8 space-y-4">
                {[
                  ["Monday — Saturday", "9:30 AM — 9:00 PM"],
                  ["Sunday", "10:00 AM — 8:00 PM"],
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
                Visit Our Store
              </p>

              <h3 className="mt-3 text-3xl font-black">
                Your next favorite outfit awaits.
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
                    {profile.address || "Your clothing store address"}
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
                  style={{ color: `${theme.primary}50` }}
                >
                  Store Enquiries
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
          Visit Our Store
        </p>

        <h3 className="mx-auto mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-6xl">
          Your style.
          <br />
          Your choice.
        </h3>

        <p className="mx-auto mt-5 max-w-md text-sm leading-6 opacity-65">
          Explore our collection or message us to know more about available
          styles and sizes.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-7 py-4 text-sm font-black"
            style={{
              backgroundColor: theme.primary,
              color: theme.background,
            }}
          >
            WhatsApp Us
          </a>

          <a
            href={phoneLink}
            className="rounded-full border px-7 py-4 text-sm font-black"
            style={{ borderColor: `${theme.primary}30` }}
          >
            Call Store
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
                Fashion • Style • Quality
              </p>
            </div>

            <div className="flex gap-3">
              {profile.social?.instagram && (
                <a
                  href={profile.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border text-[10px] font-bold"
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border text-[10px] font-bold"
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

      {/* MOBILE STICKY BAR */}
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
          🛍️ WhatsApp
        </a>
      </div>
    </main>
  );
}