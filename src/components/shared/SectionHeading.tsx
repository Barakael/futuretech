import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'mb-2 font-display text-xs font-semibold uppercase tracking-[0.18em]',
            light ? 'text-green' : 'text-green',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'text-balance text-2xl font-bold sm:text-3xl lg:text-4xl',
          light ? 'text-white' : 'text-navy',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-3 text-base leading-relaxed sm:text-lg',
            light ? 'text-white/80' : 'text-navy/70',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
