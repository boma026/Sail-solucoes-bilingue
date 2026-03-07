export function SketchEmailIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path
        d="
        M 5 4.5
        Q 12 4 19 4.5
        Q 21 4.5 21 8
        Q 21.5 12 21 16
        Q 21 20.5 16 20.5
        Q 12 21 8 20.5
        Q 3 20.5 3 16
        Q 2.5 12 3 8
        Q 3 4.5 5.5 4.5
      "
      />

      <path d="M 3.5 6 Q 12 14 20.5 6" />
    </svg>
  )
}
