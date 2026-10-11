import { template1Themes } from "@/components/data/themes";

type Theme = (typeof template1Themes)[keyof typeof template1Themes];

type FooterProps = {
  theme: Theme;
};

export default function Footer({ theme }: FooterProps) {
  return (
    <footer
      className="border-t px-6 py-7 transition-colors duration-500"
      style={{
        backgroundColor: theme.background,
        borderColor: `${theme.accent}25`,
      }}
    >
      <div className="flex flex-col items-center text-center">
        {/* Brand mark */}
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold shadow-lg transition-colors duration-500"
          style={{
            backgroundColor: theme.primary,
            color: theme.background,
          }}
        >
          DC
        </div>

        <p
          className="mt-3 text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: theme.primary }}
        >
          Digital Visiting Card
        </p>

        <p
          className="mt-1 text-[11px]"
          style={{ color: `${theme.primary}60` }}
        >
          Connect • Share • Grow
        </p>

        <div
          className="mt-5 h-px w-12"
          style={{
            backgroundColor: theme.accent,
          }}
        />

        <p
          className="mt-4 text-[10px]"
          style={{ color: `${theme.primary}40` }}
        >
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}