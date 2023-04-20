// components/DoctorsList.js
import React from 'react';
import { List } from 'react-native-paper';

export interface DoctorsListI{
    doctorsDetails: DoctorDetailsI[]
}
export const DoctorsList = ({ doctorsDetails }: DoctorsListI) => {
  return (
    <>
      {doctorsDetails.map((doctor) => (
        <List.Item
          key={doctor.doctor_number}
          title={`${doctor.name} ${doctor.surname}`}
          description={doctor.email}
        />
      ))}
    </>
  );
};
