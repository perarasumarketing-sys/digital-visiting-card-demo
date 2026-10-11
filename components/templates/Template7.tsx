"use client";

import { useMemo, useState } from "react";
import { profile } from "@/components/data/profile";
import { template7Themes } from "@/components/data/themes";

const projects = [
  {
    category: "Residential",
    title: "Modern Villa",
    location: "Salem",
    icon: "🏡",
    tag: "FEATURED",
  },
  {
    category: "Interior",
    title: "Luxury Living Room",
    location: "Coimbatore",
    icon: "🛋️",
    tag: "INTERIOR",
  },
  {
    category: "Commercial",
    title: "Corporate Office",
    location: "Chennai",
    icon: "🏢",
    tag: "COMMERCIAL",
  },
  {
    category: "Residential",
    title: "Contemporary Home",
    location: "Erode",
    icon: "🏠",
    tag: "NEW",
  },
  {
    category: "Interior",
    title: "Premium Bedroom",
    location: "Salem",
    icon: "🛏️",
    tag: "INTERIOR",
  },
  {
    category: "Commercial",
    title: "Retail Showroom",
    location: "Madurai",
    icon: "🏬",
    tag: "PROJECT",
  },
];

const categories = [
  "All",
  "Residential",
  "Interior",
  "Commercial",
];

const services = [
  {
    number: "01",
    title: "Architecture",
    description:
      "Thoughtful architectural planning designed around your space, lifestyle and vision.",
    icon: "⌂",
  },
  {
    number: "02",
    title: "Interior Design",
    description:
      "Elegant interiors combining functionality, comfort and refined visual details.",
    icon: "✦",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Professional execution with attention to quality, materials and finishing.",
    icon: "▦",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your requirements, budget and design preferences.",
  },
  {
    number: "02",
    title: "Design",
    text: "Our team develops concepts and details that bring your vision to life.",
  },
  {
    number: "03",
    title: "Build",
    text: "We coordinate execution and focus on quality throughout the project.",
  },
];

const reviews = [
  {
    name: "Ramesh K",
    text: "Very professional team. The final interior was beautiful and exactly what we expected.",
  },
  {
    name: "Priya S",
    text: "Excellent design ideas and good attention to every small detail.",
  },
  {
    name: "Arun M",
    text: "The complete process was smooth and the quality of work was impressive.",
  },
];

const themeEntries = Object.entries(template7Themes) as [
  keyof typeof template7Themes,
  (typeof template7Themes)[keyof typeof template7Themes],
][];

