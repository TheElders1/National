import type { Metadata } from "next";
import { ButtonLink, PageHero, Section } from "@/components/ui";
import { MISSION_INTRO, VISION, missions, SITE_URL, CONTACT } from "@/lib/config";
export const metadata: Metadata = { title: "Library Profile", description: "Vision and mission of NationBuilders Polytechnic Library, Asaba, and how to contact us." };

export default function Profile() {
  return (<>
    <PageHero title="Library profile" intro="Our vision, our mission and how to reach us." />
    <Section title="Library vision"><blockquote className="max-w-3xl border-l-2 border-gold pl-5 font-serif text-xl leading-relaxed text-navy">{VISION}</blockquote></Section>
    <Section title="Library mission" tone="paper">
      <p className="mb-8 max-w-3xl font-serif text-lg">{MISSION_INTRO}</p>
      <ol className="grid gap-5 md:grid-cols-3">
        {missions.map((m, i) => (
          <li key={m.title} className="card p-7">
            <span className="font-serif text-4xl text-gold">{i + 1}</span>
            <h3 className="mt-2 font-serif text-xl text-navy">{m.title}</h3>
            <p className="mt-2 leading-relaxed text-slate-700">{m.text}</p>
          </li>))}
      </ol>
    </Section>
    <Section title="Contact the library">
      <address className="not-italic space-y-1 text-lg text-slate-700">
        <p>{CONTACT.address}</p><p>{CONTACT.phone}</p>
        <p><a className="underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
      </address>
      <div className="mt-6 [&_a]:bg-navy [&_a]:text-white"><ButtonLink href={SITE_URL} external>Polytechnic website</ButtonLink></div>
    </Section>
  </>);
}
