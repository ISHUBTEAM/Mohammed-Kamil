import Section from "./Section.jsx";

/** Simple contact block: email plus social links. No form, so no backend is needed. */
export default function Contact({ profile }) {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-lg leading-relaxed text-muted">
        I'm open to internships, freelance work and interesting collaborations. The quickest way to reach me is email.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block break-all font-display text-2xl font-bold text-accent underline underline-offset-4 sm:text-4xl"
      >
        {profile.email}
      </a>
      <ul className="mt-8 flex flex-wrap gap-3">
        {profile.links.map((l) => (
          <li key={l.href}>
            <a href={l.href} target="_blank" rel="noreferrer" className="rounded border border-line px-4 py-2 hover:border-accent">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
