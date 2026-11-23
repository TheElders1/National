"use client";
import { useEffect, useRef, useState } from "react";
import { Library } from "lucide-react";

export default function Crest({ size = 48, ring = false }: { size?: number; ring?: boolean }) {
  const [ok, setOk] = useState(true);
  const ref = useRef<HTMLImageElement>(null);
  // The image may fail before React hydrates, so also check after mount.
  useEffect(() => { const i = ref.current; if (i && i.complete && i.naturalWidth === 0) setOk(false); }, []);
  const s = { width: size, height: size };
  return ok
    ? /* eslint-disable-next-line @next/next/no-img-element */
      <img ref={ref} src="/logo.png" alt="NationBuilders Polytechnic logo" style={s} onError={() => setOk(false)} className={"rounded-full bg-white object-contain " + (ring ? "ring-2 ring-amber" : "")} />
    : <span style={s} className="flex items-center justify-center rounded-sm bg-ink text-amber ring-2 ring-amber"><Library className="h-1/2 w-1/2" /></span>;
}
