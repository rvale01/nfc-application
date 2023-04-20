import React from 'react'
import { Box } from 'ui-native'
import { Container } from 'ui-native'
import { Text } from 'ui-native'

export const SecondPage = () => {
    return (
        <Container padding={30}>
                <Box direction='column' gap='medium' verticalAlign='center'>
                    <Text fontWeight='bold' text='Easier to manage your patients' color='white' size='title' align='center'/>
                    <Text text='Manage all your patients, their prescriptions, all in one place!' align='center' color='white'/>
                </Box>
            </Container>  
    )
}