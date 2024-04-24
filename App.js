import React from 'react';
import Navigation from './Navigation';
import {LogBox} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Transcation from './Screens/Transaction/Transcation';
const App = () => {
  LogBox.ignoreAllLogs(true);
  return (
    <SafeAreaProvider>
      <Navigation />
      {/* <Transcation /> */}
    </SafeAreaProvider>
  );
};

export default App;
