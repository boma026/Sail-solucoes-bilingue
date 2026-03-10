export function SketchMenuButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="hover:text-sail-blue-wave relative flex h-12 w-12 items-center justify-center transition-colors focus:outline-none"
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300"
      >
        {isOpen ? (
          <>
            <path
              d="M 7 8 Q 18 14 25 24"
              className="animate-[draw_0.3s_ease-in-out]"
            />
            <path
              d="M 24 7 Q 14 18 8 25"
              className="animate-[draw_0.3s_ease-in-out]"
            />
          </>
        ) : (
          <>
            <path d="M 5 9 Q 16 7 27 9" />

            <path d="M 6 16 Q 16 17 26 16" />

            <path d="M 5 23 Q 16 25 27 23" />
          </>
        )}
      </svg>
    </button>
  )
}
