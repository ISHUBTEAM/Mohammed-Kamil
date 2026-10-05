/** Shared wrapper: consistent width, spacing and heading for every section. */
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-16 border-t border-line px-5 py-16">
      <h2 className="mb-8 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {children}
    </section>
  );
}
