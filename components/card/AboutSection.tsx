import { profile } from "@/components/data/profile";
import { template1Themes } from "@/components/data/themes";

type Theme = (typeof template1Themes)[keyof typeof template1Themes];

type AboutSectionProps = {
  theme: Theme;
};

export default function AboutSection({
  theme,
}: AboutSectionProps) {
  return (
    <section className="px-6 pb-8">
      {/* Section Heading */}
      <div className="mb-5">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.25em]"
          style={{ color: `${theme.primary}80` }}
        >
          About
        </p>

        <h2
          className="mt-2 text-2xl font-bold tracking-tight"
          style={{ color: theme.primary }}
        >
          A little about me
        </h2>
      </div>

      {/* Main About Card */}
      <div
        className="relative overflow-hidden rounded-[28px] p-6 text-white shadow-xl transition-colors duration-500"
        style={{
          backgroundColor: theme.primary,
        }}
      >
        {/* Decorative Elements */}
        <div
          className="absolute -right-16 -top-16 h-40 w-40 rounded-full border"
          style={{ borderColor: `${theme.accent}30` }}
        />

        <div
          className="absolute -right-8 -top-8 h-24 w-24 rounded-full border"
          style={{ borderColor: `${theme.accent}30` }}
        />

        <div className="relative">
          {/* Small Label */}
          <div className="mb-5 flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: theme.accent }}
            />

            <span
              className="text-[10px] font-bold uppercase tracking-[0.25em]"
              style={{ color: `${theme.background}99` }}
            >
              Who I Am
            </span>
          </div>

          {/* Main Statement */}
          <h3 className="max-w-[300px] text-2xl font-bold leading-tight tracking-tight">
            Building ideas into{" "}
            <span style={{ color: theme.accent }}>
              meaningful digital experiences.
            </span>
          </h3>

          {/* Bio */}
          <p
            className="mt-5 max-w-[340px] text-sm leading-6"
            style={{ color: `${theme.background}99` }}
          >
            {profile.bio}
          </p>

          {/* Divider */}
          <div
            className="my-6 h-px"
            style={{ backgroundColor: `${theme.background}20` }}
          />

          {/* Identity */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{ color: `${theme.background}70` }}
              >
                Founder
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                {profile.name}
              </p>
            </div>

            <div className="text-right">
              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{ color: `${theme.background}70` }}
              >
                Company
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                {profile.company}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-3 grid grid-cols-3 gap-3">
        <div
          className="rounded-2xl border p-4 shadow-sm transition-colors duration-500"
          style={{
            backgroundColor: theme.background,
            borderColor: `${theme.accent}30`,
          }}
        >
          <p
            className="text-xl font-bold tracking-tight"
            style={{ color: theme.primary }}
          >
            10+
          </p>

          <p
            className="mt-1 text-[10px] font-semibold uppercase tracking-wide"
            style={{ color: `${theme.primary}70` }}
          >
            Services
          </p>
        </div>

        <div
          className="rounded-2xl border p-4 shadow-sm transition-colors duration-500"
          style={{
            backgroundColor: theme.background,
            borderColor: `${theme.accent}30`,
          }}
        >
          <p
            className="text-xl font-bold tracking-tight"
            style={{ color: theme.primary }}
          >
            10000+
          </p>

          <p
            className="mt-1 text-[10px] font-semibold uppercase tracking-wide"
            style={{ color: `${theme.primary}70` }}
          >
            Projects
          </p>
        </div>

        <div
          className="rounded-2xl border p-4 shadow-sm transition-colors duration-500"
          style={{
            backgroundColor: theme.background,
            borderColor: `${theme.accent}30`,
          }}
        >
          <p
            className="text-xl font-bold tracking-tight"
            style={{ color: theme.primary }}
          >
            2+
          </p>

          <p
            className="mt-1 text-[10px] font-semibold uppercase tracking-wide"
            style={{ color: `${theme.primary}70` }}
          >
            Years
          </p>
        </div>
      </div>

      {/* Bottom Quote */}
      <div
        className="mt-3 rounded-2xl border px-5 py-4 transition-colors duration-500"
        style={{
          backgroundColor: `${theme.primary}08`,
          borderColor: `${theme.accent}25`,
        }}
      >
        <p
          className="text-xs font-medium leading-5"
          style={{ color: `${theme.primary}90` }}
        >
          “Good design is not just about how it looks — it is about how it
          makes people feel and act.”
        </p>
      </div>
    </section>
  );
}