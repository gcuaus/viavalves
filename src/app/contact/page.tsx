import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { RFQForm } from '@/components/RFQForm';
import { company } from '@/data/company';
import { Mail, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Via Valves Indonesia',
  description: 'Send an industrial valve sourcing inquiry to Via Valves.',
};

export default function ContactPage() {
  return (
    <div className="app-route">
      <PageHeader eyebrow="Indonesia" title="Inquiry" subtitle="Tell us what you need." />
      <section className="app-page-body app-contact-page">
        <div className="app-page-section-heading">
          <h2>Contact Via Valves</h2>
        </div>
        <div className="app-contact-actions">
          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="app-contact-action app-contact-whatsapp"
          >
            <MessageSquare />
            <span>
              <strong>WhatsApp</strong>
              <small>{company.phone}</small>
            </span>
          </a>
          <a href={`mailto:${company.email}`} className="app-contact-action">
            <Mail />
            <span>
              <strong>Email</strong>
              <small>{company.email}</small>
            </span>
          </a>
        </div>

        <div className="app-inquiry-card">
          <div className="app-inquiry-heading">
            <h2>Send inquiry</h2>
            <p>English-language support for Indonesia.</p>
          </div>
          <RFQForm compact />
        </div>
      </section>
    </div>
  );
}
