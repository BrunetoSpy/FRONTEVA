import React, { useEffect, useState } from 'react';
import { Modal, View, StyleSheet, Pressable, Image } from 'react-native';
import { H3, Button, Input } from 'tamagui';
import { Feather } from '@expo/vector-icons';
import { saveEntity } from '~/api/api';

interface AddEditEntityModalProps {
  visible: boolean;
  isCreate: boolean;
  data: any;
  header: string;
  close: () => void;
  submit: (formData: any) => void;
}

const AddEditEntityModal: React.FC<AddEditEntityModalProps> = ({
  visible,
  isCreate,
  data,
  header,
  close,
  submit,
}) => {
  const [form, setForm] = useState<any>({});

  useEffect(() => {
    setForm({});
    createForm();
  }, [data]);

  const handleChange = (name: string, newValue: string) => {
    setForm((prev) => ({ ...prev, [name]: newValue }));
  };

  const createForm = () => {
    setForm({});
    const keys = Object.keys(data);

    for (const key of keys) {
      if (key === '0' || key === 'id' || key === 'key' || key === 'character' || key === 'scene') {
        continue;
      }
      setForm((prev) => ({ ...prev, [key]: data[key] || '' }));
    }
  };

  const confirmFormUpload = () => {
    return Alert.alert('Subida de Datos', '¿Está seguro de subir los cambios realizados?', [
        {
          text: 'CANCELAR',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'ACEPTAR',
          onPress: () => {
            console.log('Form To Upload:', form);
            return saveEntity(header, form); // Usa saveEntity en lugar de saveFilm
          },
        },
      ]); 
  };

  const handleFormSubmit = () => {
    submit(form);
    close();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalHeaderView}>
            <View style={{ flex: 1 }}>
              <H3 style={{ fontWeight: 900, color: 'rgba(255,255,255,0.54)' }}>{header.toUpperCase()}</H3>
            </View>
            <View>
              <Pressable style={styles.button} onPress={close}>
                <Feather name="x-circle" size={30} color="white" />
              </Pressable>
            </View>
          </View>
          <View style={{ flex: 2, height: '100%', width: '80%' }}>
            <Image style={{ resizeMode: 'contain', width: '100%', height: '100%' }} source={require('../../assets/MovieLogo.png')} />
          </View>
          <View style={styles.modalBodyView}>
            {isCreate
              ? formModel.map((value, index) => {
                  console.log(value);
                  return (
                    <View style={{ width: '100%' }}>
                      <H3>{value}</H3>
                      <Input
                        value={form[value]}
                        componentName={value}
                        onChangeText={(newValue) => handleChange(value, newValue)}
                        borderWidth={2}
                        width={200}
                        maxWidth={200}
                        style={{ backgroundColor: 'black' }}
                      />
                    </View>
                  );
                })
              : <> {/* Edit fields for existing entity */}
                    <View style={{ width: '100%' }}>
                      <H3>Title1</H3>
                      <Input keyboardType={'numeric'} borderWidth={2} width={200} maxWidth={200} style={{ backgroundColor: 'black' }} />
                    </View>
                    <View style={{ width: '100%' }}>
                      <H3>Title2</H3>
                      <Input borderWidth={2} width={200} maxWidth={200} style={{ backgroundColor: 'black' }} />
                    </View>
                    <View style={{ width: '100%' }}>
                      <H3>Title3</H3>
                      <Input borderWidth={2} width={200} maxWidth={200} style={{ backgroundColor: 'black' }} />
                    </View>
                  </>
            }
          </View>
          <View style={styles.modalBottomView}>
            <Button onPress={handleFormSubmit} style={{ backgroundColor: '#752D59', width: '80%' }}>
              {isCreate ? 'Create' : 'Edit'}
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  modalHeaderView: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  modalBodyView: {
    flex: 5,
    height: '100%',
  },
  modalBottomView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  modalView: {
    width: '80%',
    height: '80%',
    margin: 20,
    backgroundColor: '#2d091f',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#570354',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    color: '#2d091f',
    borderRadius: 20,
    elevation: 2,
  },
});

export default AddEditEntityModal;
