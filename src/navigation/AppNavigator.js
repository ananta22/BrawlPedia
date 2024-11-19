import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import BrawlersScreen from '../screens/BrawlersScreen';
import BrawlerDetailScreen from '../screens/BrawlerDetailScreen';
import GameModesScreen from '../screens/GameModesScreen';
import GameModeDetailScreen from '../screens/GameModeDetailScreen';
import MapsScreen from '../screens/MapsScreen';
import MapDetailScreen from '../screens/MapDetailScreen';
import AboutScreen from '../screens/AboutScreen';
import MapsForGameModeScreen from '../screens/MapsForGameModeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BrawlersStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="BrawlersList" component={BrawlersScreen} options={{ title: 'Brawlers' }} />
    <Stack.Screen name="BrawlerDetail" component={BrawlerDetailScreen} options={{ title: 'Brawler Detail' }} />
  </Stack.Navigator>
);

const GameModesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="GameModesList" component={GameModesScreen} options={{ title: 'Game Modes' }} />
    <Stack.Screen name="GameModeDetail" component={GameModeDetailScreen} options={{ title: 'Game Mode Detail' }} />
  </Stack.Navigator>
);

const MapsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="MapsList" component={MapsScreen} options={{ title: 'Game Mode Maps' }} />
    <Stack.Screen 
      name="MapsForGameMode" 
      component={MapsForGameModeScreen} 
      options={({ route }) => ({ 
        title: `${route.params.gameMode.name} Maps`
      })} 
    />
    <Stack.Screen 
      name="MapDetail" 
      component={MapDetailScreen} 
      options={{ title: 'Map Detail' }} 
    />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Brawlers') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'GameModes') {
              iconName = focused ? 'game-controller' : 'game-controller-outline';
            } else if (route.name === 'Maps') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#006BFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Brawlers" component={BrawlersStack} options={{ headerShown: false }} />
        <Tab.Screen name="GameModes" component={GameModesStack} options={{ headerShown: false }} />
        <Tab.Screen name="Maps" component={MapsStack} options={{ headerShown: false }} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;