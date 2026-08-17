/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Las piezas educativas del laboratorio son HTML autocontenido en public/lab.
  // El rewrite permite URLs limpias: /lab/harness-lab → public/lab/harness-lab/index.html
  async rewrites() {
    return [
      {
        source: '/lab/:slug',
        destination: '/lab/:slug/index.html',
      },
    ]
  },
}

export default nextConfig
