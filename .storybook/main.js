const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y'
  ],
  webpackFinal: async (config, { configType }) => {
    const indexOfRuleToRemove = config.module.rules.findIndex(rule => rule.test.toString().includes('svg'))
    config.module.rules.splice(indexOfRuleToRemove, 1, {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
      loader: require.resolve('file-loader'),
      options: {
        name: 'static/media/[name].[hash:8].[ext]',
        esModule: false
      }
    })

    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /.svg$/,
        use: ['@svgr/webpack'],
      },
    )

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, '..', 'src'),
    };

    return config;
  },
}