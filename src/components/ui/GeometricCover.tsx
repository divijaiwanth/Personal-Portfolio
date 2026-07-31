function hashSeed(seed: string) {
  let h = 0
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h)
}

function rand(seed: number, salt: number) {
  const x = Math.sin(seed + salt) * 10000
  return x - Math.floor(x)
}

interface GeometricCoverProps {
  seed: string
  className?: string
}

const PALETTE = ['#e03131', '#c9a84c', '#f5f5f5']

export function GeometricCover({ seed, className = '' }: GeometricCoverProps) {
  const h = hashSeed(seed)
  const circle = { cx: 20 + rand(h, 1) * 25, cy: 25 + rand(h, 2) * 20, r: 10 + rand(h, 3) * 10 }
  const square = { x: 55 + rand(h, 4) * 20, y: 45 + rand(h, 5) * 20, size: 16 + rand(h, 6) * 14, rotate: rand(h, 7) * 90 }
  const triSize = 18 + rand(h, 8) * 16
  const triX = 60 + rand(h, 9) * 20
  const triY = 10 + rand(h, 10) * 15
  const ringR = 14 + rand(h, 11) * 10
  const ringCx = 78 + rand(h, 12) * 12
  const ringCy = 65 + rand(h, 13) * 20

  const colorA = PALETTE[Math.floor(rand(h, 14) * PALETTE.length)]
  const colorB = PALETTE[Math.floor(rand(h, 15) * PALETTE.length)]

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
    >
      <rect width="100" height="100" fill="#111111" />
      <circle cx={circle.cx} cy={circle.cy} r={circle.r} fill={colorA} opacity="0.85" />
      <rect
        x={square.x}
        y={square.y}
        width={square.size}
        height={square.size}
        fill="none"
        stroke={colorB}
        strokeWidth="1.5"
        transform={`rotate(${square.rotate} ${square.x + square.size / 2} ${square.y + square.size / 2})`}
        opacity="0.7"
      />
      <polygon
        points={`${triX},${triY} ${triX + triSize},${triY} ${triX + triSize / 2},${triY + triSize}`}
        fill={colorB}
        opacity="0.5"
      />
      <circle cx={ringCx} cy={ringCy} r={ringR} fill="none" stroke={colorA} strokeWidth="1" opacity="0.4" />
    </svg>
  )
}
