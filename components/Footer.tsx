import Link from "next/link";
import { nav, databases, SITE_URL, ANTHEM_URL, CONTACT } from "@/lib/config";
import Crest from "@/components/Crest";

export default function Footer() {
  const h = "font-serif text-gold-soft text-lg mb-3";
  const a = "block py-1 text-white/75 hover:text-white";
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div><Crest size={72} ring />
          <p className="font-serif text-xl">NationBuilders Polytechnic Library</p><p className="mt-2 text-white/70">Asaba, Nigeria. Digital Library Portal.</p></div>
        <div><p className={h}>Quick navigation</p>{nav.map(n => <Link key={n.href} href={n.href} className={a}>{n.label}</Link>)}</div>
        <div><p className={h}>Academic databases</p>{databases.map(d => <a key={d.name} href={d.url} target="_blank" rel="noopener noreferrer" className={a}>{d.name.split(" (")[0]}</a>)}</div>
        <div><p className={h}>Contact</p>
          <p className="py-1 text-white/75">{CONTACT.address}</p><p className="py-1 text-white/75">{CONTACT.phone}</p>
          <a href={`mailto:${CONTACT.email}`} className={a}>{CONTACT.email}</a>
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className={a}>Polytechnic website</a>
          <a href={ANTHEM_URL} target="_blank" rel="noopener noreferrer" className={a}>School anthem</a></div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-sm text-white/60">© {new Date().getFullYear()} NationBuilders Polytechnic Library, Asaba. All rights reserved.</div>
    </footer>
  );
}
