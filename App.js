import React from 'react';
import Navigation from './Navigation';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  LogBox.ignoreAllLogs(true);
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
