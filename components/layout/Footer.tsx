"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const links = [
    { label: "Potential", href: "/#potential" },
    { label: "Automations", href: "/#automations" },
    { label: "System", href: "/#system" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "3rem 1.5rem 2rem",
      }}
    >
      <div
        className="max-w-[1200px] mx-auto"
        style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "2rem", alignItems: "start" }}
      >
        {/* Left: Logo + tagline */}
        <div>
          <div className="flex items-center gap-1 mb-2">
            <span
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 800,
                fontSize: "1.125rem",
                color: "var(--text-heading)",
              }}
            >
              AIgentr
            </span>
            <span
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 800,
                fontSize: "1.125rem",
                color: "var(--accent-orange)",
              }}
            >
              OS
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "0.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
                maxWidth: "200px",
                lineHeight: 1.6,
              }}
            >
              The AI Operating System for Modern Insurance Agencies
            </p>
            <Image
              src="/images/RobotAgentr.png"
              alt=""
              width={36}
              height={36}
              style={{ objectFit: "contain", opacity: 0.35, flexShrink: 0 }}
            />
          </div>
        </div>

        {/* Center: Nav links */}
        <nav className="flex flex-col items-center gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-secondary)")
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Built by */}
        <div className="flex justify-end">
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
              textAlign: "right",
              lineHeight: 1.8,
            }}
          >
            Site Built<br />by<br />Brad & Claude Code
          </p>
        </div>
      </div>

      {/* Bottom line */}
      <div
        className="max-w-[1200px] mx-auto mt-8 pt-6"
        style={{ borderTop: "1px solid var(--border-subtle)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.75rem",
            color: "var(--text-secondary)",
            opacity: 0.6,
            textAlign: "center",
          }}
        >
          AIgentr OS is a framework concept and consulting platform.
        </p>
      </div>
    </footer>
  );
}
