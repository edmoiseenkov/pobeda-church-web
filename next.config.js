module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/:path*`,
      },
    ]
  },
  publicRuntimeConfig: {
    appDomain: process.env.APP_DOMAIN,
    strapiApi: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  },
  devIndicators: {
    autoPrerender: false,
  },
};
