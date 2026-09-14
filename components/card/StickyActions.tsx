"use client";

import { profile } from "@/components/data/profile";

export default function StickyActions() {
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
      // User cancelled sharing
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/95 p-2 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${profile.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white px-3 py-3 text-xs font-bold text-zinc-900 transition active:scale-95"
        >
          <span>💬</span>
          <span>WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href={`tel:${profile.phone}`}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/10 px-3 py-3 text-xs font-bold text-white transition active:scale-95"
        >
          <span>📞</span>
          <span>Call</span>
        </a>

        {/* Share */}
        <button
          type="button"
          onClick={handleShare}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/10 px-3 py-3 text-xs font-bold text-white transition active:scale-95"
        >
          <span>↗</span>
          <span>Share</span>
        </button>

      </div>
    </div>
  );
}