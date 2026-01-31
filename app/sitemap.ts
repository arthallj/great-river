import type { MetadataRoute } from 'next'
import { performancesInfo } from '@/data/performance'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://gdkg.kr'

  // 기본 페이지
  const routes = [
    {
      url: siteOrigin,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]

  // 공연 상세 페이지 추가
  const performanceRoutes = Object.keys(performancesInfo).map((slug) => ({
    url: `${siteOrigin}/performance/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...routes, ...performanceRoutes]
}
