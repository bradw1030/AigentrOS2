"use client";

import Link from "next/link";

interface CTAButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  onClick?: () => void;
}

export default function CTAButton({
  label,
  href,
  variant = "primary",
  external = false,
  onClick,
}: CTAButtonProps) {
  const isPrimary = variant === "primary";

  const style: React.CSSProperties = {
    fontFamily: "var(--font-dm-sans), sans-serif",
    fontWeight: 600,
    fontSize: "0.9375rem",
    padding: "0.75rem 1.75rem",
    borderRadius: "9999px",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s, box-shadow 0.2s, opacity 0.2s",
    cursor: "pointer",
    border: isPrimary ? "none" : "2px solid var(--text-secondary)",
    backgroundColor: isPrimary ? "var(--accent-orange)" : "transparent",
    color: isPrimary ? "var(--bg-primary)" : "var(--text-primary)",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.transform = "scale(1.04)";
    if (isPrimary) el.style.boxShadow = "0 0 24px var(--accent-orange-muted)";
    else el.style.borderColor = "var(--accent-orange)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.transform = "scale(1)";
    el.style.boxShadow = "none";
    if (!isPrimary) el.style.borderColor = "var(--text-secondary)";
  };

  if (onClick) {
    return (
      <button
        onClick={onClick}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label}
      </button>
    );
  }

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </Link>
  );
}
