import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
  to: string;
  label: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  crumbs,
  children,
}) => {
  return (
    <section className="app-page-header relative overflow-hidden py-5 md:py-6">
      <div className="container-px mx-auto max-w-7xl relative z-10">
        {crumbs && crumbs.length > 0 && (
          <nav className="app-page-breadcrumb mb-2 flex items-center gap-2 text-xs" aria-label="Breadcrumbs">
            <Link href="/" className="hover:text-amber transition">Home</Link>
            {crumbs.map((c, i) => (
              <React.Fragment key={c.to + i}>
                <ChevronRight className="h-3 w-3 opacity-50" />
                {i === crumbs.length - 1 ? (
                  <span className="text-amber font-semibold">{c.label}</span>
                ) : (
                  <Link href={c.to} className="hover:text-amber transition">{c.label}</Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {eyebrow && <div className="app-page-eyebrow mb-1">{eyebrow}</div>}
        <h1 className="font-display text-xl md:text-2xl font-bold tracking-tight max-w-4xl text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="app-page-subtitle mt-2 text-sm max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
};
