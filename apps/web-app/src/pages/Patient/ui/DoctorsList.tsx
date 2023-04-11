import React, { useEffect } from "react";
import { Box, DoctorsList, LoadingSpinner, Text } from "ui-web"
import { useAppDispatch, useAppSelector } from "../../store";
import { selectorDoctorsListRequest } from "../redux/selectors";


export const DoctorsDetailsList = () => {
    const { data: doctorsList, status} = useAppSelector(selectorDoctorsListRequest)
    const dispqtch = useAppDispatch()

    useEffect(()=> {

    }, [])

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
                    doctorsDetails={doctorsList}
                />
            </Box>
        )
    }else if(status === "pending"){
        return(<LoadingSpinner color='primary' />)
    }

    return null
}