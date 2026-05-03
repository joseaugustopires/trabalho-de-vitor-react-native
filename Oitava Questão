import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';

const theme = { colors: { primary: '#059669', text: '#1e293b' } };

const Card = styled.View`
  background-color: white;
  padding: ${props => props.$spacing || 16}px;
  border-radius: 8px;
  elevation: 4;
`;

const Typography = styled.Text`
  font-size: ${props => props.h1 ? '24px' : '16px'};
  font-weight: ${props => props.h1 ? 'bold' : 'normal'};
  color: ${props => props.theme.colors.text};
  margin-bottom: 8px;
`;

const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  padding: 12px;
  border-radius: 6px;
  align-items: center;
`;

export default function Ex08() {
  return (
    <ThemeProvider theme={theme}>
      <Card $spacing={24}>
        <Typography h1>Design System</Typography>
        <Typography>Criado com Styled Components</Typography>
        <Button><Typography style={{color: 'white'}}>Confirmar</Typography></Button>
      </Card>
    </ThemeProvider>
  );
}
