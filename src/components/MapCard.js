import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const MapCard = ({ map, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image 
        source={{ uri: map.imageUrl }} 
        style={styles.image} 
      />
      <Text style={styles.name}>{map.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 0,
    borderWidth: 3,
    padding: 10,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '45%',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  name: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MapCard;
