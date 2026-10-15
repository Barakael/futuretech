export type ProductFamily = {
  id: string
  title: string
  description: string
  items: string[]
  image?: string
}

export const productFamilies: ProductFamily[] = [
  {
    id: 'security',
    title: 'Security & Access',
    description: 'Cameras, controllers and biometrics for monitored sites.',
    image: '/images/product-security.jpg',
    items: [
      'IP CCTV cameras and NVRs',
      'Access control panels and readers',
      'Biometric terminals',
      'Locks, exit devices and alarms',
    ],
  },
  {
    id: 'tracking',
    title: 'Tracking Hardware',
    description: 'Devices for vehicles and cargo visibility.',
    image: '/images/product-tracking.jpg',
    items: [
      'GPS vehicle trackers',
      'Fleet dashboards and SIMs',
      'ECTS / cargo tracking units',
      'Antennas and install kits',
    ],
  },
  {
    id: 'power',
    title: 'Power & Backup',
    description: 'Clean, resilient power for ICT and facilities.',
    image: '/images/product-power.jpg',
    items: [
      'UPS systems and batteries',
      'Generators and hybrid kits',
      'PDUs and distribution',
      'Solar PV components',
    ],
  },
  {
    id: 'software',
    title: 'Software & Platforms',
    description: 'Applications and portals tailored to operations.',
    image: '/images/product-software.jpg',
    items: [
      'Custom web applications',
      'Operations dashboards',
      'Integration APIs',
      'Support and enhancements',
    ],
  },
  {
    id: 'office',
    title: 'Office Automation',
    description: 'Everyday productivity hardware for offices and branches.',
    image: '/images/product-office.jpg',
    items: [
      'Printers and MFPs',
      'Scanners and imaging devices',
      'Associated peripherals',
    ],
  },
]

export const partners = [
  'Hikvision',
  'ZKTeco',
  'APC',
  'Tripp Lite',
  'Cisco',
  'Panasonic',
] as const
