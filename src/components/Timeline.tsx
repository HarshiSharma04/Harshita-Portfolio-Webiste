
export default function Timeline({ items }: { items: any[] }) {
  return (
    <div className="relative pl-5">
      <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-white/20"></div>
      <div className="flex flex-col gap-6">
        {items.map((it, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-1.5 w-3 h-3 bg-brand-500 rounded-full"></div>
            <div className="ml-4 card p-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{it.role} • {it.company}</h4>
                <span className="text-xs text-white/60">{it.start} – {it.end}</span>
              </div>
              <ul className="mt-2 list-disc list-inside text-white/80 space-y-1">
                {it.bullets.map((b: string, i: number) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
