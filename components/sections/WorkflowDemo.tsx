"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  { number: "01", line1: "Prospect & ICP",        line2: "Identification" },
  { number: "02", line1: "Detailed Intelligence",  line2: "Gathered" },
  { number: "03", line1: "Personalized",           line2: "Outreach" },
  { number: "04", line1: "Automated Follow-up",    line2: "& Drip Campaigns" },
  { number: "05", line1: "Lead Filtering &",       line2: "Marketing Funnels" },
  { number: "06", line1: "Producer-Led",           line2: "1st Meeting" },
  { number: "07", line1: "Meeting Recorded",       line2: "& Summarized" },
  { number: "08", line1: "Data & Results",         line2: "Tracked & Analyzed" },
  { number: "09", line1: "Systems Enhanced —",     line2: "Results Improve" },
];

const N   = steps.length;
const CX  = 420, CY = 420, VS = 840;
const R   = 265;
const NRd = 40;
const NRa = 72;

function angle(i: number) {
  return -Math.PI / 2 + (i * 2 * Math.PI) / N;
}
function nodeXY(i: number) {
  const a = angle(i);
  return { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) };
}
function color(i: number) {
  const t = i / (N - 1);
  return `rgb(${Math.round(255 + t*(168-255))},${Math.round(107 + t*(255-107))},${Math.round(43 + t*(62-43))})`;
}
function chevronPath(i: number): string {
  const a  = angle(i) + Math.PI / N;
  const px = CX + R * Math.cos(a);
  const py = CY + R * Math.sin(a);
  const tx = -Math.sin(a);
  const ty =  Math.cos(a);
  const nx =  Math.cos(a);
  const ny =  Math.sin(a);
  const s  = 10;
  const tip = { x: px + s * tx,                        y: py + s * ty };
  const lft = { x: px - s * 0.45 * tx + s * 0.6 * nx, y: py - s * 0.45 * ty + s * 0.6 * ny };
  const rgt = { x: px - s * 0.45 * tx - s * 0.6 * nx, y: py - s * 0.45 * ty - s * 0.6 * ny };
  return `M ${tip.x.toFixed(1)} ${tip.y.toFixed(1)} L ${lft.x.toFixed(1)} ${lft.y.toFixed(1)} L ${rgt.x.toFixed(1)} ${rgt.y.toFixed(1)} Z`;
}

