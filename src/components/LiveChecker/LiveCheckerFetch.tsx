import { checkLiveStatus } from '@/services/twitch'
import LiveCheckerDisplay from './LiveCheckerDisplay'

const LiveCheckerFetch = async () => {
  const isOnAir = await checkLiveStatus()

  return <LiveCheckerDisplay isOnAir={isOnAir} />
}

export default LiveCheckerFetch
