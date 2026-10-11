"use client";

import { useMemo, useState } from "react";
import { profile } from "@/components/data/profile";
import { template9Themes } from "@/components/data/themes";

export default function Template9() {
  const [themeKey, setThemeKey] =
    useState<keyof typeof template9Themes>("royalPurple");

  const [category, setCategory] = useState("All");

  const theme = template9Themes[themeKey];

  const programs = useMemo(
    () => [
      {
        category: "School",
        title: "School Academic Coaching",
        description:
          "Focused academic support with structured learning and personal guidance.",
        duration: "6 Months",
        mode: "Online + Offline",
      },
      {
        category: "Competitive",
        title: "Competitive Exam Preparation",
        description:
          "Concept-based preparation, practice tests and regular performance tracking.",
        duration: "12 Months",
        mode: "Online",
      },
      {
        category: "Skill",
        title: "Skill Development Program",
        description:
          "Build communication, computer and career-ready professional skills.",
        duration: "3 Months",
        mode: "Online + Offline",
      },
      {
        category: "College",
        title: "College Career Guidance",
        description:
          "Practical guidance for students planning higher studies and careers.",
        duration: "8 Weeks",
        mode: "Online",
      },
    ],
    []
  );

  const categories = ["All", "School", "Competitive", "Skill", "College"];

  const filteredPrograms =
    category === "All"
      ? programs
      : programs.filter((item) => item.category === category);

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
            {Object.entries(template9Themes).map(([key, item]) => (
              <button
                key={key}
                onClick={() =>
                  setThemeKey(key as keyof typeof template9Themes)
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
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: theme.accent }}
        />

        <div
          className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: theme.accent }}
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p
              className="mb-4 text-sm font-bold uppercase tracking-[0.25em]"
              style={{ color: theme.accent }}
            >
              Learn • Grow • Achieve
            </p>

            <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Build Your Future
              <span
                className="block"
                style={{ color: theme.accent }}
              >
                With The Right Guidance.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Premium academic coaching, skill development and career guidance
              designed to help students move forward with confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${profile.phone}`}
                className="rounded-full px-6 py-3 text-sm font-bold shadow-lg"
                style={{
                  backgroundColor: theme.accent,
                  color: theme.primary,
                }}
              >
                Call Academy
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border px-6 py-3 text-sm font-bold text-white"
                style={{ borderColor: theme.accent }}
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="relative">
            <div
              className="rounded-[2rem] border p-5 shadow-2xl"
              style={{
                borderColor: `${theme.accent}66`,
                backgroundColor: `${theme.background}12`,
              }}
            >
              <div
                className="rounded-[1.5rem] p-7"
                style={{ backgroundColor: theme.background }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: theme.accent }}
                >
                  Student Success
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    ["95%", "Success Focus"],
                    ["10+", "Programs"],
                    ["1:1", "Mentorship"],
                    ["100%", "Guidance"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl p-4"
                      style={{
                        backgroundColor: `${theme.accent}18`,
                      }}
                    >
                      <p
                        className="text-2xl font-black"
                        style={{ color: theme.primary }}
                      >
                        {value}
                      </p>

                      <p className="mt-1 text-xs font-semibold opacity-70">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-4 rounded-2xl p-5"
                  style={{ backgroundColor: theme.primary }}
                >
                  <p className="text-sm font-bold text-white">
                    Your next achievement starts here.
                  </p>

                  <p className="mt-2 text-xs leading-5 text-white/60">
                    Structured learning. Personal guidance. Real progress.
                  </p>
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
            ["📚", "Programs"],
            ["🎯", "Results"],
            ["👨‍🏫", "Mentor"],
            ["📞", "Enquiry"],
          ].map(([icon, label]) => (
            <a
              href="#programs"
              key={label}
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

      {/* PHILOSOPHY */}
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p
            className="text-sm font-bold uppercase tracking-[0.2em]"
            style={{ color: theme.accent }}
          >
            Our Philosophy
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Education That Builds Confidence
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 opacity-70 sm:text-base">
            We believe students need more than lessons. They need the right
            environment, consistent guidance, practical learning and someone
            who understands their goals.
          </p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section
        id="programs"
        className="px-5 py-16 sm:px-8 lg:px-12"
        style={{ backgroundColor: `${theme.primary}08` }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="text-sm font-bold uppercase tracking-[0.2em]"
                style={{ color: theme.accent }}
              >
                Programs
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Choose Your Learning Path
              </h2>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className="whitespace-nowrap rounded-full border px-4 py-2 text-xs font-bold transition"
                  style={{
                    backgroundColor:
                      category === item ? theme.primary : "transparent",
                    color:
                      category === item ? "white" : theme.primary,
                    borderColor: theme.primary,
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPrograms.map((program) => (
              <article
                key={program.title}
                className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: `${theme.accent}55` }}
              >
                <span
                  className="rounded-full px-3 py-1 text-[10px] font-black uppercase"
                  style={{
                    backgroundColor: `${theme.accent}22`,
                    color: theme.primary,
                  }}
                >
                  {program.category}
                </span>

                <h3 className="mt-5 text-lg font-black">
                  {program.title}
                </h3>

                <p className="mt-3 text-sm leading-6 opacity-65">
                  {program.description}
                </p>

                <div className="mt-5 space-y-2 text-xs font-semibold opacity-70">
                  <p>⏱ {program.duration}</p>
                  <p>📍 {program.mode}</p>
                </div>

                <a
                  href={`${whatsappLink}?text=${encodeURIComponent(
                    `Hi, I would like to enquire about ${program.title}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block rounded-xl px-4 py-3 text-center text-xs font-black"
                  style={{
                    backgroundColor: theme.primary,
                    color: "white",
                  }}
                >
                  Enquire Now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="overflow-hidden rounded-[2rem] p-8 sm:p-10"
            style={{
              backgroundColor: theme.primary,
              color: "white",
            }}
          >
            <div className="grid gap-8 md:grid-cols-4">
              {[
                ["500+", "Students Guided"],
                ["10+", "Programs"],
                ["95%", "Goal Focus"],
                ["1:1", "Personal Support"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p
                    className="text-4xl font-black"
                    style={{ color: theme.accent }}
                  >
                    {value}
                  </p>

                  <p className="mt-2 text-sm text-white/65">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MENTOR */}
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div
            className="flex min-h-[320px] items-center justify-center rounded-[2rem] p-8"
            style={{
              backgroundColor: `${theme.accent}20`,
            }}
          >
            <div
              className="flex h-40 w-40 items-center justify-center rounded-full text-6xl"
              style={{
                backgroundColor: theme.primary,
                color: theme.accent,
              }}
            >
              👨‍🏫
            </div>
          </div>

          <div>
            <p
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              Your Mentor
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Guidance That Goes Beyond The Classroom
            </h2>

            <p className="mt-5 text-sm leading-7 opacity-70">
              Personal attention, practical advice and structured learning
              support to help every student understand where they are going
              and how to get there.
            </p>

            <div className="mt-6 space-y-3 text-sm font-semibold">
              <p>✓ Personal mentoring</p>
              <p>✓ Progress tracking</p>
              <p>✓ Career guidance</p>
              <p>✓ Doubt clarification</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        className="px-5 py-16 sm:px-8 lg:px-12"
        style={{ backgroundColor: `${theme.primary}08` }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-black">
              A Better Way To Learn
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "🎯",
                "Goal Focused",
                "Learning plans built around clear goals.",
              ],
              [
                "🧠",
                "Concept Based",
                "Understand concepts instead of memorising.",
              ],
              [
                "📈",
                "Progress Tracking",
                "Regular feedback to measure improvement.",
              ],
              [
                "🤝",
                "Personal Support",
                "Guidance whenever students need it.",
              ],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-3xl border bg-white p-6"
                style={{ borderColor: `${theme.accent}55` }}
              >
                <div className="text-3xl">{icon}</div>

                <h3 className="mt-4 font-black">{title}</h3>

                <p className="mt-2 text-sm leading-6 opacity-65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              Learning Journey
            </p>

            <h2 className="mt-3 text-3xl font-black">
              From Learning To Achievement
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              ["01", "Assess", "Understand current level and goals."],
              ["02", "Plan", "Create a focused learning path."],
              ["03", "Learn", "Build concepts through structured sessions."],
              ["04", "Achieve", "Track progress and reach the next goal."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border p-6"
                style={{ borderColor: `${theme.accent}66` }}
              >
                <span
                  className="text-3xl font-black"
                  style={{ color: theme.accent }}
                >
                  {number}
                </span>

                <h3 className="mt-5 font-black">{title}</h3>

                <p className="mt-2 text-sm leading-6 opacity-65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
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
              Student Voices
            </p>

            <h2 className="mt-3 text-3xl font-black">
              What Students Say
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "The guidance helped me become much more confident in my studies.",
              "The structured learning approach made difficult concepts easier to understand.",
              "Regular support and feedback helped me stay focused on my goals.",
            ].map((review, index) => (
              <div
                key={index}
                className="rounded-3xl p-6"
                style={{ backgroundColor: `${theme.background}12` }}
              >
                <div
                  className="text-lg"
                  style={{ color: theme.accent }}
                >
                  ★★★★★
                </div>

                <p className="mt-4 text-sm leading-7 text-white/75">
                  “{review}”
                </p>

                <p
                  className="mt-5 text-xs font-bold"
                  style={{ color: theme.accent }}
                >
                  Student / Parent
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div>
            <p
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              Visit Us
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Learning Starts With A Conversation
            </h2>

            <p className="mt-5 text-sm leading-7 opacity-70">
              Contact us to discuss programs, schedules, admissions and the
              right learning path for your student.
            </p>

            <div className="mt-7 space-y-3 text-sm font-semibold">
              <p>📍 {profile.address}</p>
              <p>📞 {profile.phone}</p>
            </div>
          </div>

          <div
            className="flex min-h-[260px] items-center justify-center rounded-[2rem]"
            style={{ backgroundColor: `${theme.accent}20` }}
          >
            <a
              href={profile.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-6 py-3 text-sm font-black"
              style={{
                backgroundColor: theme.primary,
                color: "white",
              }}
            >
              Open Location
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="px-5 py-16 sm:px-8 lg:px-12"
        style={{ backgroundColor: theme.accent }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="text-3xl font-black sm:text-5xl"
            style={{ color: theme.primary }}
          >
            Ready To Take The Next Step?
          </h2>

          <p
            className="mx-auto mt-4 max-w-xl text-sm leading-7"
            style={{ color: `${theme.primary}CC` }}
          >
            Talk to us about the right program for your learning goals.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${profile.phone}`}
              className="rounded-full px-6 py-3 text-sm font-black"
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
              className="rounded-full border px-6 py-3 text-sm font-black"
              style={{
                borderColor: theme.primary,
                color: theme.primary,
              }}
            >
              WhatsApp Us
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

              <p className="mt-1 text-xs text-white/55">
                Learn. Grow. Achieve.
              </p>
            </div>

            <p className="text-xs text-white/45">
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