import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../../components/card'; // Importamos el componente Card

const Dashboard: React.FC = () => {
    return (
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
