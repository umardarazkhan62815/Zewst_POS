import React, {useEffect} from 'react';
import Navigation from './Navigation';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';
import Toast from 'react-native-toast-message';
const App = () => {
  LogBox.ignoreAllLogs(true);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        <Toast />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
