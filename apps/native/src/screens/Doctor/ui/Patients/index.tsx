import React, { useEffect, useRef } from 'react'
import { useAppDispatch } from '../../../../store'
import { useSelector } from 'react-redux'
import { selectorGetPatientsListRequest } from '../../redux/selectors'
import { getPatientsList, removePatients } from "../../redux/thunk"
import { Box, Button, Container, Loader, Page, PatientList, Text } from 'ui-native'
import { AuthContext } from '../../../../lib/AuthContext'
import { setSelectedPatient, setUser } from '../../redux/slice'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/native'

export const Patients = ({navigation}: {navigation:NativeStackNavigationProp<ParamListBase>}) => {
    const getPatientsListRequest = useSelector(selectorGetPatientsListRequest)
    const dispatch = useAppDispatch()
    const { currentUser } = React.useContext(AuthContext);

    useEffect(()=> {
        dispatch(setUser(currentUser))
        // @ts-ignore
        dispatch(getPatientsList(currentUser?.uid!))
    }, [])

   
    if(getPatientsListRequest.status === "pending"){
        return  <Loader/> 
    }else if(getPatientsListRequest.status === "fulfilled")
    {
        return(
            <Page background='white'>
                <Container padding={30}>
                    <Box direction='column' gap='small'>
                        <Text text='List of patients' />
                        <PatientList patients={getPatientsListRequest.data} onPress={(patient)=> {
                            dispatch(setSelectedPatient(patient))
                            navigation.navigate("PatientDetails")
                        }}/>
                    </Box>
                </Container>
            </Page>
        )
    }

    return <></>
}