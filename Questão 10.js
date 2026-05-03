import { View, Text, Image, FlatList, Pressable, useColorScheme, Platform, StyleSheet, SafeAreaView } from 'react-native';

const DATA = Array.from({ length: 15 }).map((_, i) => ({ id: i.toString() }));

export default function Ex10() {
  const isDark = useColorScheme() === 'dark';
  const theme = isDark ? darkStyles : lightStyles;

  return (
    <SafeAreaView style={[styles.container, theme.container]}>
      {/* Header Profile */}
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.avatar} />
        <Text style={[styles.name, theme.text]}>Desenvolvedor React Native</Text>
        <Text style={[styles.role, theme.subText]}>Software Engineer</Text>

        {/* Stats Grid */}
        <View style={styles.stats}>
          <View style={styles.statBox}><Text style={[styles.statNum, theme.text]}>42</Text><Text style={theme.subText}>Posts</Text></View>
          <View style={styles.statBox}><Text style={[styles.statNum, theme.text]}>15k</Text><Text style={theme.subText}>Seguidores</Text></View>
          <View style={styles.statBox}><Text style={[styles.statNum, theme.text]}>300</Text><Text style={theme.subText}>Seguindo</Text></View>
        </View>

        {/* Follow Button */}
        <Pressable style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
          <Text style={styles.btnText}>Seguir</Text>
        </Pressable>
      </View>

      {/* Posts Grid */}
      <FlatList
        data={DATA}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={() => <View style={[styles.postCard, theme.card]} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { alignItems: 'center', padding: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 8 },
  name: { fontSize: 20, fontWeight: 'bold' },
  role: { fontSize: 14, marginBottom: 16 },
  stats: { flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginBottom: 20 },
  statBox: { alignItems: 'center' },
  statNum: { fontSize: 18, fontWeight: 'bold' },
  btn: { backgroundColor: '#059669', paddingVertical: 10, paddingHorizontal: 40, borderRadius: 20 },
  btnPressed: { opacity: 0.8, transform: [{ scale: 0.95 }] },
  btnText: { color: 'white', fontWeight: 'bold' },
  postCard: { 
    flex: 1, aspectRatio: 1, margin: 2, borderRadius: 8,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 2 },
      android: { elevation: 2 }
    })
  }
});

const lightStyles = StyleSheet.create({
  container: { backgroundColor: '#f8fafc' },
  text: { color: '#0f172a' },
  subText: { color: '#64748b' },
  card: { backgroundColor: '#e2e8f0' }
});

const darkStyles = StyleSheet.create({
  container: { backgroundColor: '#0f172a' },
  text: { color: '#f8fafc' },
  subText: { color: '#94a3b8' },
  card: { backgroundColor: '#1e293b' }
});
