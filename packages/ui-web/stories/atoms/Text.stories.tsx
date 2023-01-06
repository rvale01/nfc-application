import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '../../components/atoms/Text';

export default {
  title: 'Atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  fontWeight: 'bold',
  text: 'Primary text'
};