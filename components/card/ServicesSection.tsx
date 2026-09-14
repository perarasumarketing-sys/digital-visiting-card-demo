import { profile } from "@/components/data/profile";

const icons = ["✦", "◈", "✧", "◆", "●", "◇"];

export default function ServicesSection() {
  return (
    <section className="px-6 pb-8">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-400">
            Expertise
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900">
            What I Do
          </h2>
        </div>

        <span className="rounded-full bg-zinc-900 px-3 py-1.5 text-[11px] font-bold text-white">
          {profile.services.length} Services
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {profile.services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-200 hover:shadow-xl"
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-950 text-lg text-white shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                {icons[index % icons.length]}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-zinc-900">
                  {service.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="text-zinc-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-zinc-900">
                →
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}