import axios from 'axios';

const BASE_URL = 'https://api.brawlify.com/v1';

export const getBrawlers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/brawlers`);
    return response.data.list;
  } catch (error) {
    console.error('Error fetching brawlers:', error);
    return [];
  }
};

export const getGameModes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/gamemodes`);
    return response.data.list;
  } catch (error) {
    console.error('Error fetching game modes:', error);
    return [];
  }
};

export const getMaps = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/maps`);
    return response.data.list;
  } catch (error) {
    console.error('Error fetching maps:', error);
    return [];
  }
};