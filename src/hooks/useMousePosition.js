import { useState, useEffect, useCallback } from 'react'

/**
 * Tracks the normalized mouse position within the viewport.
 * Returns { x, y } both in range [-1, 1] relative to viewport centre.
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e) => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 2   // -1 … 1
    const y = (e.clientY / window.innerHeight - 0.5) * 2   // -1 … 1
    setPosition({ x, y })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return position
}
