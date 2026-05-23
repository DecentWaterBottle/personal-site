import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['professional', 'personal', 'academic']),
    tags: z.array(z.string()).optional(),
    thumb: z.string().optional(),
    order: z.number().optional(),
    link: z.string().optional(),
  }),
})

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    start: z.string(),
    end: z.string().optional(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
})

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    thumb: z.string().optional(),
  }),
})

export const collections = { portfolio, experience, blog }
