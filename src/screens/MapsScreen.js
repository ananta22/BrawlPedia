import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { getMaps } from '../api/api';
import GameModeMapCard from '../components/GameModeMapCard';

const MapsScreen = ({ navigation }) => {
  const [gameModes, setGameModes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMaps();
  }, []);

  const loadMaps = async () => {
    const data = await getMaps();
    // Group maps by game mode
    const groupedMaps = data.reduce((groups, map) => {
      const mode = map.gameMode;
      if (!groups[mode.id]) {
        groups[mode.id] = {
          gameMode: mode,
          maps: []
        };
      }
      groups[mode.id].maps.push(map);
      return groups;
    }, {});

    // Convert the grouped object to an array
    const gameModesList = Object.values(groupedMaps);
    setGameModes(gameModesList);
    setLoading(false);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.listContainer}>
        {gameModes.map((item, index) => (
          <GameModeMapCard
            key={`${item.gameMode.id}-${index}`}
            gameMode={item.gameMode}
            mapsCount={item.maps.length}
            onPress={() => navigation.navigate('MapsForGameMode', {
              gameMode: item.gameMode,
              maps: item.maps
            })}
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
  listContainer: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapsScreen;