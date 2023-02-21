import React, { useState } from 'react'
import { Box, Text } from 'ui-web'
import { SwitchButtons } from './SwitchButtons'
export type AddPatientPagesI = "switch" | "byCode" | "createPatient"

// have a switch between the three pages shown
export const AddPatient = () => {
    const [shownPage, setShownPage] = useState<AddPatientPagesI>("switch")

    const handleSwitchPage = () => {
        switch(shownPage){
            case "switch": return <SwitchButtons onChange={setShownPage}/>
        }
    }

        <Box gap="medium" direction="column">
            <Text
                text="Add Patient"
                fontWeight="bold"
                size="large"
                color="black"
            />

            {handleSwitchPage()}

        </Box>
}