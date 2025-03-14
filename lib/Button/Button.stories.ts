import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

/*
*
* const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      options: ['primary', 'success', 'info', 'warning', 'error'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Button>;
*
*
* */

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
    children: 'Click Me!'
  }
};

export const DisabledButton: Story = {
  args: {
    ...DefaultButton.args,
    disabled: true
  }
};
