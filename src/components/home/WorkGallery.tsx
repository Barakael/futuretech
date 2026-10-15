import { Link } from 'react-router-dom'
import { productFamilies } from '@/content/products'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Reveal } from '@/components/shared/Reveal'

const tiles = [
  {
    src: '/images/banner-services.jpg',
    alt: 'Field technicians installing systems',
    label: 'Site installation',
    className: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: '/images/product-power.jpg',
    alt: 'UPS and power backup hardware',
    label: 'Power rooms',
  },
  {
    src: '/images/banner-about.jpg',
    alt: 'Engineering and ICT infrastructure',
    label: 'Infrastructure',
  },
  {
    src: '/images/product-office.jpg',
    alt: 'Office printers and automation',
    label: 'Office systems',
  },
  {
    src: '/images/banner-contact.jpg',
    alt: 'Control and communications desk',
    label: 'Control rooms',
  },
]

export function WorkGallery() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="On the ground"
            title="Pictures from the work we actually do"
            description="Security, tracking, power, software and office systems — photographed around live Tanzanian sites, not stock filler."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:grid-rows-2 sm:gap-4">
          {tiles.map((tile, index) => (
            <Reveal key={tile.src} delay={index * 80} className={tile.className}>
              <figure className="group relative h-full min-h-40 overflow-hidden rounded-2xl sm:min-h-48">
                <img
                  src={tile.src}
                  alt={tile.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent px-3 py-3 font-display text-sm font-semibold text-white sm:px-4">
                  {tile.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Reveal>
            <SectionHeading
              eyebrow="Hardware"
              title="Platforms we put on site"
              description="A snapshot of the product families we supply, install and support."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {productFamilies.map((family, index) => (
              <Reveal key={family.id} delay={index * 70}>
                <Link
                  to="/products"
                  className="group block overflow-hidden rounded-xl border border-navy/8 bg-paper"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={family.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="px-3 py-3 font-display text-sm font-semibold text-navy group-hover:text-blue">
                    {family.title}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
