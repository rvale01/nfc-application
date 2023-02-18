import React, { useEffect } from "react";
import { Box, DoctorPersonalDetailViews, LoadingSpinner, Text } from "ui-web";
import { useAppDispatch, useAppSelector } from "../../store";
import { selectorDoctorsDetailsRequest } from "../redux/selectors";
import { updateDocDetails } from "../redux/thunk";

export const Settings = () => {
    const {data: doctorDetails, status } = useAppSelector(selectorDoctorsDetailsRequest)
    const dispatch = useAppDispatch()

    const onChangeDetails = (data: DoctorDetailsI) => {
        dispatch(updateDocDetails(data))
    }
    if(status === 'fulfilled'){
    return (
        <Box gap="medium" direction="column">
            <Text
                text="My Details"
                fontWeight="bold"
                size="large"
                color="black"
            />

            <DoctorPersonalDetailViews
                doctor={doctorDetails}
            />

        </Box>
    )} else if(status === "pending"){
        return(<LoadingSpinner color='primary' />)
    }

    return null
}