
import { research } from '@/data/content'

export default function Research() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold">Research</h1>
      <p className="text-white/80 mt-2">Selected publications and academic contributions.</p>
      <div className="mt-6 space-y-4">
        {research.map((r, i) => (
          <article key={i} className="card p-5">
            <h3 className="text-xl font-semibold">{r.title}</h3>
            <div className="text-sm text-white/60 mt-1">{r.venue} • {r.date}</div>
            <p className="mt-3 text-white/85">{r.summary}</p>
            <div className="mt-2 text-sm text-white/70">Authors: {r.authors.join(', ')}</div>
            <a href={r.link} target="_blank" className="inline-block mt-4 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700">View Paper</a>
          </article>
        ))}
      </div>
    </div>
  )
}
