import Image from "next/image";
import { profile } from "@/components/data/profile";

type Theme = {
  name: string;
  primary: string;
  accent: string;
  background: string;
};

type ClientData = {
  name: string;
  company: string | null;
  role: string | null;
  bio: string | null;
  address: string | null;
  profile_image: string | null;
};

type ProfileHeaderProps = {
  theme: Theme;
  client?: ClientData;
};

export default function ProfileHeader({
  theme,
  client,
}: ProfileHeaderProps) {
  const displayName = client?.name || profile.name;
  const displayCompany = client?.company || profile.company;
  const displayRole = client?.role || profile.role;
  const displayBio = client?.bio || profile.bio;
  const displayAddress = client?.address || profile.address;
  const displayImage = client?.profile_image || "/images/profile-new.jpg";

  return (
    <section
      className="relative overflow-hidden px-6 pb-8 pt-6 text-white transition-colors duration-500"
      style={{
        backgroundColor: theme.primary,
      }}
    >
      {/* Background Glow */}
      <div
        className="absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl"
        style={{ backgroundColor: `${theme.accent}25` }}
      />

      <div
        className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full blur-3xl"
        style={{ backgroundColor: `${theme.background}20` }}
      />

      {/* Decorative Lines */}
      <div
        className="absolute right-6 top-6 h-16 w-16 rounded-full border"
        style={{ borderColor: `${theme.accent}40` }}
      />

      <div
        className="absolute right-10 top-10 h-8 w-8 rounded-full border"
        style={{ borderColor: `${theme.accent}40` }}
      />

      <div className="relative">
        {/* Profile Image */}
        <div
          className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 shadow-2xl animate-profile-glow"
          style={{
            borderColor: `${theme.accent}80`,
            backgroundColor: theme.primary,
          }}
        >
          <Image
            src={displayImage}
            alt={displayName}
            width={112}
            height={112}
            priority
            className="h-full w-full object-cover transition duration-700 hover:scale-110"
          />
        </div>

        {/* Status */}
        <div
          className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-md"
          style={{
            borderColor: `${theme.accent}40`,
            backgroundColor: `${theme.background}15`,
          }}
        >
          <span
            className="h-2 w-2 animate-pulse rounded-full"
            style={{ backgroundColor: theme.accent }}
          />

          <span className="text-[11px] font-medium text-white/80">
            Available for business
          </span>
        </div>

        {/* Name */}
        <h1 className="mt-5 text-center text-3xl font-bold tracking-tight">
          {displayName}
        </h1>

        {/* Role */}
        <p className="mt-1 text-center text-sm font-medium text-white/60">
          {displayRole}
        </p>

        {/* Company */}
        <p
          className="mt-2 text-center text-sm font-semibold"
          style={{ color: theme.accent }}
        >
          {displayCompany}
        </p>

        {/* Bio */}
        <p className="mx-auto mt-4 max-w-xs text-center text-sm leading-6 text-white/50">
          {displayBio}
        </p>

        {/* Location */}
        <div className="mt-5 flex justify-center">
          <div
            className="rounded-full border px-4 py-2 text-xs backdrop-blur-md"
            style={{
              borderColor: `${theme.accent}30`,
              backgroundColor: `${theme.background}10`,
              color: `${theme.background}99`,
            }}
          >
            📍 {displayAddress}
          </div>
        </div>
      </div>
    </section>
  );
}