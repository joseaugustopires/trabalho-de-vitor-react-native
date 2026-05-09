import React, { createContext, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Pressable,
} from 'react-native';

const lightColors = {
  background: '#f8fafc',
  card: '#ffffff',
  text: '#0f172a',
  mutedText: '#64748b',
  primary: '#059669',
  primaryText: '#ffffff',
  border: '#d1fae5',
  box: '#ecfdf5',
};

const darkColors = {
  background: '#020617',
  card: '#0f172a',
  text: '#f8fafc',
  mutedText: '#94a3b8',
  primary: '#10b981',
  primaryText: '#022c22',
  border: '#1e293b',
  box: '#111827',
};

const ThemeContext = createContext(lightColors);

function useTheme() {
  return useContext(ThemeContext);
}

export default function App() {
  const colorScheme = useColorScheme();

  const colors = colorScheme === 'dark' ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={colors}>
      <SafeAreaView
        style={[
          styles.screen,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={colors.background}
        />

        <Header currentTheme={colorScheme} />

        <View style={styles.content}>
          <ProfileCard />

          <InfoCard />

          <ThemeButton />
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

function Header({ currentTheme }) {
  const colors = useTheme();

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: colors.card,
          borderBottomColor: colors.border,
        },
      ]}
    >
      <Text
        style={[
          styles.headerTitle,
          {
            color: colors.text,
          },
        ]}
      >
        Ex 07
      </Text>

      <Text
        style={[
          styles.headerSubtitle,
          {
            color: colors.mutedText,
          },
        ]}
      >
        Tema atual: {currentTheme === 'dark' ? 'Escuro' : 'Claro'}
      </Text>
    </View>
  );
}

function ProfileCard() {
  const colors = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
      ]}
    >
      <View
        style={[
          styles.avatar,
          {
            backgroundColor: colors.primary,
          },
        ]}
      >
        <Text
          style={[
            styles.avatarText,
            {
              color: colors.primaryText,
            },
          ]}
        >
          RN
        </Text>
      </View>

      <Text
        style={[
          styles.name,
          {
            color: colors.text,
          },
        ]}
      >
        React Native
      </Text>

      <Text
        style={[
          styles.role,
          {
            color: colors.mutedText,
          },
        ]}
      >
        Estilização com tema nativo
      </Text>
    </View>
  );
}

function InfoCard() {
  const colors = useTheme();

  return (
    <View
      style={[
        styles.infoCard,
        {
          backgroundColor: colors.box,
          borderColor: colors.border,
        },
      ]}
    >
      <Text
        style={[
          styles.infoTitle,
          {
            color: colors.text,
          },
        ]}
      >
        O que este exercício faz?
      </Text>

      <Text
        style={[
          styles.infoText,
          {
            color: colors.mutedText,
          },
        ]}
      >
        Usa o tema claro ou escuro do próprio sistema operacional.
      </Text>

      <Text
        style={[
          styles.infoText,
          {
            color: colors.mutedText,
          },
        ]}
      >
        As cores são enviadas para os componentes usando Context.
      </Text>

      <Text
        style={[
          styles.infoText,
          {
            color: colors.mutedText,
          },
        ]}
      >
        Quando o tema do celular muda, a tela muda automaticamente.
      </Text>
    </View>
  );
}

function ThemeButton() {
  const colors = useTheme();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: colors.primary,
          opacity: pressed ? 0.75 : 1,
          transform: [{ scale: pressed ? 0.97 : 1 }],
        },
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: colors.primaryText,
          },
        ]}
      >
        Botão com tema
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  header: {
    paddingTop: 20,
    paddingBottom: 22,
    paddingHorizontal: 22,
    borderBottomWidth: 1,
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: '900',
  },

  headerSubtitle: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 4,
  },

  content: {
    flex: 1,
    padding: 22,
    justifyContent: 'center',
  },

  card: {
    borderRadius: 22,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 18,
  },

  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  avatarText: {
    fontSize: 26,
    fontWeight: '900',
  },

  name: {
    fontSize: 26,
    fontWeight: '900',
    marginBottom: 6,
  },

  role: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },

  infoCard: {
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    marginBottom: 18,
  },

  infoTitle: {
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 12,
  },

  infoText: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 8,
  },

  button: {
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 17,
    fontWeight: '900',
  },
});
