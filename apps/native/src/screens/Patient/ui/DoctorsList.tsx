// DoctorsDetailsList.js
import React, { useEffect } from 'react';
import { DoctorsList, Loader, Text } from 'ui-native';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectorDoctorsListRequest } from '../redux/selectors';
import { Box } from 'ui-web';
import { getPatientDetails } from '../redux/thunk';

export const DoctorsDetailsList = () => {
  const { data: doctorsList, status } = useAppSelector(selectorDoctorsListRequest);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPatientDetails())
  }, []);

  if (status === 'fulfilled') {
    return (
      <Box direction='column' gap='medium'>
        <Text text='My Doctors' fontWeight='bold' size='title'/>
        <DoctorsList doctorsDetails={doctorsList} />
      </Box>
    );
  } else if (status === 'pending') {
    return <Loader />;
  }

  return null;
};
