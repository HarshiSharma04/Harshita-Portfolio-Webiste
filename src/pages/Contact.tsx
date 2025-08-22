
import { profile } from '@/data/content'

export default function Contact() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-white/80 mt-2">Open to internships and freelance work in mobile, software, and full-stack roles.</p>
      <div className="card p-5 mt-6">
        <div className="space-y-2 text-white/90">
          <div><span className="text-white/60">Email: </span><a className="hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <div><span className="text-white/60">Phone: </span>{profile.phone}</div>
          <div><span className="text-white/60">Location: </span>{profile.location}</div>
          <div className="pt-3 flex gap-4 flex-wrap">
            <a href={profile.links.github} target="_blank" className="text-brand-200 hover:underline">GitHub</a>
            <a href={profile.links.linkedin} target="_blank" className="text-brand-200 hover:underline">LinkedIn</a>
            <a href={profile.links.leetcode} target="_blank" className="text-brand-200 hover:underline">LeetCode</a>
          </div>
        </div>
      </div>
    </div>
  )
}
