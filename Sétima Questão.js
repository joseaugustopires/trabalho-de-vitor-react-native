import { createContext, useContext } from 'react';
import { View, Text, useColorScheme } from 'react-native';

const light = { background: '#ffffff', text: '#000000' };
const dark = { background: '#0f172a', text: '#ffffff' };
const ThemeContext = createContext(light);

export function ThemeProvider({ children }) {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? dark : light;
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export default function Ex07() {
  const theme = useContext(ThemeContext);
  return (
    <View style={{ flex: 1, backgroundColor: theme.background, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: theme.text }}>Modo Escuro Nativo!</Text>
    </View>
  );
}
