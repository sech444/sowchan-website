import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const socials = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/sowchan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    href: 'https://twitter.com/sowchan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/sowchan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@sowchan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/programs', label: 'Our Programs' },
    { href: '/impact', label: 'Our Impact' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
    { href: '/donate', label: '❤ Donate' },
  ];

  return (
    <nav style={{ backgroundColor: '#1A1A1A' }} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="SOWCHAN Logo"
              style={{ width: '52px', height: '52px', objectFit: 'contain', borderRadius: '50%' }}
            />
            <div className="hidden sm:block">
              <span style={{ color: '#F5C200', fontFamily: 'Playfair Display, serif' }} className="font-bold text-lg">
                SOWCHAN
              </span>
              <p className="text-gray-400 text-xs leading-none">Society for Women & Children</p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-semibold uppercase tracking-wider transition-colors ${
                  router.pathname === link.href
                    ? 'active text-yellow-400'
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.name}
                style={{ color: '#888' }}
                className="hover:text-yellow-400 transition-colors"
              >
                {s.icon}
              </a>
            ))}
            <div style={{ width: '1px', height: '18px', backgroundColor: '#444' }} className="mx-1" />
            <a
              href="/donate"
              style={{ backgroundColor: '#C0000C' }}
              className="text-white text-sm font-bold uppercase tracking-wider px-4 py-2 rounded hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Support Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span style={{ backgroundColor: menuOpen ? '#F5C200' : 'white' }} className="block h-0.5 w-full transition-all"></span>
              <span style={{ backgroundColor: 'white' }} className={`block h-0.5 transition-all ${menuOpen ? 'opacity-0' : 'w-full'}`}></span>
              <span style={{ backgroundColor: menuOpen ? '#F5C200' : 'white' }} className="block h-0.5 w-full transition-all"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ backgroundColor: '#111' }} className="md:hidden px-4 pb-4 pt-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm font-semibold uppercase tracking-wider border-b border-gray-800 ${
                router.pathname === link.href ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-5 mt-4 mb-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.name}
                style={{ color: '#888' }}
                className="hover:text-yellow-400 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <a
            href="/donate"
            style={{ backgroundColor: '#C0000C' }}
            className="block text-center text-white text-sm font-bold uppercase tracking-wider px-5 py-2 rounded"
          >
            Support Us
          </a>
        </div>
      )}
    </nav>
  );
}
