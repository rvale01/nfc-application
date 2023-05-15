import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Container } from '../../components/atoms/Container';

export default {
  title: 'Atoms/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => {
    return (
        <Container showShadow>
            <div style={{backgroundColor: 'red', height: '150px', width: '100px'}}/>
            <div style={{backgroundColor: 'yellow', height: '150px', width: '100px'}}/>
        </Container>
    )
};
export const Primary = Template.bind({});
Primary.args = {

};
