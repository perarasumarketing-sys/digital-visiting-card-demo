import { profile } from "@/components/data/profile";
import { template1Themes } from "@/components/data/themes";

type Theme = (typeof template1Themes)[keyof typeof template1Themes];

type LocationSectionProps = {
  theme: Theme;
};

export default function LocationSection({
  theme,
}: LocationSectionProps) {
  const mapEmbedUrl = `https://www.google.com/maps?q=${profile.latitude},${profile.longitude}&z=15&output=embed`;

  return (
    <section className="px-6 pb-8">
      {/* Heading */}
      <div>
        <p
          className="text-[11px] font-bold uppercase tracking-[0.25em]"
          style={{ color: `${theme.primary}70` }}
        >
          Location
        </p>

        <h2
          className="mt-2 text-2xl font-bold tracking-tight"
          style={{ color: theme.primary }}
        >
          Find Me
        </h2>
      </div>

      {/* Location Card */}
      <div
        className="mt-5 overflow-hidden rounded-3xl border shadow-lg transition-colors duration-500"
        style={{
          backgroundColor: theme.background,
          borderColor: `${theme.accent}30`,
        }}
      >
        {/* Map */}
        <div
          className="relative h-64 overflow-hidden"
          style={{
            backgroundColor: `${theme.primary}10`,
          }}
        >
          <iframe
            src={mapEmbedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            title={`${profile.name} location`}
          />

          {/* Location Badge */}
          <div
            className="absolute left-4 top-4 rounded-full px-3 py-2 text-xs font-bold shadow-lg backdrop-blur-md"
            style={{
              backgroundColor: `${theme.background}E6`,
              color: theme.primary,
              border: `1px solid ${theme.accent}30`,
            }}
          >
            📍 Location
          </div>
        </div>

        {/* Address */}
        <div className="p-5">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: `${theme.primary}60` }}
          >
            Address
          </p>

          <p
            className="mt-2 text-base font-bold leading-6"
            style={{ color: theme.primary }}
          >
            {profile.address}
          </p>

          {/* Google Maps Button */}
          <a
            href={profile.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98]"
            style={{
              backgroundColor: theme.primary,
              color: theme.background,
            }}
          >
            <span>Open in Google Maps</span>
            <span className="text-lg">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}