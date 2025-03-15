import type { Meta, StoryObj } from '@storybook/react';
import { Send } from 'lucide-react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
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
    disabled: false,
    children: 'Submit'
  }
};

export const IconButton: Story = {
  args: {
    ...DefaultButton.args,
    size: 'icon',
    children: <Send />
  }
};

export const WithIconRight: Story = {
  args: {
    ...DefaultButton.args,
    children: (
      <>
        Send
        <Send />
      </>
    )
  }
};

export const WithIconLeft: Story = {
  args: {
    ...DefaultButton.args,
    children: (
      <>
        <Send />
        Send
      </>
    )
  }
};
