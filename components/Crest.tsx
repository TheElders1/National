"use client";
import { useEffect, useRef, useState } from "react";
import { Library } from "lucide-react";

// Tries a local /logo.png first, then the school's own hosted logo, then an icon.
const SOURCES = ["/logo.png", "https://www.nabcotech.edu.ng/contents/templates/edubin/assets/images/logo.png"];

export default function Crest({ size = 48, ring = false }: { size?: number; ring?: boolean }) {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLImageElement>(null);
  // catches images that failed before React hydrated
  useEffect(() => { const el = ref.current; if (el && el.complete && el.naturalWidth === 0) setI(x => x + 1); }, [i]);
  if (i >= SOURCES.length)
    return <span style={{ width: size, height: size }} className="flex items-center justify-center rounded-sm bg-ink text-amber ring-2 ring-amber"><Library className="h-1/2 w-1/2" /></span>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img key={i} ref={ref} src={SOURCES[i]} alt="NationBuilders Polytechnic logo" onError={() => setI(x => x + 1)}
      style={{ height: size, maxWidth: size * 3 }} className={"w-auto rounded-sm bg-white object-contain " + (ring ? "p-1.5 ring-2 ring-amber" : "")} />
  );
}
