// Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Film } from './apiTypes';
import { fetchEntities } from '../../api/BasicPetitions';
import AddEntityButton from '../../components/AddEntityButton'; // Asegúrate de ajustar la ruta correcta

const Dashboard: React.FC = () => {
  const [films, setFilms] = useState<Array<Film>>([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const filmsData = await fetchEntities('film');
        setFilms(filmsData as Array<Film>);
      } catch (error) {
        console.error('Error al obtener la lista de films:', error);
      }
    };

    fetchFilms();
  }, []);

  const handleAddFilm = () => {
    // Aquí puedes manejar la lógica para agregar un nuevo film
    console.log('Agregar nuevo film');
  };

  return (
    <View style={styles.container}>
      {films.map((film) => (
        <Text key={film.id}>{film.title}</Text>
      ))}
      <AddEntityButton onPress={handleAddFilm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default Dashboard;




/*import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../../components/card'; // Importamos el componente Card
import { Button, Image, ScrollView, Text, YStack } from "tamagui";

const Dashboard: React.FC = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
            <Card 
                title="Película 1"
                director="Director 1"
                time="120 minutos"
                // imageSource={require('./path_to_image')} // Reemplaza 'path_to_image' con la ruta a tu imagen
            />
            <Card 
                title="Película 2"
                director="Director 2"
                time="90 minutos"
                // imageSource={require('./path_to_image')} // Reemplaza 'path_to_image' con la ruta a tu imagen
            />
            <Card 
                title="Película 3"
                director="Director 1"
                time="120 minutos"
                // imageSource={require('./path_to_image')} // Reemplaza 'path_to_image' con la ruta a tu imagen
            />
            <Card 
                title="Película 4"
                director="Director 2"
                time="90 minutos"
                // imageSource={require('./path_to_image')} // Reemplaza 'path_to_image' con la ruta a tu imagen
            />
        </View>
        </ScrollView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
});

export default Dashboard;*/