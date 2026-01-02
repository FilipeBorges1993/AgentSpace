"use client";

import { useEffect } from "react";

const COLORS = ["#7ff1fc", "#7ffcb4", "#fcdf7f", "#eef0f3"];

export default function RandomBackground() {
  useEffect(() => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    document.documentElement.style.setProperty("--background", randomColor);
  }, []);

  return null;
}
