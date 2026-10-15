import { Link, Navigate, useParams } from 'react-router-dom'
import { getService, services } from '@/content/services'
import { Container } from '@/components/layout/Container'
import { ServiceDetail } from '@/components/services/ServiceDetail'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = slug ? getService(slug) : undefined

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <section className="bg-paper py-12 sm:py-16">
      <Container>
        <p className="mb-6 text-sm text-navy/55">
          <Link to="/services" className="font-medium text-blue hover:underline">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span>{service.title}</span>
        </p>
        <ServiceDetail service={service} />

        <div className="mt-16 border-t border-navy/10 pt-10">
          <h2 className="font-display text-xl font-bold">Related services</h2>
          <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to={`/services/${item.slug}`}
                  className="inline-flex min-h-11 items-center rounded-md bg-mist px-4 text-sm font-semibold text-navy transition hover:bg-blue/10 hover:text-blue"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
