/* eslint-disable node/prefer-global/process */
// tina/config.ts

import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || 'master'

export default defineConfig({
  branch,
  clientId: process.env.NUXT_TINA_CLIENT_ID || '', // Get this from tina.io
  token: process.env.NUXT_TINA_TOKEN || '', // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import('next-tinacms-cloudinary')
      return pack.TinaCloudCloudinaryMediaStore
    },
  },
  // media: {
  //   tina: {
  //     mediaRoot: '',
  //     publicFolder: 'public',
  //   },
  // },
  schema: {
    collections: [
      {
        name: 'berita',
        label: 'Berita',
        path: 'content/berita',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
})
