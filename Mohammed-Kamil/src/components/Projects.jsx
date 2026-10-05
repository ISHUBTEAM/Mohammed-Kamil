import { useMemo, useState } from "react";
import Section from "./Section.jsx";
import { useGithubRepos } from "../hooks/useGithubRepos.js";

/** Lists public GitHub repos as a ruled list, with a language filter. */
export default function Projects({ username }) {
  const { repos, loading, error } = useGithubRepos(username);
  const [lang, setLang] = useState("All");

  // Unique languages found in the repos, used to build the filter buttons.
  const languages = useMemo(
    () => ["All", ...new Set(repos.map((r) => r.language).filter(Boolean))],
    [repos]
  );
  const shown = lang === "All" ? repos : repos.filter((r) => r.language === lang);

  return (
    <Section id="projects" title="Projects">
      {loading && <p className="text-muted" role="status">Loading repositories…</p>}
      {error && (
        <p className="rounded border border-line bg-panel p-4" role="alert">
          {error} Check <code>githubUsername</code> in <code>src/data/profile.js</code>.
        </p>
      )}
      {!loading && !error && repos.length === 0 && (
        <p className="text-muted">No public repositories yet. Push a project to GitHub and it will show up here.</p>
      )}

      {languages.length > 2 && (
        <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter by language">
          {languages.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`rounded-full border px-3 py-1 text-sm ${
                lang === l ? "border-accent bg-accent text-paper" : "border-line hover:border-accent"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      )}

      <ul className="divide-y divide-line border-y border-line">
        {shown.map((r) => (
          <li key={r.id}>
            <a
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              className="group grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:gap-8"
            >
              <div>
                <h3 className="font-display text-xl font-bold group-hover:text-accent">{r.name}</h3>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">
                  {r.description || "No description provided."}
                </p>
              </div>
              <p className="flex items-start gap-4 text-sm text-muted sm:justify-end">
                {r.language && <span>{r.language}</span>}
                <span aria-label={`${r.stargazers_count} stars`}>★ {r.stargazers_count}</span>
              </p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
