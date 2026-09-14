export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white px-6 py-7">
      <div className="flex flex-col items-center text-center">
        {/* Brand mark */}
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white shadow-lg">
          DC
        </div>

        <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-700">
          Digital Visiting Card
        </p>

        <p className="mt-1 text-[11px] text-zinc-400">
          Connect • Share • Grow
        </p>

        <div className="mt-5 h-px w-12 bg-zinc-200" />

        <p className="mt-4 text-[10px] text-zinc-300">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}