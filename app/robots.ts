import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://gdkg.kr'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteOrigin}/sitemap.xml`,
  }
}
