"use client";

import { useState } from "react";

import ProfileHeader from "@/components/card/ProfileHeader";
import ContactActions from "@/components/card/ContactActions";
import AboutSection from "@/components/card/AboutSection";
import ServicesSection from "@/components/card/ServicesSection";
import GallerySection from "@/components/card/GallerySection";
import TestimonialsSection from "@/components/card/TestimonialsSection";
import LocationSection from "@/components/card/LocationSection";
import SocialSection from "@/components/card/SocialSection";
import CardActions from "@/components/card/CardActions";
import Footer from "@/components/card/Footer";
import StickyActions from "@/components/card/StickyActions";

import { template1Themes } from "@/components/data/themes";

type Theme = {
  name: string;
  primary: string;
  accent: string;
  background: string;
};

type ClientData = {
  name: string;
  company: string | null;
  slug: string;
  published: boolean;
  template: number | null;
  theme: string | null;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  role: string | null;
  bio: string | null;
  address: string | null;
  profile_image: string | null;
};

type ServiceData = {
  id: number;
  client_id: number;
  name: string;
  description: string | null;
  price: number | null;
  image: string | null;
  sort_order: number | null;
  active: boolean;
};

type Template1Props = {
  client?: ClientData;
  services?: ServiceData[];
};

export default function Template1({
  client,
  services = [],
}: Template1Props) {
  const [selectedTheme, setSelectedTheme] =
    useState<keyof typeof template1Themes>("midnightGold");

  const theme = template1Themes[selectedTheme];

  return (
    <main
      className="min-h-screen px-3 pb-24 pt-4 transition-colors duration-500 sm:px-6 sm:py-10"
      style={{
        backgroundColor: theme.background,
      }}
    >
      {/* Theme Selector */}
      <div className="mx-auto mb-5 max-w-md">
        <p
          className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: theme.primary }}
        >
          Choose Color Theme
        </p>

        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setSelectedTheme("midnightGold")}
            className={`rounded-2xl border px-2 py-3 text-xs font-bold transition-all duration-300 ${
              selectedTheme === "midnightGold"
                ? "scale-[1.03] shadow-lg"
                : "opacity-70 hover:opacity-100"
            }`}
            style={{
              backgroundColor: template1Themes.midnightGold.primary,
              color: template1Themes.midnightGold.background,
              borderColor:
                selectedTheme === "midnightGold"
                  ? template1Themes.midnightGold.accent
                  : "transparent",
            }}
          >
            <span className="block">Midnight</span>
            <span className="block text-[10px] opacity-70">
              Gold
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedTheme("deepOcean")}
            className={`rounded-2xl border px-2 py-3 text-xs font-bold transition-all duration-300 ${
              selectedTheme === "deepOcean"
                ? "scale-[1.03] shadow-lg"
                : "opacity-70 hover:opacity-100"
            }`}
            style={{
              backgroundColor: template1Themes.deepOcean.primary,
              color: template1Themes.deepOcean.background,
              borderColor:
                selectedTheme === "deepOcean"
                  ? template1Themes.deepOcean.accent
                  : "transparent",
            }}
          >
            <span className="block">Deep</span>
            <span className="block text-[10px] opacity-70">
              Ocean
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedTheme("emeraldLuxe")}
            className={`rounded-2xl border px-2 py-3 text-xs font-bold transition-all duration-300 ${
              selectedTheme === "emeraldLuxe"
                ? "scale-[1.03] shadow-lg"
                : "opacity-70 hover:opacity-100"
            }`}
            style={{
              backgroundColor: template1Themes.emeraldLuxe.primary,
              color: template1Themes.emeraldLuxe.background,
              borderColor:
                selectedTheme === "emeraldLuxe"
                  ? template1Themes.emeraldLuxe.accent
                  : "transparent",
            }}
          >
            <span className="block">Emerald</span>
            <span className="block text-[10px] opacity-70">
              Luxe
            </span>
          </button>
        </div>
      </div>

      {/* Main Card */}
      <div
        className="
          mx-auto
          max-w-md
          overflow-hidden
          rounded-[2.5rem]
          text-zinc-900
          shadow-[0_30px_100px_rgba(0,0,0,0.45)]
          ring-1
          ring-black/10
          transition-all
          duration-500
        "
        style={{
          backgroundColor: theme.background,
        }}
      >
        {/* Profile */}
        <div className="animate-fade-up">
          <ProfileHeader
            theme={theme}
            client={client}
          />
        </div>

        {/* Contact */}
        <div className="animate-fade-up">
          <ContactActions
            theme={theme}
            client={client}
          />
        </div>

        {/* About */}
        <div className="animate-fade-up">
          <AboutSection theme={theme} />
        </div>

        {/* Services */}
        <div className="animate-fade-up">
          <ServicesSection
            theme={theme}
            services={services}
          />
        </div>

        {/* Gallery */}
        <div className="animate-fade-up">
          <GallerySection theme={theme} />
        </div>

        {/* Testimonials */}
        <div className="animate-fade-up">
          <TestimonialsSection theme={theme} />
        </div>

        {/* Location */}
        <div className="animate-fade-up">
          <LocationSection theme={theme} />
        </div>

        {/* Social */}
        <div className="animate-fade-up">
          <SocialSection theme={theme} />
        </div>

        {/* Card Actions */}
        <div className="animate-fade-up">
          <CardActions theme={theme} />
        </div>

        {/* Footer */}
        <Footer theme={theme} />
      </div>

      {/* Sticky Actions */}
      <StickyActions theme={theme} />
    </main>
  );
}