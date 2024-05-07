import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from '../utilities/scale';
import {colors} from '../utilities/colors';
import {Image} from '@rneui/base/dist/Image/Image';
import {icons} from '../assets/icons';

const CheckTickButton = ({checked, onPress}) => {
  return (
    <TouchableOpacity
      style={checked ? styles.mainContainer : styles.mainContainer1}
      onPress={onPress}>
      <Image source={icons.tick} style={styles.tick} resizeMode="center" />
    </TouchableOpacity>
  );
};

export default CheckTickButton;

const styles = StyleSheet.create({
  mainContainer: {
    height: scale(24),
    width: scale(24),
    borderRadius: scale(4),
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer1: {
    height: scale(24),
    width: scale(24),
    borderWidth: 1,
    borderRadius: scale(4),
    borderColor: colors.borderGray,
  },
  tick: {
    tintColor: colors.white,
    width: scale(10),
    height: scale(10),
  },
});
