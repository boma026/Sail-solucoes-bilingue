export function SketchInstagramIcon({ className }: { className?: string }) {
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
        M 8 3 
        Q 12 2.5 16 3 
        Q 21 3 21 8 
        Q 21.5 12 21 16 
        Q 21 21 16 21 
        Q 12 21.5 8 21 
        Q 3 21 3 16 
        Q 2.5 12 3 8 
        Q 3 3 8.5 3
    "
      />

      <path
        d="
        M 11.5 8
        C 14.5 8 16 9.5 16 12
        C 16 14.5 14.5 16 12 16
        C 9.5 16 8 14.5 8 12
        C 8 9.5 9.5 8 12.5 8
    "
      />

      <path d="M 17.5 6.5 L 17.5 6.6" strokeWidth="2.5" />
    </svg>
  )
}
