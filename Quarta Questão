import { Pressable, Text, StyleSheet } from 'react-native';

export default function Ex04() {
  return (
    <Pressable style={({ pressed }) => [
      styles.button,
      pressed && styles.buttonPressed
    ]}>
      <Text style={styles.text}>Me Pressione</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: '#0284c7', padding: 16, borderRadius: 8, alignItems: 'center' },
  buttonPressed: { opacity: 0.7, transform: [{ scale: 0.97 }] },
  text: { color: 'white', fontWeight: 'bold' }
});
