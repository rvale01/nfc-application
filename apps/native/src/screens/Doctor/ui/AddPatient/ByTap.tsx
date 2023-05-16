import React, { useState } from 'react';
import { Box, Button, Page, Text } from 'ui-native';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';
import { useAppDispatch } from '../../../../store';
import { addPatientById } from '../../redux/thunk';

export const ByTap = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch() 

    const registerPatient = async() => {
        let code = ""
        try {
            await NfcManager.requestTechnology(NfcTech.Ndef);
            const tag = await NfcManager.getTag();
            const text = Ndef.util.bytesToString(tag?.ndefMessage[0].payload);
            
            code = text.replace("https://nfc-application-rvale01.vercel.app/#/patient-details/", "")
            
        } finally {
            // stop the nfc scanning
            NfcManager.cancelTechnologyRequest();
            dispatch(addPatientById(code))
        }
    }

    return (
        <Page>
            <Box direction='column' gap='medium'>
                <Text text='Put your phone close then press the button' />

                <Button label='Read patient' onPress={registerPatient} isLoading />
            </Box>
        </Page>
    )
}