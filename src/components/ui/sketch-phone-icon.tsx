export function SketchPhoneIcon({ className }: { className?: string }) {
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
        M 9 3 
        Q 12 2.5 15 3 
        Q 17 3 17 6 
        Q 17.5 12 17 18 
        Q 17 21 15 21 
        Q 12 21.5 9 21 
        Q 7 21 7 18 
        Q 6.5 12 7 6 
        Q 7 3 9.5 3
      "
      />

      <path d="M 10.5 6.5 Q 12 6 13.5 6.5" />

      <path d="M 10.5 18 Q 12 18.5 13.5 18" />

      <path d="M 20 9 C 22 11 22 13 20 15" />
      <path d="M 4 9 C 2 11 2 13 4 15" />
    </svg>
  )
}
