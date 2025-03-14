import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../lib/global.css';
import { withThemeByClassName } from '@storybook/addon-themes';

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark'
    },
    defaultTheme: 'light'
  })
];

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
