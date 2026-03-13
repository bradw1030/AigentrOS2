"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ContactPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <NavBar />
      <main style={{ minHeight: "100vh", paddingTop: "7rem", paddingBottom: "6rem", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <div className="max-w-[860px] mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <SectionLabel text="// BOOK A CALL" color="orange" />
            <h1 style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--text-heading)",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}>
              Let&apos;s talk about your agency.
            </h1>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "1.0625rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              maxWidth: "560px",
              margin: "0 auto",
            }}>
              Book a free discovery call to explore what AIgentrOS could look like inside your organization — no pressure, no pitch deck.
            </p>
          </motion.div>

          {/* Calendly inline widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="calendly-inline-widget"
            data-url="https://calendly.com/bradweaver1/intro-call-w-brad"
            style={{
              minWidth: "320px",
              height: "700px",
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid var(--border-subtle)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
