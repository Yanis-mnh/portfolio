import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const skills = [
  { label: "Python", y: 56 },
  { label: "React", y: 116 },
  { label: "Next.js", y: 176 },
  { label: "Tailwind CSS", y: 236 },
  { label: "SQL", y: 296 },
  { label: "Supabase", y: 356 },
  { label: "Godot", y: 416 },
];

function CornerMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      className={`hidden opacity-30 sm:block ${className}`}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="var(--border)"
        strokeWidth="1"
      />
      <line
        x1="12"
        y1="1"
        x2="12"
        y2="23"
        stroke="var(--border)"
        strokeWidth="1"
      />
      <line
        x1="1"
        y1="12"
        x2="23"
        y2="12"
        stroke="var(--border)"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable} relative min-h-[calc(100vh-var(--navbar-height,4rem))] overflow-hidden bg-background font-(family-name:--font-body)`}
      style={{
        backgroundImage:
          "linear-gradient(color-mix(in oklch, var(--border) 40%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklch, var(--border) 40%, transparent) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <style>{`
        @keyframes travel {
          0% { transform: translateY(0); }
          100% { transform: translateY(420px); }
        }
        @keyframes softPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .pulse-dot { animation: travel 3s ease-in-out infinite alternate; }
        .status-dot { animation: softPulse 2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .pulse-dot, .status-dot { animation: none; }
        }
      `}</style>

      {/* registration marks */}
      <CornerMark className="absolute left-6 top-6" />
      <CornerMark className="absolute right-6 top-6" />
      <CornerMark className="absolute bottom-6 left-6" />
      <CornerMark className="absolute bottom-6 right-6" />

      <div className="mx-auto flex min-h-[calc(100vh-var(--navbar-height,4rem))] max-w-6xl flex-col justify-center px-6 py-24 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* left column */}
          <div>
            <h1 className="font-(family-name:--font-display) text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              Hello, I&apos;m <span className="text-primary">Yanis</span>{" "}
            </h1>

            <p className="mt-6 max-w-xl font-(family-name:--font-display) text-xl text-foreground">
              Computer Engineering graduate and Full-Stack Developer passionate
              about building modern, scalable web applications.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              I specialize in Next.js, React, TypeScript, PostgreSQL, and modern
              web technologies, transforming ideas into intuitive and
              high-performance digital products. I enjoy solving complex
              problems, learning new technologies, and creating solutions that
              deliver real value to users and businesses.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-md bg-primary px-6 py-3 font-mono text-sm tracking-wide text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                View my work
              </a>
              <Link
                href="mailto:mounnah.yanis@gmail.com"
                className="rounded-md border border-border px-6 py-3 font-mono text-sm tracking-wide text-foreground transition-colors hover:border-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* right column stack schema */}
          <div className="mx-auto w-full max-w-xs lg:mx-0">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Stack schema
            </p>
            <div className="rounded-lg border border-border bg-card p-5 shadow-[0_8px_24px_-12px_color-mix(in_oklch,var(--foreground)_20%,transparent)]">
              <svg
                viewBox="0 0 260 470"
                className="w-full"
                role="img"
                aria-label="Diagram of Yanis's technology stack: Python, React, Next.js, Tailwind CSS, SQL, Supabase, Godot"
              >
                {/* hub */}
                <rect
                  x="14"
                  y="8"
                  width="12"
                  height="12"
                  rx="2"
                  fill="var(--foreground)"
                />
                <text
                  x="34"
                  y="17"
                  fontFamily="var(--font-mono)"
                  fontSize="10"
                  letterSpacing="1"
                  fill="var(--foreground)"
                >
                  YANIS.STACK
                </text>

                {/* bus */}
                <line
                  x1="20"
                  y1="20"
                  x2="20"
                  y2="440"
                  stroke="var(--border)"
                  strokeWidth="1.25"
                />

                {/* ground terminator */}
                <line
                  x1="12"
                  y1="440"
                  x2="28"
                  y2="440"
                  stroke="var(--border)"
                  strokeWidth="1.25"
                />
                <line
                  x1="15"
                  y1="445"
                  x2="25"
                  y2="445"
                  stroke="var(--border)"
                  strokeWidth="1.25"
                />
                <line
                  x1="17.5"
                  y1="450"
                  x2="22.5"
                  y2="450"
                  stroke="var(--border)"
                  strokeWidth="1.25"
                />

                {/* traveling signal */}
                <circle
                  className="pulse-dot"
                  cx="20"
                  cy="20"
                  r="4"
                  fill="var(--primary)"
                />

                {skills.map((s) => (
                  <g key={s.label}>
                    <line
                      x1="20"
                      y1={s.y}
                      x2="76"
                      y2={s.y}
                      stroke="var(--border)"
                      strokeWidth="1.25"
                    />
                    <circle
                      cx="20"
                      cy={s.y}
                      r="3"
                      fill="var(--background)"
                      stroke="var(--border)"
                      strokeWidth="1.25"
                    />
                    <rect
                      x="76"
                      y={s.y - 16}
                      width="140"
                      height="32"
                      rx="6"
                      fill="var(--muted)"
                      stroke="var(--border)"
                      strokeWidth="1"
                    />
                    <text
                      x="146"
                      y={s.y + 4}
                      textAnchor="middle"
                      fontFamily="var(--font-mono)"
                      fontSize="12"
                      fill="var(--foreground)"
                    >
                      {s.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
