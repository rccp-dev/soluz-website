export default function DownButton() {
  return (
    <>
      <a
        href="#servicos"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center animate-bounce shadow-lg"
        aria-label="Descer para conteúdo principal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </>
  );
}
