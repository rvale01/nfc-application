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

  return (
    <Box direction='column' gap="medium">
        <Input
            label='Name'
            keyboardType='default'
            value={data?.name}
            onChangeText={(value)=> setData({...data, "name": value})}
            name='name'
        />

      <Input
        label='Surname'
        keyboardType='default'
        value={data?.surname}
        onChangeText={(value)=> setData({...data, "surname": value})}
        name='surname'
      />
      <Input
        label='Address'
        keyboardType='default'
        value={data?.address}
        onChangeText={(value)=> setData({...data, "address": value})}
        name='address'
      />
      <Input
        label='Address 2'
        keyboardType='default'
        value={data?.address_2}
        onChangeText={(value)=> setData({...data, "address_2": value})}
        name='address_2'
      />
      <Input
        label='Date of birth'
        keyboardType='default'
        value={data?.dob}
        onChangeText={(value)=> setData({...data, "dob": value})}
        name='dob'
      />

    <Input
        label='Email'
        keyboardType='email-address'
        value={data?.email}
        onChangeText={(value)=> setData({...data, "email": value})}
        name='email'
      />

      <Input
        label='Ethnicity'
        keyboardType='default'
        value={data?.ethnicity}
        onChangeText={(value)=> setData({...data, "ethnicity": value})}
        name='ethnicity'
      />
      <Input
        label='Home Phone'
        keyboardType='phone-pad'
        value={data?.home_phone}
        onChangeText={(value)=> setData({...data, "home_phone": value})}
        name='home_phone'
      />
      <Input
        label='Id'
        keyboardType='default'
        value={data?.id}
        onChangeText={(value)=> setData({...data, "id": value})}
        name='id'
      />
      <Input
        label='Mobile'
        keyboardType='phone-pad'
        value={data?.mobile}
        onChangeText={(value)=> setData({...data, "mobile": value})}
        name='mobile'
      />

    <Input
        label='NHS Number'
        keyboardType='default'
        value={data?.nhs_number}
        onChangeText={(value)=> setData({...data, "nhs_number": value})}
        name='nhs_number'
      />
      <>
        {!disabled ? (
            <Button label='Save' onPress={() => onSave && onSave(data)} />
        ) : null}
        </>
    </Box>
  );
};