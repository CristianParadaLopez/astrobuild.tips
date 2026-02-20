import { defineCollection, z } from 'astro:content';

const tips = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Esto convierte tu string "2025-02-18" en un objeto Date de JS automáticamente
    pubDate: z.coerce.date(), 
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { tips };