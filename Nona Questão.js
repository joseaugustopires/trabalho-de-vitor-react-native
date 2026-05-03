import { useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';

export default function Ex09({ progress = 0.7 }) {
  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: progress, // Ex: 0.7 para 70%
      duration: 600,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false // Cores e Width não suportam driver nativo
    }).start();
  }, [progress]);

  const width = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%']
  });

  const backgroundColor = animValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#10b981', '#fbbf24', '#ef4444'] // Verde -> Amarelo -> Vermelho
  });

  return (
    <View style={styles.track}>
      <Animated.View style={[styles.bar, { width, backgroundColor }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: { height: 16, backgroundColor: '#e2e8f0', borderRadius: 8, overflow: 'hidden' },
  bar: { height: '100%', borderRadius: 8 }
});
