import { Suspense } from 'react'
import LiveCheckerDisplay from './LiveCheckerDisplay'
import LiveCheckerFetch from './LiveCheckerFetch'

const LiveChecker = () => {
  return (
    <Suspense fallback={<LiveCheckerDisplay />}>
      <LiveCheckerFetch />
    </Suspense>
  )
}

export default LiveChecker
