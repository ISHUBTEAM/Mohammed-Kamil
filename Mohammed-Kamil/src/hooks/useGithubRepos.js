import { useEffect, useState } from "react";

/**
 * Fetches public repositories for a GitHub user.
 * Endpoint: GET https://api.github.com/users/{username}/repos
 * Returns { repos, loading, error }. Forks are removed and the list is sorted
 * by stars, then by most recent push.
 */
export function useGithubRepos(username) {
  const [state, setState] = useState({ repos: [], loading: true, error: null });

  useEffect(() => {
    const controller = new AbortController(); // cancel if the component unmounts
    setState({ repos: [], loading: true, error: null });

    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status === 404) throw new Error(`No GitHub user named "${username}".`);
        if (res.status === 403) throw new Error("GitHub rate limit reached. Try again in a few minutes.");
        if (!res.ok) throw new Error(`GitHub returned an error (${res.status}).`);
        return res.json();
      })
      .then((data) => {
        const repos = data
          .filter((r) => !r.fork)
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.pushed_at) - new Date(a.pushed_at)
          );
        setState({ repos, loading: false, error: null });
      })
      .catch((err) => {
        if (err.name !== "AbortError") setState({ repos: [], loading: false, error: err.message });
      });

    return () => controller.abort();
  }, [username]);

  return state;
}
