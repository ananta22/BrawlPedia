import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const features = [
    {
      title: 'Brawlers',
      description: 'Explore all characters',
      screen: 'Brawlers',
      image: 'https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC84Mk51MTR6cHh0YjhScDJzQjZIby5wbmcifQ:supercell:jpCJ8w3QZvWDy1bOLljlavX2KINMboV7iflh9PAzTjc?width=2400',
    },
    {
      title: 'Game Modes',
      description: 'Discover different ways to play',
      screen: 'GameModes',
      image: 'https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9CbmludVRQekpxNlFEdlR3amlqTi5qcGcifQ:supercell:X-TGjrSGkrdpZoYxrpqU9ZfWGSertgdPp0dCynhzJPk?width=2400',
    },
    {
      title: 'Maps',
      description: 'Browse all available maps',
      screen: 'Maps',
      image: 'https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9rVXlzenlVZFV4NnJ1ZkFMZzRpYi5wbmcifQ:supercell:4oNgYyrJ82flnbMR7e2dhjLOvixkeORQO4VN_Xwzr5I?width=2400',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to BrawlPedia</Text>
        <Text style={styles.subtitle}>
          Your complete guide to everything BrawlStars!
        </Text>
      </View>

      <View style={styles.featuresContainer}>
        {features.map((feature, index) => (
          <TouchableOpacity
            key={index}
            style={styles.featureCard}
            onPress={() => navigation.navigate(feature.screen)}
          >
            <View style={styles.imageContainer}>
              <Image 
                source={{ uri: feature.image }} 
                style={styles.featureImage}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.featureTitle}>{feature.title}</Text>
            <Text style={styles.featureDescription}>{feature.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16325B',
  },
  header: {
    padding: 20,
    backgroundColor: '#608BC1',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#000',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  featuresContainer: {
    padding: 16,
  },
  featureCard: {
    backgroundColor: '#fff',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 3,
    borderColor: '#000',
    overflow: 'hidden', // Pastikan gambar tidak keluar dari card
  },
  imageContainer: {
    width: '100%', // Sesuaikan lebar dengan kartu
    height: 180, // Tetapkan tinggi tetap untuk konsistensi
    overflow: 'hidden',
  },
  featureImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Pastikan gambar memenuhi kontainer
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 3, // Spasi antara gambar dan teks
    color: '#000',
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 16,
    color: '#133E87',
    textAlign: 'center',
    marginBottom: 10,
  },  
});

export default HomeScreen;
