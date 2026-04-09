import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

export default function SocialSidebar() {
  return (
    <div className="hidden lg:flex fixed left-2 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors"
        aria-label="X"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors"
        aria-label="YouTube"
      >
        <Youtube className="h-5 w-5" />
      </a>

      {/* Divider */}
      <div className="h-6 w-px bg-slate-600 my-2" />

      {/* Newsletter */}
      <a
        href="#callback"
        className="flex flex-col items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
      >
        <Mail className="h-5 w-5" />
        <span className="text-[9px] font-medium tracking-widest uppercase writing-vertical">Newsletter</span>
      </a>
    </div>
  );
}
