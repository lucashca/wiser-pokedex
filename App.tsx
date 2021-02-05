

import { NavigationContainer } from '@react-navigation/native';
import React, { Component, constructor } from 'react';
import HomePage from './src/components/pages/HomePage';
import { MainStack } from './src/navigations/MainStack';



export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
