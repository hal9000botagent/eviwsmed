import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const erkrankungen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/erkrankungen' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    author: z.string().optional(),
    date: z.string().optional(),
    readingTime: z.string().optional(),
    reviewer: z.string().optional(),
  }),
});

export const collections = {
  erkrankungen,
};
