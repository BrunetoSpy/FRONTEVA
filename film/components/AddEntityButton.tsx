// AddEntityButton.tsx
import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AddEntityButtonProps {
  onPress: () => void;
}

const AddEntityButton: React.FC<AddEntityButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name="add-circle" size={30} color="#752D59" />
      <Text style={styles.text}>Agregar Film</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#752D59',
    marginVertical: 10,
    marginLeft: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    color: '#752D59',
  },
});

export default AddEntityButton;
