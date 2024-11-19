// src/screens/BrawlersScreen.js
import React, { useState, useEffect } from 'react';
import { 
  View, 
  ScrollView, 
  StyleSheet, 
  ActivityIndicator,
  Text,
  TouchableOpacity
} from 'react-native';
import { getBrawlers } from '../api/api';
import BrawlerCard from '../components/BrawlerCard';

const BrawlersScreen = ({ navigation }) => {
  const [brawlers, setBrawlers] = useState([]);
  const [filteredBrawlers, setFilteredBrawlers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('all'); // 'all', 'rarity', 'class'
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    loadBrawlers();
  }, []);

  const loadBrawlers = async () => {
    const data = await getBrawlers();
    setBrawlers(data);
    setFilteredBrawlers(data);
    setLoading(false);
  };

  // Mendapatkan list unik dari rarity dan class
  const getRarityList = () => {
    const rarities = new Set(brawlers.map(brawler => brawler.rarity.name));
    return Array.from(rarities);
  };

  const getClassList = () => {
    const classes = new Set(brawlers.map(brawler => brawler.class.name));
    return Array.from(classes);
  };

  // Fungsi filter
  const filterBrawlers = (type, value) => {
    if (type === 'all') {
      setFilteredBrawlers(brawlers);
      setFilterType('all');
      setSelectedFilter(null);
    } else if (type === 'rarity') {
      const filtered = brawlers.filter(brawler => brawler.rarity.name === value);
      setFilteredBrawlers(filtered);
      setFilterType('rarity');
      setSelectedFilter(value);
    } else if (type === 'class') {
      const filtered = brawlers.filter(brawler => brawler.class.name === value);
      setFilteredBrawlers(filtered);
      setFilterType('class');
      setSelectedFilter(value);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filterType === 'all' && styles.activeFilterButton
          ]}
          onPress={() => filterBrawlers('all')}
        >
          <Text style={[
            styles.filterButtonText,
            filterType === 'all' && styles.activeFilterButtonText
          ]}>All</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.filterButton,
            filterType === 'rarity' && styles.activeFilterButton
          ]}
          onPress={() => setFilterType('rarity')}
        >
          <Text style={[
            styles.filterButtonText,
            filterType === 'rarity' && styles.activeFilterButtonText
          ]}>By Rarity</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            filterType === 'class' && styles.activeFilterButton
          ]}
          onPress={() => setFilterType('class')}
        >
          <Text style={[
            styles.filterButtonText,
            filterType === 'class' && styles.activeFilterButtonText
          ]}>By Class</Text>
        </TouchableOpacity>
      </View>

      {/* Sub-filter options */}
      {filterType === 'rarity' && (
  <View style={styles.subFilterContainer}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.subFilterWrapper}>
        {getRarityList().map((rarity) => (
          <TouchableOpacity
            key={rarity}
            style={[
              styles.subFilterButton,
              selectedFilter === rarity && styles.activeSubFilterButton
            ]}
            onPress={() => filterBrawlers('rarity', rarity)}
          >
            <Text style={[
              styles.subFilterButtonText,
              selectedFilter === rarity && styles.activeSubFilterButtonText
            ]}>{rarity}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  </View>
)}

{filterType === 'class' && (
  <View style={styles.subFilterContainer}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.subFilterWrapper}>
        {getClassList().map((className) => (
          <TouchableOpacity
            key={className}
            style={[
              styles.subFilterButton,
              selectedFilter === className && styles.activeSubFilterButton
            ]}
            onPress={() => filterBrawlers('class', className)}
          >
            <Text style={[
              styles.subFilterButtonText,
              selectedFilter === className && styles.activeSubFilterButtonText
            ]}>{className}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  </View>
)}
      {/* Brawlers Grid */}
      <ScrollView style={styles.gridContainer}>
        <View style={styles.grid}>
          {filteredBrawlers.map((brawler) => (
            <BrawlerCard
              key={brawler.id}
              brawler={brawler}
              onPress={() => navigation.navigate('BrawlerDetail', { brawler })}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#16325B',
    },
    filterContainer: {
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#608BC1',
      elevation: 4,
    },
    filterButton: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
      marginHorizontal: 5,
      borderRadius: 6,
      backgroundColor: '#f0f0f0',
    },
    activeFilterButton: {
      backgroundColor: '#C62E2E',
    },
    filterButtonText: {
      fontWeight: 'bold',
      color: '#666',
    },
    activeFilterButtonText: {
      color: '#fff',
    },
    subFilterContainer: {
        backgroundColor: '#608BC1',
        borderBottomWidth: 3,
        borderBottomColor: '#000',
        height: 60,
    },
    subFilterWrapper: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
      },
    subFilterButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginHorizontal: 4,
        borderRadius: 6,
        backgroundColor: '#f0f0f0',
    },
    activeSubFilterButton: {
      backgroundColor: '#F95454',
    },
    subFilterButtonText: {
      color: '#666',
      fontWeight: 'bold',
    },
    activeSubFilterButtonText: {
      color: '#fff',
    },
    gridContainer: {
      flex: 1,
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

export default BrawlersScreen;