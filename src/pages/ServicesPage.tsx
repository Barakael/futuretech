import { services } from '@/content/services'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ServiceCard } from '@/components/services/ServiceCard'
import { CtaBand } from '@/components/home/CtaBand'

export function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden text-white">
        <img
          src="/images/banner-services.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-navy/85" aria-hidden />
        <Container className="relative py-12 sm:py-16">
          <SectionHeading
            light
            eyebrow="Services"
            title="Our six core capabilities"
            description="Security, vehicle tracking, power & backup, ECTS container tracking, software development and office automation."
          />
        </Container>
      </section>

      <section className="bg-paper py-14 sm:py-16">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
