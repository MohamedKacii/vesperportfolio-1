import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import HoodieVideo from './components/HoodieVideo'
import HeroCopy from './components/HeroCopy'
import { useMousePosition } from './hooks/useMousePosition'
import { useIsMobile } from './hooks/useIsMobile'

export default function App() {
  const mousePos = useMousePosition()
  const isMobile = useIsMobile()

  return (
    <div className="relative w-full min-h-[100dvh] bg-black overflow-hidden">
      <Navbar />

      <section
        id="hero"
        className="relative z-20 w-full min-h-[100dvh] grid grid-cols-1 md:grid-cols-[45%_55%]"
      >
        {isMobile ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="w-full h-[52dvh]"
            >
              <HoodieVideo />
            </motion.div>
            <div className="w-full">
              <HeroCopy mouseX={0} mouseY={0} />
            </div>
          </>
        ) : (
          <>
            <div className="h-[100dvh] flex items-center">
              <HeroCopy mouseX={mousePos.x} mouseY={mousePos.y} />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="h-[100dvh]"
            >
              <HoodieVideo />
            </motion.div>
          </>
        )}
      </section>

      {/* Brand footer line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="fixed bottom-5 left-0 right-0 z-30 flex justify-center pointer-events-none"
      >
        <p className="text-[9px] tracking-[0.42em] uppercase text-brand-gray opacity-25">
          NOVA — PREMIUM ESSENTIALS — EST. MMXXV
        </p>
      </motion.div>
    </div>
  )
}
