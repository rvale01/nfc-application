import React from "react";
import { Text } from "../../atoms/Text";
import { FlatList, View, StyleSheet } from "react-native";

export interface DiseasesTableI{
    diseases?: DiseasesI[];
    disabled?: boolean;
    onEdit?: (disease: DiseasesI) => void
    onNew?: (disease: DiseasesI) => void
    onDelete?: (disease: string[]) => void
}

export const DiseasesList = ({diseases, disabled=true, onEdit, onNew, onDelete}:DiseasesTableI) => {
    const renderItem = ({ item }: {item: DiseasesI}) => (
        <View style={styles.patientContainer}>
          <Text text={item.name}/>
          <Text text={item.notes}/>
        </View>
      );
    
      return (
        <FlatList
          data={diseases}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      );
}

const styles = StyleSheet.create({
    patientContainer: {
      marginBottom: 15,
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      fontSize: 16
    }
  });
  