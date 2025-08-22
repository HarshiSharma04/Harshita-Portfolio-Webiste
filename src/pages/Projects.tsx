
import { projects } from '@/data/content'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-white/80 mt-2">Mobile apps, AI/ML systems, data analytics, and dashboards.</p>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(p => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </div>
  )
}
