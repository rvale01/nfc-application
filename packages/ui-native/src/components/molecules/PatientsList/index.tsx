import React from 'react';
import { Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

interface PatientListI {
    patients: PatientDetailsI[],
    onPress: (patient: PatientDetailsI)=> void;
}

export const PatientList = ({ patients, onPress }: PatientListI) => {
  
  const renderItem = ({ item }: {item: PatientDetailsI}) => (
    <TouchableOpacity onPress={()=> onPress(item)} style={styles.patientContainer}>
      <Text>{item.name} {item.surname}</Text>
      <Text>{item.email}</Text>
      <Text>{item.mobile}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={patients}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  patientContainer: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16
  }
});

export default PatientList;
