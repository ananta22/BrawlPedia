import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const MapDetailScreen = ({ route }) => {
  const { map } = route.params;

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: map.imageUrl }} 
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default MapDetailScreen;