import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const BrawlerDetailScreen = ({ route }) => {
  const { brawler } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={{ uri: brawler.imageUrl }} style={styles.image} />
      </View>
      
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{brawler.name}</Text>
            <View style={[styles.rarityBadge, { backgroundColor: brawler.rarity.color }]}>
              <Text style={styles.rarityText}>{brawler.rarity.name}</Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Class</Text>
              <Text style={styles.value}>{brawler.class.name}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoItem}>
              <Text style={styles.label}>Rarity</Text>
              <Text style={[styles.value, { color: brawler.rarity.color }]}>
                {brawler.rarity.name}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{brawler.description}</Text>
        </View>
      </View>
    </ScrollView>
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
    borderBottomWidth: 3,
    borderBottomColor: '#000',
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
    marginBottom: 16,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  rarityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  rarityText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  infoItem: {
    alignItems: 'center',
    flex: 1,
  },
  divider: {
    width: 2,
    height: 40,
    backgroundColor: '#000',
  },
  label: {
    fontSize: 14,
    color: '#608BC1',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  descriptionCard: {
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
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#F3F3E0',
    textAlign: 'justify',
  },
});

export default BrawlerDetailScreen;