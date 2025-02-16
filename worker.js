import { createCloudinaryHandler } from './mediaHandler'

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const mediaHandler = createCloudinaryHandler(env)

    // Handle CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      })
    }

    // Route handler
    if (url.pathname.startsWith('/api/cloudinary/media')) {
      if (request.method === 'GET' || request.method === 'POST') {
        return mediaHandler(request)
      }
      else if (request.method === 'DELETE') {
        const mediaId = url.pathname.split('/').pop()
        const modifiedRequest = new Request(request, {
          query: { media: ['media', mediaId] },
        })
        return mediaHandler(modifiedRequest)
      }
    }

    return new Response('Not Found', { status: 404 })
  },
}
