import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
} from 'react-native';

const items = [
  { id: 1, icon: '🏠', label: 'Casa' },
  { id: 2, icon: '⭐', label: 'Favorito' },
  { id: 3, icon: '📷', label: 'Foto' },
  { id: 4, icon: '🎵', label: 'Música' },
  { id: 5, icon: '📍', label: 'Mapa' },
  { id: 6, icon: '💬', label: 'Chat' },
  { id: 7, icon: '🔔', label: 'Avisos' },
  { id: 8, icon: '⚙️', label: 'Config' },
  { id: 9, icon: '👤', label: 'Perfil' },
];

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  function handlePress(id) {
    setSelectedId(id);
  }

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecfdf5" />

      <Text style={styles.title}>Ex 03 - Grid de ícones 3x3</Text>

      <Text style={styles.subtitle}>
        Pressione uma célula para mudar a cor dela.
      </Text>

      <View style={styles.grid}>
        {items.map((item) => {
          const isSelected = selectedId === item.id;

          return (
            <Pressable
              key={item.id}
              onPress={() => handlePress(item.id)}
              style={[
                styles.cell,
                isSelected && styles.cellSelected,
              ]}
            >
              <Text style={styles.icon}>{item.icon}</Text>

              <Text
                style={[
                  styles.label,
                  isSelected && styles.labelSelected,
                ]}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ecfdf5',
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#102033',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 28,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#bbf7d0',
  },

  cell: {
    width: '33.33%',
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },

  cellSelected: {
    backgroundColor: '#059669',
    borderColor: '#047857',
  },

  icon: {
    fontSize: 32,
    marginBottom: 8,
  },

  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#334155',
  },

  labelSelected: {
    color: '#ffffff',
  },
});
