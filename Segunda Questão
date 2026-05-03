import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Ex02() {
  return (
    <View style={styles.container}>
      <View style={styles.header}><Text style={styles.text}>Header Fixo</Text></View>
      <View style={styles.content}><Text>Conteúdo Principal (flex: 1)</Text></View>
      
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { height: 60, backgroundColor: '#059669', justifyContent: 'center', alignItems: 'center' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1f5f9' },
  fab: { 
    position: 'absolute', bottom: 24, right: 24, 
    backgroundColor: '#0f172a', width: 56, height: 56, borderRadius: 28, 
    justifyContent: 'center', alignItems: 'center' 
  },
  text: { color: 'white', fontWeight: 'bold' }
});