export default function Template7() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedTheme, setSelectedTheme] =
    useState<keyof typeof template7Themes>("graphiteCopper");

  const theme = template7Themes[selectedTheme];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;

    return projects.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory]);

  const whatsappNumber = profile.whatsapp?.replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    `Hi ${profile.company || profile.name}, I would like to know more about your construction and interior design services.`
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
                  selectedTheme === key
                    ? item.accent
                    : "transparent",
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
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${theme.accent}25` }}
        />

        <div
          className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: `${theme.accent}15` }}
        />

        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-8 sm:px-8 lg:px-10">
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-[9px] font-bold uppercase tracking-[0.35em]"
                style={{ color: theme.accent }}
              >
                Architecture • Interior • Build
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
              Start Project
            </a>
          </div>

          {/* HERO CONTENT */}
          <div className="grid items-center gap-12 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: theme.accent }}
              >
                Build Something Remarkable
              </p>

              <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Spaces
                <br />
                that
                <br />
                <span style={{ color: theme.accent }}>
                  inspire.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/55">
                From architectural concepts to beautiful interiors and
                complete construction, we create spaces with purpose,
                character and lasting quality.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full px-7 py-4 text-sm font-black shadow-xl"
                  style={{
                    backgroundColor: theme.accent,
                    color: theme.primary,
                  }}
                >
                  View Our Work
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
                  Get a Quote
                </a>
              </div>
            </div>

            {/* HERO VISUAL */}
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

                {/* Architectural Grid */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(${theme.background}30 1px, transparent 1px),
                      linear-gradient(90deg, ${theme.background}30 1px, transparent 1px)
                    `,
                    backgroundSize: "38px 38px",
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="relative h-64 w-52 border-2"
                    style={{
                      borderColor: `${theme.background}60`,
                    }}
                  >
                    <div
                      className="absolute left-1/2 top-1/2 h-40 w-32 -translate-x-1/2 -translate-y-1/2 border"
                      style={{
                        borderColor: `${theme.background}45`,
                      }}
                    />

                    <div
                      className="absolute bottom-0 left-1/2 h-24 w-16 -translate-x-1/2 border-x border-t"
                      style={{
                        borderColor: `${theme.background}50`,
                      }}
                    />

                    <div
                      className="absolute left-1/2 top-0 h-full w-px"
                      style={{
                        backgroundColor: `${theme.background}35`,
                      }}
                    />
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
                    Since
                  </p>

                  <p className="mt-1 text-sm font-black">
                    Quality First
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
                    style={{ color: theme.accent }}
                  >
                    Signature
                  </p>

                  <p className="mt-1 text-sm font-bold">
                    Designed To Last
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
              <p className="text-2xl font-black">100+</p>

              <p className="mt-1 text-[9px] uppercase tracking-widest text-white/35">
                Projects
              </p>
            </div>

            <div
              className="border-l pl-5"
              style={{
                borderColor: `${theme.background}18`,
              }}
            >
              <p className="text-2xl font-black">10+</p>

              <p className="mt-1 text-[9px] uppercase tracking-widest text-white/35">
                Years
              </p>
            </div>

            <div
              className="border-l pl-5"
              style={{
                borderColor: `${theme.background}18`,
              }}
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
          style={{
            borderColor: `${theme.primary}12`,
          }}
        >
          <a
            href={phoneLink}
            className="rounded-[1.5rem] px-3 py-4 text-center"
            style={{ color: theme.primary }}
          >
            <span className="text-xl">☎</span>
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
            <span className="text-xl">💬</span>
            <p className="mt-1 text-[11px] font-bold">
              WhatsApp
            </p>
          </a>

          <a
            href={profile.mapUrl || "#"}
            target="_blank"
            rel="noreferrer"
            className="rounded-[1.5rem] px-3 py-4 text-center"
            style={{ color: theme.primary }}
          >
            <span className="text-xl">📍</span>
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
              style={{ color: theme.accent }}
            >
              Our Approach
            </p>

            <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              We create
              <br />
              spaces with
              <br />
              <span
                className="font-serif italic"
                style={{ color: theme.accent }}
              >
                meaning.
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
              Every successful project begins with understanding the people
              who will use the space. We combine thoughtful design,
              practical planning and quality execution.
            </p>

            <p
              className="mt-5 text-base leading-8"
              style={{
                color: `${theme.primary}90`,
              }}
            >
              Whether it is a new home, a complete interior transformation
              or a commercial project, our goal is to create something that
              feels uniquely yours.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="text-white"
        style={{
          backgroundColor: theme.primary,
        }}
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p
                className="text-xs font-black uppercase tracking-[0.3em]"
                style={{ color: theme.accent }}
              >
                Selected Projects
              </p>

              <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Work we're proud of.
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/40">
              A selection of residential, interior and commercial projects
              created for our clients.
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

          {/* PROJECT GRID */}
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[2rem] border transition duration-300 hover:-translate-y-1"
                style={{
                  borderColor: `${theme.background}15`,
                  backgroundColor: `${theme.background}08`,
                }}
              >
                <div
                  className="relative flex h-60 items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(145deg, ${theme.accent}30, ${theme.background}08)`,
                  }}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="absolute left-1/2 top-1/2 h-40 w-32 -translate-x-1/2 -translate-y-1/2 border-2"
                      style={{
                        borderColor: theme.background,
                      }}
                    />

                    <div
                      className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 border"
                      style={{
                        borderColor: theme.background,
                      }}
                    />
                  </div>

                  <div className="relative text-7xl transition duration-500 group-hover:scale-110">
                    {project.icon}
                  </div>

                  <span
                    className="absolute left-4 top-4 rounded-full px-3 py-1.5 text-[8px] font-black"
                    style={{
                      backgroundColor: theme.accent,
                      color: theme.primary,
                    }}
                  >
                    {project.tag}
                  </span>

                  <span className="absolute right-4 top-4 text-[10px] font-bold text-white/30">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-5">
                  <p
                    className="text-[8px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: theme.accent }}
                  >
                    {project.category}
                  </p>

                  <h4 className="mt-2 text-xl font-black">
                    {project.title}
                  </h4>

                  <p className="mt-2 text-xs text-white/40">
                    📍 {project.location}
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
                    Enquire About Project
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="text-center">
          <p
            className="text-xs font-black uppercase tracking-[0.3em]"
            style={{ color: theme.accent }}
          >
            What We Do
          </p>

          <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            From idea to reality.
          </h3>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="rounded-[2rem] border bg-white p-7 transition duration-300 hover:-translate-y-1"
              style={{
                borderColor: `${theme.primary}12`,
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-3xl font-black"
                  style={{ color: theme.accent }}
                >
                  {service.icon}
                </span>

                <span
                  className="text-xs font-black"
                  style={{
                    color: `${theme.primary}35`,
                  }}
                >
                  {service.number}
                </span>
              </div>

              <h4 className="mt-8 text-xl font-black">
                {service.title}
              </h4>

              <p
                className="mt-3 text-sm leading-7"
                style={{
                  color: `${theme.primary}65`,
                }}
              >
                {service.description}
              </p>

              <div
                className="mt-7 h-px w-full"
                style={{
                  backgroundColor: `${theme.primary}10`,
                }}
              />

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-xs font-black"
                style={{ color: theme.accent }}
              >
                Discuss Your Project →
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
                Design Philosophy
              </p>

              <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Beautiful by design.
                <br />
                Built for life.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-6 opacity-70">
                We believe good design should look beautiful, work
                effortlessly and continue to feel right for years to come.
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
                Talk To Our Team →
              </a>
            </div>

            <div className="text-center">
              <div className="text-8xl">🏗️</div>

              <p className="mt-3 text-[10px] font-black uppercase tracking-[0.25em] opacity-50">
                Crafted With Purpose
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="border-y"
        style={{
          borderColor: `${theme.primary}12`,
          backgroundColor: `${theme.primary}05`,
        }}
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p
                className="text-xs font-black uppercase tracking-[0.3em]"
                style={{ color: theme.accent }}
              >
                Our Process
              </p>

              <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Simple.
                <br />
                Clear.
                <br />
                Personal.
              </h3>

              <p
                className="mt-5 max-w-sm text-sm leading-7"
                style={{
                  color: `${theme.primary}65`,
                }}
              >
                A straightforward process designed to keep your project
                moving from the first conversation to the final detail.
              </p>
            </div>

            <div className="space-y-4">
              {process.map((item) => (
                <div
                  key={item.number}
                  className="rounded-[2rem] border bg-white p-6 sm:p-7"
                  style={{
                    borderColor: `${theme.primary}12`,
                  }}
                >
                  <div className="flex gap-5">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-black"
                      style={{
                        backgroundColor: theme.primary,
                        color: theme.background,
                      }}
                    >
                      {item.number}
                    </div>

                    <div>
                      <h4 className="text-lg font-black">
                        {item.title}
                      </h4>

                      <p
                        className="mt-2 text-sm leading-6"
                        style={{
                          color: `${theme.primary}65`,
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
            Client Stories
          </p>

          <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Trusted by our clients.
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
              <div style={{ color: theme.accent }}>
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
                    Client
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
                style={{ color: theme.accent }}
              >
                Visit Our Office
              </p>

              <h3 className="mt-3 text-3xl font-black">
                Let's discuss your vision.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/45">
                Visit us for a conversation about your next home,
                interior or commercial project.
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
                style={{ color: theme.accent }}
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
                      "Your office address"}
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
                  Call Us
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
          Start Your Project
        </p>

        <h3 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
          Your space deserves
          <br />
          thoughtful design.
        </h3>

        <p className="mx-auto mt-5 max-w-md text-sm leading-6 opacity-65">
          Tell us about your project and let's create something
          remarkable together.
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
                Architecture • Interior • Construction
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
          🏗️ WhatsApp
        </a>
      </div>
    </main>
  );
}