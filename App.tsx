

import { NavigationContainer } from '@react-navigation/native';
import React, { Component, constructor } from 'react';
import HomePage from './src/components/pages/HomePage';
import { MainStack } from './src/navigations/MainStack';
import { Provider } from 'react-redux';
import store from './src/store/store';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>

  );
}
