import { Link } from 'react-router-dom'
import { about } from '@/content/about'
import { services } from '@/content/services'
import { Hero } from '@/components/home/Hero'
import { ServicePillars } from '@/components/home/ServicePillars'
import { WhyUs } from '@/components/home/WhyUs'
import { CtaBand } from '@/components/home/CtaBand'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Button } from '@/components/shared/Button'

export function HomePage() {
  const featured = [services[0], services[1], services[3]]

  return (
    <>
      <Hero />

      <section className="border-b border-navy/8 bg-white py-14 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/images/home-about.jpg"
              alt="Field engineering and installation work"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-navy/85 p-4 text-white sm:p-5">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-green">
                Field capability
              </p>
              <p className="mt-1 font-display text-lg font-bold">Security · Tracking · Power</p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="About FTE"
              title="Built for real sites across Tanzania"
              description={about.intro}
            />
            <p className="mt-4 text-sm leading-relaxed text-navy/75">{about.focus}</p>
            <Button to="/about" variant="ghost" className="mt-5">
              Company overview
            </Button>
          </div>
        </Container>
      </section>

      <ServicePillars />

      <section className="bg-navy py-14 text-white sm:py-16">
        <Container>
          <SectionHeading
            light
            eyebrow="In focus"
            title="Visibility from vehicles to containers"
            description="Live fleet GPS and ECTS cargo tracking help you protect assets on the road and through the corridor."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {featured.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group relative block overflow-hidden rounded-xl"
              >
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-display text-base font-bold">{service.title}</p>
                  <p className="mt-1 line-clamp-2 text-sm text-white/80">{service.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <WhyUs />
      <CtaBand />
    </>
  )
}
