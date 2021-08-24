import React, { Fragment } from 'react';
import { ComponentMeta } from '@storybook/react';

import { Divider } from 'src';

export default {
  title: 'components/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Example = () => {
  return (
    <Fragment>
      <div>first</div>
      <Divider />
      <div>second</div>
      <Divider />
      <div>third</div>
    </Fragment>
  );
};
