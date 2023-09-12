import type { Meta, StoryObj } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NavbarComponent> = {
  component: NavbarComponent,
  title: 'NavbarComponent',
};
export default meta;
type Story = StoryObj<NavbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/navbar works!/gi)).toBeTruthy();
  },
};
