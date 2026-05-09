import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Animated,
  Easing,
} from 'react-native';

export default function App() {
  const [progress, setProgress] = useState(25);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />

      <View style={styles.container}>
        <Text style={styles.title}>Ex 09 - Animated API</Text>

        <Text style={styles.subtitle}>
          Barra de progresso animada com transição suave de valor e cor.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Progresso atual</Text>

          <Text style={styles.progressText}>{progress}%</Text>

          <AnimatedProgressBar value={progress} />

          <Text style={styles.description}>
            A largura da barra aumenta suavemente. A cor muda de verde para
            amarelo e depois vermelho conforme o progresso aumenta.
          </Text>
        </View>

        <View style={styles.buttonsGrid}>
          <ProgressButton label="0%" onPress={() => setProgress(0)} />
          <ProgressButton label="25%" onPress={() => setProgress(25)} />
          <ProgressButton label="50%" onPress={() => setProgress(50)} />
          <ProgressButton label="75%" onPress={() => setProgress(75)} />
          <ProgressButton label="100%" onPress={() => setProgress(100)} />
        </View>
      </View>
    </SafeAreaView>
  );
}

function AnimatedProgressBar({ value }) {
  const animatedValue = useRef(new Animated.Value(value)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value,
      duration: 600,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [value, animatedValue]);

  const animatedWidth = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  const animatedColor = animatedValue.interpolate({
    inputRange: [0, 50, 100],
    outputRange: ['#22c55e', '#eab308', '#ef4444'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.progressTrack}>
      <Animated.View
        style={[
          styles.progressFill,
          {
            width: animatedWidth,
            backgroundColor: animatedColor,
          },
        ]}
      />
    </View>
  );
}

function ProgressButton({ label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },

  container: {
    flex: 1,
    padding: 22,
    justifyContent: 'center',
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
    marginBottom: 24,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 22,
    padding: 22,
    marginBottom: 22,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    elevation: 4,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#334155',
    textAlign: 'center',
    marginBottom: 8,
  },

  progressText: {
    fontSize: 42,
    fontWeight: '900',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 18,
  },

  progressTrack: {
    width: '100%',
    height: 28,
    backgroundColor: '#e2e8f0',
    borderRadius: 999,
    overflow: 'hidden',
    marginBottom: 18,
  },

  progressFill: {
    height: '100%',
    borderRadius: 999,
  },

  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#64748b',
    textAlign: 'center',
  },

  buttonsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },

  button: {
    backgroundColor: '#0f172a',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 14,
  },

  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '900',
  },
});
