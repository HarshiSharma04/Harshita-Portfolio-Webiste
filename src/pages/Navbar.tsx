import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Research', path: '/research' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Brand */}
        <Link to="/" className="font-bold text-lg">Harshita Portfolio</Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="hover:text-brand-200 transition">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Search + Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="hover:text-brand-200 transition"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Search Dropdown */}
      {searchOpen && (
        <div className="absolute right-4 mt-2 w-64 bg-black border border-white/10 rounded-xl shadow-lg p-3 z-50">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-lg bg-white/10 text-white focus:outline-none"
          />
          <div className="mt-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-lg hover:bg-white/10"
                onClick={() => setSearchOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 border-t border-white/10 px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block py-2 border-b border-white/10 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
