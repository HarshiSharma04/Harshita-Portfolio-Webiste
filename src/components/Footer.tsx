
import { profile } from '@/data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 text-sm text-white/70 flex flex-col md:flex-row gap-2 md:gap-0 justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React + Vite + Tailwind + Framer Motion.</p>
      </div>
    </footer>
  )
}
