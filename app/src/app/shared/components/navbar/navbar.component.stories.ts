import { moduleMetadata } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';

export default {
  title: 'Components/Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [NavbarComponent],
    }),
  ],
};

export const Default = () => ({
  component: NavbarComponent,
  template: `
    <app-navbar></app-navbar>
  `,
});

