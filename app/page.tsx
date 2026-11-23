import Link from "next/link";
import { ArrowRight, BookOpen, Database, Landmark, Archive } from "lucide-react";
import { ButtonLink, DbCard, Icon, Section } from "@/components/ui";
import { databases, serviceGroups, VISION, SITE_URL, ANTHEM_URL } from "@/lib/config";

const quick = [
  { t: "Library Services", d: "Lending, reference, indexing and more.", href: "/services", I: BookOpen },
  { t: "Academic Databases", d: "Search journals, books and research.", href: "/databases", I: Database },
  { t: "Library Profile", d: "Our vision and mission.", href: "/library-profile", I: Landmark },
  { t: "Polytechnic Website", d: "Visit NationBuilders Polytechnic online.", href: SITE_URL, I: Archive, ext: true },
];
const preview = ["Lending and Circulation", "Reference and Information Services", "Current Awareness and Information Dissemination", "Indexing and Abstracting", "Digital Searching", "Printing Services"];
const iconFor = (n: string) => serviceGroups.flatMap(g => g.items).find(i => n.startsWith(i.name.split(" ")[0]))?.icon ?? "BookOpen";


function ShelfArt() {
  return (
    <svg viewBox="0 0 360 420" className="hidden lg:block w-full max-w-sm justify-self-end" role="img" aria-label="Illustration of arched library shelves">
      <g fill="none" stroke="#B8955A" strokeWidth="2">
        {[0, 1, 2].map(i => (
          <g key={i} transform={`translate(${i * 120 + 6} 20)`}>
            <path d="M0 380V90a54 54 0 0 1 108 0V380Z" fill="rgba(255,255,255,.04)" />
            {[150, 220, 290, 360].map(y => <line key={y} x1="0" x2="108" y1={y} y2={y} />)}
            {[150, 220, 290, 360].map((y, r) => [0, 1, 2, 3, 4, 5].map(k => (
              <rect key={`${y}${k}`} x={8 + k * 16} y={y - 44 - ((k + r + i) % 3) * 8} width="11" height={44 + ((k + r + i) % 3) * 8} fill="rgba(184,149,90,.35)" stroke="none" />)))}
          </g>
        ))}
      </g>
    </svg>
  );
}

export default function Home() {
  return (<>
    <section className="spines relative overflow-hidden bg-navy text-white">
      <div aria-hidden className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url(/building.jpg)" }} />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:py-28 lg:grid-cols-[1.4fr_1fr]">
       <div className="hero-rise">
        <p className="mb-5 inline-block border-b border-gold pb-1 text-sm text-gold-soft">Asaba · Digital Library Portal</p>
        <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">Welcome to NationBuilders Polytechnic Library</h1>
        <p className="mt-5 max-w-xl text-xl leading-relaxed text-white/85">Discover knowledge, explore scholarly resources and access information that inspires academic excellence.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/services">Explore Library Services</ButtonLink>
          <ButtonLink href="/databases" variant="ghost">Access Academic Databases</ButtonLink>
        </div>
        </div>
       <ShelfArt />
      </div>
    </section>

    <Section>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quick.map(({ t, d, href, I, ext }) => {
          const body = (<><I className="h-7 w-7 text-gold" aria-hidden /><h2 className="mt-4 font-serif text-xl text-navy">{t}</h2><p className="mt-1 text-slate-600">{d}</p></>);
          const cls = "card block p-6";
          return ext ? <a key={t} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{body}</a> : <Link key={t} href={href} className={cls}>{body}</Link>;
        })}
      </div>
    </Section>

    <Section title="About the Library" tone="paper">
      <p className="max-w-3xl font-serif text-2xl leading-relaxed text-slate-700">NationBuilders Polytechnic Library is the intellectual heart of the institution, supporting moral values, technology, vocational and entrepreneurial empowerment of youths with print and electronic resources and access to scholarly databases.</p>
      <Link href="/about" className="mt-6 inline-flex items-center gap-2 font-medium text-navy underline underline-offset-4">Read more about us <ArrowRight className="h-4 w-4" aria-hidden /></Link>
    </Section>

    <Section title="Featured academic databases">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{databases.map(d => <DbCard key={d.name} db={d} />)}</div>
    </Section>

    <Section title="Library services" tone="paper">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map(p => (
          <Link key={p} href="/services" className="card flex items-center gap-4 p-5">
            <Icon name={iconFor(p)} className="h-6 w-6 shrink-0 text-gold" /><span className="font-medium text-navy">{p}</span>
          </Link>))}
      </div>
    </Section>

    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2">
        <div><h2 className="font-serif text-3xl">University identity</h2>
          <p className="mt-4 text-white/80">Our vision and mission reflect self-reliance, ethical conduct and entrepreneurial development.</p>
          <div className="mt-6 flex flex-wrap gap-3"><ButtonLink href="/about">About Us</ButtonLink><ButtonLink href={SITE_URL} variant="ghost" external>Polytechnic website</ButtonLink></div></div>
        <blockquote className="border-l-2 border-gold pl-5 font-serif text-lg leading-relaxed text-white/90">{VISION}</blockquote>
      </div>
    </section>
  </>);
}
