import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '@/content/site'
import { Container } from '@/components/layout/Container'
import { MobileNav } from '@/components/layout/MobileNav'
import { cn } from '@/lib/cn'

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-navy/10 bg-white">
        <Container className="flex h-16 items-center justify-between gap-3 sm:h-[4.25rem]">
          <Link to="/" className="flex min-h-11 min-w-0 items-center gap-2.5">
            <img
              src={site.logoSrc}
              alt={`${site.shortName} logo`}
              className="h-10 w-auto object-contain sm:h-11"
            />
            <span className="hidden max-w-[11rem] truncate font-display text-sm font-bold leading-tight text-navy sm:block lg:max-w-none">
              {site.shortName}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {site.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'inline-flex min-h-11 items-center rounded-md px-3 font-display text-sm font-semibold transition',
                    isActive ? 'bg-blue/10 text-blue' : 'text-navy/75 hover:bg-mist hover:text-navy',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-navy/15 bg-white text-navy md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-4 w-5">
              <span
                className={cn(
                  'absolute left-0 block h-0.5 w-full bg-current transition',
                  open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 bg-current transition',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 block h-0.5 w-full bg-current transition',
                  open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0',
                )}
              />
            </span>
          </button>
        </Container>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  )
}
