const tsConfigPaths = require('vite-tsconfig-paths').default;

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...config.plugins, tsConfigPaths()],
    };
  },
};
