"use client";

import { useState } from "react";

/* =========================================
   TYPES & DEFAULT SETTINGS
========================================= */

type Template11Props = {
  profileImage?: string | null;
  shopName?: string;
  description?: string;
  phone?: string;
  whatsapp?: string;
  address?: string;
  mapsUrl?: string;
};

const DEFAULT_PROFILE_IMAGE = "/images/services/shop-owner.png";

const DEFAULT_MAPS_URL =
  "https://share.google/IFAGUm46issG9rn5W";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  mrp: number;
  icon: string;
  image?: string;
  color?: string;
};

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.827198467495!2d77.81213070000001!3d9.436549299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cee47640242b%3A0x73eff06665da7e99!2sSri%20Muthu%20Murugan%20Crackers!5e0!3m2!1sen!2sin!4v1791702442695!5m2!1sen!2sin";

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "4″ Gold Lakshmi Crackers",
    description: "1 Packet",
    price: 93.75,
    mrp: 125,
    icon: "🎆",
  },
  {
    id: 2,
    name: "5″ Lakshmi Crackers",
    description: "1 Packet",
    price: 123.75,
    mrp: 165,
    icon: "🎆",
  },
  {
    id: 3,
    name: "Flower Pots Small",
    description: "1 Box",
    price: 165,
    mrp: 220,
    icon: "🌋",
  },
  {
    id: 4,
    name: "Flower Pots Special",
    description: "1 Box",
    price: 213.75,
    mrp: 285,
    icon: "🌋",
  },
  {
    id: 5,
    name: "Flower Pots Giant",
    description: "1 Box",
    price: 573.75,
    mrp: 765,
    icon: "🌋",
  },
  {
    id: 6,
    name: "Power Pot (5 Pcs)",
    description: "1 Box",
    price: 521.25,
    mrp: 695,
    icon: "✨",
  },
  {
    id: 7,
    name: "Peacock Multi Colour",
    description: "1 Box",
    price: 498.75,
    mrp: 665,
    icon: "🦚",
  },
  {
    id: 8,
    name: "Ground Chakkar Big (10 Pcs)",
    description: "1 Box",
    price: 97.5,
    mrp: 130,
    icon: "🌀",
  },
  {
    id: 9,
    name: "Ground Chakkar Deluxe",
    description: "1 Box",
    price: 360,
    mrp: 480,
    icon: "🌀",
  },
  {
    id: 10,
    name: "7Cm Electric Sparklers",
    description: "1 Box",
    price: 30,
    mrp: 40,
    icon: "✨",
  },
  {
    id: 11,
    name: "10Cm Colour Sparklers",
    description: "1 Box",
    price: 60,
    mrp: 80,
    icon: "✨",
  },
  {
    id: 12,
    name: "15Cm Colour Sparklers",
    description: "1 Box",
    price: 150,
    mrp: 200,
    icon: "✨",
  },
  {
    id: 13,
    name: "Baby Rocket",
    description: "1 Box",
    price: 116.25,
    mrp: 155,
    icon: "🚀",
  },
  {
    id: 14,
    name: "Whistling Rocket",
    description: "1 Box",
    price: 498.75,
    mrp: 665,
    icon: "🚀",
  },
  {
    id: 15,
    name: "7″ Pencil",
    description: "1 Box",
    price: 75,
    mrp: 100,
    icon: "🎇",
  },
  {
    id: 16,
    name: "Red Bijili (100 Pcs)",
    description: "1 Bag",
    price: 90,
    mrp: 120,
    icon: "🧨",
  },
  {
    id: 17,
    name: "100 Wala",
    description: "1 Box",
    price: 120,
    mrp: 160,
    icon: "🎆",
  },
  {
    id: 18,
    name: "Dancing Butterfly",
    description: "1 Box",
    price: 296.25,
    mrp: 395,
    icon: "🦋",
  },
  {
    id: 19,
    name: "30 Shots",
    description: "1 Box",
    price: 1170,
    mrp: 1560,
    icon: "🎇",
  },
  {
    id: 20,
    name: "Beeta Gift Box (25 Items)",
    description: "1 Box · No Discount",
    price: 330,
    mrp: 330,
    icon: "🎁",
  },
] as const;

