import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import MapCard from '../components/MapCard';

const MapsForGameModeScreen = ({ route, navigation }) => {
  const { gameMode, maps } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{gameMode.name} Maps</Text>
        <Text style={styles.headerSubtitle}>{maps.length} Maps Available</Text>
      </View>
      <View style={styles.grid}>
        {maps.map((map) => (
          <MapCard
            key={map.id}
            map={map}
            onPress={() => navigation.navigate('MapDetail', { map })}
          />
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
    padding: 16,
    backgroundColor: '#608BC1',
    borderBottomWidth: 3,
    borderBottomColor: '#000',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 8,
  },
});

export default MapsForGameModeScreen;