"use client";

import { useMemo, useState } from "react";
import { profile } from "@/components/data/profile";
import { template8Themes } from "@/components/data/themes";

const destinations = [
  {
    category: "Beach",
    title: "Goa Getaway",
    location: "Goa",
    icon: "🏝️",
    tag: "POPULAR",
  },
  {
    category: "Hill",
    title: "Ooty Retreat",
    location: "Tamil Nadu",
    icon: "⛰️",
    tag: "FAVORITE",
  },
  {
    category: "Nature",
    title: "Kerala Escape",
    location: "Kerala",
    icon: "🌴",
    tag: "TRENDING",
  },
  {
    category: "International",
    title: "Dubai Experience",
    location: "Dubai",
    icon: "🌆",
    tag: "PREMIUM",
  },
  {
    category: "Nature",
    title: "Munnar Escape",
    location: "Kerala",
    icon: "🌿",
    tag: "NEW",
  },
  {
    category: "Beach",
    title: "Maldives Escape",
    location: "Maldives",
    icon: "🌊",
    tag: "LUXURY",
  },
];

const categories = [
  "All",
  "Beach",
  "Hill",
  "Nature",
  "International",
];

const experiences = [
  {
    number: "01",
    title: "Weekend Escapes",
    description:
      "Short, refreshing trips designed for a quick break from everyday life.",
    icon: "🧳",
  },
  {
    number: "02",
    title: "Family Holidays",
    description:
      "Comfortable family-friendly experiences with carefully planned itineraries.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    number: "03",
    title: "Luxury Journeys",
    description:
      "Premium stays, experiences and personalised travel planning.",
    icon: "✨",
  },
];

const reviews = [
  {
    name: "Priya S",
    text: "Everything was well planned and the trip was absolutely memorable.",
  },
  {
    name: "Karthik R",
    text: "Good service, smooth arrangements and excellent support throughout the trip.",
  },
  {
    name: "Anitha K",
    text: "The itinerary was perfect for our family. We really enjoyed the experience.",
  },
];

const themeEntries = Object.entries(template8Themes) as [
  keyof typeof template8Themes,
  (typeof template8Themes)[keyof typeof template8Themes],
][];

