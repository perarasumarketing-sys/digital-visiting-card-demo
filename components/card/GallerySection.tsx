import Image from "next/image";

const galleryImages = [
  "/images/gallery-new 1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-new 3.jpg",
];

export default function GallerySection() {
  return (
    <section className="px-6 pb-8">
      {/* Heading */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-400">
            Selected Work
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900">
            Featured
          </h2>
        </div>

        <span className="text-xs font-medium text-zinc-400">
          03 Images
        </span>
      </div>

      {/* Featured Image */}
      <div className="group relative mt-5 aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-100 shadow-lg">
        <Image
          src={galleryImages[0]}
          alt="Featured work"
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Label */}
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            Featured Work
          </span>
        </div>

        {/* Number */}
        <span className="absolute right-4 top-4 text-xs font-semibold text-white/70">
          01
        </span>
      </div>

      {/* Small Images */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        {galleryImages.slice(1).map((image, index) => (
          <div
            key={image}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-zinc-100 shadow-sm"
          >
            <Image
              src={image}
              alt={`Portfolio work ${index + 2}`}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

            <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
              0{index + 2}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}