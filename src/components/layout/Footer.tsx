import { Link } from 'react-router-dom'
import { site } from '@/content/site'
import { Container } from '@/components/layout/Container'

function SocialIcon({ id }: { id: string }) {
  const common = 'h-4 w-4 fill-current'
  switch (id) {
    case 'facebook':
      return (
        <svg className={common} viewBox="0 0 24 24" aria-hidden>
          <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg className={common} viewBox="0 0 24 24" aria-hidden>
          <path d="M6.5 8.5A2 2 0 1 1 6.5 4.5a2 2 0 0 1 0 4zM4.8 20h3.4V9.8H4.8V20zM13.2 9.6c-1.2 0-2 .6-2.4 1.2V9.8H7.5V20h3.3v-5.3c0-1.4.7-2.3 1.9-2.3 1.1 0 1.7.8 1.7 2.3V20H18v-5.8c0-3-1.6-4.6-4.8-4.6z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg className={common} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 0 0 12 8.2zm0 6.2a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8zM17.4 7.9a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0z" />
          <path d="M12 4.5c2.2 0 2.5 0 3.4.1.9 0 1.5.2 1.9.4.5.2.9.4 1.2.8.4.4.6.7.8 1.2.2.4.3 1 .4 1.9.1.9.1 1.2.1 3.4s0 2.5-.1 3.4c0 .9-.2 1.5-.4 1.9-.2.5-.4.9-.8 1.2-.4.4-.7.6-1.2.8-.4.2-1 .3-1.9.4-.9.1-1.2.1-3.4.1s-2.5 0-3.4-.1c-.9 0-1.5-.2-1.9-.4-.5-.2-.9-.4-1.2-.8-.4-.4-.6-.7-.8-1.2-.2-.4-.3-1-.4-1.9-.1-.9-.1-1.2-.1-3.4s0-2.5.1-3.4c0-.9.2-1.5.4-1.9.2-.5.4-.9.8-1.2.4-.4.7-.6 1.2-.8.4-.2 1-.3 1.9-.4.9-.1 1.2-.1 3.4-.1zm0-1.5c-2.3 0-2.5 0-3.5.1-1 0-1.7.2-2.3.5-.6.2-1.2.6-1.7 1.1-.5.5-.9 1-1.1 1.7-.3.6-.4 1.3-.5 2.3-.1 1-.1 1.2-.1 3.5s0 2.5.1 3.5c0 1 .2 1.7.5 2.3.2.6.6 1.2 1.1 1.7.5.5 1 1 1.7 1.1.6.3 1.3.4 2.3.5 1 .1 1.2.1 3.5.1s2.5 0 3.5-.1c1 0 1.7-.2 2.3-.5.6-.2 1.2-.6 1.7-1.1.5-.5.9-1 1.1-1.7.3-.6.4-1.3.5-2.3.1-1 .1-1.2.1-3.5s0-2.5-.1-3.5c0-1-.2-1.7-.5-2.3-.2-.6-.6-1.2-1.1-1.7-.5-.5-1-.9-1.7-1.1-.6-.3-1.3-.4-2.3-.5-1-.1-1.2-.1-3.5-.1z" />
        </svg>
      )
    case 'x':
      return (
        <svg className={common} viewBox="0 0 24 24" aria-hidden>
          <path d="M17.6 4H20l-6.3 7.2L21 20h-5.4l-4.2-5.5L6.4 20H4l6.7-7.7L3.5 4H9l3.8 5L17.6 4zm-1 14.5h1.5L7.5 5.4H6L16.6 18.5z" />
        </svg>
      )
    default:
      return null
  }
}

export function Footer() {
  const year = new Date().getFullYear()
  const quickLinks = [...site.nav]

  return (
    <footer className="border-t border-green/40 bg-navy text-white">
      <div className="h-1 w-full bg-gradient-to-r from-blue via-green to-red" aria-hidden />

      <Container className="py-8 sm:py-9 lg:py-10">
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* Brand */}
          <div className="flex h-full flex-col sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={site.logoSrc}
                alt=""
                className="h-11 w-auto rounded-sm bg-white object-contain p-1"
              />
              <span className="font-display text-base font-bold leading-tight">
                {site.shortName}
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-snug text-white/70">
              {site.tagline}. Security, tracking, power, software and office automation across
              Tanzania.
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              {site.social.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white transition hover:border-green hover:bg-green hover:text-white"
                >
                  <SocialIcon id={item.id} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links — column */}
          <div className="flex h-full flex-col">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-green">
              Quick links
            </p>
            <ul className="mt-3 flex flex-col">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-flex items-center py-1 text-sm leading-snug text-white/80 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="flex h-full flex-col">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-green">
              Location
            </p>
            <address className="mt-3 flex flex-1 flex-col not-italic text-sm leading-snug text-white/80">
              <span>
                <span className="block">{site.address.line1}</span>
                <span className="block">{site.address.line2}</span>
                <span className="mt-1 block font-medium text-white">{site.address.city}</span>
              </span>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center text-sm font-semibold text-green transition hover:text-white"
              >
                Open in Maps →
              </a>
            </address>
          </div>

          {/* Contact */}
          <div className="flex h-full flex-col">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-green">
              Contact
            </p>
            <ul className="mt-3 flex flex-col text-sm">
              {site.phones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="inline-flex items-center py-1 font-medium leading-snug text-white/90 transition hover:text-green"
                  >
                    {phone.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center py-1 font-medium leading-snug text-white/90 transition hover:text-green"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.url}
                  className="inline-flex items-center py-1 leading-snug text-white/70 transition hover:text-white"
                >
                  {site.domain}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link to="/terms" className="transition hover:text-white">
              Terms and Conditions
            </Link>
            <span aria-hidden className="hidden text-white/25 sm:inline">
              ·
            </span>
            <p>{site.domain}</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
