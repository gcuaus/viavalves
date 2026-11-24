import Link from 'next/link';
import { MinimalValveHero } from '@/components/MinimalValveHero';
import { industries } from '@/data/industries';
import { productCategories } from '@/data/products';
import { services } from '@/data/services';
import {
  ArrowRight,
  Boxes,
  ClipboardCheck,
  Factory,
  FileCheck2,
  Globe2,
  Search,
  ShieldCheck,
} from 'lucide-react';

const quickActions = [
  { title: 'Find valves', href: '/products', icon: Search, tone: 'mint' },
  { title: 'Check suppliers', href: '/services/supplier-verification', icon: ShieldCheck, tone: 'lime' },
  { title: 'Book inspection', href: '/services/quality-inspection', icon: ClipboardCheck, tone: 'blue' },
  { title: 'Track sourcing', href: '/services/china-valve-sourcing', icon: FileCheck2, tone: 'peach' },
];

export default function HomePage() {
  return (
    <div className="app-dashboard">
      <MinimalValveHero />

      <section className="app-home-section">
        <div className="app-home-section-heading">
          <div>
            <span className="app-home-kicker">Workspace</span>
            <h2>Quick actions</h2>
          </div>
        </div>
        <div className="app-home-grid">
          {quickActions.map(({ title, href, icon: Icon, tone }) => (
            <Link key={title} href={href} className={`app-home-card app-home-card-${tone}`}>
              <span className="app-home-card-icon"><Icon /></span>
              <span className="app-home-card-title">{title}</span>
              <ArrowRight className="app-home-card-arrow" />
            </Link>
          ))}
        </div>
      </section>

      <section className="app-home-section app-home-section-muted">
        <div className="app-home-section-heading">
          <div>
            <span className="app-home-kicker">Catalog</span>
            <h2>Browse products</h2>
          </div>
          <Link href="/products" className="app-home-view-all">View all <ArrowRight /></Link>
        </div>
        <div className="app-home-grid">
          {productCategories.slice(0, 6).map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="app-home-card app-home-card-product">
              <span className="app-home-card-icon"><Boxes /></span>
              <span className="app-home-card-title">{product.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="app-home-section">
        <div className="app-home-section-heading">
          <div>
            <span className="app-home-kicker">Support</span>
            <h2>Sourcing services</h2>
          </div>
          <Link href="/services" className="app-home-view-all">View all <ArrowRight /></Link>
        </div>
        <div className="app-home-grid">
          {services.slice(0, 4).map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="app-home-card app-home-card-service">
              <span className="app-home-card-icon"><ClipboardCheck /></span>
              <span className="app-home-card-title">{service.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="app-home-section app-home-section-muted">
        <div className="app-home-section-heading">
          <div>
            <span className="app-home-kicker">Expertise</span>
            <h2>Industries</h2>
          </div>
          <Link href="/industries" className="app-home-view-all">View all <ArrowRight /></Link>
        </div>
        <div className="app-home-grid">
          {industries.slice(0, 4).map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`} className="app-home-card app-home-card-industry">
              <span className="app-home-card-icon"><Factory /></span>
              <span className="app-home-card-title">{industry.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="app-home-contact">
        <span className="app-home-contact-icon"><Globe2 /></span>
        <div>
          <h2>Ready to source?</h2>
          <p>Talk to a valve specialist.</p>
        </div>
        <Link href="/contact" aria-label="Contact Via Valves"><ArrowRight /></Link>
      </section>
    </div>
  );
}
