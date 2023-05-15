import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoadingSpinner } from '../../components/atoms/Loading';

export default {
  title: 'Atoms/Loading',
  component: LoadingSpinner,
} as ComponentMeta<typeof LoadingSpinner>;

const Template: ComponentStory<typeof LoadingSpinner> = (args) => <LoadingSpinner {...args} />;
export const Default = Template.bind({});
Default.args = { 
  color: "black"
};