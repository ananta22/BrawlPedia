import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MapCard from '../components/MapCard';

const MapsForGameModeScreen = ({ route, navigation }) => {
  const { gameMode, maps } = route.params;
  const [selectedLetter, setSelectedLetter] = useState('All');
  const filteredMaps = selectedLetter === 'All'
    ? maps
    : maps.filter((map) => map.name.startsWith(selectedLetter));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{gameMode.name} Maps</Text>
        <Text style={styles.headerSubtitle}>{filteredMaps.length} Maps Available</Text>
      </View>
      <View style={styles.filter}>
        <Text style={styles.filterLabel}>Filter by Letter:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedLetter}
            onValueChange={(itemValue) => setSelectedLetter(itemValue)}
            style={styles.picker}
            dropdownIconColor="#000"
          >
            <Picker.Item label="All" value="All" />
            {Array.from(Array(26), (_, i) => String.fromCharCode(65 + i)).map((letter) => (
              <Picker.Item key={letter} label={letter} value={letter} />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.grid}>
        {filteredMaps.length > 0 ? (
          filteredMaps.map((map) => (
            <MapCard
              key={map.id}
              map={map}
              onPress={() => navigation.navigate('MapDetail', { map })}
            />
          ))
        ) : (
          <Text style={styles.noMapsMessage}>
            Sepertinya tidak ada map dengan huruf '{selectedLetter}'.
          </Text>
        )}
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
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#608BC1',
  },
  filterLabel: {
    fontSize: 16,
    color: '#fff',
    marginRight: 8,
  },
  pickerWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 8,
  },
  noMapsMessage: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MapsForGameModeScreen;
