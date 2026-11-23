import type { Metadata } from "next";
import { Music } from "lucide-react";
import { ButtonLink, PageHero, Section } from "@/components/ui";
import { LIBRARIAN, SITE_URL, ANTHEM_URL } from "@/lib/config";
export const metadata: Metadata = { title: "About Us", description: "About NationBuilders Polytechnic Library, Asaba: the librarian's statement, anthem and school website." };

export default function About() {
  return (<>
    <PageHero title="About NationBuilders Polytechnic Library, Asaba" intro="The intellectual heart of the institution, serving students, staff and the wider community." />
    <Section title="About the polytechnic">
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-slate-700">
        <p>NationBuilders Polytechnic (NABCOTECH), Asaba, is a faith-based institution established in March 2018 by Christ Holy Church International. It began academic activities in January 2020 and works to produce marketable middle-level manpower through technology, vocational and entrepreneurial training.</p>
        <p>The school describes its approach as education that empowers individuals towards <strong>Excellence, Faith and Productivity</strong>.</p>
        <a className="font-bold text-ink underline" href={SITE_URL + "our-history.html?page=our-history"} target="_blank" rel="noopener noreferrer">Read the school&apos;s history</a>
      </div>
    </Section>
    <Section title="Brief statement by the Polytechnic Librarian" tone="sand">
      <div className="max-w-3xl space-y-5 font-serif text-lg leading-relaxed text-slate-700">{LIBRARIAN.map((p, i) => <p key={i}>{p}</p>)}</div>
    </Section>
    <Section title="Our anthem" tone="sand">
      <div className="flex items-start gap-4 rounded-md border border-dashed border-amber p-6">
        <Music className="h-6 w-6 shrink-0 text-amber" aria-hidden />
        <div><p className="text-slate-700">Listen to or read the official school anthem on the polytechnic website.</p>
          <div className="mt-4 [&_a]:bg-ink [&_a]:text-white"><ButtonLink href={ANTHEM_URL} external>Open the school anthem</ButtonLink></div></div>
      </div>
    </Section>
    <Section><div className="[&_a]:bg-ink [&_a]:text-white"><ButtonLink href={SITE_URL} external>Visit the NationBuilders Polytechnic website</ButtonLink></div></Section>
  </>);
}