const GALLERY = [
{
title: "Our Shop",
subtitle: "Shop collection 1",
image: "/images/services/our-shop.png",
icon: "🏪",
},
{
title: "Shop Interior",
subtitle: "Shop collection 2",
image: "/images/services/shop-interior.jpg",
icon: "🛍️",
},
{
title: "Crackers Collection",
subtitle: "Shop collection 3",
image: "/images/services/crackers-collection.png",
icon: "🎆",
},
{
title: "Our Products",
subtitle: "Shop collection 4",
image: "/images/services/our-products.",
icon: "🎁",
},
];

const TESTIMONIALS = [
  {
    name: "Customer Review",
    message:
      "Customer service is really good and packaging also super..Sep 29,2024..I'm satisfied..Thank you muthu crackers.. crackers review after Diwali 🎇 ….",
    icon: "⭐",
  },
  {
    name: "Happy Customer",
    message:
      "நல்ல varieties, நல்ல service. Shopping பண்ண easy-ஆ இருந்தது. மற்றவர்களுக்கும் recommend பண்ணலாம்!.",
    icon: "💖",
  },
  {
    name: "Customer Feedback",
    message:
      "Customer service ரொம்ப நல்லா இருந்தது. நம்மளுக்கு தேவையான crackers-ஐ choose பண்ண helpful-ஆ இருந்தாங்க.",
    icon: "🎉",
  },
];

/* =========================================
   IMAGE COMPONENT
========================================= */

