import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';

interface AddEntityButtonProps {
  onPress: () => void;
}

const AddEntityButton: React.FC<AddEntityButtonProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Button title="Agregar Film" onPress={onPress} color="#752D59" />
      {/* Agregar la imagen con require según la ruta de tu imagen */}
      <Image source={require('../assets/images/AddButton.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 5,  // Puedes ajustar el espaciado entre el botón y la imagen según tus preferencias
  },
});

export default AddEntityButton;
