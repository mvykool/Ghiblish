import { moduleMetadata } from '@storybook/angular';
import { CardsComponent } from './cards.component';

export default {
  title: 'Components/cards',
  component: CardsComponent,
  decorators: [
    moduleMetadata({
      imports: [CardsComponent],
    }),
  ],
};

export const Default = () => ({
  component: CardsComponent,
  template: `
    <app-cards></app-cards>
  `,
});

