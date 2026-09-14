import { profile } from "@/components/data/profile";

export default function LocationSection() {
  const mapEmbedUrl = `https://www.google.com/maps?q=${profile.latitude},${profile.longitude}&z=15&output=embed`;

  return (
    <section className="px-6 pb-8">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-400">
          Location
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900">
          Find Me
        </h2>
      </div>

      <div className="mt-5 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg">
        {/* Map */}
        <div className="relative h-64 overflow-hidden bg-zinc-200">
          <iframe
            src={mapEmbedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            title={`${profile.name} location`}
          />

          {/* Location badge */}
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-zinc-800 shadow-lg backdrop-blur-md">
            📍 Client Location
          </div>
        </div>

        {/* Address */}
        <div className="p-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            Address
          </p>

          <p className="mt-2 text-base font-bold leading-6 text-zinc-900">
            {profile.address}
          </p>

          <a
            href={profile.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-between rounded-2xl bg-zinc-950 px-4 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98]"
          >
            <span>Open in Google Maps</span>
            <span className="text-lg">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}