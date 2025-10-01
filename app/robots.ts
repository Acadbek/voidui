import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/for-hackers/'],
      },
    ],
    sitemap: 'https://salom.nosirjonov.uz/sitemap.xml',
    host: 'https://salom.nosirjonov.uz',
  }
}
