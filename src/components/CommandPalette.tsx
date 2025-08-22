
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const options = [
  { k: 'Home', p: '/' },
  { k: 'Experience', p: '/experience' },
  { k: 'Education', p: '/education' },
  { k: 'Projects', p: '/projects' },
  { k: 'Skills', p: '/skills' },
  { k: 'Research', p: '/research' },
  { k: 'Certifications', p: '/certifications' },
  { k: 'Contact', p: '/contact' }
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const nav = useNavigate()
  const filtered = options.filter(o => o.k.toLowerCase().includes(q.toLowerCase()))

  useEffect(() => {
    const onK = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen(o => !o)
      }
    }
    window.addEventListener('keydown', onK)
    return () => window.removeEventListener('keydown', onK)
  }, [])

  return (
    <>
      <button className="px-3 py-2 rounded-xl border border-white/10 text-xs text-white/70 hover:text-white hover:border-white/30 transition"
        onClick={() => setOpen(true)}>
        ⌘K / Ctrl K
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-28 z-50" onClick={() => setOpen(false)}>
          <div className="w-full max-w-xl card p-4" onClick={e => e.stopPropagation()}>
            <input
              autoFocus
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Type to search... (try Projects)"
              className="w-full bg-transparent outline-none px-3 py-2 rounded-lg border border-white/10"
            />
            <div className="mt-2 max-h-64 overflow-auto">
              {filtered.map(o => (
                <div key={o.p} className="px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer"
                  onClick={() => { setOpen(false); nav(o.p) }}>
                  {o.k}
                </div>
              ))}
              {filtered.length === 0 && <div className="px-3 py-8 text-center text-white/60">No results.</div>}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
