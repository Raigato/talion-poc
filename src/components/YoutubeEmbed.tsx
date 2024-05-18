'use client'

import { useEffect, useState } from 'react'

interface Props {
  baseWidth?: number
  src: string
}

const YoutubeEmbed = ({ baseWidth = 600, src }: Props) => {
  const [width, setWidth] = useState(baseWidth)

  useEffect(() => {
    const resizeIframe = () => {
      const screenWidth = window.screen.width

      const newWidth = screenWidth < baseWidth ? screenWidth - 32 : baseWidth
      setWidth(newWidth)
    }

    window.addEventListener('resize', resizeIframe)
    resizeIframe()

    return () => {
      window.removeEventListener('resize', resizeIframe)
    }
  }, [])

  return (
    <iframe
      width={width}
      height={(width * 9) / 16}
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  )
}

export default YoutubeEmbed
