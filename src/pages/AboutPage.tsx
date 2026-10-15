import { about } from '@/content/about'
import { partners } from '@/content/products'
import { site } from '@/content/site'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CtaBand } from '@/components/home/CtaBand'

export function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden text-white">
        <img
          src="/images/banner-about.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-navy/85" aria-hidden />
        <Container className="relative py-12 sm:py-16">
          <SectionHeading
            light
            eyebrow="About us"
            title={site.name}
            description={about.intro}
          />
        </Container>
      </section>

      <section className="bg-paper py-14 sm:py-16">
        <Container className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-2xl border border-green/30 bg-navy p-6 text-white sm:p-8">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-green">
              Motto
            </p>
            <h2 className="mt-3 font-display text-xl font-bold leading-snug text-white sm:text-2xl">
              {about.motto}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
              {about.mottoBody}
            </p>
          </div>
          <div className="rounded-2xl border border-navy/8 bg-white p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-blue">Vision</h2>
            <p className="mt-3 text-navy/75 leading-relaxed">{about.vision}</p>
          </div>
          <div className="rounded-2xl border border-navy/8 bg-white p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-green">Mission</h2>
            <p className="mt-3 text-navy/75 leading-relaxed">{about.mission}</p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Values"
            title="How we work with customers"
            description="Principles that guide proposals, delivery and support."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {about.values.map((value) => (
              <div key={value.title} className="rounded-xl bg-paper p-5 sm:p-6">
                <h3 className="font-display text-lg font-bold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">{value.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Company facts"
            title="Registration & contractor focus"
            description="Public company details for Future Technologies and Engineering Limited."
          />
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-navy/8 bg-white p-5">
              <dt className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-green">
                TIN
              </dt>
              <dd className="mt-2 font-display text-lg font-bold text-navy">
                {site.registration.tin}
              </dd>
            </div>
            
            <div className="rounded-xl border border-navy/8 bg-white p-5 sm:col-span-2 lg:col-span-1">
              <dt className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-green">
                Office
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-navy/80">
                {site.address.line1}, {site.address.line2}, {site.address.city}
              </dd>
            </div>
          </dl>
          <ul className="mt-6 space-y-2">
            {site.registration.categories.map((cat) => (
              <li
                key={cat}
                className="flex gap-3 text-sm text-navy/80 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-blue before:content-['']"
              >
                {cat}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-navy/8 bg-white py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Partners"
            title="Capability across leading brands"
            description={about.partnersBlurb}
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {partners.map((partner) => (
              <span
                key={partner}
                className="rounded-full border border-navy/10 bg-mist px-3 py-1.5 text-sm font-medium text-navy/80"
              >
                {partner}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
