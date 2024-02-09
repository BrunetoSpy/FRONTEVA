import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface EntityCardProps {
  entity: any; // Aquí debes definir el tipo adecuado para las entidades (film, scene o character)
  onEdit: () => void;
  onDelete: () => void;
}

const EntityCard: React.FC<EntityCardProps> = ({ entity, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      {/* Muestra la información de la entidad */}
      <Text>{entity.title || entity.description}</Text>
      {/* Agrega más campos según la entidad */}

      <Button title="Editar" onPress={onEdit} />
      <Button title="Eliminar" onPress={onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
});

export default EntityCard;
