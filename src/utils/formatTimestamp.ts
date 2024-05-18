import { formatDistance } from 'date-fns'
import { fr } from 'date-fns/locale'

export const formatTimestamp = (date: Date) => {
  const [first, ...rest] = formatDistance(date, new Date(), {
    addSuffix: true,
    locale: fr,
  }).split('')

  return first.toUpperCase() + rest.join('')
}
