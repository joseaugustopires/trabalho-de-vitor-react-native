import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

const lightTheme = {
  colors: {
    background: '#f8fafc',
    card: '#ffffff',
    text: '#0f172a',
    mutedText: '#64748b',
    primary: '#7c3aed',
    primaryDark: '#5b21b6',
    primaryText: '#ffffff',
    border: '#ddd6fe',
    softBox: '#f3e8ff',
  },
};

const darkTheme = {
  colors: {
    background: '#020617',
    card: '#0f172a',
    text: '#f8fafc',
    mutedText: '#94a3b8',
    primary: '#a78bfa',
    primaryDark: '#8b5cf6',
    primaryText: '#1e1b4b',
    border: '#334155',
    softBox: '#1e1b4b',
  },
};

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Screen>
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={theme.colors.background}
        />

        <Container>
          <Caption>EX 08</Caption>

          <H1>Styled Components</H1>

          <Body>
            Este exercício cria um pequeno design system usando
            styled-components/native.
          </Body>

          <Card $spacing={24}>
            <H2>Typography</H2>

            <Body>
              Os textos H1, H2, Body e Caption são componentes reutilizáveis.
            </Body>

            <Caption>Todos consomem cores do ThemeProvider.</Caption>
          </Card>

          <Card $spacing={18}>
            <H2>Card com $spacing</H2>

            <Body>
              Este Card recebe a prop $spacing para controlar o padding de fora
              do componente.
            </Body>
          </Card>

          <InfoBox>
            <Caption>DESIGN SYSTEM</Caption>

            <Body>
              A ideia é criar componentes prontos para reaproveitar em várias
              telas do aplicativo.
            </Body>
          </InfoBox>

          <Button onPress={() => alert('Botão pressionado!')}>
            <ButtonText>Continuar</ButtonText>
          </Button>
        </Container>
      </Screen>
    </ThemeProvider>
  );
}

const Screen = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

const Container = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: center;
`;

const H1 = styled.Text`
  font-size: 32px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 12px;
`;

const H2 = styled.Text`
  font-size: 22px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 10px;
`;

const Body = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.mutedText};
  margin-bottom: 12px;
`;

const Caption = styled.Text`
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 1.5px;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 8px;
`;

const Card = styled.View`
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 20px;
  padding: ${(props) => props.$spacing}px;
  margin-bottom: 16px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  elevation: 4;
`;

const InfoBox = styled.View`
  background-color: ${(props) => props.theme.colors.softBox};
  border-radius: 18px;
  padding: 18px;
  margin-bottom: 20px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
`;

const Button = styled.Pressable`
  height: 56px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.primaryText};
  font-size: 17px;
  font-weight: 900;
`;
