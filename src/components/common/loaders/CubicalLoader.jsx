"use client";
import { COLORS } from "@/src/utils";
import { useEffect, useState } from "react";

export function CubeLoader({ autoHide = true, delay = 2500 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => setVisible(false), delay);
      return () => clearTimeout(timer);
    }
  }, [autoHide, delay]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center  z-50"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="boxes">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
