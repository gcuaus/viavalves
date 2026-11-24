import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { FileText, Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms | Via Valves',
  description: 'Terms and service information for using Via Valves.',
};

export default function TermsPage() {
  return (
    <div className="app-route">
      <PageHeader eyebrow="Legal" title="Terms" subtitle="Service and website terms." />
      <section className="app-page-body app-terms-page">
        <article className="app-terms-card" id="conditions">
          <span className="app-terms-icon"><FileText /></span>
          <h2>Terms &amp; Conditions</h2>
          <p>
            Please provide accurate project, company, and contact details when sending an inquiry.
            Quotes are based on the information supplied and are not an order confirmation.
          </p>
          <p>
            A project begins only after both parties confirm its scope, pricing, schedule, and
            applicable terms in writing.
          </p>
        </article>

        <article className="app-terms-card" id="service">
          <span className="app-terms-icon"><Handshake /></span>
          <h2>Terms of Service</h2>
          <p>
            Via Valves coordinates valve sourcing and related inspection and logistics support.
            Manufacturers and other suppliers remain independent third parties.
          </p>
          <p>
            Inspection findings apply to the agreed scope and inspected items; they do not
            guarantee future product performance. Supplier warranties and sale terms are governed
            by the applicable written agreement.
          </p>
        </article>
        <p className="app-terms-note">
          These general terms are a starting point. Project-specific written agreements take
          precedence; have these terms reviewed for your business and jurisdiction.
        </p>
      </section>
    </div>
  );
}
