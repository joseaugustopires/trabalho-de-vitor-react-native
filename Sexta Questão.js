import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  useWindowDimensions,
} from 'react-native';

const cards = [
  {
    id: '1',
    title: 'StyleSheet',
    description: 'Estilos criados com objetos JavaScript.',
  },
  {
    id: '2',
    title: 'Flexbox',
    description: 'Organização de elementos na tela.',
  },
  {
    id: '3',
    title: 'Responsivo',
    description: 'Layout adaptado ao tamanho da tela.',
  },
  {
    id: '4',
    title: 'Mobile',
    description: 'Interface pensada para dispositivos móveis.',
  },
  {
    id: '5',
    title: 'useWindowDimensions',
    description: 'Hook que reage quando a tela muda.',
  },
  {
    id: '6',
    title: 'React Native',
    description: 'Criação de aplicativos nativos com React.',
  },
];

export default function App() {
  const { width, height } = useWindowDimensions();

  const isLandscape = width > height;
  const numColumns = isLandscape ? 2 : 1;

  const screenPadding = 20;
  const gap = 14;

  const cardWidth =
    numColumns === 1
      ? width - screenPadding * 2
      : (width - screenPadding * 2 - gap) / 2;

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#eff6ff" />

      <View style={styles.container}>
        <Text style={styles.title}>Ex 06 - Responsivo</Text>

        <Text style={styles.subtitle}>
          Gire a tela: em retrato fica 1 coluna, em paisagem ficam 2 colunas.
        </Text>

        <View style={styles.modeBox}>
          <Text style={styles.modeText}>
            Modo atual: {isLandscape ? 'Paisagem' : 'Retrato'}
          </Text>

          <Text style={styles.modeText}>
            Colunas: {numColumns}
          </Text>
        </View>

        <FlatList
          key={numColumns}
          data={cards}
          numColumns={numColumns}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          columnWrapperStyle={numColumns === 2 ? styles.row : null}
          renderItem={({ item }) => (
            <View style={[styles.card, { width: cardWidth }]}>
              <Text style={styles.cardTitle}>{item.title}</Text>

              <Text style={styles.cardDescription}>
                {item.description}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#eff6ff',
  },

  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 18,
  },

  modeBox: {
    backgroundColor: '#dbeafe',
    borderRadius: 16,
    padding: 14,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#93c5fd',
  },

  modeText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1d4ed8',
    textAlign: 'center',
    marginBottom: 4,
  },

  list: {
    paddingBottom: 20,
  },

  row: {
    justifyContent: 'space-between',
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#bfdbfe',
    minHeight: 130,
    justifyContent: 'center',

    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#1e3a8a',
    marginBottom: 8,
  },

  cardDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: '#475569',
  },
});
