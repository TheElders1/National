import type { Metadata } from "next";
import { Music } from "lucide-react";
import { ButtonLink, PageHero, Section } from "@/components/ui";
import { LIBRARIAN, SITE_URL, ANTHEM_URL } from "@/lib/config";
export const metadata: Metadata = { title: "About Us", description: "About NationBuilders Polytechnic Library, Asaba: the librarian's statement, anthem and school website." };

export default function About() {
  return (<>
    <PageHero title="About NationBuilders Polytechnic Library, Asaba" intro="The intellectual heart of the institution, serving students, staff and the wider community." />
    <Section title="Brief statement by the Polytechnic Librarian">
      <div className="max-w-3xl space-y-5 font-serif text-lg leading-relaxed text-slate-700">{LIBRARIAN.map((p, i) => <p key={i}>{p}</p>)}</div>
    </Section>
    <Section title="Our anthem" tone="paper">
      <div className="flex items-start gap-4 rounded-md border border-dashed border-gold p-6">
        <Music className="h-6 w-6 shrink-0 text-gold" aria-hidden />
        <div><p className="text-slate-700">Listen to or read the official school anthem on the polytechnic website.</p>
          <div className="mt-4 [&_a]:bg-navy [&_a]:text-white"><ButtonLink href={ANTHEM_URL} external>Open the school anthem</ButtonLink></div></div>
      </div>
    </Section>
    <Section><div className="[&_a]:bg-navy [&_a]:text-white"><ButtonLink href={SITE_URL} external>Visit the NationBuilders Polytechnic website</ButtonLink></div></Section>
  </>);
}
