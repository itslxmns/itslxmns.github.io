export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:border-neutral-800/60 dark:bg-black/30">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#" className="text-base font-semibold tracking-wide">
          Itslxmns
        </a>
        <nav className="flex items-center gap-2">
          <a
            href="#about"
            className="rounded-lg border border-transparent px-3 py-1.5 text-sm transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            About
          </a>
          <a
            href="#skills"
            className="rounded-lg border border-transparent px-3 py-1.5 text-sm transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            Skills
          </a>
          <a
            href="#contacts"
            className="rounded-lg border border-transparent px-3 py-1.5 text-sm transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
