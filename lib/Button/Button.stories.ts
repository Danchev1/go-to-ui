import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' }
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Submit'
  }
};

export const DisabledButton: Story = {
  args: {
    ...DefaultButton.args,
    disabled: true
  }
};
