import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const GameModeCard = ({ gameMode, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image 
        source={{ uri: gameMode.imageUrl }} 
        style={styles.image} 
      />
      <Text style={styles.name}>{gameMode.name}</Text>
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
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '45%',
    height: 150,
  },
  image: {
    width: 90,
    height: 90, 
    borderRadius: 0, 
    backgroundColor: '#fff',
    resizeMode: 'contain',
    borderWidth: 0,
    borderColor: '#000',
  },
  name: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});


export default GameModeCard;
