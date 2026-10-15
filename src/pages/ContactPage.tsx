import { useState, type FormEvent } from 'react'
import { site } from '@/content/site'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ContactDetails } from '@/components/shared/ContactDetails'
import { Button } from '@/components/shared/Button'

export function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const subject = encodeURIComponent(`Inquiry from ${name || 'website visitor'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}\n\n— Sent via ${site.domain}`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="bg-paper py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s discuss your project"
          description="Reach the FTE team in Dar es Salaam—call, email, or send a short inquiry."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="overflow-hidden rounded-2xl border border-navy/8">
              <img
                src="/images/banner-contact.jpg"
                alt="Modern office workspace"
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl border border-navy/8 bg-white p-6 sm:p-8">
              <ContactDetails />
              <div className="mt-8 grid grid-cols-2 gap-3">
                <Button href={site.phones[0].href} className="w-full">
                  Call
                </Button>
                <Button href={`mailto:${site.email}`} variant="secondary" className="w-full">
                  Email
                </Button>
              </div>
              <p className="mt-6 text-sm text-navy/55">
                Website: {site.domain}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-navy/8 bg-white p-6 sm:p-8"
          >
            <h2 className="font-display text-xl font-bold">Send an inquiry</h2>
            <p className="mt-2 text-sm text-navy/65">
              Opens your email app with the message ready to send to {site.email}.
            </p>

            <label className="mt-6 block">
              <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-navy/60">
                Name
              </span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-navy/15 bg-paper px-3 py-3 text-base outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
                autoComplete="name"
              />
            </label>

            <label className="mt-4 block">
              <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-navy/60">
                Email
              </span>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-navy/15 bg-paper px-3 py-3 text-base outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
                autoComplete="email"
              />
            </label>

            <label className="mt-4 block">
              <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-navy/60">
                Message
              </span>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1.5 w-full resize-y rounded-md border border-navy/15 bg-paper px-3 py-3 text-base outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
              />
            </label>

            <Button type="submit" className="mt-6 w-full sm:w-auto">
              Continue to email
            </Button>
          </form>
        </div>
      </Container>
    </section>
  )
}
