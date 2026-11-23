import Link from "next/link";
import { ArrowRight, BookOpen, Database, Landmark, Archive } from "lucide-react";
import SchoolPhoto from "@/components/SchoolPhoto";
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


function BookArt() {
  return (
    <svg viewBox="0 0 360 300" className="hidden lg:block w-full max-w-sm justify-self-end" role="img" aria-label="Open book connected to a circuit">
      <g fill="none" stroke="#E8A317" strokeWidth="3" strokeLinejoin="round">
        <path d="M180 90C140 60 80 60 30 80v170c50-20 110-20 150 10 40-30 100-30 150-10V80c-50-20-110-20-150 10Z" fill="rgba(255,255,255,.06)" />
        <path d="M180 90v170" />
        {[120, 150, 180, 210].map(y => <path key={y} d={`M60 ${y - 20}c30-8 60-6 90 6M210 ${y - 14}c30-12 60-14 90-6`} strokeWidth="2" opacity=".6" />)}
        <path d="M180 90V40h70M250 40v-22" /><path d="M180 60h-70v-30" />
      </g>
      <g fill="#E8A317"><circle cx="250" cy="14" r="8" /><circle cx="110" cy="26" r="8" /><circle cx="180" cy="90" r="6" /></g>
    </svg>
  );
}

export default function Home() {
  return (<>
    <section className="spines relative overflow-hidden bg-ink text-white">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:py-28 lg:grid-cols-[1.2fr_1fr]">
       <div className="hero-rise">
        <p className="mb-5 inline-block border-b border-amber pb-1 text-sm text-amber-soft">Excellence · Faith · Productivity</p>
        <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">Welcome to NationBuilders Polytechnic Library</h1>
        <p className="mt-5 max-w-xl text-xl leading-relaxed text-white/85">Discover knowledge, explore scholarly resources and access information that inspires academic excellence.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/services">Explore Library Services</ButtonLink>
          <ButtonLink href="/databases" variant="ghost">Access Academic Databases</ButtonLink>
        </div>
        </div>
       <SchoolPhoto className="mx-auto w-full max-w-md lg:max-w-none" fallback={<BookArt />} />
      </div>
    </section>

    <Section>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quick.map(({ t, d, href, I, ext }) => {
          const body = (<><I className="h-7 w-7 text-amber" aria-hidden /><h2 className="mt-4 font-serif text-xl text-ink">{t}</h2><p className="mt-1 text-slate-600">{d}</p></>);
          const cls = "card block p-6";
          return ext ? <a key={t} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{body}</a> : <Link key={t} href={href} className={cls}>{body}</Link>;
        })}
      </div>
    </Section>

    <Section title="About the Library" tone="sand">
      <p className="max-w-3xl font-serif text-2xl leading-relaxed text-slate-700">NationBuilders Polytechnic Library is the intellectual heart of the institution, supporting moral values, technology, vocational and entrepreneurial empowerment of youths with print and electronic resources and access to scholarly databases.</p>
      <Link href="/about" className="mt-6 inline-flex items-center gap-2 font-medium text-ink underline underline-offset-4">Read more about us <ArrowRight className="h-4 w-4" aria-hidden /></Link>
    </Section>

    <Section title="Featured academic databases">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{databases.map(d => <DbCard key={d.name} db={d} />)}</div>
    </Section>

    <Section title="Library services" tone="sand">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map(p => (
          <Link key={p} href="/services" className="card flex items-center gap-4 p-5">
            <Icon name={iconFor(p)} className="h-6 w-6 shrink-0 text-amber" /><span className="font-medium text-ink">{p}</span>
          </Link>))}
      </div>
    </Section>

    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2">
        <div><h2 className="font-serif text-3xl">University identity</h2>
          <p className="mt-4 text-white/80">Our vision and mission reflect self-reliance, ethical conduct and entrepreneurial development.</p>
          <div className="mt-6 flex flex-wrap gap-3"><ButtonLink href="/about">About Us</ButtonLink><ButtonLink href={SITE_URL} variant="ghost" external>Polytechnic website</ButtonLink></div></div>
        <blockquote className="border-l-2 border-amber pl-5 font-serif text-lg leading-relaxed text-white/90">{VISION}</blockquote>
      </div>
    </section>
  </>);
}
