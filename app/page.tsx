import Link from "next/link";
import { ArrowRight, BookOpen, Database, Globe, Landmark, Quote } from "lucide-react";
import SchoolPhoto from "@/components/SchoolPhoto";
import { ButtonLink, DbCard, Icon, Section } from "@/components/ui";
import { databases, serviceGroups, VISION, SITE_URL } from "@/lib/config";

const quick = [
  { t: "Library Services", d: "Lending, reference, indexing and more.", href: "/services", I: BookOpen },
  { t: "Academic Databases", d: "Search journals, books and research.", href: "/databases", I: Database },
  { t: "Library Profile", d: "Our vision, mission and contacts.", href: "/library-profile", I: Landmark },
  { t: "Polytechnic Website", d: "Visit NationBuilders Polytechnic online.", href: SITE_URL, I: Globe, ext: true },
];
const facts = [
  { k: "2018", v: "Polytechnic established in Asaba" },
  { k: `${databases.length}`, v: "Academic research databases" },
  { k: `${serviceGroups.length}`, v: "Groups of library services" },
  { k: "Open", v: "To the whole school community" },
];
const programmes = ["Business Administration", "Computer Engineering", "Computer Science", "Electrical Engineering", "Hospitality Management"];
const preview = ["Lending and Circulation", "Reference and Information Services", "Current Awareness and Information Dissemination", "Indexing and Abstracting", "Digital Searching", "Printing Services"];
const iconFor = (n: string) => serviceGroups.flatMap(g => g.items).find(i => n.startsWith(i.name.split(" ")[0]))?.icon ?? "BookOpen";

export default function Home() {
  return (<>
    <section className="spines relative overflow-hidden bg-ink text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
        <div className="hero-rise">
          <p className="mb-5 inline-block border-b border-amber pb-1 text-sm text-amber-soft">Excellence · Faith · Productivity</p>
          <h1 className="text-5xl leading-[1.05] md:text-6xl">Welcome to NationBuilders Polytechnic Library</h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-white/85">Discover knowledge, explore scholarly resources and access information that inspires academic excellence.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/services">Explore Library Services</ButtonLink>
            <ButtonLink href="/databases" variant="ghost">Access Academic Databases</ButtonLink>
          </div>
        </div>
        <SchoolPhoto className="mx-auto w-full max-w-xl lg:max-w-none" />
      </div>
    </section>

    <section className="bg-amber text-ink">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4">
        {facts.map(f => (<div key={f.v}><dt className="font-serif text-4xl font-extrabold">{f.k}</dt><dd className="mt-1 text-sm font-medium">{f.v}</dd></div>))}
      </dl>
    </section>

    <Section>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {quick.map(({ t, d, href, I, ext }) => {
          const body = (<><I className="h-7 w-7 text-ink-500" aria-hidden /><h2 className="mt-4 font-serif text-xl text-ink">{t}</h2><p className="mt-1 text-slate-700">{d}</p></>);
          return ext ? <a key={t} href={href} target="_blank" rel="noopener noreferrer" className="card block p-6">{body}</a> : <Link key={t} href={href} className="card block p-6">{body}</Link>;
        })}
      </div>
    </Section>

    <Section title="The heart of the institution" tone="sand">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <p className="text-xl leading-relaxed text-slate-700">The Library offers a conducive reading environment, print and electronic resources, reference and referral services, and user education programmes designed to promote reading culture, research skills and lifelong learning among students and staff.</p>
        <blockquote className="relative border-l-8 border-amber bg-white p-8 shadow-sm">
          <Quote className="absolute right-5 top-5 h-8 w-8 text-amber-soft" aria-hidden />
          <p className="font-serif text-xl font-bold leading-snug text-ink">The Library is strategically positioned to serve as the intellectual heart of the institution.</p>
          <footer className="mt-4 text-sm text-slate-600">The Polytechnic Librarian</footer>
        </blockquote>
      </div>
      <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-ink underline underline-offset-4">Read the Librarian&apos;s full statement <ArrowRight className="h-4 w-4" aria-hidden /></Link>
    </Section>

    <Section title="Supporting every programme">
      <p className="mb-6 max-w-2xl text-lg text-slate-700">Library resources back the National Diploma programmes offered at NationBuilders Polytechnic.</p>
      <ul className="flex flex-wrap gap-3">{programmes.map(p => <li key={p} className="border-2 border-ink bg-white px-4 py-2 font-bold text-ink">{p}</li>)}</ul>
    </Section>

    <Section title="Featured academic databases" tone="sand">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{databases.map(d => <DbCard key={d.name} db={d} />)}</div>
    </Section>

    <Section title="Library services">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map(p => (
          <Link key={p} href="/services" className="card flex items-center gap-4 p-5">
            <Icon name={iconFor(p)} className="h-6 w-6 shrink-0 text-ink-500" /><span className="font-bold text-ink">{p}</span>
          </Link>))}
      </div>
    </Section>

    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2">
        <div><h2 className="rule text-3xl md:text-4xl">Our vision</h2>
          <blockquote className="mt-8 text-xl leading-relaxed text-white/90">{VISION}</blockquote></div>
        <div className="flex flex-col justify-center gap-4">
          <p className="text-lg text-white/85">Learn more about the library&apos;s mission, or visit the polytechnic.</p>
          <div className="flex flex-wrap gap-3"><ButtonLink href="/library-profile">Library Profile</ButtonLink><ButtonLink href={SITE_URL} variant="ghost" external>Polytechnic website</ButtonLink></div>
        </div>
      </div>
    </section>
  </>);
}
