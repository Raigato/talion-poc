import { cn } from '@/utils/cn'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

const SectionTitle = ({ className, children, ...props }: Props) => {
  return (
    <h2
      className={cn(
        'flex items-center gap-2 text-3xl font-semibold',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

export default SectionTitle
