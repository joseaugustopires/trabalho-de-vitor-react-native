import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function App() {
  const [pressableClicks, setPressableClicks] = useState(0);
  const [touchableClicks, setTouchableClicks] = useState(0);

  function handlePressable() {
    setPressableClicks(pressableClicks + 1);
  }

  function handleTouchable() {
    setTouchableClicks(touchableClicks + 1);
  }

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff7ed" />

      <View style={styles.container}>
        <Text style={styles.title}>Ex 04 - Botão com Pressable</Text>

        <Text style={styles.subtitle}>
          O Pressable permite controlar o estilo enquanto o botão está sendo
          pressionado.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Botão usando Pressable</Text>

          <Pressable
            onPress={handlePressable}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.buttonText}>Pressable</Text>
          </Pressable>

          <Text style={styles.counterText}>
            Cliques no Pressable: {pressableClicks}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Comparação com TouchableOpacity</Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleTouchable}
            style={styles.touchableButton}
          >
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </TouchableOpacity>

          <Text style={styles.counterText}>
            Cliques no TouchableOpacity: {touchableClicks}
          </Text>
        </View>

        <View style={styles.explanationBox}>
          <Text style={styles.explanationTitle}>Diferença principal</Text>

          <Text style={styles.explanationText}>
            O TouchableOpacity já reduz a opacidade automaticamente. Já o
            Pressable permite criar estilos mais personalizados, como reduzir a
            opacidade e também diminuir o tamanho do botão ao pressionar.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff7ed',
  },

  container: {
    flex: 1,
    padding: 22,
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#fed7aa',
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#9a3412',
    marginBottom: 14,
  },

  button: {
    height: 56,
    backgroundColor: '#ea580c',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },

  touchableButton: {
    height: 56,
    backgroundColor: '#f97316',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '800',
  },

  counterText: {
    marginTop: 12,
    fontSize: 15,
    fontWeight: '700',
    color: '#334155',
    textAlign: 'center',
  },

  explanationBox: {
    backgroundColor: '#ffedd5',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fdba74',
  },

  explanationTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#9a3412',
    marginBottom: 8,
  },

  explanationText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#7c2d12',
  },
});
