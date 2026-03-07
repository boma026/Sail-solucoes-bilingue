export function SketchArrowRight({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M 8 5 Q 14 9 17 13" />

      <path d="M 18 12 Q 12 17 7 20" />
    </svg>
  )
}
