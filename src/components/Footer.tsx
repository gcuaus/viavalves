import Link from 'next/link';
import { company } from '../data/company';
import { Boxes, Building2, Mail, Phone, Send, Wrench } from 'lucide-react';
import { WibClock } from './WibClock';
import { PwaInstallButton } from './PwaInstallButton';

const links = [
  { title: 'Products', href: '/products', icon: Boxes },
  { title: 'Services', href: '/services', icon: Wrench },
  { title: 'About', href: '/about', icon: Building2 },
  { title: 'Get a quote', href: '/contact', icon: Send },
];

export function Footer() {
  return (
    <footer className="app-footer">
      <div className="app-footer-heading">
        <div>
          <span className="app-home-kicker">Via Valves</span>
          <h2>Need help?</h2>
        </div>
        <div className="app-footer-actions">
          <PwaInstallButton />
          <Link href="/contact" className="app-footer-contact-link">Contact us</Link>
        </div>
      </div>

      <div className="app-footer-grid">
        {links.map(({ title, href, icon: Icon }) => (
          <Link href={href} key={href} className="app-footer-link-card">
            <Icon />
            <span>{title}</span>
          </Link>
        ))}
      </div>

      <div className="app-footer-contact">
        <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`}>
          <Phone /> <span>{company.phone}</span>
        </a>
        <a href={`mailto:${company.email}`}>
          <Mail /> <span>{company.email}</span>
        </a>
      </div>

      <div className="app-footer-legal">
        <WibClock />
        <div className="app-footer-legal-links">
          <Link href="/terms#conditions">Terms &amp; Conditions</Link>
          <Link href="/terms#service">Terms of Service</Link>
        </div>
      </div>
      <p className="app-footer-copyright">© {new Date().getFullYear()} Via Valves</p>
    </footer>
  );
}
