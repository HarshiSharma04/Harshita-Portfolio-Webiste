import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Research', path: '/research' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="w-full bg-gray-900/80 backdrop-blur-md fixed z-50 top-0 left-0 px-4 md:px-8 py-3 flex items-center justify-between">
      {/* Logo / Title */}
      <Link to="/" className="text-2xl font-bold">
        Harshita Portfolio
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-white font-medium">
        {sections.map((section) => (
          <li key={section.name}>
            <Link to={section.path} className="hover:text-brand-500 transition">
              {section.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? '✖' : '☰'}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col items-start px-4 py-3 space-y-2 md:hidden">
          {sections.map((section) => (
            <li key={section.name} className="w-full">
              <Link
                to={section.path}
                className="block w-full py-2 hover:bg-gray-800 rounded transition"
                onClick={() => setMobileOpen(false)}
              >
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
