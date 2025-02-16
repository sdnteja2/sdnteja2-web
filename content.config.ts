import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const commonSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  image: z.string(),
  tags: z.array(z.string()),

})

export default defineContentConfig({
  collections: {
    berita: defineCollection({
      type: 'page',
      source: 'berita/**',
      schema: commonSchema,
    }),
  },
})
