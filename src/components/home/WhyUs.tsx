import { about } from '@/content/about'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function WhyUs() {
  return (
    <section className="bg-mist py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why FTE"
          title="Reasons organisations work with us"
          description="Practical strengths that show up on every engagement—from sourcing to after-sales."
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2">
          {about.whyUs.map((item, index) => (
            <li
              key={item}
              className="flex gap-4 rounded-xl border border-navy/8 bg-paper p-5"
            >
              <span className="font-display text-2xl font-bold text-green/80">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-sm leading-relaxed text-navy/80 sm:text-base">{item}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
