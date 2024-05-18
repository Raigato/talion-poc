import Discord from '@/assets/discord'
import TwitterX from '@/assets/TwitterX'
import { HandHeart, Instagram, Twitch, Youtube } from 'lucide-react'
import Link from 'next/link'

//TODO: refactor with array structure
//TODO: check deprecated lucide-react icons

const className =
  'h-6 w-6 transition-transform duration-300 hover:-translate-y-1'

const SocialBar = () => {
  return (
    <div className="fixed bottom-4 left-0 flex flex-col gap-6 rounded-r-lg border border-l-0 border-white bg-zinc-800 p-4 lg:left-auto lg:right-0 lg:rounded-l-lg lg:rounded-r-none lg:border-l lg:border-r-0">
      <Link
        href="https://streamelements.com/talion-b8f18/tip"
        target="_blank"
        title="Lien vers les donations"
      >
        <HandHeart className={className} />
      </Link>
      <Link
        href="https://www.youtube.com/@Taliontv"
        target="_blank"
        title="Lien vers la chaîne youtube"
      >
        <Youtube className={className} />
      </Link>
      <Link
        href="https://www.twitch.tv/talion"
        target="_blank"
        title="Lien vers la chaîne twitch"
      >
        <Twitch className={className} />
      </Link>
      <Link
        href="https://www.instagram.com/taliontv/"
        target="_blank"
        title="Lien vers le compte instagram"
      >
        <Instagram className={className} />
      </Link>
      <Link
        href="https://discord.gg/MDeMZQspkc"
        target="_blank"
        title="Lien vers le discord"
      >
        <Discord className={className} />
      </Link>
      <Link
        href="https://twitter.com/TalionTeam"
        target="_blank"
        title="Lien vers le twitter"
      >
        <TwitterX className={className} />
      </Link>
    </div>
  )
}

export default SocialBar
