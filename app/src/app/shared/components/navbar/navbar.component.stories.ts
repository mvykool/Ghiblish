import { StoryFn, moduleMetadata } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';

export default {
  title: 'Components/Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [NavbarComponent],
    }),
  ],
  argTypes: {
    links: { control: 'array' },
  },
};

const Template: StoryFn<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
  template: `
    <app-navbar [links]="args.links"></app-navbar>
  `,
});

export const Default = Template.bind({});
Default.args = {
  links: ["home", "about"],
};

