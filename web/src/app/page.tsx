export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0d1c3b] via-[#1f3d67] to-[#2f705c] p-6 text-white">
      <main className="w-full max-w-sm space-y-6">
        <div className="relative overflow-hidden rounded-[32px] border border-white/25 bg-[#0b152b] shadow-[0_25px_80px_rgba(5,11,23,0.6)]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b152b] via-transparent to-[#477bf5]/30" />
          <svg
            viewBox="0 0 900 1600"
            role="img"
            aria-labelledby="farewell-title"
            className="aspect-[9/16] w-full"
          >
            <title id="farewell-title">
              Child waving goodbye to a parrot outside a pastel sky window.
            </title>
            <defs>
              <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fde7ff" />
                <stop offset="45%" stopColor="#c7dcff" />
                <stop offset="100%" stopColor="#a5f0e6" />
              </linearGradient>
              <linearGradient id="windowGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
              </linearGradient>
              <radialGradient id="sunGlow" cx="70%" cy="25%" r="35%">
                <stop offset="0%" stopColor="#ffe6b3" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#ffd27d" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#f9b36b" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="skinTone" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f1c18a" />
                <stop offset="100%" stopColor="#d7955e" />
              </linearGradient>
              <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3a6cd7" />
                <stop offset="100%" stopColor="#7a8ff5" />
              </linearGradient>
              <linearGradient id="parrotBody" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#39b46e" />
                <stop offset="100%" stopColor="#5be3b4" />
              </linearGradient>
              <linearGradient id="parrotWing" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a5f0e6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#3a90cf" stopOpacity="0.1" />
              </linearGradient>
              <radialGradient id="eyeShine" cx="50%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#c1d5ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7793c6" stopOpacity="0.1" />
              </radialGradient>
              <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="35" />
              </filter>
              <filter id="wingBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="12" />
              </filter>
            </defs>
            <rect width="900" height="1600" fill="url(#skyGradient)" />
            <circle cx="650" cy="370" r="260" fill="url(#sunGlow)" />
            <g filter="url(#softGlow)">
              <rect
                x="70"
                y="140"
                width="760"
                height="1260"
                rx="80"
                fill="rgba(255,255,255,0.18)"
              />
            </g>
            <rect
              x="70"
              y="140"
              width="760"
              height="1260"
              rx="80"
              fill="rgba(5,15,45,0.12)"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="12"
            />
            <rect
              x="120"
              y="190"
              width="660"
              height="1160"
              rx="60"
              fill="url(#windowGlow)"
              opacity="0.45"
            />
            <g opacity="0.18">
              <path
                d="M120 765 H780"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M450 190 V1350"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </g>
            <g transform="translate(250 840)">
              <path
                d="M120 320 C130 160 240 60 330 60 C420 60 490 150 505 310"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="80"
                strokeLinecap="round"
              />
            </g>
            <g transform="translate(210 870)">
              <ellipse
                cx="210"
                cy="400"
                rx="120"
                ry="160"
                fill="url(#shirtGradient)"
              />
              <path
                d="M120 470 C150 350 250 320 310 330 C360 350 410 410 420 500 Z"
                fill="#314f9d"
                opacity="0.7"
              />
              <path
                d="M214 258 C250 280 320 285 348 270 C370 360 370 470 350 552 C310 585 210 590 170 550 C140 450 168 312 214 258 Z"
                fill="url(#skinTone)"
              />
              <ellipse
                cx="246"
                cy="248"
                rx="94"
                ry="102"
                fill="url(#skinTone)"
              />
              <path
                d="M160 176 C220 130 320 132 360 200 C332 220 270 236 220 230 C200 228 176 220 160 176 Z"
                fill="#412f2f"
              />
              <path
                d="M156 198 C200 240 330 250 390 212 C380 280 332 320 256 320 C204 320 166 308 140 262 Z"
                fill="#2b1e1d"
              />
              <path
                d="M246 332 C270 344 298 342 320 330"
                stroke="#9b5938"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <g transform="translate(188 254)">
                <ellipse
                  cx="20"
                  cy="30"
                  rx="26"
                  ry="34"
                  fill="#ffffff"
                  opacity="0.92"
                />
                <circle cx="20" cy="34" r="12" fill="#4a6aa3" />
                <circle cx="24" cy="30" r="6" fill="url(#eyeShine)" />
                <ellipse
                  cx="20"
                  cy="44"
                  rx="18"
                  ry="14"
                  fill="#90b4ff"
                  opacity="0.35"
                />
              </g>
              <g transform="translate(270 254)">
                <ellipse
                  cx="20"
                  cy="30"
                  rx="26"
                  ry="34"
                  fill="#ffffff"
                  opacity="0.92"
                />
                <circle cx="20" cy="34" r="12" fill="#4a6aa3" />
                <circle cx="24" cy="30" r="6" fill="url(#eyeShine)" />
                <ellipse
                  cx="20"
                  cy="44"
                  rx="18"
                  ry="14"
                  fill="#90b4ff"
                  opacity="0.35"
                />
              </g>
              <path
                d="M236 308 C228 320 210 340 190 352"
                stroke="#c98555"
                strokeWidth="16"
                strokeLinecap="round"
              />
              <path
                d="M168 356 C188 380 208 396 226 400"
                stroke="#bc7848"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <g transform="translate(112 320)">
                <path
                  d="M78 140 C70 90 76 40 126 20 C174 0 212 22 240 60 C220 78 210 120 210 160 Z"
                  fill="#f3c997"
                />
                <path
                  d="M90 100 C70 110 56 128 50 150 C72 190 112 210 150 210 L160 170 C134 160 112 134 90 100 Z"
                  fill="#f0bf87"
                />
                <path
                  d="M150 210 C160 270 188 318 226 338 C244 328 250 310 254 288 C230 264 180 230 150 210 Z"
                  fill="#d18d5d"
                />
              </g>
              <g transform="translate(80 170)">
                <path
                  d="M98 190 C60 120 44 60 58 32 C86 30 116 50 134 92 C128 120 120 170 104 210 Z"
                  fill="#eab481"
                />
                <path
                  d="M108 50 C96 24 66 10 40 10 C28 52 44 112 74 170"
                  stroke="#2b1e1d"
                  strokeWidth="28"
                  strokeLinecap="round"
                />
                <path
                  d="M120 80 C150 120 176 130 216 130"
                  stroke="#2b1e1d"
                  strokeWidth="30"
                  strokeLinecap="round"
                />
              </g>
              <g transform="translate(40 110)">
                <path
                  d="M170 90 C136 64 120 38 114 14 C180 -10 270 6 314 54 C292 82 250 110 210 118 C196 122 180 112 170 90 Z"
                  fill="#3a2928"
                />
                <path
                  d="M132 30 C150 60 210 90 280 90"
                  stroke="#1d1312"
                  strokeWidth="32"
                  strokeLinecap="round"
                />
                <path
                  d="M210 118 C240 130 260 150 272 176"
                  stroke="#231817"
                  strokeWidth="22"
                  strokeLinecap="round"
                />
              </g>
              <g transform="translate(360 306)">
                <path
                  d="M120 40 C150 10 210 0 258 30 C270 70 260 120 230 160 C200 150 180 130 170 100"
                  fill="#f0bf87"
                />
                <path
                  d="M228 162 C264 190 292 230 310 270"
                  stroke="#f0bf87"
                  strokeWidth="34"
                  strokeLinecap="round"
                />
                <path
                  d="M310 270 C290 268 260 252 246 232 C224 234 208 242 196 254"
                  stroke="#d18d5d"
                  strokeWidth="22"
                  strokeLinecap="round"
                />
                <path
                  d="M192 280 C220 320 246 332 270 330"
                  stroke="#c07845"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
              </g>
              <g transform="translate(80 250)">
                <path
                  d="M70 400 C40 320 70 220 124 200 C186 220 220 350 200 470 C150 480 100 460 70 400 Z"
                  fill="#3a6cd7"
                  opacity="0.8"
                />
                <path
                  d="M140 250 C160 210 200 190 236 202 C270 232 266 286 240 310 C222 310 200 308 188 290 C178 276 158 266 140 250 Z"
                  fill="#486fe1"
                />
              </g>
            </g>
            <g transform="translate(390 320)">
              <g filter="url(#wingBlur)">
                <path
                  d="M180 20 C300 10 420 80 470 180 C380 170 290 120 180 20 Z"
                  fill="url(#parrotWing)"
                  opacity="0.65"
                />
                <path
                  d="M230 140 C320 160 380 220 410 300 C320 240 260 200 210 160 Z"
                  fill="url(#parrotWing)"
                  opacity="0.5"
                />
              </g>
              <ellipse
                cx="180"
                cy="220"
                rx="90"
                ry="70"
                fill="url(#parrotBody)"
              />
              <ellipse
                cx="140"
                cy="182"
                rx="40"
                ry="48"
                fill="url(#parrotBody)"
              />
              <path
                d="M120 188 C140 160 190 148 220 168 C210 200 170 208 140 206 Z"
                fill="#2a9666"
              />
              <path
                d="M98 182 C120 160 148 154 162 162 C158 190 134 212 110 210 Z"
                fill="#e3403b"
              />
              <path
                d="M134 194 C150 188 162 188 170 194"
                stroke="#ffd4d3"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <circle cx="128" cy="174" r="10" fill="#1a2a4a" />
              <circle cx="130" cy="172" r="4" fill="#ffffff" />
              <path
                d="M190 244 C240 252 280 276 320 320"
                stroke="#2a9666"
                strokeWidth="22"
                strokeLinecap="round"
              />
              <path
                d="M150 248 C170 300 186 328 200 336"
                stroke="#ffffff"
                strokeOpacity="0.5"
                strokeWidth="12"
                strokeLinecap="round"
              />
            </g>
            <g>
              <path
                d="M0 1280 C220 1180 660 1180 900 1280 L900 1600 H0 Z"
                fill="rgba(24,43,78,0.55)"
              />
              <path
                d="M0 1360 C260 1280 640 1280 900 1360 L900 1600 H0 Z"
                fill="rgba(18,35,60,0.45)"
              />
            </g>
            <rect
              x="0"
              y="0"
              width="900"
              height="1600"
              fill="url(#sunGlow)"
              opacity="0.25"
            />
          </svg>
        </div>
        <section className="space-y-2 px-4">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Until We Meet Again
          </h1>
          <p className="text-sm text-white/80">
            A quiet farewell caught in motion—soft light, misty eyes, and a
            parrot taking flight beyond the pastel glow of a window.
          </p>
        </section>
      </main>
    </div>
  );
}
