import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from 'src';

export default {
  title: 'components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is my Card!',
};
Default.storyName = 'Card';
