import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AddEditEntityModal from '../components/AddEntityModal'; // Asegúrate de ajustar la ruta correcta

interface AddEntityFormProps {
  onSubmit: (formData: any) => void;
}

const AddEntityForm: React.FC<AddEntityFormProps> = ({ onSubmit }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState<any>({});

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({});
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <AddEditEntityModal
        visible={isModalVisible}
        isCreate={true}
        data={formData}
        header={'film'}
        close={() => setModalVisible(false)}
        submit={handleSubmit}
      />
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.buttonContainer}>
        <Image source={require('../assets/images/AddButton.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 5, // Puedes ajustar el espaciado entre el botón y la imagen según tus preferencias
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default AddEntityForm;
