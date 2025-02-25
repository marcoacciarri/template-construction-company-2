const path = require('path')

module.exports = {
  i18n: {
    locales: ['en'], // Add your languages here
    defaultLocale: 'en',
    localeDetection: false,
  },
  webpack: (config) => {
    config.resolve.alias['@reactbricksui'] = path.resolve(
      __dirname,
      'react-bricks/bricks/react-bricks-ui/'
    )
    return config
  },
}
