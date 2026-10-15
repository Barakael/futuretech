import { site } from '@/content/site'
import { getService, heroImage } from '@/content/services'

export const defaultDescription =
  'Future Technologies and Engineering Limited supplies, installs and maintains security systems, vehicle tracking, power and backup, ECTS, software and office automation in Dar es Salaam, Tanzania.'

export const defaultImage = heroImage.src

export type PageSeo = {
  title: string
  description: string
  image?: string
}

export const pageSeo: Record<string, PageSeo> = {
  '/': {
    title: `${site.name} | Security, Tracking & Power in Tanzania`,
    description: defaultDescription,
    image: defaultImage,
  },
  '/about': {
    title: `About ${site.shortName} | Tanzanian ICT & Engineering Company`,
    description:
      'Learn about Future Technologies and Engineering Limited — a Dar es Salaam company delivering telecommunications, ICT, power and security systems with speed and precision.',
    image: '/images/banner-about.jpg',
  },
  '/services': {
    title: `Services | ${site.shortName} — CCTV, Tracking, Power & More`,
    description:
      'Explore FTE services: security systems, GPS vehicle tracking, power and backup, ECTS container tracking, software development and office automation across Tanzania.',
    image: '/images/banner-services.jpg',
  },
  '/products': {
    title: `Products | ${site.shortName} — Hardware & Platforms`,
    description:
      'Browse FTE product families: security and access, tracking hardware, power and backup, software platforms and office automation equipment for Tanzanian sites.',
    image: '/images/banner-products.jpg',
  },
  '/contact': {
    title: `Contact ${site.shortName} | Dar es Salaam`,
    description: `Request a consultation. Call ${site.phones[0].label} or email ${site.email}. Visit us at ${site.address.line1}, ${site.address.city}.`,
    image: '/images/banner-contact.jpg',
  },
  '/terms': {
    title: `Terms and Conditions | ${site.shortName}`,
    description: `Terms governing use of ${site.domain} and engagement with ${site.name}.`,
  },
}

export function seoForPath(pathname: string): PageSeo {
  if (pathname.startsWith('/services/')) {
    const slug = pathname.split('/')[2]
    const service = slug ? getService(slug) : undefined
    if (service) {
      return {
        title: `${service.title} in Tanzania | ${site.shortName}`,
        description: service.summary,
        image: service.image,
      }
    }
  }
  return pageSeo[pathname] ?? {
    title: site.name,
    description: defaultDescription,
    image: defaultImage,
  }
}

export function canonicalFor(pathname: string) {
  if (pathname === '/') return `${site.url}/`
  return `${site.url}${pathname}`
}

export function organizationJsonLd() {
  const sameAs = site.social
    .map((item) => item.href)
    .filter(
      (href) =>
        ![
          'https://www.facebook.com/',
          'https://www.linkedin.com/',
          'https://www.instagram.com/',
          'https://x.com/',
        ].includes(href),
    )

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    alternateName: [site.shortName, site.acronym],
    url: site.url,
    email: site.email,
    telephone: site.phones.map((phone) => phone.label),
    image: `${site.url}${site.logoSrc}`,
    logo: `${site.url}${site.logoSrc}`,
    slogan: site.tagline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: 'Dar es Salaam',
      addressCountry: 'TZ',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Tanzania',
    },
    ...(sameAs.length ? { sameAs } : {}),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Engineering and ICT services',
      itemListElement: [
        'Security Systems',
        'Vehicle Tracking',
        'Power and Backup',
        'ECTS Container Tracking',
        'Software Development',
        'Office Automation',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  }
}
