import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

/* ============================================================
   ANTCPU NAVIGATION ISLAND — the house nav playbook (v1, React)
   Floating island bar + slide-out drawer with search & tools.
   ONE directory drives the drawer and the search — edit the
   list, and the nav updates everywhere the island lives.
   ============================================================ */

type NavItem = {
  group: string;
  icon: string;
  label: string;
  hint: string;
  href: string;
  keys: string;
};

const DIRECTORY: NavItem[] = [
  { group: 'Navigate', icon: '🏠', label: 'Pathway home', hint: 'The four lanes, one page', href: 'https://antcpu.github.io/antcputestpilot/', keys: 'home start lanes pathway doors' },
  { group: 'Navigate', icon: '🏟️', label: 'The Arena', hint: 'Proof, live in public — antcpu.cloud', href: 'https://antcpu.cloud', keys: 'arena ads board proof rankings' },
  { group: 'Navigate', icon: '📣', label: 'Marketing Hub', hint: 'How the machine runs — this page', href: 'https://antcpu.github.io/Marketing/', keys: 'marketing hub rhythm surfaces pipeline' },
  { group: 'Navigate', icon: '🐜', label: 'Hiro on GitHub', hint: 'ANTCPU is for hire', href: 'https://github.com/antcputestpilot', keys: 'github profile hire for hire' },
  { group: 'Navigate', icon: '✍️', label: 'Apply', hint: 'Join the Human in the Loop Challenge', href: 'https://antcpu.io/apply', keys: 'apply join challenge cohort internship' },
  { group: 'Tools', icon: '🛠️', label: 'Challenge repo', hint: 'The first task lives here', href: 'https://github.com/antcpu/challenge', keys: 'challenge repo code task dev' },
  { group: 'Tools', icon: '📦', label: 'Ads repo', hint: "The arena's own build", href: 'https://github.com/antcpu/ads', keys: 'ads repo code build arena' },
  { group: 'Tools', icon: '🏢', label: 'Arena4 office', hint: "The mentor's office", href: 'https://antcpu-ads.vercel.app/office/Arena4', keys: 'office mentor arena4 ops' },
  { group: 'Tools', icon: '💼', label: 'Free consultation', hint: 'Hire the bench — antcpu.com', href: 'https://antcpu.com', keys: 'hire consultation business client work' },
  { group: 'Tools', icon: '💬', label: 'Messenger', hint: 'Close it in a DM', href: 'https://m.me/antcpu', keys: 'messenger dm message chat talk' },
];

const QUICK = [
  { label: 'Arena', href: 'https://antcpu.cloud' },
  { label: 'Pathway', href: 'https://antcpu.github.io/antcputestpilot/' },
  { label: 'Apply', href: 'https://antcpu.io/apply' },
];

export function NavIsland() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DIRECTORY;
    return DIRECTORY.filter((i) => `${i.label} ${i.hint} ${i.keys}`.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
    document.body.style.overflow = '';
  }, [open ]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const groups: { name: string; items: NavItem[] }[] = [];
  shown.forEach((item) => {
    const g = groups.find((x) => x.name === item.group);
    if (g) g.items.push(item);
    else groups.push({ name: item.group, items: [item] });
  });

  return (
    <>
      {/* The island */}
      <nav
        aria-label="Site"
        className="fixed top-3.5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3.5 w-[min(1060px,calc(100%-24px))] rounded-full border border-white/15 bg-[#0e121a]/95 backdrop-blur px-[18px] py-2 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
      >
        <a href="https://antcpu.github.io/Marketing/" className="flex items-center gap-2.5 no-underline text-slate-100 whitespace-nowrap">
          <span className="text-[21px]">🐜</span>
          <span className="leading-tight">
            <span className="block text-[15px] font-bold tracking-[2.5px]">HIRO</span>
            <span className="hidden sm:block text-[10px] tracking-[1.5px] uppercase text-slate-400">ANTCPU · Marketing Hub</span>
          </span>
        </a>
        <div className="hidden md:flex gap-1 ml-auto">
          {QUICK.map((q) => (
            <a key={q.label} href={q.href} className="text-[13px] text-slate-200 no-underline px-3 py-2 rounded-full hover:bg-white/10 hover:text-white whitespace-nowrap">
              {q.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="ml-auto md:ml-0.5 flex-none w-[42px] h-[42px] rounded-full border border-white/25 bg-white/5 text-white cursor-pointer flex items-center justify-center hover:bg-white/15"
        >
          <Menu size={19} />
        </button>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[70] bg-black/50 transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Slide-out drawer */}
      <aside
        aria-label="Navigation drawer"
        className={`fixed top-0 right-0 z-[80] h-dvh w-[min(370px,94vw)] bg-[#10141d] text-slate-100 shadow-[-14px_0_40px_rgba(0,0,0,0.4)] flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-[105%]'}`}
      >
        <div className="flex items-center gap-2.5 px-[18px] pt-[18px] pb-3 border-b border-white/10">
          <span>🐜</span>
          <span className="text-[13px] tracking-[2.5px] uppercase text-slate-400">Navigate ANTCPU</span>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
            className="ml-auto flex-none w-[38px] h-[38px] rounded-full border border-white/20 bg-transparent text-white cursor-pointer flex items-center justify-center hover:bg-white/10"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-[18px] pt-3.5 pb-1.5 relative">
          <Search size={16} className="absolute left-[30px] top-[26px] text-slate-500" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && shown.length > 0) window.location.href = shown[0].href;
            }}
            placeholder="Search pages & tools…"
            aria-label="Search pages and tools"
            className="w-full rounded-[10px] border border-white/20 bg-[#171c28] text-white text-[15px] pl-10 pr-3.5 py-3 outline-none focus:border-amber-500 placeholder:text-slate-500"
          />
        </div>

        <div className="overflow-y-auto px-2.5 pt-2 pb-[18px]">
          {groups.map((g) => (
            <div key={g.name}>
              <div className="text-[11px] tracking-[2.5px] uppercase text-slate-500 px-2.5 pt-4 pb-1.5">{g.name}</div>
              {g.items.map((item) => (
                <a key={item.label} href={item.href} className="flex gap-3 items-start no-underline text-slate-100 p-2.5 rounded-[10px] hover:bg-white/10">
                  <span className="text-[19px] leading-snug">{item.icon}</span>
                  <span>
                    <span className="block text-[15px]">{item.label}</span>
                    <span className="block text-[12.5px] text-slate-400 mt-px">{item.hint}</span>
                  </span>
                </a>
              ))}
            </div>
          ))}
          {shown.length === 0 && (
            <div className="px-3 py-[18px] text-sm text-slate-400">Nothing matches — try “arena”, “apply”, or “hire”.</div>
          )}
        </div>

        <div className="mt-auto px-[18px] py-4 border-t border-white/10 text-[13px] text-slate-400 text-center">
          Human in the Loop · Antony ·{' '}
          <a href="https://antcpu.com" className="text-slate-100">
            antcpu.com
          </a>
        </div>
      </aside>
    </>
  );
}
