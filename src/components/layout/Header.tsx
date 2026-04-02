import {
  LogoIcon,
  SearchIcon,
  BellIcon,
  ChevronDownIcon,
} from '../icons/Icons';

export default function Header() {
  return (
    <header className="h-12 bg-[#1E1B4B] flex items-center justify-between px-4 shrink-0 fixed top-0 w-full z-[60]">
      {/* Left: Logo & Workspace */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <LogoIcon />
          <span className="text-white font-bold text-[15px] tracking-tight">Worcspace</span>
        </div>
        <button className="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 transition-all rounded px-2.5 py-1 text-white text-[11px] font-medium border border-white/5">
          <span>Worcspace 1</span>
          <ChevronDownIcon />
        </button>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-[480px] mx-12 hidden md:block">
        <div className="flex items-center gap-2 bg-white/5 hover:bg-white/10 transition-all rounded-md px-3 py-1.5 w-full border border-white/5">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white/80 placeholder-white/30 text-xs outline-none w-full"
            readOnly
          />
          <kbd className="text-white/20 text-[10px] font-mono border border-white/5 px-1.5 rounded bg-white/5 select-none">⌘K</kbd>
        </div>
      </div>

      {/* Right: Notifications & Avatar */}
      <div className="flex items-center gap-4">
        <button className="text-white/60 hover:text-white transition-colors p-1 rounded-md hover:bg-white/5">
          <BellIcon />
        </button>
        <div className="w-7 h-7 rounded-full bg-[#4F46E5] flex items-center justify-center text-white text-[10px] font-bold border-2 border-white/10">
          GK
        </div>
      </div>
    </header>
  );
}