import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';

const songs = [
  { title: 'Leão - Marília Mendonça'},
  { title: 'Erro Gostoso - Simone Mendes'},
  { title: 'Chitãozinho & Xororó - Galopeira'},
  { title: 'Eu Gosto Assim - Gustavo Mioto Ft. Mari Fernandez'},
  { title: 'A Culpa é Nossa - Maiara e Maraisa'},
  { title: 'Traumatizei - Henrique e Juliano'},
  { title: 'Oi Balde - Zé Neto e Cristiano'},
  { title: 'Ana Castela - Ram Tchum'},
];

export default function PlaylistsScreen() {
  return (
    <ImageBackground
      source={require('../assets/logo.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Minha Playlist</Text>
        <FlatList
          data={songs}
          renderItem={({ item }) => <Text style={styles.song}>{item.title}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', 
  },
  song: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
