module.exports = {
    publicRuntimeConfig: {
      site: {
        name: 'Thomas Dhome-Casanova - Portfolio',
        url:
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://thomasdhomecasanova.vercel.app',
        title: 'Thomas Dhome-Casanova - Portfolio',
        description: 'Experience and Research Interests of Thomas Dhome-Casanova',
        socialPreview: '/public/headshot.png',
      },
    },
    swcMinify: true,
    i18n: {
      locales: ['en-US'],
      defaultLocale: 'en-US',
    },
  };