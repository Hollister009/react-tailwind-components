import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from 'src';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'primary',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'secondary',
  variant: 'secondary',
};
