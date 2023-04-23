import React from 'react'
import { Box } from 'ui-native'
import { Container } from 'ui-native'
import { Text } from 'ui-native'

export const FirstPage = () => {
    return (
            <Container padding={30}>
                <Box direction='column' gap='medium' verticalAlign='center'>
                    <Text fontWeight='bold' text='As easy as a piece of cake!' color='white' size='title' align='center'/>
                    <Text text='Easy to set up and easy to use!' align='center' color='white'/>
                </Box>
            </Container>   
    )
}