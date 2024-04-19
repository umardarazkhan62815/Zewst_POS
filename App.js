import React from 'react';
import Navigation from './Navigation';
import {LogBox} from 'react-native';
const App = () => {
  LogBox.ignoreAllLogs(true);
  return <Navigation />;
};

export default App;
