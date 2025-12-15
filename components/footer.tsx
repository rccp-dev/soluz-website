"use client";

export default function Footer() {
  return (
    <>
      <footer
        className="py-10 bg-[#000] text-center text-sm"
        role="contentinfo"
      >
        <p>© {new Date().getFullYear()} Savatto</p>
      </footer>
    </>
  )
}