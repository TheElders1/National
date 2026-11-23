"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, CONTACT, SITE_URL } from "@/lib/config";
import Crest from "@/components/Crest";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="hidden bg-ink text-xs text-white/85 md:block"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2"><span>{CONTACT.address}</span><span className="flex gap-5"><span>{CONTACT.phone}</span><a href={`mailto:${CONTACT.email}`} className="hover:text-amber">{CONTACT.email}</a><a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-amber">Polytechnic website</a></span></div></div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Crest size={48} />
          <span className="leading-tight"><span className="block font-serif text-lg text-ink">NationBuilders Polytechnic Library</span><span className="block text-xs text-slate-500">Asaba, Delta State</span></span>
        </Link>
        <nav className="hidden md:flex gap-1" aria-label="Main">
          {nav.map(n => (
            <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined}
              className={"rounded px-3 py-2 text-sm font-medium " + (path === n.href ? "bg-ink text-white" : "text-slate-700 hover:text-ink hover:bg-sand")}>{n.label}</Link>
          ))}
        </nav>
        <button className="md:hidden p-2 text-ink" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-slate-200 bg-white px-5 py-3" aria-label="Mobile">
          {nav.map(n => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-ink border-b border-slate-100 last:border-0">{n.label}</Link>)}
        </nav>
      )}
    </header>
  );
}
