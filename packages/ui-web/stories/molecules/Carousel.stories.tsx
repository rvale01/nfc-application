import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Carousel } from '../../components/molecules/Carousel';

export default {
  title: 'Molecules/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => {
   return (
        <Carousel {...args}>
            <div>First example</div>
            <div>Second example</div>
        </Carousel>
   )
}
export const Default = Template.bind({});