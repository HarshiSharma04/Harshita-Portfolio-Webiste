
import { Link, NavLink } from 'react-router-dom'
import CommandPalette from './CommandPalette'

const links = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/education', label: 'Education' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/research', label: 'Research' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-wide">Harshita • Portfolio</Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <NavLink key={l.to} to={l.to}
              className={({isActive}) =>
                `text-sm hover:text-brand-200 transition ${isActive ? 'text-brand-200' : 'text-white/80'}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <CommandPalette />
      </div>
    </header>
  )
}
