import Link from 'next/link';

const socials = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/sowchan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    href: 'https://twitter.com/sowchan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/sowchan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1A1A', color: '#ccc' }} className="pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-700">

          {/* Brand + Social */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpg"
                alt="SOWCHAN Logo"
                style={{ width: '60px', height: '60px', objectFit: 'contain', borderRadius: '50%' }}
              />
              <h3 style={{ color: '#F5C200', fontFamily: 'Playfair Display, serif' }} className="text-xl font-bold">
                SOWCHAN
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              Society for Women and Children Living with HIV/AIDS in Nigeria. Empowering lives, restoring dignity, building hope.
            </p>
            <div style={{ height: '3px', width: '60px', background: 'linear-gradient(90deg, #F5C200, #C0000C)' }} className="mb-5"></div>

            {/* Social Icons */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.name}
                    className="transition-all"
                    style={{
                      color: '#666',
                      backgroundColor: '#2a2a2a',
                      padding: '8px',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = '#F5C200';
                      e.currentTarget.style.color = '#1A1A1A';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = '#2a2a2a';
                      e.currentTarget.style.color = '#666';
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/programs', label: 'Our Programs' },
                { href: '/impact', label: 'Our Impact' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/donate', label: 'Donate' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span style={{ color: '#F5C200' }}>📍</span>
                <span>HOUSE 59 SENATOR ASHIRU DRIVE LAVISTA COURT ESTATE
                GALADIMAWA,  ABUJA FCT.</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: '#F5C200' }}>📞</span>
                <span>08023066297 / 08160874054</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: '#F5C200' }}>✉️</span>
                <span>swchan_2005@yahoo.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: '#F5C200' }}>🌐</span>
                <span>www.sowchan.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} SOWCHAN — Society for Women and Children Living with HIV/AIDS in Nigeria. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.name}
                style={{ color: '#444' }}
                className="hover:text-yellow-400 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