export default function WorkflowDemo() {
  const [active, setActive] = useState<number | null>(null);

  const step      = active !== null ? steps[active] : null;
  const stepColor = active !== null ? color(active) : "#FF6B2B";

  return (
    <section
      id="system"
      style={{
        padding: "6rem 1.5rem",
        backgroundColor: "#0E0905",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow behind flywheel */}
      <div style={{
        position: "absolute",
        top: "50%",
        right: "0",
        transform: "translateY(-50%)",
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,107,43,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="max-w-[1200px] mx-auto workflow-grid" style={{
        display: "grid",
        gridTemplateColumns: "3fr 7fr",
        gap: "4rem",
        alignItems: "center",
      }}>

        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel text="// THE SYSTEM" color="orange" />
          <h2 style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.875rem, 3vw, 2.75rem)",
            color: "#F5F0E8",
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}>
            <span style={{ color: "#FF6B2B" }}>Act.</span><br />
            <span style={{ color: "#F5F0E8" }}>Track.</span><br />
            <span style={{ color: "#A8FF3E" }}>Review.</span><br />
            <span style={{ color: "#F5F0E8" }}>Improve.</span>
          </h2>

          <p style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "1.0625rem",
            color: "rgba(245,240,232,0.65)",
            lineHeight: 1.75,
            marginBottom: "2.5rem",
          }}>
            A closed-loop system that compounds over time. Each step feeds the next — intelligence improves outreach, outreach drives meetings, meetings generate data, data sharpens the system.
          </p>

          {/* Step list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {steps.map((s, i) => {
              const c = color(i);
              const isActive = active === i;
              return (
                <motion.div
                  key={i}
                  onHoverStart={() => setActive(i)}
                  onHoverEnd={() => setActive(null)}
                  onClick={() => setActive(active === i ? null : i)}
                  animate={{ x: isActive ? 6 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    cursor: "pointer",
                    padding: "0.5rem 0.75rem",
                    borderRadius: "0.5rem",
                    backgroundColor: isActive ? "rgba(255,107,43,0.1)" : "transparent",
                    border: `1px solid ${isActive ? "rgba(255,107,43,0.3)" : "transparent"}`,
                    transition: "background-color 0.2s, border-color 0.2s",
                  }}
                >
                  <span style={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    color: c,
                    minWidth: "2rem",
                  }}>{s.number}</span>
                  <span style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.9375rem",
                    color: isActive ? "#F5F0E8" : "rgba(245,240,232,0.55)",
                    transition: "color 0.2s",
                  }}>{s.line1} {s.line2}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: Flywheel SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ width: "100%", maxWidth: 879, margin: "0 auto" }}
        >
          <svg viewBox={`0 0 ${VS} ${VS}`} width="100%" style={{ display: "block" }}>
            <defs>
              <radialGradient id="wBg" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor="#FF5500" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#FF5500" stopOpacity="0" />
              </radialGradient>
              <filter id="wGlow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="10" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="wNodeGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="6" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            {/* BG glow */}
            <circle cx={CX} cy={CY} r={360} fill="url(#wBg)" />

            {/* Animated flowing ring */}
            <motion.circle
              cx={CX} cy={CY} r={R}
              fill="none" stroke="rgba(255,107,43,0.45)" strokeWidth="1.5" strokeDasharray="7 14"
              animate={{ strokeDashoffset: [0, -630] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />

            {/* Outer halo */}
            <circle cx={CX} cy={CY} r={R + 28}
              fill="none" stroke="rgba(255,107,43,0.18)" strokeWidth="1" />

            {/* Inner halo */}
            <circle cx={CX} cy={CY} r={R - 28}
              fill="none" stroke="rgba(168,255,62,0.1)" strokeWidth="1" />

            {/* Clockwise flow chevrons */}
            {steps.map((_, i) => (
              <path
                key={`chev-${i}`}
                d={chevronPath(i)}
                fill={color(i)}
                opacity="0.85"
              />
            ))}

            {/* ── CENTER ── */}
            <motion.circle
              cx={CX} cy={CY} r={110}
              fill="#1A1008"
              animate={{ stroke: stepColor, strokeOpacity: 0.9 }}
              transition={{ duration: 0.3 }}
              strokeWidth="2"
            />
            <circle cx={CX} cy={CY} r={100}
              fill="none" stroke="#38B000" strokeWidth="0.8" strokeOpacity="0.4" />

            {/* Default center label */}
            <motion.g
              animate={{ opacity: active === null ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <text x={CX} y={CY - 14} textAnchor="middle"
                fill="#FF6B2B" fontSize="17" fontWeight="700"
                fontFamily="monospace" letterSpacing="3">
                AIgentr
              </text>
              <text x={CX} y={CY + 8} textAnchor="middle"
                fill="#A8FF3E" fontSize="17" fontWeight="700"
                fontFamily="monospace" letterSpacing="3">
                OS
              </text>
              <text x={CX} y={CY + 30} textAnchor="middle"
                fill="rgba(245,240,232,0.4)" fontSize="10" fontFamily="monospace" letterSpacing="2">
                FLYWHEEL
              </text>
            </motion.g>

            {/* Active step center detail */}
            <motion.g
              key={active ?? "none"}
              animate={{ opacity: active !== null ? 1 : 0 }}
              transition={{ duration: 0.25 }}
            >
              {step && (
                <>
                  <text x={CX} y={CY - 32} textAnchor="middle"
                    fill={stepColor} fontSize="42" fontWeight="700"
                    fontFamily="monospace" letterSpacing="1">
                    {step.number}
                  </text>
                  <text x={CX} y={CY + 10} textAnchor="middle"
                    fill="#F5F0E8" fontSize="16"
                    fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600">
                    {step.line1}
                  </text>
                  <text x={CX} y={CY + 32} textAnchor="middle"
                    fill="rgba(245,240,232,0.6)" fontSize="15"
                    fontFamily="system-ui, -apple-system, sans-serif">
                    {step.line2}
                  </text>
                </>
              )}
            </motion.g>

            {/* ── NODES ── */}
            {steps.map((s, i) => {
              const { x, y } = nodeXY(i);
              const c        = color(i);
              const isActive = active === i;
              const isDimmed = active !== null && !isActive;

              return (
                <motion.g
                  key={i}
                  style={{ cursor: "pointer" }}
                  onHoverStart={() => setActive(i)}
                  onHoverEnd={() => setActive(null)}
                  onClick={() => setActive(active === i ? null : i)}
                >
                  {/* Glow halo */}
                  <motion.circle
                    cx={x} cy={y}
                    animate={{ r: isActive ? NRa + 18 : 0, opacity: isActive ? 0.3 : 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    fill={c}
                    filter="url(#wGlow)"
                  />

                  {/* Node circle */}
                  <motion.circle
                    cx={x} cy={y}
                    animate={{
                      r: isActive ? NRa : NRd,
                      opacity: isDimmed ? 0.25 : 1,
                      strokeWidth: isActive ? 3 : 2,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    fill="#1A1008"
                    stroke={c}
                    filter={isActive ? "url(#wNodeGlow)" : undefined}
                  />

                  {/* Step number */}
                  <motion.text
                    x={x} y={y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={c}
                    animate={{ opacity: isDimmed ? 0.25 : 1 }}
                    fontSize={isActive ? "26" : "17"}
                    fontWeight="700"
                    fontFamily="monospace"
                    style={{ pointerEvents: "none", transition: "font-size 0.2s" }}
                  >
                    {s.number}
                  </motion.text>

                </motion.g>
              );
            })}
          </svg>
        </motion.div>
      <style>{`
        @media (max-width: 768px) {
          .workflow-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
      </div>
    </section>
  );
}
