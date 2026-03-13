"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        paddingTop: "5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingBottom: "5rem",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(237,217,189,0.65) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Orange glow — top right */}
      <div style={{
        position: "absolute",
        top: "-120px",
        right: "-80px",
        width: "640px",
        height: "640px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,85,0,0.08) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Lime glow — bottom left */}
      <div style={{
        position: "absolute",
        bottom: "-60px",
        left: "-60px",
        width: "420px",
        height: "420px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(56,176,0,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Wave divider into next section */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0, pointerEvents: "none" }}>
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" style={{ width: "100%", height: "72px", display: "block" }}>
          <path d="M0,36 C320,72 760,0 1100,48 C1240,64 1360,52 1440,44 L1440,72 L0,72 Z" fill="var(--bg-secondary)" fillOpacity="1" />
        </svg>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0",
          display: "grid",
          gridTemplateColumns: "46% 54%",
          gap: "0",
          alignItems: "center",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left: Text */}
        <div style={{ paddingRight: "2rem" }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              lineHeight: 1.1,
              color: "var(--text-heading)",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            The{" "}
            <span className="gradient-text">AI Operating System</span>
            <br />
            for Modern Insurance Agencies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "1.125rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: "1.25rem",
            }}
          >
            AgentrOS leverages AI agents & automation to transform the way
            insurance agencies sell, service, and scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginBottom: "2.5rem",
              paddingLeft: "1rem",
              borderLeft: "2px solid var(--border-subtle)",
            }}
          >
            {[
              { text: "Empower your people.", color: "var(--text-heading)" },
              { text: "Create efficiency.", color: "var(--accent-orange)" },
              { text: "Drive growth.", color: "var(--accent-lime)" },
            ].map(({ text, color }, i) => (
              <motion.span
                key={text}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color,
                  letterSpacing: "0.01em",
                }}
              >
                {text}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}
          >
            <CTAButton label="Explore the Framework" href="/framework" variant="primary" />
            <CTAButton label="Book a Discovery Call" href="/contact" variant="secondary" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "0.75rem",
              color: "var(--text-secondary)",
              opacity: 0.7,
            }}
          >
            // Producer built. Agency approved.
          </motion.p>
        </div>

        {/* Right: Robot — cropped to show only the character */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/Robot3FinalNow.png"
            alt="AIgentr OS Robot Mascot"
            style={{
              width: "100%",
              maxWidth: "520px",
              height: "auto",
              objectFit: "contain",
              maskImage: "radial-gradient(ellipse 85% 90% at 50% 50%, black 60%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 85% 90% at 50% 50%, black 60%, transparent 100%)",
            }}
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
