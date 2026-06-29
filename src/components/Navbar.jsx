import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = ['New Arrivals', 'Collection', 'Lookbook', 'About']

const overlayVariants = {
  hidden:  { opacity: 0, y: '-100%' },
  visible: { opacity: 1, y: '0%',   transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: '-100%', transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

const linkVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ── Fixed navbar bar ── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
      >
        {/* Logo */}
        <a href="/" className="text-brand-white text-sm font-semibold tracking-[0.2em] uppercase hover:opacity-70 transition-opacity duration-300">
          NOVA<span className="text-brand-accent">®</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-brand-gray text-xs tracking-widest uppercase hover:text-brand-white transition-opacity duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: cart + hamburger */}
        <div className="flex items-center gap-5">
          <button
            aria-label="Shopping cart"
            className="hidden md:flex items-center gap-2 text-brand-gray text-xs tracking-widest uppercase hover:text-brand-white transition-opacity duration-300"
          >
            Cart{' '}
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-brand-gray-dark text-[10px] text-brand-gray">
              0
            </span>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col items-end justify-center gap-[5px] w-8 h-8"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block h-px w-6 bg-brand-white origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-px w-4 bg-brand-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block h-px w-6 bg-brand-white origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile fullscreen overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backdropFilter: 'blur(24px)', backgroundColor: 'rgba(0,0,0,0.96)' }}
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="text-brand-white text-3xl font-light tracking-widest uppercase hover:text-brand-accent transition-colors duration-300"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
              <motion.li custom={navLinks.length} variants={linkVariants} initial="hidden" animate="visible">
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="text-brand-gray text-base tracking-widest uppercase hover:text-brand-white transition-colors duration-300 mt-4"
                >
                  Cart (0)
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
