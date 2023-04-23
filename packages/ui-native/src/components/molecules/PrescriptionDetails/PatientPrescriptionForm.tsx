import React, { useRef } from 'react';
import { Button } from '../../atoms/Button';
import { Box } from '../../atoms/Box';
import { Input } from '../../atoms/Input';
import { Toggle } from '../../atoms/Toggle';
import { Text } from '../../atoms/Text';

interface PatientPrescriptionFormProps {
  prescription?: PrescriptionI;
  onSave: (prescription: PrescriptionI) => void;
}

export const PatientPrescriptionForm: React.FC<PatientPrescriptionFormProps> = ({
  prescription,
  onSave,
}) => {
  const nameRef = useRef(null);
  const notesRef = useRef(null);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const recurringRef = useRef(null);

  return (
    <Box direction='column' gap='medium'>
      <Input
        label="Name"
        keyboardType="default"
        defaultValue={prescription?.name}
        ref={nameRef}
      />
      <Input
        label="Notes"
        keyboardType="default"
        defaultValue={prescription?.notes}
        ref={notesRef}
      />
      <Input
        label="Start"
        keyboardType="default"
        defaultValue={prescription?.start}
        ref={startRef}
      />
      <Input
        label="End"
        keyboardType="default"
        defaultValue={prescription?.end}
        ref={endRef}
      />

        <Box direction="row" verticalAlign="center" horizontalAlign="space-between">
            <Text text='Recurring'/>
        <Toggle
          defaultChecked={prescription?.recurring || false}
          ref={recurringRef}
        />
      </Box>
      <Button
        label="Save"
        onPress={() =>
          onSave({
              id: prescription?.id || '',
              // @ts-ignore
              name: nameRef.current.value,
              // @ts-ignore
              notes: notesRef.current.value,
              // @ts-ignore
              start: startRef.current.value,
              // @ts-ignore
              end: endRef.current.value,
              recurring: false
          })
        }
      />
    </View>
  );
};
