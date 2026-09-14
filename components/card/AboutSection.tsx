import { profile } from "@/components/data/profile";

export default function AboutSection() {
  return (
    <section className="px-6 pb-8 pt-8">
      {/* Section label */}
      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-400">
        About Me
      </p>

      <div className="mt-3 overflow-hidden rounded-3xl border border-zinc-100 bg-gradient-to-br from-zinc-50 to-white p-5 shadow-sm">
        <div className="flex gap-4">
          {/* Decorative number */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-bold text-white shadow-lg">
            01
          </div>

          <div>
            <h2 className="text-lg font-bold tracking-tight text-zinc-900">
              Building something meaningful.
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              {profile.bio}
            </p>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-5 flex items-center gap-2">
          <div className="h-1 w-8 rounded-full bg-zinc-900" />
          <div className="h-1 w-2 rounded-full bg-zinc-300" />
          <div className="h-1 w-2 rounded-full bg-zinc-200" />
        </div>
      </div>
    </section>
  );
}