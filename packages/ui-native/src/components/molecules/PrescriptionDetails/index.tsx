import React, { useRef } from "react";
import { Text } from "../../atoms/Text";
import { FlatList, View, StyleSheet } from "react-native";

interface PrescriptionDetailsI {
  prescriptions?: PrescriptionI[]
  disabled?: boolean;
  onEdit?: (prescription: PrescriptionI) => void
  onNew?: (prescription: PrescriptionI) => void
  onDelete?: (prescription: string[]) => void
}

export const PrescriptionDetails = ({ prescriptions, disabled=true, onEdit, onNew, onDelete}: PrescriptionDetailsI) => {
  const renderItem = ({ item }: {item: PrescriptionI}) => (
    <View style={styles.patientContainer}>
      <Text text={item.name}/>
      <Text text={`${item.start} - ${item.end}`}/>
    </View>
  );

  return (
    <FlatList
      data={prescriptions}
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
