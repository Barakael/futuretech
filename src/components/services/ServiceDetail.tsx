import type { Service } from '@/content/services'
import { Button } from '@/components/shared/Button'
import { cn } from '@/lib/cn'

type ServiceDetailProps = {
  service: Service
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <article>
      <div className="overflow-hidden rounded-2xl border border-navy/8 bg-mist">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="aspect-[21/9] w-full object-cover sm:aspect-[2.4/1]"
        />
      </div>

      <div
        className={cn(
          'mt-8 mb-4 h-1.5 w-16 rounded-full',
          service.accent === 'green' ? 'bg-green' : 'bg-blue',
        )}
      />
      <h1 className="text-balance font-display text-3xl font-bold sm:text-4xl">
        {service.title}
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy/75 sm:text-lg">
        {service.description}
      </p>

      <h2 className="mt-10 font-display text-xl font-bold">Typical deliverables</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {service.deliverables.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-lg border border-navy/8 bg-white px-4 py-3 text-sm text-navy/80"
          >
            <span
              className={cn(
                'mt-1.5 h-2 w-2 shrink-0 rounded-full',
                service.accent === 'green' ? 'bg-green' : 'bg-blue',
              )}
            />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button to="/contact">Discuss this service</Button>
        <Button to="/services" variant="ghost">
          Back to all services
        </Button>
      </div>
    </article>
  )
}
