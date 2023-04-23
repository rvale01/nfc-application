import React from 'react'
import { Page } from 'ui-native'
import { Carousel } from 'ui-native'
import { FirstPage } from './FirstPage'
import { SecondPage } from './SecondPage'
import { ThirdPage } from './ThirdPage'
import { SwitchView } from './SwitchView'

export const Introduction = ({navigation}) => {
    return (
       <Page background='secondaryBgk'>
            <Carousel>
                <FirstPage/>
                <SecondPage/>
                <ThirdPage/>
                <SwitchView navigation={navigation}/>
            </Carousel>
       </Page>
    )
}