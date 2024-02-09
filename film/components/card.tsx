//card.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface CardProps {
    title: string;
    director: string;
    time: string;
    // imageSource: ImageSourcePropType;
}

const Card: React.FC<CardProps> = ({ title, director, time, /*imageSource*/ }) => {
    return (
        <View style={styles.container}>
            <Image /*source={imageSource}*/ style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>DIRECTOR: {director}</Text>
            <Text style={styles.text}>TIME: {time}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: '#f2f2f2',
        borderRadius: 4,
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 4,
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    text: {
        fontSize: 16,
        marginBottom: 2,
    },
});

export default Card;
