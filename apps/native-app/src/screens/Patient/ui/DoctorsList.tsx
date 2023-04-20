// DoctorsDetailsList.js
import React, { useEffect } from 'react';
import { DoctorsList } from 'ui-native';
import LoadingSpinner from './components/LoadingSpinner';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectorDoctorsListRequest } from '../redux/selectors';

export const DoctorsDetailsList = () => {
  const { data: doctorsList, status } = useAppSelector(selectorDoctorsListRequest);
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  if (status === 'fulfilled') {
    return (
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'black' }}>My Doctors</Text>
        <DoctorsList doctorsDetails={doctorsList} />
      </View>
    );
  } else if (status === 'pending') {
    return <LoadingSpinner color="primary" />;
  }

  return null;
};
