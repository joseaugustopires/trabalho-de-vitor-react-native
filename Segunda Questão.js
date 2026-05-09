import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#059669" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meu App</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Layout com Flexbox</Text>

        <Text style={styles.description}>
          Esta tela usa o comportamento padrão do React Native, onde o
          flexDirection é column. O header fica no topo, o conteúdo ocupa o
          espaço principal com flex: 1 e o botão fica preso no rodapé usando
          position: absolute.
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Resumo do exercício</Text>

          <Text style={styles.infoText}>• Header fixo no topo</Text>
          <Text style={styles.infoText}>• Conteúdo usando flex: 1</Text>
          <Text style={styles.infoText}>• Botão absoluto no rodapé</Text>
          <Text style={styles.infoText}>• Layout em coluna</Text>
        </View>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.footerButton,
          pressed && styles.footerButtonPressed,
        ]}
      >
        <Text style={styles.footerButtonText}>Continuar</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ecfdf5',
  },

  header: {
    height: 90,
    backgroundColor: '#059669',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
  },

  content: {
    flex: 1,
    padding: 24,
    paddingBottom: 120,
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#102033',
    marginBottom: 16,
    textAlign: 'center',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 24,
  },

  infoBox: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#bbf7d0',
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#059669',
    marginBottom: 12,
  },

  infoText: {
    fontSize: 15,
    color: '#334155',
    marginBottom: 6,
  },

  footerButton: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 30,
    height: 56,
    backgroundColor: '#059669',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerButtonPressed: {
    opacity: 0.75,
  },

  footerButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '800',
  },
});
