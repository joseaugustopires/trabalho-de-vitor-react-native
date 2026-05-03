import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

export default function Ex06() {
  const { width } = useWindowDimensions();
  const isLandscape = width > 500;
  
  return (
    <View style={styles.container}>
      <View style={[styles.card, { width: isLandscape ? '48%' : '100%' }]}><Text>Card 1</Text></View>
      <View style={[styles.card, { width: isLandscape ? '48%' : '100%' }]}><Text>Card 2</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 16 },
  card: { height: 150, backgroundColor: '#e2e8f0', marginBottom: 16, borderRadius: 8, justifyContent: 'center', alignItems: 'center' }
});
