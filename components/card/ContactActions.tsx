import { profile } from "@/components/data/profile";

export default function ContactActions() {
  return (
    <section className="-mt-5 relative z-10 px-5">
      <div className="grid grid-cols-2 gap-3">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${profile.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 text-sm font-bold text-zinc-900 shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-lg transition-transform duration-300 group-hover:scale-110">
            💬
          </span>

          WhatsApp
        </a>

        {/* Call */}
        <a
          href={`tel:${profile.phone}`}
          className="group flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-4 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-lg transition-transform duration-300 group-hover:scale-110">
            📞
          </span>

          Call Now
        </a>
      </div>

      {/* Email */}
      <a
        href={`mailto:${profile.email}`}
        className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-600 shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md active:scale-[0.98]"
      >
        ✉️
        <span>{profile.email}</span>
      </a>
    </section>
  );
}