import React from 'react';
import { View } from 'react-native';
import EntityCard from './EntityCard';
//import { Character, Scene, Film } from '../app/models/Interfaces.tsx';
import { Character, Scene, Film } from '../app/models/apiTypes'

interface EntityListProps {
    entities: Array<Character | Scene | Film>; // Utiliza las interfaces definidas
    onEdit: (entity: Character | Scene | Film) => void;
    onDelete: (entity: Character | Scene | Film) => void;
}

const EntityList: React.FC<EntityListProps> = ({ entities, onEdit, onDelete }) => {
  return (
    <View>
      {entities.map((entity, index) => (
        <EntityCard
          key={index}
          entity={entity}
          onEdit={() => onEdit(entity)}
          onDelete={() => onDelete(entity)}
        />
      ))}
    </View>
  );
};

export default EntityList;
