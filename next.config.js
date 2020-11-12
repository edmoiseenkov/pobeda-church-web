module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack', 'url-loader'],
        });

        return config;
    },
    publicRuntimeConfig: {
        strapiApi: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    },
    devIndicators: {
        autoPrerender: false,
    }
};
