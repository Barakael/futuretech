import { site } from '@/content/site'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/shared/Button'

export function CtaBand() {
  return (
    <section className="bg-blue py-14 text-white sm:py-16">
      <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-balance font-display text-2xl font-bold text-white sm:text-3xl">
            Ready to scope your next installation?
          </h2>
          <p className="mt-3 text-white/80">
            Tell us about your site—security, networks, power or communications—and we will
            respond with a clear next step.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to="/contact" variant="secondary" className="w-full sm:w-auto">
            Request a consultation
          </Button>
          <Button href={site.phones[0].href} variant="outline" className="w-full sm:w-auto">
            Call now
          </Button>
        </div>
      </Container>
    </section>
  )
}
