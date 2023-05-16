import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { selectorPatientDetailsRequest } from "../redux/selectors";
import { updateDetails, getPatientDetails } from "../redux/thunk";
import { Box, Button, Container, Loader, Page, PatientPersonalDetailViews, Text } from "ui-native";
import { auth } from "shared-functions";

export const Settings = () => {
    const {data, status } = useAppSelector(selectorPatientDetailsRequest)
    const dispatch = useAppDispatch()

    const onChangeDetails = (data: PatientDetailsI) => {
        dispatch(updateDetails(data))
    }

    useEffect(()=> {
        dispatch(getPatientDetails())
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

                        <PatientPersonalDetailViews
                            patient={data}
                            disabled={false}
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