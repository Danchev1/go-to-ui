import type { Preview } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../lib/global.css';

const documentationTemplate = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Primary />
    <Controls />
    <Stories />
  </>
);

const lightDarkTheme = withThemeByClassName({
  themes: {
    light: 'light',
    dark: 'dark'
  },
  defaultTheme: 'light'
});

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [lightDarkTheme],
  parameters: {
    docs: {
      page: documentationTemplate
    },
    layout: 'centered',
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
