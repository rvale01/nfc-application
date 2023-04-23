import React from 'react';
import { PrescriptionI } from './types';
import { PatientPrescriptionForm } from './PatientPrescriptionForm';

interface EditScreenProps {
  prescription: PrescriptionI;
  onSave: (prescription: PrescriptionI) => void;
}

export const EditScreen: React.FC<EditScreenProps> = ({ prescription, onSave }) => {
  return (
    <PatientPrescriptionForm
      prescription={prescription}
      onSave={(updatedPrescription) => onSave(updatedPrescription)}
    />
  );
};
