/** First screen: oversized name, role with a blinking caret, short pitch and two actions. */
export default function Hero({ profile }) {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:pt-28">
      <p className="mb-4 font-display text-xl text-accent sm:text-2xl">
        {profile.role}
        <span className="caret ml-1" aria-hidden="true">_</span>
      </p>
      <h1 className="font-display text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-8xl">
        {profile.name}
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="rounded bg-accent px-5 py-2.5 font-semibold text-paper hover:opacity-90">
          View projects
        </a>
        <a href="#contact" className="rounded border border-line px-5 py-2.5 font-semibold hover:border-accent">
          Get in touch
        </a>
      </div>
    </section>
  );
}
