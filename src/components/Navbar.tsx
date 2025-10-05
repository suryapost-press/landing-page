import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },     // Make sure About.tsx has id="about"
  { label: 'Why Us', href: '#trust' },     // Make sure Trust.tsx has id="trust"
  { label: 'Contact', href: '#contact' },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase =
    'px-3 py-2 text-sm font-medium transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40';

  const linkClass = scrolled || open
    ? 'text-brand-charcoal/80 hover:text-brand-charcoal'
    : 'text-white/80 hover:text-white';

  return (
    <nav
      className={[
        'fixed inset-x-0 top-0 z-50',
        scrolled || open
          ? 'bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm'
          : 'bg-transparent',
      ].join(' ')}
      aria-label="Primary"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo/Brand */}
          <a
            href="#home"
            className={[
              'text-lg font-extrabold tracking-tight',
              scrolled || open ? 'text-brand-charcoal' : 'text-white',
            ].join(' ')}
          >
            Surya Post Press
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${linkBase} ${linkClass}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* CTA */}
            <a
              href="tel:+918281054873"
              className="ml-3 inline-flex items-center gap-2 rounded-lg bg-brand-gold text-brand-dark px-4 py-2 text-sm font-semibold shadow-brand-lg transition-all hover:bg-yellow-500"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={[
              'md:hidden inline-flex items-center justify-center rounded-md p-2 transition-colors',
              scrolled || open
                ? 'text-brand-charcoal hover:bg-black/5'
                : 'text-white hover:bg-white/10',
            ].join(' ')}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-1">
              {LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-base font-medium text-brand-charcoal hover:bg-black/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+918281054873"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-gold text-brand-dark px-4 py-2 text-base font-semibold shadow-brand-lg transition-colors hover:bg-yellow-500"
                onClick={() => setOpen(false)}
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}