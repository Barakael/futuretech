export type Service = {
  slug: string
  title: string
  summary: string
  description: string
  deliverables: string[]
  accent: 'blue' | 'green'
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    slug: 'security',
    title: 'Security Systems',
    summary:
      'CCTV, access control, biometrics and perimeter protection for offices, campuses and critical sites.',
    description:
      'We design, supply, install and maintain integrated security systems—IP CCTV, door access, biometrics, intruder alarms and electric fencing—so people, assets and facilities stay protected with reliable monitoring and after-sales support.',
    deliverables: [
      'IP CCTV surveillance and NVRs',
      'Access control and biometric readers',
      'Time attendance systems',
      'Intruder and perimeter alarms',
      'Electric fence systems',
      'System integration and training',
    ],
    accent: 'blue',
    image: '/images/service-security.jpg',
    imageAlt: 'CCTV security cameras on a commercial building',
  },
  {
    slug: 'vehicle-tracking',
    title: 'Vehicle Tracking',
    summary:
      'GPS fleet tracking, live location, geofencing and reports so you always know where your vehicles are.',
    description:
      'Our vehicle tracking solutions give fleet managers live visibility—installation of trackers, platform setup, geofences, alerts and usage reports—so logistics, field teams and asset owners can cut loss, improve dispatch and prove movement history.',
    deliverables: [
      'GPS tracker supply and vehicle install',
      'Live map and fleet dashboard',
      'Geofencing and route alerts',
      'Trip history and usage reports',
      'Driver and immobiliser options',
      'Training and ongoing support',
    ],
    accent: 'green',
    image: '/images/service-vehicle-tracking.jpg',
    imageAlt: 'Fleet vehicle on the road with tracking context',
  },
  {
    slug: 'power-backup',
    title: 'Power & Backup',
    summary:
      'UPS, generators, hybrid and solar power that keep ICT rooms and operations running through outages.',
    description:
      'We deliver resilient power for offices, banks, telecom sites and server rooms—UPS systems, generators, hybrid setups and solar—focused on clean power, uptime and maintainable installations.',
    deliverables: [
      'UPS systems and battery banks',
      'Generator supply and install',
      'Hybrid power for critical loads',
      'Solar PV design and install',
      'PDUs and power distribution',
      'Maintenance and servicing',
    ],
    accent: 'blue',
    image: '/images/service-power.jpg',
    imageAlt: 'UPS and power backup equipment in a technical room',
  },
  {
    slug: 'ects',
    title: 'ECTS — Container Tracking',
    summary:
      'Electronic Cargo Tracking System solutions for sealed container visibility across corridors and terminals.',
    description:
      'We supply and support ECTS-style container tracking—devices, installation, monitoring workflows and integration with cargo control rooms—so consignments stay visible from load to destination with stronger security and accountability.',
    deliverables: [
      'ECTS device supply and fitment',
      'Seal and tamper monitoring support',
      'Tracking platform configuration',
      'Control-room integration support',
      'Training for operators',
      'After-sales service',
    ],
    accent: 'green',
    image: '/images/service-ects.jpg',
    imageAlt: 'Shipping containers at a port terminal',
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    summary:
      'Custom web applications, portals and business software designed, built and supported to your brief.',
    description:
      'From requirements to launch, we design, develop, test and support software and web systems—dashboards, customer portals and internal tools—with training so your team can run what we deliver.',
    deliverables: [
      'Requirements and UX design',
      'Web and application development',
      'Testing and commissioning',
      'User training',
      'Hosting guidance and support',
      'Iterative enhancements',
    ],
    accent: 'blue',
    image: '/images/service-software.jpg',
    imageAlt: 'Software development workspace with code on monitors',
  },
  {
    slug: 'office-automation',
    title: 'Office Automation',
    summary:
      'Printers, MFPs, scanners and related office systems—supply, install and keep them productive.',
    description:
      'We supply, install and maintain office automation equipment so branches and HQs stay productive—printers, multifunction devices, scanners and related peripherals with clear service pathways.',
    deliverables: [
      'Printers and multifunction devices',
      'Scanners and imaging kit',
      'Installation and configuration',
      'Consumables guidance',
      'Service and maintenance contracts',
    ],
    accent: 'green',
    image: '/images/service-office.jpg',
    imageAlt: 'Modern office with printers and automation equipment',
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}

export const servicePillars = services

export const heroImage = {
  src: '/images/hero-control-room.jpg',
  alt: 'Operations control room with monitoring displays',
}
