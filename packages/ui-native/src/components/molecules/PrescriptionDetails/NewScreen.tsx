import React from 'react';
import { PrescriptionI } from './types';
import { PatientPrescriptionForm } from './PatientPrescriptionForm';

interface NewScreenProps {
  onSave: (prescription: PrescriptionI) => void;
}

export const NewScreen: React.FC<NewScreenProps> = ({ onSave }) => {
  return <PatientPrescriptionForm onSave={(newPrescription) => onSave(newPrescription)} />;
};
