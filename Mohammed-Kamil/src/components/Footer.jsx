export default function Footer({ name, location }) {
  return (
    <footer className="mx-auto max-w-5xl border-t border-line px-5 py-8 text-sm text-muted">
      © {new Date().getFullYear()} {name}. Based in {location}.
    </footer>
  );
}