function ImageOrFallback({
  src,
  alt,
  fallback,
  className = "",
}: {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-amber-100 via-pink-100 to-purple-100 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-5xl" aria-hidden="true">
          {fallback}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

/* =========================================
   MAIN TEMPLATE
========================================= */

export default function Template11({
  profileImage = "/images/services/shop-owner.png",
  shopName = "SRI MUTHU MURUGAN CRACKERS",
  description =
    "🎆 உங்கள் தீபாவளிக் கொண்டாட்டம் இனிதே மலரட்டும்!.",
  phone = "9444811666",
  whatsapp = "919444811666",
  address =
    "3/1337-H, Sattur Rd, Ram Nagar, Parapatti, Viswanatham, Tamil Nadu 626189",
  mapsUrl = DEFAULT_MAPS_URL,
}: Template11Props) {
  const [quantities, setQuantities] = useState<
    Record<number, number>
  >({});

  const [copied, setCopied] = useState(false);

  const whatsappNumber = (whatsapp || phone).replace(/\D/g, "");
  const phoneNumber = phone.replace(/\D/g, "");

  /* WHATSAPP LINK */

  const whatsappLink = (message: string) =>
    whatsappNumber
      ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
      : "#";

  /* SHARE DIGITAL CARD */

  async function shareCard() {
    const shareData = {
      title: shopName,
      text: `${shopName} - ${description}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);

        setCopied(true);

        window.setTimeout(() => {
          setCopied(false);
        }, 2500);
      } else {
        window.prompt(
          "Copy your shop card link:",
          shareData.url
        );
      }
    } catch (error) {
      if (
        error instanceof Error &&
        error.name !== "AbortError"
      ) {
        window.prompt(
          "Copy your shop card link:",
          shareData.url
        );
      }
    }
  }

  /* SAVE CONTACT AS VCARD */

  function saveContact() {
    if (!phoneNumber) {
      alert(
        "Please add the shop phone number before saving the contact."
      );
      return;
    }

    const escapeVCard = (value: string) =>
      value
        .replace(/\\/g, "\\\\")
        .replace(/\n/g, "\\n")
        .replace(/,/g, "\\,")
        .replace(/;/g, "\\;");

    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${escapeVCard(shopName)}`,
      `ORG:${escapeVCard(shopName)}`,
      `TEL;TYPE=WORK,VOICE:+${phoneNumber}`,
      `ADR;TYPE=WORK:;;${escapeVCard(address)}`,
      `URL:${window.location.href}`,
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([vcard], {
      type: "text/vcard;charset=utf-8",
    });

    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = downloadUrl;
    link.download = `${shopName.replace(
      /[^a-z0-9]/gi,
      "-"
    )}.vcf`;

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.setTimeout(() => {
      URL.revokeObjectURL(downloadUrl);
    }, 1000);
  }

  /* CART */

  const cartItems = PRODUCTS.filter(
    (product) => (quantities[product.id] || 0) > 0
  );

  const cartCount = cartItems.reduce(
    (total, product) =>
      total + (quantities[product.id] || 0),
    0
  );

  const cartTotal = cartItems.reduce(
    (total, product) =>
      total +
      product.price * (quantities[product.id] || 0),
    0
  );

  function changeQuantity(id: number, amount: number) {
    setQuantities((previous) => ({
      ...previous,
      [id]: Math.max(0, (previous[id] || 0) + amount),
    }));
  }

  function orderCart() {
    if (cartItems.length === 0) {
      alert("Please select at least one product.");
      return;
    }

    if (!whatsappNumber) {
      alert(
        "Please add the shop WhatsApp number to enable ordering."
      );
      return;
    }

    const message = [
      `Hello ${shopName}!`,
      "",
      "I would like to enquire about these products:",
      ...cartItems.map(
        (product) =>
          `${product.name} x ${quantities[product.id]} = ₹${
            product.price * quantities[product.id]
          }`
      ),
      "",
      `Estimated total: ₹${cartTotal}`,
      "",
      "Please confirm availability and the final price.",
    ].join("\n");

    window.open(
      whatsappLink(message),
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="festival-site min-h-screen overflow-hidden text-slate-800">
      {/* ANIMATED BACKGROUND */}

      <div className="festival-background" aria-hidden="true">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="floating-spark spark-one">✦</div>
        <div className="floating-spark spark-two">✧</div>
        <div className="floating-spark spark-three">✦</div>
        <div className="floating-spark spark-four">✧</div>
        <div className="floating-spark spark-five">✦</div>
      </div>

      {/* ANNOUNCEMENT BAR */}

      <div className="relative z-10 bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 px-4 py-2 text-center text-xs font-bold tracking-wide text-white sm:text-sm">
        🎉 CELEBRATE EVERY MOMENT WITH JOY 🎉
      </div>

      {/* HEADER */}

      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/85 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 text-2xl shadow-lg">
              <img src="/images/services/shop-logo.png"alt="Sri Muthu Murugan Crackers Logo" className="h-full w-full object-contain" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-purple-600">
                Welcome to
              </p>

              <p className="max-w-[220px] truncate text-sm font-black text-slate-900 sm:text-base">
                {shopName}
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
            <a className="transition hover:text-pink-600" href="#home">
              Home
            </a>
            <a className="transition hover:text-pink-600" href="#products">
              Products
            </a>
            <a className="transition hover:text-pink-600" href="#gallery">
              Gallery
            </a>
            <a className="transition hover:text-pink-600" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href={whatsappNumber ? whatsappLink("Hello! I would like to enquire about your products.") : "#contact"}
            target={whatsappNumber ? "_blank" : undefined}
            rel={whatsappNumber ? "noopener noreferrer" : undefined}
            className="shrink-0 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2.5 text-xs font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 sm:text-sm"
          >
            WhatsApp ↗
          </a>
        </div>
      </header>

      {/* HERO SECTION */}

      <section
        id="home"
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:py-24"
      >
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-xs font-bold text-purple-700 shadow-sm">
            <span className="animate-pulse">✨</span>
            MAKE EVERY CELEBRATION SPECIAL
          </div>

          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Light Up Your
            <span className="gradient-text block">
              Happy Moments!
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>

          <p className="mt-3 text-sm font-bold text-purple-700">
            🎊 Happiness, Colours & Celebration 🎊
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 px-7 py-4 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
            >
              Explore Products ✨
            </a>

            <a
              href={whatsappNumber ? whatsappLink("Hello! Please share your crackers price list.") : "#contact"}
              target={whatsappNumber ? "_blank" : undefined}
              rel={whatsappNumber ? "noopener noreferrer" : undefined}
              className="rounded-full border border-emerald-200 bg-white/90 px-7 py-4 text-sm font-extrabold text-emerald-700 shadow-md transition hover:-translate-y-1"
            >
              Enquire on WhatsApp
            </a>
          </div>

          <div className="mt-9 grid max-w-lg grid-cols-3 gap-3">
            {[
              { icon: "🎆", title: "Festive", sub: "Collections" },
              { icon: "🎁", title: "Gift", sub: "Selections" },
              { icon: "💬", title: "Easy", sub: "Enquiry" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white bg-white/75 p-3 text-center shadow-sm backdrop-blur-sm"
              >
                <div className="text-2xl">{item.icon}</div>
                <p className="mt-2 text-sm font-black text-slate-800">
                  {item.title}
                </p>
                <p className="text-xs text-slate-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-pink-300/60 via-orange-200/60 to-purple-300/60 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white bg-white/80 p-3 shadow-2xl backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-amber-100 via-pink-100 to-purple-100">
              <ImageOrFallback
                src={profileImage || DEFAULT_PROFILE_IMAGE}
                alt={shopName}
                fallback="🎆"
                className="h-[340px] w-full object-cover sm:h-[400px]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent p-6 pt-24 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                  Celebrate with us
                </p>
                <h2 className="mt-2 text-2xl font-black leading-tight">
                  {shopName}
                </h2>
                <p className="mt-2 text-sm text-white/85">
                  Your celebration starts here.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 px-3 py-4">
              <div>
                <p className="text-sm font-black text-slate-900">
                  Festival Special
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Enquire for current prices
                </p>
              </div>

              <span className="rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-4 py-2 text-sm font-black text-white shadow-lg">
                ✨ Welcome
              </span>
            </div>
          </div>

          <div className="absolute -right-3 top-8 animate-bounce rounded-2xl border border-white bg-white p-3 text-3xl shadow-xl sm:-right-6">
            🎇
          </div>

          <div className="absolute -left-3 bottom-20 rounded-2xl border border-white bg-white p-3 text-3xl shadow-xl sm:-left-6">
            🎉
          </div>
        </div>
      </section>

      {/* HIGHLIGHT STRIP */}

      <section className="relative z-10 px-5 pb-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            {
              icon: "🎆",
              title: "Festive Collection",
              desc: "Explore available products",
              color: "from-orange-100 to-pink-100",
            },
            {
              icon: "🎁",
              title: "Product Enquiry",
              desc: "Ask us about availability",
              color: "from-pink-100 to-purple-100",
            },
            {
              icon: "📍",
              title: "Visit Our Shop",
              desc: "Find our location easily",
              color: "from-purple-100 to-blue-100",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`rounded-3xl border border-white bg-gradient-to-br ${item.color} p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-black text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}

      <section id="products" className="relative z-10 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="rounded-full bg-pink-100 px-4 py-2 text-xs font-black uppercase tracking-widest text-pink-700">
              Our Collection
            </span>

            <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
              Explore Our <span className="gradient-text">Products</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Discover our product collection and contact us to confirm
              availability and the latest prices.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => {
              const quantity = quantities[product.id] || 0;

              return (
                <article
                  key={product.id}
                  className="product-card group overflow-hidden rounded-3xl border border-white bg-white/90 shadow-md backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div
                  className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${product.color}`}
>
  <ImageOrFallback
    src={""}
    alt={product.name}
    fallback={product.icon}
    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
  />

                    <div className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-bold text-purple-700">
                      Festive Pick
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-black text-slate-900">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {product.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs text-slate-500">
                           price
                        </p>
                        <p className="text-2xl font-black text-purple-700">
                          ₹{product.price}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 rounded-full border border-purple-100 bg-purple-50 p-1">
                        <button
                          type="button"
                          aria-label={`Decrease ${product.name} quantity`}
                          onClick={() => changeQuantity(product.id, -1)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-black text-purple-700 shadow-sm transition hover:bg-purple-100"
                        >
                          −
                        </button>

                        <span className="min-w-4 text-center text-sm font-black">
                          {quantity}
                        </span>

                        <button
                          type="button"
                          aria-label={`Increase ${product.name} quantity`}
                          onClick={() => changeQuantity(product.id, 1)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-lg font-black text-white shadow-sm transition hover:scale-105"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* CART */}

          <div className="mt-8 rounded-3xl border border-purple-100 bg-white/90 p-5 shadow-lg sm:p-7">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-purple-600">
                  Your Selection
                </p>

                <h3 className="mt-2 text-2xl font-black text-slate-900">
                  Selected Items: {cartCount}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Estimated total:{" "}
                  <span className="font-black text-purple-700">
                    ₹{cartTotal}
                  </span>
                </p>
              </div>

              <button
                type="button"
                onClick={orderCart}
                className="rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-7 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                Enquire Selected Items on WhatsApp ↗
              </button>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Prices shown are sample prices for design purposes. Confirm
              actual prices, product availability and applicable rules
              with the shop before ordering.
            </p>
          </div>
        </div>
      </section>

      {/* SHOP GALLERY */}

      <section id="gallery" className="relative z-10 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-xs font-black uppercase tracking-widest text-orange-700">
              A Look Inside
            </span>

            <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
              Our Shop <span className="gradient-text">Gallery</span>
            </h2>

            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Explore our shop and product collection.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((item, index) => (
              <div
                key={item.title}
                className="gallery-card group overflow-hidden rounded-3xl border-4 border-white bg-white shadow-lg"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-amber-100 via-pink-100 to-purple-100">
                  <ImageOrFallback
                    src={item.image}
                    alt={item.title}
                    fallback={item.icon}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-5 pt-16">
                    <p className="font-black text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-white/80">
                      Shop collection {index + 1}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-xs text-slate-500">
            Replace the sample image paths with your actual shop photos.
          </p>
        </div>
      </section>

      {/* PDF PRICE LIST */}

      <section className="relative z-10 px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 p-1 shadow-xl">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[1.8rem] bg-white p-7 sm:flex-row sm:p-10">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-pink-100 text-4xl">
                📄
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-widest text-purple-600">
                  Product Catalogue
                </p>

                <h2 className="mt-2 text-xl font-black text-slate-900 sm:text-2xl">
                  Crackers Price List
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  View or download the shop&apos;s PDF price list.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/price-list.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-purple-100 px-5 py-3 text-sm font-black text-purple-700 transition hover:bg-purple-200"
              >
                View PDF ↗
              </a>

              <a
                href="/price-list.pdf"
                download="crackers-price-list.pdf"
                className="rounded-full bg-gradient-to-r from-pink-600 to-purple-600 px-5 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-1"
              >
                Download ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="relative z-10 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="rounded-full bg-yellow-100 px-4 py-2 text-xs font-black uppercase tracking-widest text-amber-700">
              Customer Love
            </span>

            <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
              Happy Customer{" "}
              <span className="gradient-text">Stories</span>
            </h2>

            <p className="mt-3 text-sm text-slate-600">
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((review) => (
              <article
                key={review.name}
                className="rounded-3xl border border-white bg-white/85 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-3xl">{review.icon}</div>

                <div className="mt-4 text-sm tracking-widest text-amber-500">
                  ★★★★★

                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  &ldquo;{review.message}&rdquo;
                </p>

                <h3 className="mt-5 border-t border-slate-100 pt-4 font-black text-slate-900">
                  {review.name}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT */}

      <section
        id="contact"
        className="relative z-10 px-5 py-16 sm:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 lg:grid-cols-2">
          {/* CONTACT DETAILS */}

          <div className="rounded-[2rem] border border-white bg-white/90 p-7 shadow-xl sm:p-10">
            <span className="rounded-full bg-pink-100 px-4 py-2 text-xs font-black uppercase tracking-widest text-pink-700">
              Visit Us
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900">
              Let&apos;s Make Your Celebration{" "}
              <span className="gradient-text">Memorable!</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Contact our shop for product availability, current prices
              and location details.
            </p>

            <div className="mt-8 space-y-5">
              {/* ADDRESS */}

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
                  📍
                </div>

                <div>
                  <p className="font-black text-slate-900">
                    Shop Address
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {address}
                  </p>
                </div>
              </div>

              {/* PHONE */}

              {phone && (
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                    📞
                  </div>

                  <div>
                    <p className="font-black text-slate-900">
                      Call Us
                    </p>

                    <a
                      href={`tel:${phoneNumber}`}
                      className="mt-1 block text-sm font-semibold text-purple-700 hover:underline"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              )}

              {/* WHATSAPP */}

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                  💬
                </div>

                <div>
                  <p className="font-black text-slate-900">
                    WhatsApp Enquiry
                  </p>

                  <a
                    href={whatsappNumber ? whatsappLink("Hello! I would like to enquire about your products.") : "#contact"}
                    target={whatsappNumber ? "_blank" : undefined}
                    rel={whatsappNumber ? "noopener noreferrer" : undefined}
                    className="mt-1 block text-sm font-semibold text-emerald-700 hover:underline"
                  >
                    Message Our Shop ↗
                  </a>
                </div>
              </div>
            </div>

            <a
              href={mapsUrl || DEFAULT_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 px-7 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-1"
            >
              Get Directions on Google Maps ↗
            </a>
          </div>

          {/* GOOGLE MAP */}

          <div className="flex min-h-[350px] flex-col overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-xl">
            <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 px-5 py-4 text-white">
              <h3 className="text-lg font-black">
                📍 Find Our Shop
              </h3>

              <p className="mt-1 text-sm text-white/90">
                {shopName}
              </p>
            </div>

            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="350"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${shopName} - Shop Location`}
              className="block w-full flex-1"
            />

            <a
              href={mapsUrl || DEFAULT_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="m-4 inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-center font-bold text-white transition hover:bg-orange-600"
            >
              📍 View Shop on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
{/* FIREWORKS SAFETY TIPS */}

<section className="bg-slate-950 px-4 py-12 text-white sm:px-6">
  <div className="mx-auto max-w-5xl">
    <div className="mb-8 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
        Celebrate Safely
      </p>

```
  <h2 className="mt-2 text-2xl font-black sm:text-3xl">
    🎆 பட்டாசு பாதுகாப்பு வழிமுறைகள்
  </h2>

  <p className="mt-3 text-sm text-slate-300">
    பாதுகாப்பாகக் கொண்டாடுங்கள்; மகிழ்ச்சியைப் பகிருங்கள்!
  </p>
</div>

<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {[
    {
      icon: "🧑‍🧑‍🧒",
      title: "பெரியவர்கள் கண்காணிப்பு",
      text: "குழந்தைகள் பெரியவர்களின் கண்காணிப்பில் மட்டுமே பட்டாசு வெடிக்க வேண்டும்.",
    },
    {
      icon: "🧥",
      title: "பாதுகாப்பான உடை",
      text: "இறுக்கமான பருத்தி ஆடைகளை அணியுங்கள். தளர்வான ஆடைகளைத் தவிர்க்கவும்.",
    },
    {
      icon: "🪔",
      title: "திறந்த வெளி",
      text: "கட்டிடங்கள், வாகனங்கள் மற்றும் எளிதில் தீப்பற்றக்கூடிய பொருட்களிலிருந்து விலகி வெடிக்கவும்.",
    },
    {
      icon: "💧",
      title: "தண்ணீர் தயாராக",
      text: "அருகில் ஒரு வாளி தண்ணீர் அல்லது மணல் வைத்திருங்கள்.",
    },
    {
      icon: "🚫",
      title: "மீண்டும் பற்ற வைக்காதீர்கள்",
      text: "வெடிக்காத பட்டாசுகளை மீண்டும் பற்ற வைக்காதீர்கள். பாதுகாப்பான தூரத்தில் இருங்கள்.",
    },
    {
      icon: "🛡️",
      title: "பாதுகாப்பு இடைவெளி",
      text: "பட்டாசு வெடிக்கும்போது பாதுகாப்பான தூரத்தில் நின்று, கண்களையும் காதுகளையும் பாதுகாக்கவும்.",
    },
  ].map((tip) => (
    <div
      key={tip.title}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-amber-400/50 hover:bg-white/10"
    >
      <div className="text-3xl">{tip.icon}</div>

      <h3 className="mt-3 text-lg font-bold text-amber-300">
        {tip.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-300">
        {tip.text}
      </p>
    </div>
  ))}
</div>

<p className="mt-8 text-center text-xs leading-5 text-slate-400">
  பட்டாசுகளின் லேபிளில் உள்ள வழிமுறைகளைப் பின்பற்றுங்கள்.
  சட்டப்படி அனுமதிக்கப்பட்ட பட்டாசுகளை மட்டுமே பயன்படுத்துங்கள்.
  அவசரநிலையில் 112-ஐ அழைக்கவும்.
</p>
```

  </div>
</section>

      <footer className="relative z-10 overflow-hidden bg-gradient-to-r from-purple-800 via-pink-700 to-orange-600 px-5 pb-28 pt-12 text-white sm:px-8 sm:pb-12">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/20" />

        <div className="absolute -bottom-16 left-10 h-48 w-48 rounded-full border border-white/15" />

        <div className="relative mx-auto max-w-7xl">
          {/* FOOTER TOP */}

          <div className="grid gap-8 border-b border-white/20 pb-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-200">
                Thank You For Visiting
              </p>

              <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                {shopName}
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/80">
                Wishing you joyful celebrations filled with colour,
                happiness and unforgettable moments.
              </p>
            </div>

            {/* FOOTER BUTTONS */}

            <div className="flex flex-wrap gap-3 md:justify-end">
              <button
                type="button"
                onClick={saveContact}
                className="rounded-full bg-white px-6 py-3 text-sm font-black text-purple-700 shadow-lg transition hover:-translate-y-1"
              >
                📇 Save Contact
              </button>

              <button
                type="button"
                onClick={shareCard}
                className="rounded-full border border-white/50 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                📤 {copied ? "Link Copied!" : "Share Card"}
              </button>

              <a
                href={
                  whatsappNumber
                    ? whatsappLink("Hello! I would like to contact your shop.")
                    : "#contact"
                }
                target={whatsappNumber ? "_blank" : undefined}
                rel={whatsappNumber ? "noopener noreferrer" : undefined}
                className="rounded-full bg-white px-6 py-3 text-sm font-black text-emerald-700 shadow-lg transition hover:-translate-y-1"
              >
                WhatsApp Us ↗
              </a>

              {phone && (
                <a
                  href={`tel:${phoneNumber}`}
                  className="rounded-full border border-white/50 px-6 py-3 text-sm font-black text-white transition hover:bg-white/10"
                >
                  📞 Call Now
                </a>
              )}
            </div>
          </div>

          {/* FOOTER BOTTOM */}

          <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center text-xs text-white/75 sm:flex-row sm:text-left">
            <p>
              © {new Date().getFullYear()} {shopName}. All rights reserved.
            </p>

            <p>Made for joyful celebrations ✨</p>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY ACTIONS */}

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 border-t border-white/70 bg-white/90 p-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:hidden">
        <a
          href={phone ? `tel:${phoneNumber}` : "#contact"}
          className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-3 py-3.5 text-sm font-black text-white shadow-md"
        >
          📞 Call Now
        </a>

        <a
          href={
            whatsappNumber
              ? whatsappLink("Hello! I would like to enquire about your products.")
              : "#contact"
          }
          target={whatsappNumber ? "9600678029" : undefined}
          rel={whatsappNumber ? "noopener noreferrer" : undefined}
          className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-3 py-3.5 text-sm font-black text-white shadow-md"
        >
          💬 WhatsApp
        </a>
      </div>

      {/* BACKGROUND & MOTION STYLES */}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .festival-site {
          position: relative;
          isolation: isolate;
          background: linear-gradient(
            135deg,
            #fffaf0 0%,
            #fff1f5 28%,
            #f8f1ff 60%,
            #fff6e8 100%
          );
        }

        .festival-background {
          position: absolute;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          pointer-events: none;
        }

        .aurora {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 9999px;
          filter: blur(85px);
          opacity: 0.32;
          animation: aurora-drift 16s ease-in-out infinite alternate;
        }

        .aurora-one {
          top: 5%;
          left: -180px;
          background: #fb7185;
        }

        .aurora-two {
          top: 35%;
          right: -180px;
          background: #a78bfa;
          animation-delay: -6s;
        }

        .floating-spark {
          position: absolute;
          color: #f59e0b;
          font-size: 25px;
          opacity: 0.55;
          animation: spark-float 5s ease-in-out infinite;
        }

        .spark-one {
          top: 9%;
          left: 8%;
        }

        .spark-two {
          top: 28%;
          right: 7%;
          color: #ec4899;
          animation-delay: -2s;
        }

        .spark-three {
          top: 52%;
          left: 4%;
          color: #8b5cf6;
          animation-delay: -3s;
        }

        .spark-four {
          top: 72%;
          right: 9%;
          animation-delay: -1s;
        }

        .spark-five {
          top: 90%;
          left: 48%;
          color: #f97316;
          animation-delay: -4s;
        }

        .gradient-text {
          background: linear-gradient(
            100deg,
            #ec4899 0%,
            #9333ea 48%,
            #f97316 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-visual {
          animation: hero-float 6s ease-in-out infinite;
        }

        .product-card,
        .gallery-card {
          will-change: transform;
        }

        @keyframes spark-float {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
            opacity: 0.35;
          }

          50% {
            transform: translate3d(8px, -18px, 0) rotate(18deg);
            opacity: 0.85;
          }
        }

        @keyframes aurora-drift {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          100% {
            transform: translate3d(70px, 40px, 0) scale(1.2);
          }
        }

        @keyframes hero-float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}