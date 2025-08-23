import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

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
  const [mobileOpen, setMobileOpen] = useState(false)

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
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none z-60"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col items-start px-4 py-3 space-y-2 md:hidden z-50 shadow-lg">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="block w-full py-2 hover:bg-gray-800 rounded transition"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
