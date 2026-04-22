"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Only enable on devices with a true hover-capable pointer.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => setEnabled(mql.matches);
    apply();
    mql.addEventListener?.("change", apply);
    return () => mql.removeEventListener?.("change", apply);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive =
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a");
      setIsHovered(!!interactive);
    };
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-brand-gold mix-blend-difference pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovered ? 2 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-brand-gold/50 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      />
    </>
  );
}
