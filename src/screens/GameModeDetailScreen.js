import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const GameModeDetailScreen = ({ route, navigation }) => {
  const { gameMode } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false}>
        <View style={styles.headerContainer}>
          <Image source={{ uri: gameMode.imageUrl }} style={styles.image} />
        </View>
        
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{gameMode.name}</Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.descriptionTitle}>Description</Text>
              <View style={styles.divider} />
              <Text style={styles.description}>{gameMode.tutorial}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#133E87',
  },
  headerContainer: {
    height: 250,
    backgroundColor: '#608BC1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    position: 'relative',
    borderBottomWidth: 3,
    borderBottomColor: '#000',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    width: '80%',
    height: '100%',
    resizeMode: 'contain',
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: '#003161',
    borderRadius: 0,
    borderWidth: 3,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nameContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#000',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  infoContainer: {
    paddingHorizontal: 8,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#CBDCEB',
    marginBottom: 12,
  },
  divider: {
    height: 3,
    backgroundColor: '#000',
    marginBottom: 16,
    width: width * 0.3,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#F3F3E0',
    textAlign: 'justify',
  },
});

export default GameModeDetailScreen;