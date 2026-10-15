import { site } from '@/content/site'
import { cn } from '@/lib/cn'

type ContactDetailsProps = {
  className?: string
  compact?: boolean
  tone?: 'light' | 'dark'
}

export function ContactDetails({
  className,
  compact = false,
  tone = 'light',
}: ContactDetailsProps) {
  const label = tone === 'dark' ? 'text-green' : 'text-green'
  const body = tone === 'dark' ? 'text-white/80' : 'text-navy/80'
  const link =
    tone === 'dark'
      ? 'text-white transition hover:text-green'
      : 'text-blue transition hover:text-navy'

  return (
    <div className={cn('space-y-4', className)}>
      <div>
        <p className={cn('font-display text-xs font-semibold uppercase tracking-[0.16em]', label)}>
          Visit
        </p>
        <p className={cn('mt-1', body, compact ? 'text-sm' : 'text-base')}>
          {site.address.line1}
          <br />
          {site.address.line2}
          <br />
          {site.address.city}
        </p>
      </div>
      <div>
        <p className={cn('font-display text-xs font-semibold uppercase tracking-[0.16em]', label)}>
          Call
        </p>
        <ul className={cn('mt-1 space-y-1', compact ? 'text-sm' : 'text-base')}>
          {site.phones.map((phone) => (
            <li key={phone.href}>
              <a href={phone.href} className={cn('font-medium', link)}>
                {phone.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className={cn('font-display text-xs font-semibold uppercase tracking-[0.16em]', label)}>
          Email
        </p>
        <a
          href={`mailto:${site.email}`}
          className={cn('mt-1 inline-block font-medium', link, compact ? 'text-sm' : 'text-base')}
        >
          {site.email}
        </a>
      </div>
    </div>
  )
}
