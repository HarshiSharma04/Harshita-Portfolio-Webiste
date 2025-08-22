
import { useEffect, useState } from 'react'

type Repo = { id: number; name: string; html_url: string; stargazers_count: number; forks_count: number; description: string; pushed_at: string }

export default function RepoWidget() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function run() {
      try {
        const r = await fetch('https://api.github.com/users/HarshiSharma04/repos?per_page=100')
        const data = await r.json()
        const sorted = (data || []).sort((a: Repo, b: Repo) => (new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()))
        setRepos(sorted.slice(0, 6))
      } catch (e) { console.error(e) } finally { setLoading(false) }
    }
    run()
  }, [])

  if (loading) return <div className="text-white/70">Loading GitHub activity…</div>
  if (!repos.length) return <div className="text-white/70">No public repositories found.</div>

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {repos.map(r => (
        <a key={r.id} href={r.html_url} target="_blank" className="card p-4 hover:border-brand-400/40">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">{r.name}</h4>
            <span className="text-xs text-white/60">{new Date(r.pushed_at).toLocaleDateString()}</span>
          </div>
          <p className="text-white/80 mt-1">{r.description || '—'}</p>
          <div className="text-xs text-white/60 mt-2">★ {r.stargazers_count} • Forks {r.forks_count}</div>
        </a>
      ))}
    </div>
  )
}
