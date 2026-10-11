"use client";

type Theme = {
  name: string;
  primary: string;
  accent: string;
  background: string;
};

type ClientData = {
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
};

type ContactActionsProps = {
  theme: Theme;
  client?: ClientData;
};

export default function ContactActions({
  theme,
  client,
}: ContactActionsProps) {
  const phone = client?.phone || "";
  const whatsapp = client?.whatsapp || phone;
  const email = client?.email || "";

  const cleanPhone = phone.replace(/\D/g, "");
  const cleanWhatsapp = whatsapp.replace(/\D/g, "");

  return (
    <section
      className="grid grid-cols-3 gap-3 px-5 py-5"
      style={{
        backgroundColor: theme.background,
      }}
    >
      {/* Call */}
      <a
        href={cleanPhone ? `tel:${cleanPhone}` : "#"}
        className="flex flex-col items-center justify-center rounded-2xl border px-3 py-4 transition-all duration-300 hover:-translate-y-1"
        style={{
          borderColor: `${theme.primary}20`,
          backgroundColor: `${theme.primary}08`,
          color: theme.primary,
        }}
      >
        <span className="text-2xl">📞</span>
        <span className="mt-2 text-xs font-bold">Call</span>
      </a>

      {/* WhatsApp */}
      <a
        href={
          cleanWhatsapp
            ? `https://wa.me/${cleanWhatsapp}`
            : "#"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center rounded-2xl border px-3 py-4 transition-all duration-300 hover:-translate-y-1"
        style={{
          borderColor: `${theme.primary}20`,
          backgroundColor: `${theme.primary}08`,
          color: theme.primary,
        }}
      >
        <span className="text-2xl">💬</span>
        <span className="mt-2 text-xs font-bold">WhatsApp</span>
      </a>

      {/* Email */}
      <a
        href={email ? `mailto:${email}` : "#"}
        className="flex flex-col items-center justify-center rounded-2xl border px-3 py-4 transition-all duration-300 hover:-translate-y-1"
        style={{
          borderColor: `${theme.primary}20`,
          backgroundColor: `${theme.primary}08`,
          color: theme.primary,
        }}
      >
        <span className="text-2xl">✉️</span>
        <span className="mt-2 text-xs font-bold">Email</span>
      </a>
    </section>
  );
}