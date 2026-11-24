'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Boxes, Factory, Grid2X2, House, Send } from 'lucide-react';
import { Logo } from './Logo';

const items = [
  { href: '/', label: 'Home', icon: House },
  { href: '/products', label: 'Products', icon: Boxes },
  { href: '/industries', label: 'Sectors', icon: Factory },
  { href: '/services', label: 'Services', icon: Grid2X2 },
  { href: '/contact', label: 'RFQ', icon: Send },
];

export function AppNavigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <>
      <header className={`app-topbar ${scrolled ? 'app-topbar-scrolled' : ''}`}>
        <div className="app-topbar-inner">
          <Logo className="app-logo" />
          <div className="app-desktop-status">
            <span className="app-status-dot" />
            <span>Active project workspace</span>
          </div>
          <Link href="/contact" className="app-top-action">
            <Send className="h-4 w-4" />
            <span>Quote</span>
          </Link>
        </div>
      </header>

      <nav className="app-bottom-nav" aria-label="Primary navigation">
        <div className="app-bottom-nav-inner">
          {items.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`app-nav-item ${active ? 'app-nav-item-active' : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                <span className={`app-nav-icon ${item.href === '/contact' ? 'app-nav-icon-primary' : ''}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
