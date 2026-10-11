"use client";

import { useState } from "react";

type Theme = {
  name: string;
  primary: string;
  accent: string;
  background: string;
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

type ServicesSectionProps = {
  theme: Theme;
  services?: ServiceData[];
};

export default function ServicesSection({
  theme,
  services = [],
}: ServicesSectionProps) {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleService = (id: number) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const total = services
    .filter((service) => selected.includes(service.id))
    .reduce((sum, service) => sum + (service.price || 0), 0);

  const message = services
    .filter((service) => selected.includes(service.id))
    .map(
      (service) =>
        `${service.name} - ₹${service.price ?? 0}`
    )
    .join("\n");

  const whatsappNumber = "9876543210";

  return (
    <section
      className="px-5 py-8"
      style={{
        backgroundColor: theme.background,
      }}
    >
      {/* Heading */}
      <div className="mb-5">
        <p
          className="text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: theme.accent }}
        >
          Our Services
        </p>

        <h2
          className="mt-1 text-2xl font-bold"
          style={{ color: theme.primary }}
        >
          What We Offer
        </h2>
      </div>

      {/* Services */}
      <div className="space-y-3">
        {services.length === 0 ? (
          <div
            className="rounded-2xl border p-5 text-center text-sm"
            style={{
              borderColor: `${theme.primary}15`,
              color: `${theme.primary}80`,
            }}
          >
            No services available.
          </div>
        ) : (
          services.map((service) => {
            const isSelected = selected.includes(service.id);

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => toggleService(service.id)}
                className="w-full rounded-2xl border p-4 text-left transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: isSelected
                    ? theme.accent
                    : `${theme.primary}15`,
                  backgroundColor: isSelected
                    ? `${theme.accent}12`
                    : `${theme.primary}05`,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3
                      className="font-bold"
                      style={{ color: theme.primary }}
                    >
                      {service.name}
                    </h3>

                    {service.description && (
                      <p
                        className="mt-1 text-xs leading-5"
                        style={{
                          color: `${theme.primary}80`,
                        }}
                      >
                        {service.description}
                      </p>
                    )}
                  </div>

                  <span
                    className="whitespace-nowrap text-sm font-bold"
                    style={{ color: theme.accent }}
                  >
                    ₹{service.price ?? 0}
                  </span>
                </div>

                <div className="mt-3">
                  <span
                    className="inline-flex rounded-full px-3 py-1 text-[11px] font-bold"
                    style={{
                      backgroundColor: isSelected
                        ? theme.accent
                        : `${theme.primary}10`,
                      color: isSelected
                        ? theme.background
                        : theme.primary,
                    }}
                  >
                    {isSelected ? "Selected ✓" : "Select Service"}
                  </span>
                </div>
              </button>
            );
          })
        )}
      </div>

      {/* Selected Summary */}
      {selected.length > 0 && (
        <div
          className="mt-5 rounded-2xl border p-4"
          style={{
            borderColor: `${theme.accent}50`,
            backgroundColor: `${theme.accent}10`,
          }}
        >
          <div className="flex items-center justify-between">
            <span
              className="text-sm font-bold"
              style={{ color: theme.primary }}
            >
              Selected Services
            </span>

            <span
              className="text-lg font-bold"
              style={{ color: theme.accent }}
            >
              ₹{total}
            </span>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hello, I would like to book these services:\n\n${message}\n\nTotal: ₹${total}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-xl px-4 py-3 text-center text-sm font-bold transition-all hover:scale-[1.02]"
            style={{
              backgroundColor: theme.primary,
              color: theme.background,
            }}
          >
            Book Now on WhatsApp
          </a>
        </div>
      )}
    </section>
  );
}