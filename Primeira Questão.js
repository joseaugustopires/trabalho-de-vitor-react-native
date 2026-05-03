import { View, Text, Image, StyleSheet } from 'react-native';

export default function Ex01() {
  return (
    <View style={styles.card}>
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.image} />
      <Text style={styles.title}>Card Básico</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    // Sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Sombra Android
    elevation: 4,
  },
  image: { width: 100, height: 100, borderRadius: 50 },
  title: { marginTop: 12, fontSize: 18, fontWeight: 'bold' }
});
