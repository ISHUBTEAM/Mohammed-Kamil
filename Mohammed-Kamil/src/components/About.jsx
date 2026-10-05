import Section from "./Section.jsx";

/** Bio paragraphs on the left, grouped skills on the right (stacked on mobile). */
export default function About({ profile }) {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="max-w-prose space-y-4 leading-relaxed text-muted">
          {profile.about.map((p) => <p key={p}>{p}</p>)}
        </div>
        <dl className="space-y-5">
          {Object.entries(profile.skills).map(([group, items]) => (
            <div key={group}>
              <dt className="mb-2 font-semibold">{group}</dt>
              <dd className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-full border border-line bg-panel px-3 py-1 text-sm">{s}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
