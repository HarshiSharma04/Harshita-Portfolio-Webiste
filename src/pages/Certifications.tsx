
import { certifications } from '@/data/content'

export default function Certifications() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Licenses & Certifications</h1>
      <p className="text-white/80 mt-2">Selected certifications and badges.</p>
      <ul className="mt-6 space-y-3">
        {certifications.map((c, i) => (
          <li key={i} className="card p-4">
            <div className="font-semibold">{c.name}</div>
            <div className="text-sm text-white/70">{c.org} • Issued {c.issued}</div>
            {c.credentialId && <div className="text-xs text-white/60">Credential ID: {c.credentialId}</div>}
          </li>
        ))}
      </ul>
    </div>
  )
}
