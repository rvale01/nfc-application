import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../../../firebase';
import { Carousel, HomepageLayout, Box, Text, LoadingSpinner } from "ui-web";
// @ts-ignore
import { ReactComponent as DoctorImg }  from '../../../assets/doctorImg.svg'
// @ts-ignore
import { ReactComponent as WomanImg }  from '../../../assets/womanImg.svg'
// @ts-ignore
import { ReactComponent as ManExplainingImg }  from '../../../assets/manExplainingImg.svg'


// TODO: create components for this in uikit
const View1 = () => {
    return (
        <Box direction="row" width={"100%"}>
            <DoctorImg style={{maxWidth: "700px"}}/>
            <Box direction="column" verticalAlign="center" horizontalAlign="center" >
                <Text textAlign="center" text="Easier to manage your patients"  color='white' fontWeight="bold" size="large"/>
                <Text textAlign="center" text="Manage all your patients, their prescriptions" fontWeight="bold" size='small' color="white"/>
            </Box>
        </Box>
    )
}

const View2 = () => {
    return (
        <Box direction="row" width={"100%"}>
            <WomanImg style={{maxWidth: "700px"}}/>
            <Box direction="column" verticalAlign="center" horizontalAlign="center">
                <Text textAlign="center" text="Coming next ..."  color='white' fontWeight="bold" size="large"/>
                <Text textAlign="center" text="Easy to set up and easy to use!" fontWeight="bold" size='small' color="white"/>
            </Box>
        </Box>
    )
}

const View3 = () => {
    return (
        <Box direction="row" width={"100%"}>
            <ManExplainingImg style={{maxWidth: "700px"}}/>
            <Box direction="column" verticalAlign="center" horizontalAlign="center" >
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
    const [isLogged, setIsLogged] = useState<null | boolean>(null)
    auth.onAuthStateChanged(user => {
        console.log(user, isLogged, 'this is important')
        if (user) {
            //TODO: dispatch get details -> details are then saved in slice auth
            setIsLogged(true);
        }
        else {
            setIsLogged(false)
        }
    })

    if (isLogged) {
        //TODO: if logged -> redirect to either /doctor or /patient
        return <div>logged</div>
    } 
    else if(isLogged === null){
        return <LoadingSpinner color="primary"/>
    }
    else {
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
}