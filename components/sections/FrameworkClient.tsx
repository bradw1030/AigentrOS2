"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pillars = [
  {
    id: "sales",
    number: "01",
    name: "Sales",
    color: "#FF6B2B",
    glow: "rgba(255,107,43,0.5)",
    tagline: "More time selling. Better pipeline.",
    skills: [
      "Prospect research & data enrichment pulled automatically",
      "Trigger & signal monitoring — hiring surges, renewals, expansions",
      "AI-drafted personalized outreach ready for producer review",
      "Meeting prep summaries with key insights & objections",
      "Pipeline stage automation & follow-up sequencing",
    ],
  },
  {
    id: "account",
    number: "02",
    name: "Account Mgmt",
    color: "#00D4FF",
    glow: "rgba(0,212,255,0.5)",
    tagline: "Proactive retention. Higher revenue per account.",
    skills: [
      "Renewal date monitoring with automated prep workflows",
      "Coverage gap identification — AI flags unprotected exposures",
      "Cross-sell opportunity alerts based on account changes",
      "Automated account summaries before every client interaction",
      "Proactive outreach triggered by account lifecycle events",
    ],
  },
  {
    id: "marketing",
    number: "03",
    name: "Marketing",
    color: "#A855F7",
    glow: "rgba(168,85,247,0.5)",
    tagline: "Consistent output. Automated lead nurturing.",
    skills: [
      "Content generation & multi-channel scheduling automation",
      "Campaign workflows built once, running continuously",
      "Lead nurturing sequences with smart branching logic",
      "Inbound lead routing, tagging & CRM enrichment",
      "Social media automation with on-brand voice control",
    ],
  },
  {
    id: "service",
    number: "04",
    name: "Service",
    color: "#22C55E",
    glow: "rgba(34,197,94,0.5)",
    tagline: "Faster response. Lighter workload.",
    skills: [
      "Document summarization — policies, endorsements, certs",
      "Request triage & intelligent routing by type and urgency",
      "Automated responses to routine questions & status updates",
      "Certificate processing automation with error reduction",
      "Policy endorsement extraction & key term flagging",
    ],
  },
  {
    id: "analytics",
    number: "05",
    name: "Analytics",
    color: "#A8FF3E",
    glow: "rgba(168,255,62,0.5)",
    tagline: "Performance clarity. Continuous improvement.",
    skills: [
      "Sales call transcription, scoring & insight extraction",
      "Live pipeline performance dashboards by producer & stage",
      "Account profitability tracking surfaced automatically",
      "Conversion rate monitoring with trend detection",
      "System-wide performance loops — smarter with every cycle",
    ],
  },
];

// ── Gear ──────────────────────────────────────────────────────────────
function Gear({ size = 80, color = "#181818", stroke = "#2A2A2A", speed = 20, reverse = false, teeth = 9 }: {
  size?: number; color?: string; stroke?: string; speed?: number; reverse?: boolean; teeth?: number;
}) {
  const cx = 50, cy = 50, outerR = 43, innerR = 31, holeR = 11;
  let path = "";
  for (let i = 0; i < teeth; i++) {
    const a1 = (i / teeth) * Math.PI * 2 - Math.PI / 2;
    const a2 = ((i + 0.32) / teeth) * Math.PI * 2 - Math.PI / 2;
    const a3 = ((i + 0.68) / teeth) * Math.PI * 2 - Math.PI / 2;
    const a4 = ((i + 1) / teeth) * Math.PI * 2 - Math.PI / 2;
    const p = (r: number, a: number) => ({ x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) });
    const [p1, p2, p3, p4] = [p(innerR, a1), p(outerR, a2), p(outerR, a3), p(innerR, a4)];
    if (i === 0) path += `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}`;
    path += ` L ${p2.x.toFixed(1)} ${p2.y.toFixed(1)} L ${p3.x.toFixed(1)} ${p3.y.toFixed(1)} L ${p4.x.toFixed(1)} ${p4.y.toFixed(1)}`;
  }
  path += " Z";
  return (
    <svg width={size} height={size} viewBox="0 0 100 100"
      style={{ display: "block", flexShrink: 0 }}>
      <path d={path} fill={color} stroke={stroke} strokeWidth="1" />
      <circle cx={cx} cy={cy} r={holeR} fill="#050505" stroke={stroke} strokeWidth="1" />
      <circle cx={cx} cy={cy} r={3} fill={stroke} />
    </svg>
  );
}

// ── LED ───────────────────────────────────────────────────────────────
function LED({ color, pulse = false }: { color: string; pulse?: boolean }) {
  return (
    <motion.div
      style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: color, boxShadow: `0 0 6px ${color}`, flexShrink: 0 }}
      animate={pulse ? { opacity: [1, 0.2, 1] } : {}}
      transition={pulse ? { duration: 1.6, repeat: Infinity } : {}} />
  );
}

