import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View, Dimensions } from 'react-native';

const GameModeMapCard = ({ gameMode, mapsCount, onPress }) => {
  // Format the game mode name to match the image URL format
  const formatGameModeName = (name) => {
    // Remove special characters and spaces, convert to proper case
    return name.replace(/[^a-zA-Z0-9]/g, '');
  };

  const headerImageUrl = `https://cdn-old.brawlify.com/gamemode/header/${gameMode.name.replace(/\s+/g, '-')}.png`;
  
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Header Image Container */}
      <View style={styles.headerContainer}>
        <Image 
          source={{ uri: headerImageUrl }} 
          style={styles.headerImage}
          resizeMode="cover"
        />
        <View style={styles.overlay} />
      </View>
      
      {/* Content Container */}
      <View style={styles.contentContainer}>
        <Image 
          source={{ uri: gameMode.imageUrl }} 
          style={styles.iconImage} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{gameMode.name}</Text>
          <Text style={styles.count}>{mapsCount} Maps</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 0,
    marginVertical: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: width - 32,
    borderWidth: 3,
  },
  headerContainer: {
    width: '100%',
    height: 120,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  contentContainer: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  iconImage: {
    width: 60,
    height: 60,
    borderRadius: 0,
    marginRight: 12,
    marginTop: -5,
    borderWidth: 0,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  count: {
    fontSize: 14,
    color: '#666',
  },
});

export default GameModeMapCard;