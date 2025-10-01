// // app/sitemap.ts
// import { MetadataRoute } from 'next'

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const baseUrl = 'https://your-ui-library.com'

//   // Component sahifalarni olish
//   const components = await getAllComponents()
//   const componentUrls = components.map((component) => ({
//     url: `${baseUrl}/components/${component.slug}`,
//     lastModified: component.updatedAt,
//     changeFrequency: 'weekly' as const,
//     priority: 0.8,
//   }))

//   // Dokumentatsiya sahifalari
//   const docs = await getAllDocs()
//   const docUrls = docs.map((doc) => ({
//     url: `${baseUrl}/docs/${doc.slug}`,
//     lastModified: doc.updatedAt,
//     changeFrequency: 'weekly' as const,
//     priority: 0.7,
//   }))

//   return [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: 'daily',
//       priority: 1,
//     },
//     {
//       url: `${baseUrl}/components`,
//       lastModified: new Date(),
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/docs`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/examples`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.7,
//     },
//     ...componentUrls,
//     ...docUrls,
//   ]
// }
