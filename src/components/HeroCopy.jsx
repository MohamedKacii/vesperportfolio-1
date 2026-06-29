import { motion, useSpring, useTransform } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 40 },
  animate:   { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
})

const metadata = [
  'NEW DROP',
  'Heavyweight Cotton',
  'Limited Edition',
  'Made in Portugal',
]

export default function HeroCopy({ mouseX, mouseY }) {
  const isMobile = useIsMobile()

  // Inverse parallax: text moves opposite to hoodie
  const springCfg = { stiffness: 50, damping: 18, mass: 1.2 }
  const sX = useSpring(mouseX, springCfg)
  const sY = useSpring(mouseY, springCfg)

  const tx = useTransform(sX, [-1, 1], [8, -8])
  const ty = useTransform(sY, [-1, 1], [5, -5])

  return (
    <motion.div
      className="flex flex-col justify-center gap-8 px-6 md:px-12 lg:px-16 py-24 md:py-0"
      style={isMobile ? {} : { x: tx, y: ty }}
    >
      {/* ─ Eyebrow ─ */}
      <motion.p
        {...fadeUp(0.4)}
        className="text-brand-accent text-[10px] tracking-[0.35em] uppercase font-medium"
      >
        SS — 2025 Collection
      </motion.p>

      {/* ─ Headline ─ */}
      <motion.h1
        {...fadeUp(0.55)}
        className="
          font-black uppercase leading-[0.92] tracking-[-0.02em]
          text-[clamp(52px,8.5vw,96px)]
          text-brand-white
        "
      >
        CRAFTED
        <br />
        FOR
        <br />
        <span className="text-brand-accent">MOVEMENT.</span>
      </motion.h1>

      {/* ─ Subheading ─ */}
      <motion.p
        {...fadeUp(0.7)}
        className="text-brand-gray text-sm md:text-base leading-relaxed max-w-[420px] font-light"
      >
        Premium heavyweight essentials designed with timeless silhouettes
        and relentless attention to everyday comfort.
      </motion.p>

      {/* ─ CTAs ─ */}
      <motion.div {...fadeUp(0.82)} className="flex flex-wrap gap-3">
        {/* Primary */}
        <button
          className="
            group relative overflow-hidden
            bg-brand-white text-black text-xs font-semibold tracking-[0.18em] uppercase
            px-8 py-4 rounded-full
            transition-all duration-300
            hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(248,248,245,0.12)]
            active:translate-y-0
          "
        >
          Shop Collection
        </button>

        {/* Secondary ghost */}
        <button
          className="
            relative text-brand-white text-xs font-medium tracking-[0.18em] uppercase
            px-8 py-4 rounded-full
            border border-brand-gray-dark
            hover:border-brand-accent hover:text-brand-accent
            hover:-translate-y-[3px]
            transition-all duration-300
            active:translate-y-0
            after:content-[''] after:absolute after:bottom-3 after:left-1/2
            after:-translate-x-1/2 after:w-0 after:h-px after:bg-brand-accent
            after:transition-all after:duration-300
            hover:after:w-[calc(100%-4rem)]
          "
        >
          Explore Lookbook
        </button>
      </motion.div>

      {/* ─ Product metadata strip ─ */}
      <motion.div
        {...fadeUp(0.95)}
        className="flex flex-wrap items-center gap-0 mt-2"
      >
        {metadata.map((item, i) => (
          <span key={item} className="flex items-center">
            <span className="text-brand-gray text-[10px] tracking-[0.2em] uppercase opacity-60">
              {item}
            </span>
            {i < metadata.length - 1 && (
              <span className="mx-4 h-3 w-px bg-brand-gray-dark opacity-60 inline-block" />
            )}
          </span>
        ))}
      </motion.div>
    </motion.div>
  )
}
