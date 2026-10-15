import { productFamilies, partners } from '@/content/products'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Button } from '@/components/shared/Button'
import { CtaBand } from '@/components/home/CtaBand'

export function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden text-white">
        <img
          src="/images/banner-products.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-navy/85" aria-hidden />
        <Container className="relative py-12 sm:py-16">
          <SectionHeading
            light
            eyebrow="Products"
            title="Hardware and platforms behind our services"
            description="Security, tracking, power, software and office automation equipment we supply and support."
          />
        </Container>
      </section>

      <section className="bg-paper py-14 sm:py-16">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productFamilies.map((family) => (
              <article
                key={family.id}
                className="flex flex-col overflow-hidden rounded-xl border border-navy/8 bg-white shadow-sm shadow-navy/5"
              >
                {family.image ? (
                  <img
                    src={family.image}
                    alt=""
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                ) : null}
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-display text-lg font-bold text-navy">{family.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">
                    {family.description}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-navy/8 pt-4">
                    {family.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-navy/80 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-green before:content-['']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-mist p-6 sm:p-8">
            <SectionHeading
              title="Partner ecosystem"
              description="We work with recognised manufacturers so deployments stay supportable with warranty pathways."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-navy/80 shadow-sm"
                >
                  {partner}
                </span>
              ))}
            </div>
            <Button to="/contact" className="mt-8">
              Ask about availability
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
