import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { industries } from '@/data/industries';
import { ArrowRight, Cog, Factory, FlaskConical, Waves } from 'lucide-react';

const industryIcons = [Factory, FlaskConical, Waves, Cog];

export const metadata: Metadata = {
  title: 'Industries — Industrial Valve Sourcing for Cement, Chemical, Water & OEM | Via Valves',
  description: 'Sector-specific valve sourcing from China for cement, chemical, water treatment and OEM machinery — the right spec, supplier and inspector for every industry.',
};

export default function IndustriesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Industries"
        title="Industries"
        subtitle="Explore sectors."
        crumbs={[{ to: '/industries', label: 'Industries' }]}
      />

      <section className="app-page-body">
        <div className="app-page-section-heading">
          <h2>Choose an industry</h2>
        </div>
        <div className="app-page-card-grid">
          {industries.map((ind, index) => {
            const Icon = industryIcons[index % industryIcons.length];
            return (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="app-page-card"
              >
                <div className="app-page-card-image">
                  <img
                    src={ind.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="app-page-card-label">
                  <Icon />
                  <span>{ind.title}</span>
                  <ArrowRight />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
