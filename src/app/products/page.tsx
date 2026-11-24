import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { productCategories } from '@/data/products';
import {
  Boxes,
  CircleDot,
  Cog,
  Droplets,
  Gauge,
  Layers,
  Settings2,
  SlidersHorizontal,
  Wrench,
} from 'lucide-react';

const productIcons = [
  Settings2,
  CircleDot,
  Cog,
  SlidersHorizontal,
  Layers,
  Gauge,
  Droplets,
  Wrench,
];

export const metadata: Metadata = {
  title: 'Industrial Valve Products & Automation | Via Valves',
  description: 'Browse industrial valve and automation product categories.',
};

export default function ProductsPage() {
  return (
    <div className="app-route">
      <PageHeader eyebrow="Catalog" title="Products" subtitle="Browse categories." />
      <section className="app-page-body">
        <div className="app-page-section-heading">
          <h2>Valve catalog</h2>
        </div>
        <div className="app-page-card-grid">
          {productCategories.map((product, index) => {
            const Icon = productIcons[index % productIcons.length] || Boxes;
            return (
              <Link
                href={`/products/${product.slug}`}
                key={product.id}
                className="app-page-card app-product-card"
              >
                <div className="app-product-image">
                  <img src={product.image} alt="" loading="lazy" />
                </div>
                <div className="app-page-card-label">
                  <Icon />
                  <span>{product.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
