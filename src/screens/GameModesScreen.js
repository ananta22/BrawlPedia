import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { getGameModes } from '../api/api';
import GameModeCard from '../components/GameModeCard';

const GameModesScreen = ({ navigation }) => {
  const [gameModes, setGameModes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGameModes();
  }, []);

  const loadGameModes = async () => {
    const data = await getGameModes();
    setGameModes(data);
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
      <View style={styles.grid}>
        {gameModes.map((gameMode, index) => (
          <GameModeCard
            key={index}
            gameMode={gameMode}
            onPress={() => navigation.navigate('GameModeDetail', { gameMode })}
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameModesScreen;
