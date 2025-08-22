
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProjectCard({ p }: { p: any }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="card p-5">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">{p.name}</h3>
        <span className="text-xs text-white/60">{p.date}</span>
      </div>
      <p className="mt-2 text-white/80">{p.summary}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {p.tech.map((t: string) => (<span key={t} className="text-xs px-2 py-1 rounded-lg bg-white/10">{t}</span>))}
      </div>
      <div className="mt-4 flex gap-3">
        <a className="text-sm text-brand-200 hover:underline" href={p.repo} target="_blank">GitHub</a>
        <Link to={`/project/${p.slug}`} className="text-sm text-brand-200 hover:underline">Details</Link>
      </div>
    </motion.div>
  )
}
