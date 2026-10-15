import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type ButtonProps = {
  to?: string
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

const variants = {
  primary:
    'bg-blue text-white hover:bg-navy shadow-sm shadow-blue/20',
  secondary:
    'bg-green text-white hover:bg-green/90 shadow-sm shadow-green/20',
  outline:
    'border-2 border-white/80 text-white hover:bg-white/10',
  ghost:
    'bg-mist text-navy hover:bg-blue/10',
} as const

export function Button({
  to,
  href,
  children,
  variant = 'primary',
  className,
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = cn(
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-center font-display text-sm font-semibold tracking-wide transition duration-200',
    variants[variant],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
