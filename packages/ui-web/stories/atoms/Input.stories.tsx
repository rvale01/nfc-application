import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../../components/atoms/Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = { 
  name: "Name",
  placeholder: "Name",
  onBlur: ()=> console.log("Hello!")
};