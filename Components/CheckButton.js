import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from '../utilities/scale';
import {colors} from '../utilities/colors';

const CheckButton = ({checked, onPress}) => {
  return (
    <TouchableOpacity
      style={checked ? styles.mainContainer : styles.mainContainer1}
      onPress={onPress}></TouchableOpacity>
  );
};

export default CheckButton;

const styles = StyleSheet.create({
  mainContainer: {
    height: scale(24),
    width: scale(24),
    borderWidth: scale(3),
    borderRadius: scale(4),
    borderColor: colors.purple,
    backgroundColor: colors.purple39,
  },
  mainContainer1: {
    height: scale(24),
    width: scale(24),
    borderWidth: 1,
    borderRadius: scale(4),
    borderColor: colors.purple,
  },
});
