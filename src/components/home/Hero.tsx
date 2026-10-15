import { site } from '@/content/site'
import { heroImage, services } from '@/content/services'
import { Button } from '@/components/shared/Button'
import { Container } from '@/components/layout/Container'

const pillars = services.map((service) => ({
  slug: service.slug,
  label: service.title.replace(' — Container Tracking', '').replace(' Systems', '').replace(' Development', '').replace(' Automation', ''),
}))

export function Hero() {
  return (
    <section className="hero-frame relative isolate flex flex-col overflow-hidden text-white">
      <img
        src={heroImage.src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-navy/45 sm:bg-navy/35" aria-hidden />
      <div
        className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-navy/95 via-navy/78 to-navy/25 sm:w-[70%] lg:via-navy/70 lg:to-transparent"
        aria-hidden
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1.5  sm:w-2"
      />

      <Container className="relative flex flex-1 flex-col justify-start gap-6 py-8 sm:justify-between sm:gap-10 sm:py-12 lg:py-14">
        <div className="max-w-3xl">
          <p className="animate-fade-up font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-green sm:text-xs lg:text-sm">
            {site.acronym} · Dar es Salaam, Tanzania
          </p>

          <h1 className="animate-fade-up-delay mt-4 sm:mt-5">
            <span className="block font-display text-[2.75rem] font-extrabold leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              FUTURE
            </span>
            <span className="mt-2 block font-display text-lg font-semibold uppercase tracking-[0.16em] text-green sm:mt-3 sm:text-2xl lg:text-3xl lg:tracking-[0.18em]">
              Technologies
            </span>
            <span className="mt-1.5 block font-display text-xs font-medium uppercase tracking-[0.14em] text-white/70 sm:text-sm lg:text-base">
              and Engineering Limited
            </span>
          </h1>
        </div>

        <div className="max-w-xl">
          <div aria-hidden className="h-0.5 w-14 rounded-full bg-red sm:w-20" />
          <p className="animate-fade-up-delay-2 mt-5 text-base leading-relaxed text-white/92 sm:text-lg lg:text-xl">
            Security, tracking and power that keep operations moving.
          </p>
          <p className="animate-fade-up-delay-2 mt-2 font-display text-sm font-semibold tracking-wide text-green sm:text-base">
            {site.tagline}
          </p>

          <div className="mt-7 grid grid-cols-2 items-stretch gap-2.5 sm:mt-8 sm:flex sm:items-center sm:gap-3">
            <Button
              to="/services"
              variant="secondary"
              className="h-full min-h-11 w-full px-3 text-[0.8125rem] leading-tight sm:h-12 sm:w-auto sm:px-6 sm:text-sm"
            >
              Explore core services
            </Button>
            <Button
              to="/contact"
              variant="outline"
              className="h-full min-h-11 w-full border-white bg-transparent px-3 text-[0.8125rem] leading-tight text-white hover:bg-white hover:text-navy sm:h-12 sm:w-auto sm:px-6 sm:text-sm"
            >
              Talk to us
            </Button>
          </div>
        </div>

        <ul className="hidden sm:flex sm:flex-wrap sm:gap-2.5 lg:gap-3">
          {pillars.map((item) => (
            <li key={item.slug}>
              <span className="inline-flex min-h-9 w-full items-center justify-center rounded-md border border-white/20 bg-white/8 px-3 py-2 text-center font-display text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/90 sm:min-h-10 sm:w-auto sm:text-xs">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
