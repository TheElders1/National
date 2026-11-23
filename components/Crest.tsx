"use client";
import { useState } from "react";
import { Library } from "lucide-react";

export default function Crest({ size = 48, ring = false }: { size?: number; ring?: boolean }) {
  const [ok, setOk] = useState(true);
  const s = { width: size, height: size };
  return ok
    ? /* eslint-disable-next-line @next/next/no-img-element */
      <img src="/logo.png" alt="NationBuilders Polytechnic logo" style={s} onError={() => setOk(false)} className={"rounded-full bg-white object-contain " + (ring ? "ring-2 ring-gold" : "")} />
    : <span style={s} className="flex items-center justify-center rounded-full bg-navy text-gold ring-2 ring-gold"><Library className="h-1/2 w-1/2" /></span>;
}
