import { profile } from "@/components/data/profile";

export default function AboutSection() {
  return (
    <section className="px-6 pb-8">
      {/* Section Heading */}
      <div className="mb-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-400">
          About
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900">
          A little about me
        </h2>
      </div>

      {/* Main About Card */}
      <div className="relative overflow-hidden rounded-[28px] bg-zinc-950 p-6 text-white shadow-xl">
        {/* Decorative Elements */}
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-white/10" />

        <div className="relative">
          {/* Small Label */}
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white" />

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">
              Who I Am
            </span>
          </div>

          {/* Main Statement */}
          <h3 className="max-w-[300px] text-2xl font-bold leading-tight tracking-tight">
            Building ideas into{" "}
            <span className="text-zinc-400">
              meaningful digital experiences.
            </span>
          </h3>

          {/* Bio */}
          <p className="mt-5 max-w-[340px] text-sm leading-6 text-zinc-400">
            {profile.bio}
          </p>

          {/* Divider */}
          <div className="my-6 h-px bg-white/10" />

          {/* Identity */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                Founder
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                {profile.name}
              </p>
            </div>

            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
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
        <div className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm">
          <p className="text-xl font-bold tracking-tight text-zinc-900">
            10+
          </p>

          <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
            Services
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm">
          <p className="text-xl font-bold tracking-tight text-zinc-900">
            10000+
          </p>

          <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
            Projects
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm">
          <p className="text-xl font-bold tracking-tight text-zinc-900">
            2+
          </p>

          <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
            Years
          </p>
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="mt-3 rounded-2xl border border-zinc-100 bg-zinc-50 px-5 py-4">
        <p className="text-xs font-medium leading-5 text-zinc-500">
          “Good design is not just about how it looks — it is about how it
          makes people feel and act.”
        </p>
      </div>
    </section>
  );
}