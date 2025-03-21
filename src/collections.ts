import { defineCollection, z } from 'astro:content';
import { seoSchema } from './seoSchema';
import {glob} from 'astro/loaders';
// Blog Collection
const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        title: z.string().min(5),
        excerpt: z.string().optional(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        isFeatured: z.boolean().default(false),
        tags: z.array(z.string()).default([]),
        author: z.string().default('Noveen'), // Add author field
        image: z.object({             // Make image required for blog posts
            src: z.string().url(),
            alt: z.string()
        }),
        seo: seoSchema.optional() // Attach SEO validation
    })
});

// Portfolio Collection
const projects = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),

    schema: z.object({
        title: z.string().min(5),
        description: z.string(),
        publishDate: z.coerce.date(),
        technologies: z.array(z.string()).default([]),
        image: z.object({
            src: z.string().url(),
            alt: z.string().optional()
        }),
        seo: seoSchema.optional() // Attach SEO validation
    })
});

// Pages Collection (Home, About, Contact, etc.)
const pages = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),

    schema: z.object({
        title: z.string(),
        seo: seoSchema.optional()
    })
});

export const collections = { blog, projects, pages };
