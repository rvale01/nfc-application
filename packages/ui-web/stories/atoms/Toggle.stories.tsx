import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toggle } from '../../components/atoms/Toggle';

export default {
  title: 'Atoms/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;
export const Default = Template.bind({});
Default.args = { 
    checkedText:"Doctor",
    defaultChecked: false,
    unCheckedText: "Patient"
};