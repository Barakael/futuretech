import { Link } from 'react-router-dom'
import { services } from '@/content/services'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ServiceCard } from '@/components/services/ServiceCard'
import { Button } from '@/components/shared/Button'

export function ServicePillars() {
  return (
    <section className="bg-paper py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Core services"
            title="Six pillars that define FTE"
            description="Security, vehicle tracking, power & backup, ECTS container tracking, software development and office automation."
          />
          <Button to="/services" variant="ghost" className="shrink-0 self-start sm:self-auto">
            View all
          </Button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-navy/60">
          Need hardware and platforms?{' '}
          <Link to="/products" className="font-semibold text-blue underline-offset-2 hover:underline">
            Browse products
          </Link>
        </p>
      </Container>
    </section>
  )
}
