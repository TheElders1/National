"use client";
import { useEffect, useRef, useState } from "react";

// Tries a local /building.jpg first, then the photo hosted on the school's own website.
const SOURCES = ["/building.jpg", "https://www.nabcotech.edu.ng/contents/templates/edubin/assets/images/about/event-1.jpg"];

export default function SchoolPhoto({ caption = "NationBuilders Polytechnic, Asaba", fallback = null, className = "" }:
  { caption?: string; fallback?: React.ReactNode; className?: string }) {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => { const el = ref.current; if (el && el.complete && el.naturalWidth === 0) setI(x => x + 1); }, [i]);
  if (i >= SOURCES.length) return <>{fallback}</>;
  return (
    <figure className={"relative " + className}>
      <div className="absolute -bottom-3 -right-3 h-full w-full bg-amber" aria-hidden />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img key={i} ref={ref} src={SOURCES[i]} alt={caption} onError={() => setI(x => x + 1)} className="relative h-auto w-full border-4 border-white object-cover shadow-2xl" />
      <figcaption className="absolute bottom-0 left-0 bg-ink px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-amber">{caption}</figcaption>
    </figure>
  );
}
