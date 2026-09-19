"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/components/data/profile";

const categoryIcons: Record<string, string> = {
  "Video Services": "🎬",
  "Graphic Design": "🎨",
  "Web Development": "💻",
  "Digital Marketing": "📈",
};

type CartItem = {
  service: (typeof profile.services)[number];
  quantity: number;
};

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    null
  );

  const [cart, setCart] = useState<CartItem[]>([]);

  // Get categories automatically
  const categories = Array.from(
    new Set(profile.services.map((service) => service.category))
  );

  // Get services for selected category
  const visibleServices = selectedCategory
    ? profile.services.filter(
        (service) => service.category === selectedCategory
      )
    : [];

  // Convert price into number
  const getPriceNumber = (price: string) => {
    const match = price.replace(/,/g, "").match(/[\d]+/);

    return match ? Number(match[0]) : 0;
  };

  // Get item quantity
  const getQuantity = (serviceId: string) => {
    return (
      cart.find((item) => item.service.id === serviceId)?.quantity || 0
    );
  };

  // Add first item
  const addToCart = (service: (typeof profile.services)[number]) => {
    setCart((current) => {
      const existing = current.find(
        (item) => item.service.id === service.id
      );

      if (existing) {
        return current.map((item) =>
          item.service.id === service.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...current,
        {
          service,
          quantity: 1,
        },
      ];
    });
  };

  // Increase quantity
  const increaseQuantity = (
    service: (typeof profile.services)[number]
  ) => {
    setCart((current) =>
      current.map((item) =>
        item.service.id === service.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (
    service: (typeof profile.services)[number]
  ) => {
    setCart((current) =>
      current
        .map((item) =>
          item.service.id === service.id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Total quantity
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total price
  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      getPriceNumber(item.service.price) * item.quantity,
    0
  );

  // WhatsApp booking
  const bookOnWhatsApp = () => {
    if (cart.length === 0) return;

    const orderList = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.service.title}
   Quantity: ${item.quantity}
   Price: ${item.service.price}
   Subtotal: ₹${(
     getPriceNumber(item.service.price) * item.quantity
   ).toLocaleString("en-IN")}`
      )
      .join("\n\n");

    const message = `Hi, I'm interested in these services:

${orderList}

Total Items: ${totalItems}
Total Amount: ₹${totalPrice.toLocaleString("en-IN")}

Please share the next steps.`;

    window.open(
      `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <section className="px-6 pb-8">

      {/* ================= HEADER ================= */}

      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-400">
            Expertise
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900">
            Products & Services
          </h2>
        </div>

        <span className="rounded-full bg-zinc-900 px-3 py-1.5 text-[11px] font-bold text-white">
          {profile.services.length} Items
        </span>
      </div>

      {/* ================= CATEGORY CARDS ================= */}

      {!selectedCategory && (
        <div className="mt-5 grid grid-cols-2 gap-3">
          {categories.map((category) => {
            const count = profile.services.filter(
              (service) => service.category === category
            ).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className="group rounded-2xl border border-zinc-100 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-lg shadow-md">
                    {categoryIcons[category] || "✦"}
                  </div>

                  <span className="text-zinc-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-zinc-900">
                    →
                  </span>

                </div>

                <h3 className="mt-4 text-sm font-bold text-zinc-900">
                  {category}
                </h3>

                <p className="mt-1 text-xs text-zinc-500">
                  {count} {count === 1 ? "Item" : "Items"}
                </p>
              </button>
            );
          })}
        </div>
      )}

      {/* ================= SERVICE LIST ================= */}

      {selectedCategory && (
        <div className="mt-5">

          {/* Back */}
          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            className="mb-4 text-xs font-bold text-zinc-500 transition-colors hover:text-zinc-900"
          >
            ← All Categories
          </button>

          {/* Category Header */}
          <div className="mb-4 flex items-center justify-between">

            <div>
              <h3 className="text-lg font-bold text-zinc-900">
                {categoryIcons[selectedCategory]} {selectedCategory}
              </h3>

              <p className="mt-1 text-xs text-zinc-500">
                Select multiple items
              </p>
            </div>

            <span className="rounded-full bg-zinc-100 px-3 py-1 text-[10px] font-bold text-zinc-600">
              {visibleServices.length} Items
            </span>

          </div>

          {/* Items */}
          <div className="space-y-3">

            {visibleServices.map((service) => {
              const quantity = getQuantity(service.id);

              return (
                <div
                  key={service.id}
                  className={`rounded-2xl border bg-white p-3 shadow-sm transition-all duration-300 ${
                    quantity > 0
                      ? "border-zinc-900 shadow-md"
                      : "border-zinc-100 hover:-translate-y-0.5 hover:border-zinc-200 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center gap-3">

                    {/* SERVICE IMAGE */}
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-zinc-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>

                    {/* DETAILS */}
                    <div className="min-w-0 flex-1">

                      <h4 className="text-sm font-bold leading-5 text-zinc-900">
                        {service.title}
                      </h4>

                      <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-zinc-500">
                        {service.description}
                      </p>

                      <p className="mt-1.5 text-sm font-bold text-zinc-900">
                        {service.price}
                      </p>

                    </div>

                    {/* SELECT / QUANTITY */}
                    {quantity === 0 ? (
                      <button
                        type="button"
                        onClick={() => addToCart(service)}
                        className="shrink-0 rounded-xl bg-zinc-100 px-4 py-2.5 text-[11px] font-bold text-zinc-700 transition-all duration-200 hover:bg-zinc-900 hover:text-white active:scale-95"
                      >
                        Select
                      </button>
                    ) : (
                      <div className="flex shrink-0 items-center rounded-xl bg-zinc-900 p-1 text-white shadow-md">

                        <button
                          type="button"
                          onClick={() => decreaseQuantity(service)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg text-sm font-bold transition-colors hover:bg-white/10"
                        >
                          −
                        </button>

                        <span className="min-w-[28px] text-center text-xs font-bold">
                          {quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => increaseQuantity(service)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg text-sm font-bold transition-colors hover:bg-white/10"
                        >
                          +
                        </button>

                      </div>
                    )}

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      )}

      {/* ================= CART / BOOKING BAR ================= */}

      {cart.length > 0 && (
        <div className="sticky bottom-4 z-20 mt-5 rounded-2xl border border-zinc-200 bg-white/95 p-4 shadow-2xl backdrop-blur-md">

          <div className="flex items-center justify-between gap-4">

            {/* Summary */}
            <div className="min-w-0">

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Your Selection
              </p>

              <h3 className="mt-1 text-sm font-bold text-zinc-900">
                {totalItems}{" "}
                {totalItems === 1 ? "Item" : "Items"}
              </h3>

              <p className="mt-1 text-sm font-bold text-zinc-900">
                Total: ₹{totalPrice.toLocaleString("en-IN")}
              </p>

            </div>

            {/* WhatsApp */}
            <button
              type="button"
              onClick={bookOnWhatsApp}
              className="shrink-0 rounded-xl bg-green-600 px-4 py-3 text-xs font-bold text-white shadow-lg transition-all hover:bg-green-700 active:scale-95"
            >
              Book on WhatsApp
            </button>

          </div>

        </div>
      )}

    </section>
  );
}