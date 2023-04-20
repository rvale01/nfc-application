import React, { useRef, useState } from 'react';
import { Box } from '../../atoms/Box';
import { Text } from '../../atoms/Text';
import { Select } from '../../atoms/Select';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';

interface PatientPersonalDetailViewsI {
  patient?: PatientDetailsI;
  disabled?: boolean;
  onSave?: (patient: PatientDetailsI) => void;
}

export const PatientPersonalDetailViews = ({
  patient,
  disabled,
  onSave,
}: PatientPersonalDetailViewsI) => {
    const [data, setData] = useState<PatientDetailsI>(patient!);
    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const addressRef = useRef(null);
    const address2Ref = useRef(null);
    const dobRef = useRef(null);
    const emailRef = useRef(null);
    const ethnicityRef = useRef(null);
    const homePhoneRef = useRef(null);
    const idRef = useRef(null);
    const mobileRef = useRef(null);
    const nhsNumberRef = useRef(null);
    const [sexValue, setSexValue] = useState(data.sex)

  return (
    <Box direction='column' gap="medium">
        <Input
            label='Name'
            keyboardType='default'
            defaultValue={patient?.name}
            ref={nameRef}
        />

        <Input
        label='Surname'
        keyboardType='default'
        defaultValue={patient?.surname}
        ref={surnameRef}
      />
      <Input
        label='Address'
        keyboardType='default'
        defaultValue={patient?.address}
        ref={addressRef}
      />
      <Input
        label='Address 2'
        keyboardType='default'
        defaultValue={patient?.address_2}
        ref={address2Ref}
      />
      <Input
        label='Date of birth'
        keyboardType='default'
        defaultValue={patient?.dob}
        ref={dobRef}
      />

    <Input
        label='Email'
        keyboardType='email-address'
        defaultValue={patient?.email}
        ref={emailRef}
      />

<Input
        label='Ethnicity'
        keyboardType='default'
        defaultValue={patient?.ethnicity}
        ref={ethnicityRef}
      />
      <Input
        label='Home Phone'
        keyboardType='phone-pad'
        defaultValue={patient?.home_phone}
        ref={homePhoneRef}
      />
      <Input
        label='Id'
        keyboardType='default'
        defaultValue={patient?.id}
        ref={idRef}
      />
      <Input
        label='Mobile'
        keyboardType='phone-pad'
        defaultValue={patient?.mobile}
        ref={mobileRef}
      />

    <Input
        label='NHS Number'
        keyboardType='default'
        defaultValue={patient?.nhs_number}
        ref={nhsNumberRef}
      />

      <Box>
        <Text text="Gender" />
        <Select
            options={[
                { label: 'F', value: 'f' },
                { label: 'M', value: 'm' },
                { label: 'Other', value: 'other' },
            ]}
            selectedValue={sexValue}
            onValueChange={(itemValue) =>
                setSexValue(itemValue as typeof data.sex)
            }
        />
      </Box>
      <>
        {!disabled ? (
            <Button label='Save' onPress={() => onSave && onSave(data)} />
        ) : null}
        </>
    </Box>
  );
};