import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { selectorDoctorsDetailsRequest } from "../../redux/selectors";
import { getDoctorDetails, updateDocDetails } from "../../redux/thunk";
import { Box, Button, Container, DoctorPersonalDetailViews, Loader, Page, Text } from "ui-native";
import { auth } from "shared-functions";

export const Settings = () => {
    const {data: doctorDetails, status } = useAppSelector(selectorDoctorsDetailsRequest)
    const dispatch = useAppDispatch()

    const onChangeDetails = (data: DoctorDetailsI) => {
        dispatch(updateDocDetails(data))
    }

    useEffect(()=> {
        dispatch(getDoctorDetails())
    }, [])

    if(status === 'fulfilled'){
        return (
            <Page background="white">
                <Container padding={30}>
                    <Box gap="medium" direction="column">
                        <Text
                            text="My Details"
                            fontWeight="bold"
                            size="title"
                            align="center"
                        />

                        <Button label="Logout" onPress={()=> {auth.signOut()}}/>

                        <DoctorPersonalDetailViews
                            doctor={doctorDetails}
                            onSave={onChangeDetails}
                        />

                    </Box>
                </Container>
            </Page>
        )
    } else if(status === "pending"){
        return(<Loader />)
    }

    return null
}