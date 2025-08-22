
import Timeline from '@/components/Timeline'
import { experience } from '@/data/content'

export default function Experience() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Experience</h1>
      <p className="text-white/80 mt-2">Hands-on internships in SDE, Android + ML, and full-stack development.</p>
      <div className="mt-6">
        <Timeline items={experience} />
      </div>
    </div>
  )
}
