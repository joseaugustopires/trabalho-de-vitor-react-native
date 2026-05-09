import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#eefdf5" />

      <Text style={styles.screenTitle}>Ex 01 - Primeiro StyleSheet</Text>

      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900',
          }}
          style={styles.image}
        />

        <View style={styles.cardContent}>
          <Text style={styles.tag}>STYLE SHEET</Text>

          <Text style={styles.title}>Cartão com React Native</Text>

          <Text style={styles.description}>
            Este é um cartão criado com View, Text e Image usando
            StyleSheet.create(). Ele também possui sombra no iOS e elevation no
            Android.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eefdf5',
    padding: 20,
    justifyContent: 'center',
  },

  screenTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#102033',
    marginBottom: 24,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    overflow: 'hidden',

    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOpacity: 0.18,
        shadowRadius: 12,
        shadowOffset: {
          width: 0,
          height: 6,
        },
      },

      android: {
        elevation: 6,
      },
    }),
  },

  image: {
    width: '100%',
    height: 220,
  },

  cardContent: {
    padding: 18,
  },

  tag: {
    fontSize: 12,
    fontWeight: '900',
    color: '#059669',
    letterSpacing: 1,
    marginBottom: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#102033',
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#64748b',
  },
});
