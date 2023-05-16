import React, { useState } from "react";
import { Button, Container, Text } from "ui-native";
import { selectorPatientDetails } from "../../redux/selectors";
import { useSelector } from "react-redux";
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';

export const CodeBracelet = () => {
    const patientDetails = useSelector(selectorPatientDetails)
    const [loading, setLoading] = useState(false)

    const registerPatient = async() => {
        try {
            await NfcManager.requestTechnology(NfcTech.Ndef);
            setLoading(true)
            const bytes = Ndef.encodeMessage([Ndef.uriRecord('https://nfc-application-rvale01.vercel.app/#/patient-details/'+ patientDetails.storage_id)]);
            
            if (bytes) {
              await NfcManager.ndefHandler.writeNdefMessage(bytes);
            }
            setLoading(false)
          } finally {
            NfcManager.cancelTechnologyRequest();
          }
    }
    return(
        <Container padding={30}>
            <Text text="Take the bracelet and put it close to the phone"/>

            <Button label={loading ? "Loading..." : "Code bracelet"} onPress={registerPatient}/>
        </Container>
    )
}