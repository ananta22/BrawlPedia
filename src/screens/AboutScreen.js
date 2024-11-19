import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, fontFamily} from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/profile.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Rizky Ananta Fadhila</Text>
        <Text style={styles.nim}>21120122120029</Text>
        <Text style={styles.department}>Teknik Komputer</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.descriptionTitle}>Tentang Aplikasi</Text>
        <Text style={styles.description}>
          BrawlPedia adalah aplikasi yang menyediakan informasi
          tentang game BrawlStars. Aplikasi ini mencakup informasi tentang
          karakter (Brawlers), mode permainan, dan peta yang tersedia dalam game.
          Dikembangkan sebagai project pembelajaran React Native.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF3FF',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#003161',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#CBDCEB',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  nim: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: '500',
    color: '#A0D2FF',
  },
  department: {
    fontSize: 18,
    marginTop: 4,
    fontWeight: '400',
    color: '#D9EFFF',
  },
  card: {
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  descriptionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003161',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555555',
    textAlign: 'justify', 
  },
});

export default AboutScreen;
