"use client";

import { profile } from "@/components/data/profile";

export default function CardActions() {
  const handleSaveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${profile.name}
ORG:${profile.company}
TITLE:${profile.role}
TEL;TYPE=CELL:${profile.phone}
EMAIL:${profile.email}
ADR;TYPE=WORK:;;${profile.address};;;;
END:VCARD`;

    const blob = new Blob([vCard], {
      type: "text/vcard;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${profile.name}.vcf`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: profile.name,
          text: `Check out ${profile.name}'s digital visiting card.`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Card link copied!");
      }
    } catch {
      // Share cancelled
    }
  };

  return (
    <section className="px-6 pb-8">
      <div className="rounded-3xl bg-zinc-950 p-5 text-white shadow-xl">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-white/40">
          Keep In Touch
        </p>

        <h2 className="mt-2 text-center text-xl font-bold">
          Save this contact
        </h2>

        <p className="mx-auto mt-2 max-w-xs text-center text-sm leading-5 text-white/40">
          Keep my details with you and share this card whenever you need.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {/* Save */}
          <button
            type="button"
            onClick={handleSaveContact}
            className="group rounded-2xl bg-white px-4 py-4 text-sm font-bold text-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
          >
            <span className="mr-2 transition-transform duration-300 group-hover:scale-110 inline-block">
              ↓
            </span>
            Save Contact
          </button>

          {/* Share */}
          <button
            type="button"
            onClick={handleShare}
            className="group rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 active:scale-95"
          >
            <span className="mr-2 transition-transform duration-300 group-hover:scale-110 inline-block">
              ↗
            </span>
            Share Card
          </button>
        </div>
      </div>
    </section>
  );
}