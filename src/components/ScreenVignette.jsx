/**
 * ScreenVignette — soft darkness at all viewport edges.
 * Keeps the hoodie as the clear visual focus.
 */
export default function ScreenVignette() {
  return (
    <div
      className="fixed inset-0 z-10 pointer-events-none"
      style={{
        background: `
          radial-gradient(
            ellipse 100% 100% at 50% 50%,
            transparent 35%,
            rgba(10,10,10,0.5) 82%,
            rgba(10,10,10,0.88) 100%
          )
        `,
      }}
    />
  )
}
