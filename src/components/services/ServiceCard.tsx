import { Link } from 'react-router-dom'
import type { Service } from '@/content/services'
import { cn } from '@/lib/cn'

type ServiceCardProps = {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className={cn(
        'group flex flex-col overflow-hidden rounded-xl border border-navy/8 bg-white shadow-sm shadow-navy/5 transition',
        'hover:-translate-y-0.5 hover:border-blue/25 hover:shadow-md',
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-mist">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <span
          className={cn(
            'absolute bottom-3 left-3 h-1.5 w-10 rounded-full',
            service.accent === 'green' ? 'bg-green' : 'bg-blue',
          )}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-navy group-hover:text-blue">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/70">{service.summary}</p>
        <span className="mt-4 font-display text-sm font-semibold text-blue">
          Learn more →
        </span>
      </div>
    </Link>
  )
}
