import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow any internal admin or draft routes if you add them later
      // disallow: '/admin/', 
    },
    sitemap: 'https://www.shreehariharprintingworks.com//sitemap.xml',
  };
}
