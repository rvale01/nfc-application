import React from "react";
import { Box, DoctorsList, LoadingSpinner, Text } from "ui-web"
import { useAppSelector } from "../../store";
import { selectorPatientDetailsRequest } from "../redux/selectors";


export const DoctorsDetailsList = () => {
    const { data: patientDetails, status} = useAppSelector(selectorPatientDetailsRequest)
    
    if(status === 'fulfilled'){
        return(
            <Box gap="medium" direction="column">
                <Text
                    text="My Doctors"
                    fontWeight="bold"
                    size="large"
                    color="black"
                />
                <DoctorsList
                    doctorsDetails={patientDetails.doctors_allowed}
                />
            </Box>
        )
    }else if(status === "pending"){
        return(<LoadingSpinner color='primary' />)
    }

    return null
}