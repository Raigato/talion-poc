import type { MetadataRoute } from 'next'

//TODO: update for production

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '*',
    },
  }
}
