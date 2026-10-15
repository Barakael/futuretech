import { NavLink } from 'react-router-dom'
import { site } from '@/content/site'
import { Button } from '@/components/shared/Button'
import { cn } from '@/lib/cn'

type MobileNavProps = {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <div
      className={cn('fixed inset-0 z-50 md:hidden', open ? 'pointer-events-auto' : 'pointer-events-none')}
      aria-hidden={!open}
    >
      {/* Dim backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        className={cn(
          'absolute inset-0 bg-navy/55 transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        )}
        onClick={onClose}
      />

      {/* Opaque slide-over drawer */}
      <div
        id="mobile-nav"
        className={cn(
          'absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-navy/10 px-4">
          <p className="font-display text-sm font-bold text-navy">{site.shortName}</p>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-navy/15 text-navy"
            aria-label="Close menu"
            onClick={onClose}
          >
            <span className="relative block h-4 w-4">
              <span className="absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 rotate-45 bg-current" />
              <span className="absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <nav className="flex flex-1 flex-col px-3 py-4" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      'flex min-h-12 items-center rounded-lg px-4 font-display text-base font-semibold transition',
                      isActive ? 'bg-blue text-white' : 'text-navy hover:bg-mist',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-3 border-t border-navy/10 pt-5">
            <Button href={site.phones[0].href} className="w-full" onClick={onClose}>
              Call {site.phones[0].label}
            </Button>
            <Button
              href={`mailto:${site.email}`}
              variant="ghost"
              className="w-full"
              onClick={onClose}
            >
              Email us
            </Button>
          </div>
        </nav>
      </div>
    </div>
  )
}
