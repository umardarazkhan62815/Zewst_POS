import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {scale} from '../utilities/scale';
import {colors} from '../utilities/colors';

const Switch = ({value, onValueChange}) => {
  return (
    <TouchableOpacity
      style={value ? styles.mainContainer1 : styles.mainContainer}
      onPress={() => onValueChange()}>
      <View style={value ? styles.thumb1 : styles.thumb}></View>
    </TouchableOpacity>
  );
};

export default Switch;

const styles = StyleSheet.create({
  mainContainer: {
    width: scale(80),
    height: scale(48),
    borderRadius: scale(200),
    backgroundColor: '#C4C4C4',
    padding: scale(5),
  },
  mainContainer1: {
    width: scale(80),
    height: scale(48),
    borderRadius: scale(200),
    backgroundColor: colors.purple,
    padding: scale(5),
  },
  thumb: {
    width: scale(38),
    height: scale(38),
    backgroundColor: colors.white,
    borderRadius: scale(20),
  },
  thumb1: {
    width: scale(38),
    height: scale(38),
    backgroundColor: colors.white,
    borderRadius: scale(20),
    alignSelf: 'flex-end',
  },
});
