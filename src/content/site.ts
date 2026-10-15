export const site = {
  name: 'Future Technologies and Engineering Limited',
  shortName: 'Future Technologies',
  acronym: 'FTE',
  tagline: 'Innovating with Speed and Precision',
  domain: 'www.futuretechnologies.co.tz',
  url: 'https://www.futuretechnologies.co.tz',
  email: 'info@futuretechnologies.co.tz',
  phones: [
    { label: '+255 766 518 298', href: 'tel:+255766518298' },
    { label: '+255 652 664 028', href: 'tel:+255652664028' },
  ],
  address: {
    line1: 'Mbezi Luis, Makabe Road',
    line2: "Near St. Ann's Primary School",
    city: 'Dar es Salaam, Tanzania',
  },
  registration: {
    tin: '114-690-775',
    vrn: '40-012572-C',
    categories: [
      'Telecommunications, ICT and Security Systems',
      'Electrical Installations',
      'Power and related engineering works',
    ],
  },
  bank: {
    name: 'CRDB Bank PLC',
    accountName: 'Future Technologies and Engineering Limited',
    branch: 'Mlimani City',
    swift: 'CORUTZTZ',
  },
  nav: [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ],
  /** Update these URLs when official profiles are ready */
  social: [
    {
      id: 'facebook',
      label: 'Facebook',
      href: 'https://www.facebook.com/',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/',
    },
    {
      id: 'x',
      label: 'X',
      href: 'https://x.com/',
    },
  ],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Mbezi+Luis+Makabe+Road+St+Anns+Primary+School+Dar+es+Salaam',
  logoSrc: '/logo/fte-logo-minimal.jpg',
} as const

export type NavItem = (typeof site.nav)[number]
