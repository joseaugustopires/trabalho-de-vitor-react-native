import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Ex03() {
  const [active, setActive] = useState(null);
  const items = Array.from({ length: 9 });

  return (
    <View style={styles.grid}>
      {items.map((_, index) => (
        <TouchableOpacity 
          key={index} 
          style={[styles.cell, active === index && styles.activeCell]} 
          onPress={() => setActive(index)} 
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', width: '100%' },
  cell: { width: '33.33%', height: 100, backgroundColor: '#cbd5e1', borderWidth: 1, borderColor: 'white' },
  activeCell: { backgroundColor: '#059669' }
});
