import { profile } from "@/components/data/profile";

export default function SocialSection() {
  return (
    <section className="px-6 pb-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Stay Connected
        </p>

        <h2 className="mt-1 text-xl font-bold tracking-tight">
          Social Media
        </h2>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {/* Instagram */}
        <a
          href={profile.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-zinc-100 bg-zinc-50 px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg active:scale-95"
        >
          <div className="text-xl transition-transform duration-300 group-hover:scale-110">
            📸
          </div>

          <p className="mt-2 text-xs font-semibold text-zinc-700">
            Instagram
          </p>
        </a>

        {/* Facebook */}
        <a
          href={profile.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-zinc-100 bg-zinc-50 px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg active:scale-95"
        >
          <div className="text-xl transition-transform duration-300 group-hover:scale-110">
            👍
          </div>

          <p className="mt-2 text-xs font-semibold text-zinc-700">
            Facebook
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-zinc-100 bg-zinc-50 px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg active:scale-95"
        >
          <div className="text-xl transition-transform duration-300 group-hover:scale-110">
            💼
          </div>

          <p className="mt-2 text-xs font-semibold text-zinc-700">
            LinkedIn
          </p>
        </a>
      </div>
    </section>
  );
}