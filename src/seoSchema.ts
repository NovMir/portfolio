import { z } from 'astro:content';

// Define SEO validation schema
export const seoSchema = z.object({
    title: z.string().min(5).max(120), // Titles must be 5-120 characters
    description: z.string().min(15).max(160), // SEO description length
    image: z.object({
        src: z.string().url(), // Must be a valid image URL
        alt: z.string().optional() // Alt text is optional
    }).optional(),
    pageType: z.enum(['website', 'article', 'portfolio']).default('website'), // Allows different page types
    canonical: z.string().url().optional(), // For handling duplicate content
    noindex: z.boolean().default(false),    // Control indexing
    keywords: z.array(z.string()).optional() // For specific keyword targeting
});