// ── Lever ─────────────────────────────────────────────────────────────
function Lever({ label }: { label: string }) {
  const [on, setOn] = useState(() => Math.random() > 0.4);
  return (
    <div onClick={() => setOn(v => !v)} style={{ cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
      <div style={{ width: 13, height: 34, backgroundColor: "#080808", border: "1px solid #2A2A2A", borderRadius: 3, position: "relative", display: "flex", justifyContent: "center" }}>
        <motion.div animate={{ top: on ? 2 : 18 }} transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{ position: "absolute", width: 9, height: 13, background: on ? "linear-gradient(#A8FF3E,#6ACC20)" : "linear-gradient(#333,#1A1A1A)", borderRadius: 2, boxShadow: on ? "0 0 6px rgba(168,255,62,0.6)" : "none" }} />
      </div>
      <span style={{ fontSize: "0.42rem", color: "#3A3A3A", fontFamily: "monospace", letterSpacing: "0.1em" }}>{label}</span>
    </div>
  );
}

// ── Blinking cursor ────────────────────────────────────────────────────
function Cursor({ color = "#333" }: { color?: string }) {
  const [vis, setVis] = useState(true);
  useEffect(() => { const t = setInterval(() => setVis(v => !v), 550); return () => clearInterval(t); }, []);
  return <span style={{ display: "inline-block", width: 8, height: 15, backgroundColor: vis ? color : "transparent", verticalAlign: "middle", marginLeft: 2 }} />;
}

// ── Display screen ────────────────────────────────────────────────────
function DisplayScreen({ pillar }: { pillar: typeof pillars[0] | undefined }) {
  return (
    <div style={{
      position: "relative",
      backgroundColor: "#030806",
      border: "1.5px solid #111",
      borderRadius: 6,
      overflow: "hidden",
      minHeight: 230,
      boxShadow: "inset 0 0 40px rgba(0,0,0,0.8), inset 0 0 1px rgba(255,255,255,0.03)",
    }}>
      {/* Scanlines overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2,
        backgroundImage: "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(0,0,0,0.18) 3px, rgba(0,0,0,0.18) 4px)",
      }} />

      {/* Subtle screen glare */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "40%", pointerEvents: "none", zIndex: 3,
        background: "linear-gradient(180deg, rgba(255,255,255,0.015) 0%, transparent 100%)",
      }} />

      {/* Color tint when active */}
      {pillar && (
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
          background: `radial-gradient(ellipse at 30% 30%, ${pillar.color}10 0%, transparent 65%)`,
        }} />
      )}

      {/* Content */}
      <div style={{ position: "relative", zIndex: 4, padding: "1.25rem 1.5rem" }}>
        <AnimatePresence mode="wait">
          {!pillar ? (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <p style={{ fontFamily: "monospace", fontSize: "0.65rem", color: "#444", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                // AIGENTROS OPERATIONAL MATRIX v1.0
              </p>
              <p style={{ fontFamily: "monospace", fontSize: "0.65rem", color: "#3A3A3A", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                // SYSTEM ONLINE — AWAITING PILLAR SELECTION
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#A8FF3E", letterSpacing: "0.12em", fontWeight: 600 }}>↓ CLICK A PILLAR BUTTON TO INITIALIZE</span>
                <Cursor color="#A8FF3E" />
              </div>
            </motion.div>
          ) : (
            <motion.div key={pillar.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.4rem" }}>
                <LED color={pillar.color} pulse />
                <span style={{ fontFamily: "monospace", fontSize: "0.6rem", color: pillar.color, letterSpacing: "0.12em" }}>
                  // PILLAR {pillar.number} — ACTIVE
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#fff", marginBottom: "0.2rem", letterSpacing: "-0.01em" }}>
                {pillar.name}
              </h3>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.875rem", color: pillar.color, fontWeight: 500, marginBottom: "0.875rem" }}>
                {pillar.tagline}
              </p>
              <div style={{ height: 1, background: `linear-gradient(90deg, ${pillar.color}55, transparent)`, marginBottom: "0.875rem" }} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {pillar.skills.map((skill, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                    style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: pillar.color, fontSize: "0.65rem", flexShrink: 0, marginTop: 4 }}>▶</span>
                    <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.875rem", color: "#999", lineHeight: 1.45 }}>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── Pillar button ─────────────────────────────────────────────────────
function PillarButton({ pillar, active, onClick }: { pillar: typeof pillars[0]; active: boolean; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.96, y: 2 }}
      style={{
        background: active
          ? `linear-gradient(160deg, ${pillar.color}45 0%, ${pillar.color}20 100%)`
          : `linear-gradient(160deg, ${pillar.color}18 0%, ${pillar.color}08 100%)`,
        border: `1.5px solid ${active ? pillar.color : pillar.color + "70"}`,
        borderRadius: 4,
        clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
        cursor: "pointer",
        padding: "1rem 0.625rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 7,
        width: "100%",
        boxShadow: active
          ? `0 0 36px ${pillar.glow}, 0 0 12px ${pillar.glow}, inset 0 0 20px ${pillar.color}25, inset 0 2px 4px rgba(0,0,0,0.5)`
          : `0 0 10px ${pillar.color}22, inset 0 2px 6px rgba(0,0,0,0.6)`,
        transition: "box-shadow 0.2s, border-color 0.2s, background 0.2s",
      }}
    >
      <LED color={pillar.color} pulse={active} />
      <span style={{ fontFamily: "monospace", fontSize: "0.52rem", color: pillar.color, letterSpacing: "0.15em", opacity: active ? 1 : 0.7 }}>
        {pillar.number}
      </span>
      <span style={{
        fontFamily: "var(--font-syne), sans-serif",
        fontWeight: 700,
        fontSize: "0.78rem",
        color: pillar.color,
        opacity: active ? 1 : 0.75,
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        lineHeight: 1.2,
      }}>
        {pillar.name}
      </span>
      <div style={{
        width: "75%", height: 3, borderRadius: 2,
        backgroundColor: active ? pillar.color : "#141414",
        boxShadow: active ? `0 0 10px ${pillar.glow}` : "none",
        transition: "background 0.2s, box-shadow 0.2s",
      }} />
    </motion.button>
  );
}

// ── Main export ───────────────────────────────────────────────────────
export default function FrameworkClient() {
  const [active, setActive] = useState<string | null>(null);
  const activePillar = pillars.find(p => p.id === active);
  const toggle = (id: string) => setActive(prev => prev === id ? null : id);

  return (
    <section style={{ padding: "5rem 1.5rem 6rem" }}>
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "var(--accent-lime)", letterSpacing: "0.1em", marginBottom: "0.875rem" }}>
            // THE FRAMEWORK
          </p>
          <h2 style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3.25rem)",
            color: "var(--text-heading)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "0.875rem",
          }}>
            5 Pillars.<br />
            <span style={{ background: "linear-gradient(135deg, #FF6B2B, #A8FF3E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              1 System.
            </span>
            <br />
            Unlimited Potential.
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "1rem", color: "var(--text-secondary)" }}>
            Select a pillar to explore its capabilities.
          </p>
        </div>

        {/* ── Machine ── */}
        <div style={{
          background: "linear-gradient(180deg, #0D0D0D 0%, #070707 100%)",
          border: "1px solid #181818",
          borderRadius: 10,
          boxShadow: "0 0 100px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.04), 0 0 0 1px #050505",
          overflow: "hidden",
          position: "relative",
        }}>
          {/* Top power strip */}
          <div style={{ height: 2, background: "linear-gradient(90deg, transparent 0%, #FF6B2B 30%, #A8FF3E 70%, transparent 100%)", opacity: 0.5 }} />

          {/* Header bar */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0.6rem 1.25rem",
            borderBottom: "1px solid #111",
            background: "linear-gradient(180deg, #111 0%, #0A0A0A 100%)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <LED color="#A8FF3E" pulse />
              <LED color="#FF6B2B" pulse />
              <LED color="#00D4FF" />
              <span style={{ fontFamily: "monospace", fontSize: "0.58rem", color: "#2A2A2A", letterSpacing: "0.15em", marginLeft: 6 }}>
                AIgentrOS — OPERATIONAL CONTROL PANEL
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Mini VU bars */}
              {[0.6, 0.9, 0.4, 0.75, 0.5].map((h, i) => (
                <div key={i} style={{ width: 3, height: h * 22, backgroundColor: "#A8FF3E", borderRadius: 1, opacity: 0.4 }} />
              ))}
              <div style={{ width: 1, height: 16, backgroundColor: "#1A1A1A", margin: "0 4px" }} />
              <div style={{ display: "flex", gap: 4 }}>
                {pillars.map(p => <LED key={p.id} color={active === p.id ? p.color : "#111"} pulse={active === p.id} />)}
              </div>
            </div>
          </div>

          {/* Main panel — 3 columns */}
          <div className="machine-panel" style={{ display: "grid", gridTemplateColumns: "120px 1fr 120px" }}>

            {/* Left sidebar */}
            <div className="machine-sidebar" style={{
              borderRight: "1px solid #111",
              padding: "1.5rem 0.875rem",
              display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem",
              background: "linear-gradient(90deg, #070707 0%, #0D0D0D 100%)",
            }}>
              <Gear size={68} speed={24} />
              <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent, #1A1A1A, transparent)" }} />
              <Gear size={42} speed={15} reverse color="#141414" stroke="#222" />
              {/* Circuit trace SVG */}
              <svg width="80" height="60" viewBox="0 0 80 60" style={{ opacity: 0.4 }}>
                <path d="M 10 0 L 10 20 L 40 20 L 40 40 L 70 40" stroke="#1E1E1E" strokeWidth="1" fill="none" />
                <path d="M 70 0 L 70 10 L 20 10 L 20 60" stroke="#1A1A1A" strokeWidth="1" fill="none" />
                <circle cx="10" cy="20" r="2" fill="#2A2A2A" />
                <circle cx="40" cy="20" r="2" fill="#2A2A2A" />
                <circle cx="40" cy="40" r="2" fill="#2A2A2A" />
              </svg>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "center" }}>
                {["SYS", "NET", "I/O", "MEM"].map(l => <Lever key={l} label={l} />)}
              </div>
            </div>

            {/* Center panel */}
            <div style={{ padding: "1.75rem 1.5rem" }}>
              {/* Circuit trace across top */}
              <svg width="100%" height="20" style={{ display: "block", marginBottom: 12, opacity: 0.35 }}>
                <line x1="0" y1="6"  x2="100%" y2="6"  stroke="#1E1E1E" strokeWidth="1" />
                <line x1="0" y1="12" x2="100%" y2="12" stroke="#181818" strokeWidth="1" />
                <line x1="0" y1="18" x2="100%" y2="18" stroke="#141414" strokeWidth="1" />
              </svg>

              {/* 5 Pillar buttons */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.75rem", marginBottom: "1.25rem" }}>
                {pillars.map(p => (
                  <PillarButton key={p.id} pillar={p} active={active === p.id} onClick={() => toggle(p.id)} />
                ))}
              </div>

              {/* Display screen */}
              <DisplayScreen pillar={activePillar} />

              {/* Circuit trace across bottom */}
              <svg width="100%" height="20" style={{ display: "block", marginTop: 12, opacity: 0.35 }}>
                <line x1="0" y1="4"  x2="100%" y2="4"  stroke="#141414" strokeWidth="1" />
                <line x1="0" y1="10" x2="100%" y2="10" stroke="#181818" strokeWidth="1" />
                <line x1="0" y1="16" x2="100%" y2="16" stroke="#1E1E1E" strokeWidth="1" />
              </svg>
            </div>

            {/* Right sidebar */}
            <div className="machine-sidebar" style={{
              borderLeft: "1px solid #111",
              padding: "1.5rem 0.875rem",
              display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem",
              background: "linear-gradient(270deg, #070707 0%, #0D0D0D 100%)",
            }}>
              <Gear size={48} speed={19} reverse color="#121212" stroke="#1E1E1E" />
              <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent, #1A1A1A, transparent)" }} />
              <Gear size={72} speed={28} color="#0F0F0F" stroke="#1C1C1C" teeth={11} />
              {/* Circuit trace SVG */}
              <svg width="80" height="60" viewBox="0 0 80 60" style={{ opacity: 0.4 }}>
                <path d="M 70 0 L 70 20 L 40 20 L 40 40 L 10 40" stroke="#1E1E1E" strokeWidth="1" fill="none" />
                <path d="M 10 0 L 10 10 L 60 10 L 60 60" stroke="#1A1A1A" strokeWidth="1" fill="none" />
                <circle cx="70" cy="20" r="2" fill="#2A2A2A" />
                <circle cx="40" cy="20" r="2" fill="#2A2A2A" />
                <circle cx="40" cy="40" r="2" fill="#2A2A2A" />
              </svg>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "center" }}>
                {["CPU", "GPU", "DSP", "ALU"].map(l => <Lever key={l} label={l} />)}
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div style={{
            borderTop: "1px solid #111",
            padding: "0.5rem 1.25rem",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: "linear-gradient(180deg, #0A0A0A 0%, #070707 100%)",
          }}>
            <div style={{ flex: 1, maxWidth: 360 }}>
              <svg width="100%" height="14">
                {[2, 7, 12].map((y, i) => (
                  <rect key={i} x="0" y={y} width="100%" height="3" rx="1.5" fill="#0D0D0D" stroke="#161616" strokeWidth="0.5" />
                ))}
              </svg>
            </div>
            <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
              <span style={{ fontFamily: "monospace", fontSize: "0.45rem", color: "#1E1E1E", letterSpacing: "0.1em" }}>STATUS</span>
              {["#A8FF3E", "#A8FF3E", "#FF6B2B", "#111", "#111"].map((c, i) => (
                <LED key={i} color={c} pulse={c !== "#111"} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .machine-panel {
            grid-template-columns: 1fr !important;
          }
          .machine-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
