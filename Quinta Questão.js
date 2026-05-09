import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor={Platform.OS === 'ios' ? '#ffffff' : '#2563eb'}
      />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ex 05</Text>
        <Text style={styles.headerSubtitle}>Estilos por plataforma</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sistema detectado</Text>

          <Text style={styles.platformText}>
            Você está rodando em: {Platform.OS}
          </Text>

          <Text style={styles.description}>
            Este exemplo usa Platform.select() para aplicar estilos diferentes
            dependendo do sistema operacional.
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Como ficou?</Text>

          <Text style={styles.infoText}>
            No iOS, o header fica branco e centralizado.
          </Text>

          <Text style={styles.infoText}>
            No Android, o header fica azul e alinhado à esquerda.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },

  header: {
    paddingHorizontal: 22,
    paddingBottom: 22,

    ...Platform.select({
      ios: {
        backgroundColor: '#ffffff',
        paddingTop: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
      },

      android: {
        backgroundColor: '#2563eb',
        paddingTop: StatusBar.currentHeight + 18,
        alignItems: 'flex-start',
      },
    }),
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '900',

    ...Platform.select({
      ios: {
        color: '#0f172a',
      },

      android: {
        color: '#ffffff',
      },
    }),
  },

  headerSubtitle: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 4,

    ...Platform.select({
      ios: {
        color: '#64748b',
      },

      android: {
        color: '#dbeafe',
      },
    }),
  },

  content: {
    flex: 1,
    padding: 22,
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,

    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOpacity: 0.12,
        shadowRadius: 10,
        shadowOffset: {
          width: 0,
          height: 5,
        },
      },

      android: {
        elevation: 5,
      },
    }),
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0f172a',
    marginBottom: 10,
  },

  platformText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2563eb',
    marginBottom: 12,
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    color: '#64748b',
  },

  infoBox: {
    backgroundColor: '#eff6ff',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#bfdbfe',
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1d4ed8',
    marginBottom: 10,
  },

  infoText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#334155',
    marginBottom: 6,
  },
});
