import React, { useRef, useState } from 'react';
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
  const [name, setName] = useState(prescription?.name);
  const [notes, setNotes] = useState(prescription?.notes);
  const [start, setStart] = useState(prescription?.start);
  const [end, setEnd] = useState(prescription?.end);
  const [recurring, setRecurring] = useState(prescription?.recurring || false);


  return (
    <Box direction='column' gap='medium'>
      <Input
        label="Name"
        keyboardType="default"
        value={name}
        onChangeText={setName}
        name='name'
      />
      <Input
        label="Notes"
        keyboardType="default"
        value={notes}
        onChangeText={setNotes}
        name='notes'
      />
      <Input
        label="Start"
        keyboardType="default"
        value={start}
        onChangeText={setStart}
        name='start'
      />
      <Input
        label="End"
        keyboardType="default"
        value={end}
        onChangeText={setEnd}
        name='end'
      />

        <Box direction="row" verticalAlign="center" horizontalAlign="space-between">
            <Text text='Recurring'/>
        <Toggle
          checked={recurring}
          onChange={setRecurring}
          defaultChecked={false}
        />
      </Box>
      <Button
        label="Save"
        onPress={() =>
          onSave({
              id: prescription?.id || '',
              name: name ?? '',
              notes: notes ?? '',
              start: start ?? '',
              end: end ?? '',
              recurring: recurring
          })
        }
      />
    </Box>
  );
};
