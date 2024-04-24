import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TranscationLeftView from './Components/TranscationLeftView';
import TranscationRightView from './Components/TranscationRightView';

const Transcation = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <TranscationLeftView /> */}
      <TranscationRightView />
    </View>
  );
};

export default Transcation;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
