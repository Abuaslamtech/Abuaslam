export function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 text-center border-t border-edge-subtle flex flex-col items-center gap-4">
      <div className="font-mono text-[12px] text-muted tracking-wider">
        © {new Date().getFullYear()} Abdullahi Ismail. Built with Next.js &
        Tailwind.
      </div>
      <a
        href="#home"
        className="text-[12px] text-primary no-underline hover:underline font-mono tracking-wider uppercase transition-colors"
      >
        Back to top ↑
      </a>
    </footer>
  );
}
