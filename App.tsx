

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MainStack } from './src/navigations/MainStack';
import { Provider } from 'react-redux';
import store from './src/redux/stores/store';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>

  );
}
