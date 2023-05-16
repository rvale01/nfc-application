import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from '../../components/atoms/Box';
import { Text } from '../../components/atoms/Text';

export default {
  title: 'Atoms/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => {
    return (
        <Box {...args} >
             <div style={{backgroundColor: 'red', height: '150px', width: '100px'}}/>
            <div style={{backgroundColor: 'yellow', height: '150px', width: '100px'}}/>
        </Box>
    )
};
export const Primary = Template.bind({});

