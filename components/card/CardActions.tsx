"use client";

import { profile } from "@/components/data/profile";
import { template1Themes } from "@/components/data/themes";

type Theme = (typeof template1Themes)[keyof typeof template1Themes];

type CardActionsProps = {
  theme: Theme;
};

export default function CardActions({
  theme,
}: CardActionsProps) {
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
      {/* Main Card */}
      <div
        className="rounded-3xl p-5 text-white shadow-xl transition-colors duration-500"
        style={{
          backgroundColor: theme.primary,
        }}
      >
        {/* Heading */}
        <p
          className="text-center text-xs font-medium uppercase tracking-[0.2em]"
          style={{ color: `${theme.background}66` }}
        >
          Keep In Touch
        </p>

        <h2 className="mt-2 text-center text-xl font-bold">
          Save this contact
        </h2>

        <p
          className="mx-auto mt-2 max-w-xs text-center text-sm leading-5"
          style={{ color: `${theme.background}70` }}
        >
          Keep my details with you and share this card whenever you need.
        </p>

        {/* Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          {/* Save Contact */}
          <button
            type="button"
            onClick={handleSaveContact}
            className="group rounded-2xl px-4 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
            style={{
              backgroundColor: theme.background,
              color: theme.primary,
            }}
          >
            <span className="mr-2 inline-block transition-transform duration-300 group-hover:scale-110">
              ↓
            </span>
            Save Contact
          </button>

          {/* Share Card */}
          <button
            type="button"
            onClick={handleShare}
            className="group rounded-2xl border px-4 py-4 text-sm font-bold backdrop-blur-md transition-all duration-300 hover:-translate-y-1 active:scale-95"
            style={{
              backgroundColor: `${theme.background}12`,
              borderColor: `${theme.background}25`,
              color: theme.background,
            }}
          >
            <span className="mr-2 inline-block transition-transform duration-300 group-hover:scale-110">
              ↗
            </span>
            Share Card
          </button>
        </div>
      </div>
    </section>
  );
}