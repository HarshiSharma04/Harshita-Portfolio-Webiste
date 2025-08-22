
import { profile, projects, education } from '@/data/content'
import ProjectCard from '@/components/ProjectCard'
import RepoWidget from '@/components/RepoWidget'
import HeroVisual from '@/components/HeroVisual'

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 card glow">
          <h1 className="text-4xl md:text-5xl font-black leading-tight">{profile.name}</h1>
          <p className="mt-3 text-white/80">Software Engineer — building production-ready apps, pipelines, and ML-driven products.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 transition" href={profile.links.github} target="_blank">GitHub</a>
            <a className="px-4 py-2 rounded-xl border border-white/20 hover:border-white/40 transition" href={profile.links.linkedin} target="_blank">LinkedIn</a>
            <a className="px-4 py-2 rounded-xl border border-white/20 hover:border-white/40 transition" href={profile.links.leetcode} target="_blank">LeetCode</a>
          </div>
          <div className="mt-5 text-sm text-white/60">{profile.location} • {profile.email} • {profile.phone}</div>
          <div className="mt-6">
            <h4 className="font-semibold">Education</h4>
            <div className="text-sm text-white/80 mt-2">{education[0].institution} — {education[0].program} • {education[0].cgpa}</div>
            <div className="text-xs text-white/60 mt-1">{education[0].start} – {education[0].end}</div>
            <div className="text-sm text-white/70 mt-2">{education[0].details}</div>
          </div>
        </div>
        <div className="p-6 card">
          <h2 className="text-lg font-semibold">Featured Projects</h2>
          <p className="text-white/70 text-sm mb-3">A taste of my end-to-end engineering.</p>
          <HeroVisual />
          <div className="grid gap-3 mt-4">
            {projects.slice(0,3).map(p => <ProjectCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">All Projects</h2>
          <a href="/projects" className="text-brand-200 text-sm hover:underline">Browse more</a>
        </div>
        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(p => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section className="pt-4">
        <h2 className="text-2xl font-bold">GitHub Activity & CI/CD</h2>
        <p className="text-white/70 text-sm mb-3">Recent repos and commits from @HarshiSharma04. (Placed here so it doesn’t overshadow project highlights.)</p>
        <RepoWidget />
      </section>
    </div>
  )
}
