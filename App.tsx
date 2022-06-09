
import React from 'react';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { ThemeProvider } from 'styled-components';
import { Register } from './src/screens/Register/';
import theme from './src/global/styles/theme';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/Routes/app.routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })
  if (!fontsLoaded) {
    return <View />
  }


  return (
    <ThemeProvider theme={theme} >
      <NavigationContainer >
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>

  )
}