import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

/** Sticky top bar with anchor links and a light/dark switch (remembered in localStorage). */
export default function Navbar({ name }) {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
    } catch {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3" aria-label="Main">
        <a href="#top" className="font-display text-lg font-bold">{name}</a>
        <ul className="flex items-center gap-1 sm:gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded px-2 py-1 text-sm text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setDark(!dark)}
              aria-pressed={dark}
              className="rounded border border-line px-2.5 py-1 text-sm hover:border-accent"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
