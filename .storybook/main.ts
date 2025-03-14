import type { StorybookConfig } from '@storybook/react-vite';
import { withoutVitePlugins } from '@storybook/builder-vite';

const config: StorybookConfig = {
  stories: ['../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-actions', '@storybook/addon-viewport'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  features: {
    viewportStoryGlobals: true
  },
  core: {
    disableTelemetry: true,
    builder: '@storybook/builder-vite'
  },
  viteFinal: async (config) => ({
    ...config,
    plugins: await withoutVitePlugins(config.plugins, ['vite:dts']) // skip dts plugin
  })
};
export default config;
