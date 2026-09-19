import Image from "next/image";
import { profile } from "@/components/data/profile";

export default function ProfileHeader() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 pb-8 pt-6 text-white">
      {/* Background Glow */}
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-zinc-500/20 blur-3xl" />

      {/* Decorative Lines */}
      <div className="absolute right-6 top-6 h-16 w-16 rounded-full border border-white/10" />
      <div className="absolute right-10 top-10 h-8 w-8 rounded-full border border-white/10" />

      <div className="relative">
        {/* Profile Image */}
        <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-white/20 bg-zinc-800 shadow-2xl animate-profile-glow">
          <Image
            src="/images/profile-new.jpg"
            alt={profile.name}
            width={112}
            height={112}
            priority
            className="h-full w-full object-cover transition duration-700 hover:scale-110"
          />
        </div>

        {/* Status */}
        <div className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

          <span className="text-[11px] font-medium text-white/80">
            Available for business
          </span>
        </div>

        {/* Name */}
        <h1 className="mt-5 text-center text-3xl font-bold tracking-tight">
          {profile.name}
        </h1>

        {/* Role */}
        <p className="mt-1 text-center text-sm font-medium text-white/60">
          {profile.role}
        </p>

        {/* Company */}
        <p className="mt-2 text-center text-sm font-semibold text-white/90">
          {profile.company}
        </p>

        {/* Bio */}
        <p className="mx-auto mt-4 max-w-xs text-center text-sm leading-6 text-white/50">
          {profile.bio}
        </p>

        {/* Location */}
        <div className="mt-5 flex justify-center">
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60 backdrop-blur-md">
            📍 {profile.address}
          </div>
        </div>
      </div>
    </section>
  );
}