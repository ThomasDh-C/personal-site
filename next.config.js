module.exports = {
    publicRuntimeConfig: {
      site: {
        name: 'Thomas Dhome-Casanova - Portfolio',
        url:
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://thomasdhomecasanova.vercel.app',
        title: 'Thomas Dhome-Casanova - Portfolio',
        description: 'Research and Creations of Thomas Dhome-Casanova',
        socialPreview: '/images/preview.png',
      },
    },
    swcMinify: true,
    i18n: {
      locales: ['en-US'],
      defaultLocale: 'en-US',
    },
  };