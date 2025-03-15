import { Alert, AlertDescription, AlertTitle } from './Alert';
import type { Meta, StoryObj } from '@storybook/react';
import { Terminal } from 'lucide-react';

const meta: Meta<typeof Alert> = {
  title: 'Design System/Atoms/Alert',
  component: Alert,
  argTypes: {
    variant: {
      options: ['default', 'destructive'],
      control: { type: 'select' }
    }
  }
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof Alert>;

export const DefaultAlert: Story = {
  args: {
    variant: 'default',
    children: (
      <>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the cli.</AlertDescription>
      </>
    )
  }
};
