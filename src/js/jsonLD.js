import siteData from "../data/sitedata.config"
import { slugify } from "./utils";


export default function jsonLDGenerator({ type, post, url }) {
// Base data that's shared across all types
const baseData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteData.title,
  "url": url
};
// Build based on content type
if (type === 'article' || type === 'post') {
  return `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${url}"
      },
      "headline": "${post.title}",
      "description": "${post.excerpt || post.description}",
      "image": "${post.image?.src || siteData.image.src}",
      "author": {
        "@type": "Person",
        "name": "${post.author || siteData.author}",
        "url": "${siteData.url}/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "${siteData.title}",
        "logo": {
          "@type": "ImageObject",
          "url": "${siteData.url}/logo.png"
        }
      },
      "datePublished": "${post.publishDate}",
      "dateModified": "${post.updatedDate || post.publishDate}"
    }
  </script>`;
}
if (type === 'portfolio') {
  return `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CreativeDevelopment",
      "name": "${post.title}",
      "description": "${post.description}",
      "image": "${post.image?.src}",
      "author": {
        "@type": "Person",
        "name": "${siteData.author}"
      },
      "datePublished": "${post.publishDate}"
    }
  </script>`;
}
  return `<script type="application/ld+json">
     {$JSON.stringify(baseData)}
    </script>`;
}