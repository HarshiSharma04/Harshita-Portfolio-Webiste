
import { education } from '@/data/content'

export default function Education() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold">Education</h1>
      <p className="text-white/80 mt-2">Academic background and highlights.</p>
      <div className="mt-6 space-y-4">
        {education.map((e, i) => (
          <div key={i} className="card p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{e.institution}</h3>
                <div className="text-sm text-white/70">{e.program} • CGPA: {e.cgpa}</div>
              </div>
              <div className="text-sm text-white/60">{e.start} – {e.end}</div>
            </div>
            <p className="mt-3 text-white/80">{e.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
