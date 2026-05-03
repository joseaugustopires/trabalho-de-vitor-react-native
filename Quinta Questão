import { View, Text, StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native';

export default function Ex05() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Header Específico</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: Platform.OS === 'ios' ? 'white' : '#059669',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
  },
  header: Platform.select({
    ios: { backgroundColor: 'white', alignItems: 'center', padding: 16 },
    android: { backgroundColor: '#059669', alignItems: 'flex-start', padding: 16 }
  }),
  title: { 
    color: Platform.OS === 'ios' ? 'black' : 'white', 
    fontWeight: 'bold', fontSize: 18 
  }
});
