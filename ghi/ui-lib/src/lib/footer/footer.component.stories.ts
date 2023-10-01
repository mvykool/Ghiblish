import { Story, Meta } from '@storybook/angular';
import { FooterComponent } from './footer.component';

export default {
  title: 'lib/footer',
  component: FooterComponent,
  args: {},
} as Meta;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
});

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};

export const Third = Template.bind({});
Third.args = {
  type: 'third',
};
