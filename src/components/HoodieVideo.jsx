import { useRef, useEffect } from 'react'

/**
 * HoodieVideo — clean autoplay loop, no obstructions.
 * The video fills its container at full quality and plays itself.
 */
export default function HoodieVideo() {
  const videoRef = useRef(null)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    vid.playbackRate = 1
    vid.play().catch(() => {})
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <video
        ref={videoRef}
        src="/hoodie.mp4"
        muted
        playsInline
        loop
        preload="auto"
        className="w-full h-full object-contain"
      />
    </div>
  )
}
