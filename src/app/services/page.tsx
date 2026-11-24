import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { services } from '@/data/services';
import {
  ArrowRight,
  ClipboardCheck,
  Globe2,
  PackageCheck,
  ShieldCheck,
} from 'lucide-react';

const serviceIcons = [Globe2, ShieldCheck, ClipboardCheck, PackageCheck];

export const metadata: Metadata = {
  title: 'Valve Sourcing Services | Via Valves',
  description: 'Choose a sourcing, verification, inspection, or logistics service.',
};

export default function ServicesPage() {
  return (
    <div className="app-route">
      <PageHeader eyebrow="Workspace" title="Services" subtitle="Choose a service." />
      <section className="app-page-body">
        <div className="app-page-section-heading">
          <h2>Sourcing support</h2>
        </div>
        <div className="app-page-card-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <Link
                href={`/services/${service.slug}`}
                key={service.slug}
                className="app-page-card app-page-simple-card"
              >
                <Icon />
                <span>{service.title}</span>
                <ArrowRight />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
