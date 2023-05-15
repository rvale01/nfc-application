import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Container } from '../../components/atoms/Container';
import { Text } from '../../components/atoms/Text';

export default {
  title: 'Atoms/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => {
    return (
        <Container {...args} showShadow borderRadius='standard' background='primary'>
            <Text text='Example' color='white'/>
        </Container>
    )
};
export const Primary = Template.bind({});
Primary.args = {

};
