import Image from "next/image";
import { template1Themes } from "@/components/data/themes";

type Theme = (typeof template1Themes)[keyof typeof template1Themes];

type GallerySectionProps = {
  theme: Theme;
};

const galleryImages = [
  "/images/gallery-new 1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-new 3.jpg",
  "/images/gallery-new 4.jpg",
];

export default function GallerySection({
  theme,
}: GallerySectionProps) {
  return (
    <section className="px-6 pb-8">
      {/* Heading */}
      <div className="flex items-end justify-between">
        <div>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.25em]"
            style={{ color: `${theme.primary}70` }}
          >
            Selected Work
          </p>

          <h2
            className="mt-2 text-2xl font-bold tracking-tight"
            style={{ color: theme.primary }}
          >
            Featured
          </h2>
        </div>

        <span
          className="text-xs font-medium"
          style={{ color: `${theme.primary}60` }}
        >
          {galleryImages.length} Images
        </span>
      </div>

      {/* Featured Image */}
      <div
        className="group relative mt-5 aspect-[16/10] overflow-hidden rounded-3xl shadow-lg"
        style={{
          backgroundColor: `${theme.primary}10`,
          boxShadow: `0 15px 40px ${theme.primary}18`,
        }}
      >
        <Image
          src={galleryImages[0]}
          alt="Featured work"
          fill
          sizes="(max-width: 768px) 100vw, 448px"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${theme.primary}B3, transparent 65%)`,
          }}
        />

        {/* Label */}
        <div className="absolute bottom-4 left-4">
          <span
            className="rounded-full px-3 py-1.5 text-xs font-medium backdrop-blur-md"
            style={{
              backgroundColor: `${theme.background}25`,
              color: theme.background,
              border: `1px solid ${theme.background}30`,
            }}
          >
            Featured Work
          </span>
        </div>

        {/* Number */}
        <span
          className="absolute right-4 top-4 text-xs font-semibold"
          style={{ color: `${theme.background}B3` }}
        >
          01
        </span>
      </div>

      {/* Small Images */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        {galleryImages.slice(1).map((image, index) => (
          <div
            key={image}
            className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm"
            style={{
              backgroundColor: `${theme.primary}10`,
              border: `1px solid ${theme.accent}20`,
            }}
          >
            <Image
              src={image}
              alt={`Portfolio work ${index + 2}`}
              fill
              sizes="(max-width: 768px) 50vw, 224px"
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div
              className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
              style={{
                backgroundColor: `${theme.primary}18`,
              }}
            />

            {/* Number */}
            <span
              className="absolute bottom-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-semibold backdrop-blur-md"
              style={{
                backgroundColor: `${theme.primary}90`,
                color: theme.background,
              }}
            >
              0{index + 2}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}