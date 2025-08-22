
export default function HeroVisual() {
  return (
    <div className="hero-visual mt-6">
      <svg viewBox="0 0 800 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F472B6" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <rect width="800" height="300" fill="url(#g1)"/>
        <g opacity="0.08" fill="#fff">
          <circle cx="120" cy="80" r="120">
            <animate attributeName="cx" dur="12s" values="120;680;120" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="160" r="90">
            <animate attributeName="cy" dur="9s" values="160;40;160" repeatCount="indefinite" />
          </circle>
          <circle cx="650" cy="90" r="70">
            <animate attributeName="cx" dur="10s" values="650;150;650" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  )
}
