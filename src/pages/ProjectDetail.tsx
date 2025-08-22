
import { useParams } from 'react-router-dom'
import { projects } from '@/data/content'

export default function ProjectDetail() {
  const { slug } = useParams()
  const p = projects.find(x => x.slug === slug)
  if (!p) return <div>Project not found.</div>
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold">{p.name}</h1>
      <div className="text-sm text-white/60 mt-1">{p.date}</div>
      <p className="mt-4 text-white/90">{p.summary}</p>
      <ul className="mt-4 list-disc list-inside space-y-1 text-white/80">
        {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <div className="flex flex-wrap gap-2 mt-4">
        {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 rounded bg-white/10">{t}</span>)}
      </div>
      <a href={p.repo} target="_blank" className="inline-block mt-6 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700">View on GitHub</a>
    </div>
  )
}
