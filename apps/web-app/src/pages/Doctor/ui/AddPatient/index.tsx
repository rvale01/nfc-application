import React, { useState } from 'react'
import { Box, Text } from 'ui-web'
import { NewPatient } from './NewPatient'
import { SwitchButtons } from './SwitchButtons'
import { UseCode } from './UseCode'
export type AddPatientPagesI = "switch" | "byCode" | "createPatient"

// have a switch between the three pages shown
export const AddPatient = () => {
    const [shownPage, setShownPage] = useState<AddPatientPagesI>("switch")

    const handleSwitchPage = () => {
        switch(shownPage){
            case "switch": return <SwitchButtons onChange={setShownPage}/>
            case "byCode": return <UseCode/>
            case "createPatient": return <NewPatient/>
        }
    }

    return(
        <Box gap="medium" direction="column" width="100%">
            <Text
                text="Add Patient"
                fontWeight="bold"
                size="large"
                color="black"
            />

            {handleSwitchPage()}

        </Box>
    )
}