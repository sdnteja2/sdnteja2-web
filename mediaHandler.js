import { createMediaHandler } from 'next-tinacms-cloudinary/dist/handlers'

export function createCloudinaryHandler(env) {
  return createMediaHandler({
    cloud_name: env.NUXT_CLOUDINARY_CLOUD_NAME || '',
    api_key: env.NUXT_CLOUDINARY_API_KEY || '',
    api_secret: env.NUXT_CLOUDINARY_API_SECRET || '',
    authorized: async (request, _env) => {
      try {
        // Untuk development, Anda bisa mengembalikan true
        if (env.NODE_ENV === 'development') {
          return true
        }

        // Implementasi autentikasi Anda di sini
        // Contoh sederhana menggunakan header Authorization
        const authHeader = request.headers.get('Authorization')
        return !!authHeader // Sesuaikan dengan logika autentikasi Anda
      }
      catch (e) {
        console.error(e)
        return false
      }
    },
  })
}
