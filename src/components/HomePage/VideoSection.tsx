import { Video } from 'lucide-react'
import YoutubeEmbed from '../YoutubeEmbed'

//TODO: fetch last video from youtube API

const VideoSection = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="flex items-center gap-2 text-3xl">
        <Video className="h-10 w-10" aria-hidden />
        Dernière Vidéo Guide
      </h2>
      <div className="self-center">
        <YoutubeEmbed src="https://www.youtube.com/embed/LMJ5PHqKFiY" />
      </div>
    </section>
  )
}

export default VideoSection
