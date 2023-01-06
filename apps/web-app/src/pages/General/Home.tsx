import React from "react";
import { Carousel, HomepageLayout, Box, Text } from "ui-web";
// @ts-ignore
import { ReactComponent as DoctorImg }  from '../../assets/doctorImg.svg'
// @ts-ignore
import { ReactComponent as WomanImg }  from '../../assets/womanImg.svg'
// @ts-ignore
import { ReactComponent as ManExplainingImg }  from '../../assets/manExplainingImg.svg'

const View1 = () => {
    return (
        <Box direction="row">
            <DoctorImg/>
            <Box direction="column" verticalAlign="center" horizontalAlign="center">
                <Text textAlign="center" text="Easier to manage your patients"  color='white' fontWeight="bold" size="large"/>
                <Text textAlign="center" text="Manage all your patients, their prescriptions" fontWeight="bold" size='small' color="white"/>
            </Box>
        </Box>
    )
}


const View2 = () => {
    return (
        <Box direction="row">
            <WomanImg/>
            <Box direction="column" verticalAlign="center" horizontalAlign="center">
                <Text textAlign="center" text="Coming next ..."  color='white' fontWeight="bold" size="large"/>
                <Text textAlign="center" text="Easy to set up and easy to use!" fontWeight="bold" size='small' color="white"/>
            </Box>
        </Box>
    )
}

const View3 = () => {
    return (
        <Box direction="row">
            <ManExplainingImg/>
            <Box direction="column" verticalAlign="center" horizontalAlign="center" width="40%">
                <Text textAlign="center" text="As easy as a piece of cake!"  color='white' fontWeight="bold" size="large"/>
                <Text 
                    textAlign="center"
                    text="You will be able to keep up with all your appointments from one place. Subscribe to our newsletter to be the first to try it out!" 
                    fontWeight="bold" size='small' color="white"
                />
            </Box>
        </Box>
    )
}


export const Home = () => {
    return(
        <HomepageLayout>
            <Carousel>
                <View1/>
                <View2/>
                <View3/>
            </Carousel>
        </HomepageLayout>
    )
}