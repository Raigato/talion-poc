import { cn } from '@/utils/cn'
import Link from 'next/link'

interface Props {
  isOnAir?: boolean
}

const LiveCheckerDisplay = ({ isOnAir = false }: Props) => {
  return (
    <Link
      className="flex items-center gap-4"
      href={`https://twitch.tv/${process.env.NEXT_PUBLIC_TWITCH_USER_NAME}`}
    >
      <span
        className={cn(
          'h-6 w-6 rounded-full border border-white',
          isOnAir ? 'bg-red-500' : 'bg-neutral-400',
        )}
      />
      <span className="sr-only lg:not-sr-only">
        {isOnAir ? 'Voir le stream' : 'Le stream est hors-ligne'}
      </span>
    </Link>
  )
}

export default LiveCheckerDisplay
