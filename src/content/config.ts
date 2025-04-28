import { defineCollection, z } from "astro:content";

// z -> zod Schema

const projects = defineCollection({
  schema: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.string(),
      live: z.string(),
      code: z.string(),
      imgUrl: z.string()
    })
})

export const collections = { projects };