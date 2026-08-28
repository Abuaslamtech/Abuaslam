export function Footer() {
  return (
    <footer className="py-10 px-4 md:px-8 text-center border-t border-edge-subtle flex flex-col items-center gap-4 bg-bg">
      <div className="flex items-center gap-2 font-mono text-[11px] text-muted tracking-wider uppercase">
        <span>© {new Date().getFullYear()} Abdullahi Ismail (Abuaslam)</span>
        <span>·</span>
        <a href="https://atlabx.com" target="_blank" rel="noreferrer" className="text-accent hover:underline">
          AtlabX Technologies
        </a>
      </div>
      <a
        href="#home"
        className="text-[11px] text-accent font-mono tracking-widest uppercase hover:underline transition-colors flex items-center gap-1"
      >
        Back to top ↑
      </a>
    </footer>
  );
}

