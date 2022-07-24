/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigation/index';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import store from './src/redux/store';
const App = () => {
  const [isSplash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);
  return (
    <React.Fragment>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator isLoading={isSplash} />
        </NavigationContainer>
      </Provider>
    </React.Fragment>
  );
};

export default App;
