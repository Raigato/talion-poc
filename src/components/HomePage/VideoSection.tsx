import { Video } from 'lucide-react'
import YoutubeEmbed from '../YoutubeEmbed'
import SectionTitle from './SectionTitle'

//TODO: fetch last video from youtube API

const VideoSection = () => {
  return (
    <section className="flex flex-col gap-8">
      <SectionTitle>
        <Video className="h-10 w-10" aria-hidden />
        Dernière Vidéo Guide
      </SectionTitle>
      <div className="self-center">
        <YoutubeEmbed src="https://www.youtube.com/embed/LMJ5PHqKFiY" />
      </div>
    </section>
  )
}

export default VideoSection
