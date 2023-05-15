import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { colors } from '../../theme/colors';
import { Button } from '../../components/atoms/Button';
import { Grid } from '../../components/atoms/Grid';
import { Text } from '../../components/atoms/Text';

export default {
  title: 'Design system/Colors',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
    return (
        <Grid columns={4}>
            {Object.entries(colors).map((el)=> {
                return(
                    <>
                        <div style={{color: el[1]}}/>
                        <Text text={el[0]}/>
                    </>
                )
            })}
        </Grid>
    )
};
export const Primary = Template.bind({});