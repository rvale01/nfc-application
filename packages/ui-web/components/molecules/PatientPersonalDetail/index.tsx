import React, { useRef, useState } from "react";
import { Button, Container, Grid, Input, Select } from "ui-web";

interface PatientPersonalDetailViewsI {
    patient?: PatientDetailsI;
    disabled?: boolean;
    onSave?: (patient: PatientDetailsI) => void
}

export const PatientPersonalDetailViews = ({patient, disabled, onSave}: PatientPersonalDetailViewsI) => {
    const [data, setData] = useState<PatientDetailsI>(patient!);

    const handleInputBlur = ({value, name}: {value: string, name: string}) => {
        setData((prevData) => ({ ...prevData, [name]: value }));
      };

    return (
        <Container padding="medium">
            <Grid columns={4}>
            <Input name="name" placeholder="Name" type="text" disabled={disabled} defaultValue={patient?.name} onBlur={handleInputBlur} />
            <Input name="surname" placeholder="Surname" type="text" disabled={disabled} defaultValue={patient?.surname} onBlur={handleInputBlur} />
            <Input name="address" placeholder="Address" type="text" disabled={disabled} defaultValue={patient?.address} onBlur={handleInputBlur} />
            <Input name="address_2" placeholder="Address 2" type="text" disabled={disabled} defaultValue={patient?.address_2} onBlur={handleInputBlur} />
            <Input name="dob" placeholder="Date of birth" type="date" defaultValue={patient?.dob} onBlur={handleInputBlur} />
            <Input name="email" placeholder="Email" type="email" defaultValue={patient?.email} onBlur={handleInputBlur} />
            <Input name="ethnicity" placeholder="Ethnicity" type="text" disabled={disabled} defaultValue={patient?.ethnicity} onBlur={handleInputBlur} />
            <Input name="home_phone" placeholder="Home Phone" type="text" disabled={disabled} defaultValue={patient?.home_phone} onBlur={handleInputBlur} />
            <Input name="id" placeholder="Id" type="text" disabled={disabled} defaultValue={patient?.id} onBlur={handleInputBlur} />
            <Input name="mobile" placeholder="Mobile" type="text" disabled={disabled} defaultValue={patient?.mobile} onBlur={handleInputBlur} />
            <Input name="nhs_number" placeholder="NHS Number" type="text" disabled={disabled} defaultValue={patient?.nhs_number} onBlur={handleInputBlur} />
            <Select
                onChange={() => null}
                options={[
                { label: "F", key: "f" },
                { label: "M", key: "f" },
                { label: "Other", key: "other" },
                ]}
            />

            {!disabled ? <Button label="Save" onClick={() => onSave && onSave(data)} /> : null}
            </Grid>
        </Container>
    )
}