interface SectionLabelProps {
  text: string;
  color?: "lime" | "orange";
}

export default function SectionLabel({ text, color = "lime" }: SectionLabelProps) {
  return (
    <p
      style={{
        fontFamily: "var(--font-jetbrains-mono), monospace",
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.08em",
        color: color === "lime" ? "var(--accent-lime)" : "var(--accent-orange)",
        marginBottom: "1rem",
        textTransform: "uppercase",
      }}
    >
      {text}
    </p>
  );
}
