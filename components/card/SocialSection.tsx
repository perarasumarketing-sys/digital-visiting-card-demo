import { profile } from "@/components/data/profile";
import { template1Themes } from "@/components/data/themes";

type Theme = (typeof template1Themes)[keyof typeof template1Themes];

type SocialSectionProps = {
  theme: Theme;
};

export default function SocialSection({
  theme,
}: SocialSectionProps) {
  return (
    <section className="px-6 pb-8">
      {/* Heading */}
      <div>
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: `${theme.primary}60` }}
        >
          Stay Connected
        </p>

        <h2
          className="mt-1 text-xl font-bold tracking-tight"
          style={{ color: theme.primary }}
        >
          Social Media
        </h2>
      </div>

      {/* Social Links */}
      <div className="mt-5 grid grid-cols-3 gap-3">
        {/* Instagram */}
        <a
          href={profile.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
          style={{
            backgroundColor: `${theme.primary}06`,
            borderColor: `${theme.accent}25`,
          }}
        >
          <div className="text-xl transition-transform duration-300 group-hover:scale-110">
            📸
          </div>

          <p
            className="mt-2 text-xs font-semibold"
            style={{ color: theme.primary }}
          >
            Instagram
          </p>
        </a>

        {/* Facebook */}
        <a
          href={profile.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
          style={{
            backgroundColor: `${theme.primary}06`,
            borderColor: `${theme.accent}25`,
          }}
        >
          <div className="text-xl transition-transform duration-300 group-hover:scale-110">
            👍
          </div>

          <p
            className="mt-2 text-xs font-semibold"
            style={{ color: theme.primary }}
          >
            Facebook
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
          style={{
            backgroundColor: `${theme.primary}06`,
            borderColor: `${theme.accent}25`,
          }}
        >
          <div className="text-xl transition-transform duration-300 group-hover:scale-110">
            💼
          </div>

          <p
            className="mt-2 text-xs font-semibold"
            style={{ color: theme.primary }}
          >
            LinkedIn
          </p>
        </a>
      </div>
    </section>
  );
}