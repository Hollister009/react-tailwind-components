import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { List, ListItem } from 'src';

export default {
  title: 'components/List',
  component: List,
} as ComponentMeta<typeof List>;

const data = ['option 1', 'option 2', 'option 3'];

export const Example = () => {
  return (
    <List>
      {data.map((item) => (
        <ListItem>{item}</ListItem>
      ))}
    </List>
  );
};
