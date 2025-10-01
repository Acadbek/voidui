// import { NextSeo, ArticleJsonLd, FAQPageJsonLd } from 'next-seo'

// export function SEOHead({ component }: { component: ComponentData }) {
//   return (
//     <>
//       <NextSeo
//         title={component.title}
//         description={component.description}
//         canonical={`https://your-ui-library.com/components/${component.slug}`}
//         openGraph={{
//           title: component.title,
//           description: component.description,
//           images: [
//             {
//               url: component.ogImage,
//               width: 1200,
//               height: 630,
//               alt: component.title,
//             }
//           ],
//         }}
//       />

//       <ArticleJsonLd
//         type="BlogPosting"
//         url={`https://your-ui-library.com/components/${component.slug}`}
//         title={component.title}
//         images={[component.ogImage]}
//         datePublished={component.publishedAt}
//         dateModified={component.updatedAt}
//         authorName="Your Name"
//         description={component.description}
//       />

//       {component.faqs && (
//         <FAQPageJsonLd
//           mainEntity={component.faqs.map(faq => ({
//             questionName: faq.question,
//             acceptedAnswerText: faq.answer,
//           }))}
//         />
//       )}
//     </>
//   )
// }
