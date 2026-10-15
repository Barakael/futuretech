import { Link } from 'react-router-dom'
import { terms } from '@/content/terms'
import { site } from '@/content/site'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function TermsPage() {
  return (
    <section className="bg-paper py-12 sm:py-16">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Legal"
          title={terms.title}
          description={`Last updated: ${terms.updated}. Applies to ${site.domain} and engagements with ${site.shortName}.`}
        />

        <p className="mt-8 text-base leading-relaxed text-navy/80">{terms.intro}</p>

        <div className="mt-10 space-y-8">
          {terms.sections.map((section) => (
            <article key={section.heading}>
              <h2 className="font-display text-lg font-bold text-navy sm:text-xl">
                {section.heading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-navy/75 sm:text-base">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-sm text-navy/60">
          Questions?{' '}
          <Link to="/contact" className="font-semibold text-blue hover:underline">
            Contact us
          </Link>{' '}
          or email{' '}
          <a href={`mailto:${site.email}`} className="font-semibold text-blue hover:underline">
            {site.email}
          </a>
          .
        </p>
      </Container>
    </section>
  )
}
