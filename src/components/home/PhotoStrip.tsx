const frames = [
  { src: '/images/service-security.jpg', alt: 'CCTV and site security' },
  { src: '/images/service-vehicle-tracking.jpg', alt: 'Vehicle tracking in the field' },
  { src: '/images/service-power.jpg', alt: 'Power and backup equipment' },
  { src: '/images/service-ects.jpg', alt: 'Container tracking at a terminal' },
  { src: '/images/service-software.jpg', alt: 'Software and operations screens' },
  { src: '/images/service-office.jpg', alt: 'Office automation hardware' },
  { src: '/images/product-security.jpg', alt: 'Access control hardware' },
  { src: '/images/banner-services.jpg', alt: 'Engineering work on site' },
]

export function PhotoStrip() {
  const loop = [...frames, ...frames]

  return (
    <section className="overflow-hidden border-y border-navy/8 bg-navy" aria-label="Project photography">
      <div className="photo-marquee flex w-max gap-3 py-3 sm:gap-4 sm:py-4">
        {loop.map((frame, index) => (
          <img
            key={`${frame.src}-${index}`}
            src={frame.src}
            alt={index < frames.length ? frame.alt : ''}
            className="h-28 w-44 shrink-0 rounded-lg object-cover sm:h-36 sm:w-56 lg:h-44 lg:w-72"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
