import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TestComponent } from 'src';

export default {
  title: 'components/TestComponent',
  component: TestComponent,
} as ComponentMeta<typeof TestComponent>;

const Template: ComponentStory<typeof TestComponent> = () => <TestComponent />;

export const Default = Template.bind({});