export default function Template8() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedTheme, setSelectedTheme] =
    useState<keyof typeof template8Themes>("deepOceanCoral");

  const theme = template8Themes[selectedTheme];

  const filteredDestinations = useMemo(() => {
    if (selectedCategory === "All") return destinations;

    return destinations.filter(
      (destination) =>
        destination.category === selectedCategory
    );
  }, [selectedCategory]);

  const whatsappNumber = profile.whatsapp?.replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    `Hi ${profile.company || profile.name}, I would like to know more about your travel packages and holiday plans.`
  );

  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : "#";

  const phoneLink = profile.phone
    ? `tel:${profile.phone}`
    : "#";

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
                  selectedTheme === key
                    ? item.accent
                    : "transparent",
              }}
            >
              <span className="block">{item.name}</span>

              <span
                className="mx-auto mt-2 block h-1.5 w-10 rounded-full"
                style={{
                  backgroundColor: item.accent,
                }}
              />
            </button>
          ))}
        </div>
      </section>

      {/* HERO */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundColor: theme.primary,
        }}
      >
        <div
          className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{
            backgroundColor: `${theme.accent}25`,
          }}
        />

        <div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full blur-3xl"
          style={{
            backgroundColor: `${theme.accent}15`,
          }}
        />

        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-8 sm:px-8 lg:px-10">
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-[9px] font-bold uppercase tracking-[0.35em]"
                style={{
                  color: theme.accent,
                }}
              >
                Travel • Explore • Discover
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
              Plan Trip
            </a>
          </div>

          {/* HERO CONTENT */}
          <div className="grid items-center gap-12 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{
                  color: theme.accent,
                }}
              >
                Your Next Adventure
              </p>

              <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Go
                <br />
                beyond
                <br />
                <span
                  style={{
                    color: theme.accent,
                  }}
                >
                  ordinary.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/55">
                Discover beautiful destinations, memorable experiences and
                carefully planned holidays made around the way you love to
                travel.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#destinations"
                  className="rounded-full px-7 py-4 text-sm font-black shadow-xl"
                  style={{
                    backgroundColor: theme.accent,
                    color: theme.primary,
                  }}
                >
                  Explore Destinations
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border px-7 py-4 text-sm font-bold"
                  style={{
                    borderColor: `${theme.background}20`,
                  }}
                >
                  Plan With Us
                </a>
              </div>

              <div className="mt-10 flex items-center gap-5">
                <div className="flex -space-x-2">
                  {["✈", "♡", "✦"].map((icon, index) => (
                    <span
                      key={index}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs"
                      style={{
                        borderColor: theme.primary,
                        backgroundColor:
                          index === 1
                            ? theme.background
                            : theme.accent,
                        color: theme.primary,
                      }}
                    >
                      {icon}
                    </span>
                  ))}
                </div>

                <div>
                  <p className="text-sm font-bold">
                    Loved by 1000+ travellers
                  </p>

                  <p className="mt-0.5 text-[10px] uppercase tracking-widest text-white/35">
                    Travel • Memories • Experiences
                  </p>
                </div>
              </div>
            </div>

            {/* TRAVEL VISUAL */}
            <div className="relative mx-auto w-full max-w-md">
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border shadow-2xl"
                style={{
                  borderColor: `${theme.background}18`,
                  background: `linear-gradient(145deg, ${theme.accent}, ${theme.primary})`,
                }}
              >
                <div
                  className="absolute inset-5 rounded-[2rem] border"
                  style={{
                    borderColor: `${theme.background}25`,
                  }}
                />

                {/* SUN */}
                <div
                  className="absolute right-12 top-12 h-24 w-24 rounded-full"
                  style={{
                    backgroundColor: `${theme.background}25`,
                  }}
                />

                {/* ABSTRACT MOUNTAINS */}
                <div
                  className="absolute bottom-0 left-0 h-56 w-full"
                  style={{
                    background: `linear-gradient(135deg, transparent 35%, ${theme.background}18 36%, ${theme.background}18 50%, transparent 51%)`,
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl drop-shadow-2xl">
                      ✈️
                    </div>

                    <p
                      className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em]"
                      style={{
                        color: `${theme.background}CC`,
                      }}
                    >
                      Your Journey Starts Here
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
                    Explore
                  </p>

                  <p className="mt-1 text-sm font-black">
                    New Destinations
                  </p>
                </div>

                <div
                  className="absolute bottom-5 right-5 rounded-2xl px-4 py-3 backdrop-blur"
                  style={{
                    backgroundColor: `${theme.primary}E8`,
                  }}
                >
                  <p
                    className="text-[9px] font-bold uppercase tracking-widest"
                    style={{
                      color: theme.accent,
                    }}
                  >
                    Experience
                  </p>

                  <p className="mt-1 text-sm font-bold">
                    Memories That Stay
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div
            className="mt-16 grid grid-cols-3 border-t pt-7"
            style={{
              borderColor: `${theme.background}18`,
            }}
          >
            <div>
              <p className="text-2xl font-black">
                50+
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-widest text-white/35">
                Destinations
              </p>
            </div>

            <div
              className="border-l pl-5"
              style={{
                borderColor: `${theme.background}18`,
              }}
            >
              <p className="text-2xl font-black">
                1000+
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-widest text-white/35">
                Travellers
              </p>
            </div>

            <div
              className="border-l pl-5"
              style={{
                borderColor: `${theme.background}18`,
              }}
            >
              <p className="text-2xl font-black">
                4.9★
              </p>

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
          style={{
            borderColor: `${theme.primary}12`,
          }}
        >
          <a
            href={phoneLink}
            className="rounded-[1.5rem] px-3 py-4 text-center"
            style={{
              color: theme.primary,
            }}
          >
            <span className="text-xl">
              ☎
            </span>

            <p className="mt-1 text-[11px] font-bold">
              Call
            </p>
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
            <span className="text-xl">
              💬
            </span>

            <p className="mt-1 text-[11px] font-bold">
              WhatsApp
            </p>
          </a>

          <a
            href={profile.mapUrl || "#"}
            target="_blank"
            rel="noreferrer"
            className="rounded-[1.5rem] px-3 py-4 text-center"
            style={{
              color: theme.primary,
            }}
          >
            <span className="text-xl">
              📍
            </span>

            <p className="mt-1 text-[11px] font-bold">
              Location
            </p>
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p
              className="text-xs font-black uppercase tracking-[0.3em]"
              style={{
                color: theme.accent,
              }}
            >
              Travel Your Way
            </p>

            <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              See more.
              <br />
              Feel more.
              <br />
              <span
                className="font-serif italic"
                style={{
                  color: theme.accent,
                }}
              >
                Live more.
              </span>
            </h3>
          </div>

          <div>
            <p
              className="text-base leading-8"
              style={{
                color: `${theme.primary}90`,
              }}
            >
              Travel is more than reaching a destination. It is about the
              people you meet, the places you discover and the memories you
              bring home.
            </p>

            <p
              className="mt-5 text-base leading-8"
              style={{
                color: `${theme.primary}90`,
              }}
            >
              We help you plan comfortable, exciting and memorable journeys
              with support from the first enquiry to the end of your trip.
            </p>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section
        id="destinations"
        className="text-white"
        style={{
          backgroundColor: theme.primary,
        }}
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="text-center">
            <p
              className="text-xs font-black uppercase tracking-[0.3em]"
              style={{
                color: theme.accent,
              }}
            >
              Popular Escapes
            </p>

            <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Where will you go next?
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/45">
              Explore destinations and choose the experience that feels right
              for your next journey.
            </p>
          </div>

          {/* FILTER */}
          <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => {
              const active =
                selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(category)
                  }
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

          {/* DESTINATION GRID */}
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map(
              (destination, index) => (
                <article
                  key={destination.title}
                  className="group overflow-hidden rounded-[2rem] border transition duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: `${theme.background}15`,
                    backgroundColor: `${theme.background}08`,
                  }}
                >
                  <div
                    className="relative flex h-56 items-center justify-center overflow-hidden"
                    style={{
                      background: `linear-gradient(145deg, ${theme.accent}30, ${theme.background}08)`,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `
                          linear-gradient(${theme.background}30 1px, transparent 1px),
                          linear-gradient(90deg, ${theme.background}30 1px, transparent 1px)
                        `,
                        backgroundSize: "32px 32px",
                      }}
                    />

                    <div className="relative text-7xl transition duration-500 group-hover:scale-110">
                      {destination.icon}
                    </div>

                    <span
                      className="absolute left-4 top-4 rounded-full px-3 py-1.5 text-[8px] font-black"
                      style={{
                        backgroundColor: theme.accent,
                        color: theme.primary,
                      }}
                    >
                      {destination.tag}
                    </span>

                    <span className="absolute right-4 top-4 text-[10px] font-bold text-white/30">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-5">
                    <p
                      className="text-[8px] font-bold uppercase tracking-[0.2em]"
                      style={{
                        color: theme.accent,
                      }}
                    >
                      {destination.category}
                    </p>

                    <h4 className="mt-2 text-xl font-black">
                      {destination.title}
                    </h4>

                    <p className="mt-2 text-xs text-white/40">
                      📍 {destination.location}
                    </p>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 flex items-center justify-center rounded-xl px-4 py-3 text-[10px] font-black"
                      style={{
                        backgroundColor: theme.background,
                        color: theme.primary,
                      }}
                    >
                      Enquire About Trip
                    </a>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="text-center">
          <p
            className="text-xs font-black uppercase tracking-[0.3em]"
            style={{
              color: theme.accent,
            }}
          >
            Travel Experiences
          </p>

          <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Travel made around you.
          </h3>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {experiences.map((experience) => (
            <div
              key={experience.number}
              className="rounded-[2rem] border bg-white p-7 transition duration-300 hover:-translate-y-1"
              style={{
                borderColor: `${theme.primary}12`,
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">
                  {experience.icon}
                </span>

                <span
                  className="text-xs font-black"
                  style={{
                    color: `${theme.primary}35`,
                  }}
                >
                  {experience.number}
                </span>
              </div>

              <h4 className="mt-8 text-xl font-black">
                {experience.title}
              </h4>

              <p
                className="mt-3 text-sm leading-7"
                style={{
                  color: `${theme.primary}65`,
                }}
              >
                {experience.description}
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-xs font-black"
                style={{
                  color: theme.accent,
                }}
              >
                Plan This Experience →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE BANNER */}
      <section className="px-5 pb-20 sm:px-8">
        <div
          className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] p-8 sm:p-12"
          style={{
            backgroundColor: theme.accent,
            color: theme.primary,
          }}
        >
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] opacity-50">
                Your Next Escape
              </p>

              <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Pack your bags.
                <br />
                Make memories.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-6 opacity-70">
                Tell us where you want to go, and we'll help you plan the
                journey.
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
                Plan My Trip →
              </a>
            </div>

            <div className="text-center">
              <div className="text-8xl">
                🗺️
              </div>

              <p className="mt-3 text-[10px] font-black uppercase tracking-[0.25em] opacity-50">
                Adventure Awaits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRAVEL WITH US */}
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
              style={{
                color: theme.accent,
              }}
            >
              Why Travel With Us
            </p>

            <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              More than a trip.
            </h3>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              [
                "01",
                "Personal Planning",
                "Trips planned around your interests, time and budget.",
              ],
              [
                "02",
                "Reliable Support",
                "Friendly assistance before and during your journey.",
              ],
              [
                "03",
                "Memorable Experiences",
                "We focus on experiences you will remember for years.",
              ],
            ].map(
              ([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-[2rem] border bg-white p-7"
                  style={{
                    borderColor: `${theme.primary}12`,
                  }}
                >
                  <p
                    className="text-xs font-black"
                    style={{
                      color: theme.accent,
                    }}
                  >
                    {number}
                  </p>

                  <h4 className="mt-5 text-xl font-black">
                    {title}
                  </h4>

                  <p
                    className="mt-3 text-sm leading-6"
                    style={{
                      color: `${theme.primary}65`,
                    }}
                  >
                    {description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="text-center">
          <p
            className="text-xs font-black uppercase tracking-[0.3em]"
            style={{
              color: theme.accent,
            }}
          >
            Traveller Stories
          </p>

          <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Memories our travellers made.
          </h3>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[2rem] border bg-white p-7 shadow-sm"
              style={{
                borderColor: `${theme.primary}12`,
              }}
            >
              <div
                style={{
                  color: theme.accent,
                }}
              >
                ★★★★★
              </div>

              <p
                className="mt-5 text-sm leading-7"
                style={{
                  color: `${theme.primary}80`,
                }}
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
                  <p className="text-sm font-black">
                    {review.name}
                  </p>

                  <p
                    className="text-[9px] uppercase tracking-widest"
                    style={{
                      color: `${theme.primary}45`,
                    }}
                  >
                    Happy Traveller
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section
        className="text-white"
        style={{
          backgroundColor: theme.primary,
        }}
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div
              className="rounded-[2rem] border p-7 sm:p-9"
              style={{
                borderColor: `${theme.background}15`,
                backgroundColor: `${theme.background}08`,
              }}
            >
              <p
                className="text-xs font-black uppercase tracking-[0.25em]"
                style={{
                  color: theme.accent,
                }}
              >
                Visit Our Office
              </p>

              <h3 className="mt-3 text-3xl font-black">
                Let's plan your next journey.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/45">
                Come meet us and tell us about your dream destination,
                travel dates and preferences.
              </p>

              <a
                href={profile.mapUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex rounded-full px-6 py-3.5 text-xs font-black"
                style={{
                  backgroundColor: theme.accent,
                  color: theme.primary,
                }}
              >
                Get Directions →
              </a>
            </div>

            <div
              className="rounded-[2rem] p-7 sm:p-9"
              style={{
                backgroundColor: theme.background,
                color: theme.primary,
              }}
            >
              <p
                className="text-xs font-black uppercase tracking-[0.25em]"
                style={{
                  color: theme.accent,
                }}
              >
                Contact
              </p>

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
                    {profile.address ||
                      "Your travel office address"}
                  </p>
                </div>
              </div>

              <div
                className="mt-7 border-t pt-6"
                style={{
                  borderColor: `${theme.primary}12`,
                }}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    color: `${theme.primary}50`,
                  }}
                >
                  Travel Enquiries
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
          Start Your Journey
        </p>

        <h3 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
          The world is waiting.
          <br />
          Where will you go?
        </h3>

        <p className="mx-auto mt-5 max-w-md text-sm leading-6 opacity-65">
          Message us and let's turn your next holiday into a memorable
          experience.
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
            style={{
              borderColor: `${theme.primary}30`,
            }}
          >
            Call Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-5 py-10 text-white sm:px-8"
        style={{
          backgroundColor: theme.primary,
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-black">
                {profile.company || profile.name}
              </p>

              <p className="mt-1 text-xs text-white/35">
                Travel • Explore • Discover
              </p>
            </div>

            <div className="flex gap-3">
              {profile.social?.instagram && (
                <a
                  href={profile.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border text-[10px] font-bold"
                  style={{
                    borderColor: `${theme.background}15`,
                  }}
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
                  style={{
                    borderColor: `${theme.background}15`,
                  }}
                >
                  FB
                </a>
              )}
            </div>
          </div>

          <div
            className="mt-8 border-t pt-6 text-center text-[9px] uppercase tracking-widest text-white/20"
            style={{
              borderColor: `${theme.background}15`,
            }}
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
          ✈️ WhatsApp
        </a>
      </div>
    </main>
  );
}