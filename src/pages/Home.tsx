import { profile, projects } from '@/data/content';
import ProjectCard from '@/components/ProjectCard';
import RepoWidget from '@/components/RepoWidget';
import HeroVisual from '@/components/HeroVisual';

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Top Section */}
      <section className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Card */}
        <div className="p-6 card glow flex flex-col justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight">{profile.name}</h1>
            <p className="mt-3 text-white/80">
              Software Engineer building production-ready apps, pipelines, and ML-driven products.
            </p>

            {/* Hero Animation */}
            <div className="mt-6">
              <HeroVisual />
            </div>

            {/* Links */}
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 transition"
                href={profile.links.github}
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="px-4 py-2 rounded-xl border border-white/20 hover:border-white/40 transition"
                href={profile.links.linkedin}
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="px-4 py-2 rounded-xl border border-white/20 hover:border-white/40 transition"
                href={profile.links.leetcode}
                target="_blank"
              >
                LeetCode
              </a>
            </div>
          </div>

          <div className="mt-6 text-sm text-white/60">
            {profile.location} • {profile.email} • {profile.phone}
          </div>
        </div>

        {/* Featured Projects Card */}
        <div className="p-6 card flex flex-col">
          <h2 className="text-lg font-semibold">Featured Projects</h2>
          <p className="text-white/70 text-sm mb-3">
            A taste of my end-to-end engineering.
          </p>
          <div className="grid gap-3 mt-4">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="pt-4">
        <h2 className="text-2xl font-bold">GitHub Activity & CI/CD</h2>
        <p className="text-white/70 text-sm mb-3">
          Recent repos and commits from @HarshiSharma04. 
        </p>
        <RepoWidget />
      </section>
    </div>
  );
}
