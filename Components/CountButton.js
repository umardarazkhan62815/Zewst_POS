import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from '../utilies/scale';
import {colors} from '../utilies/colors';
import {icons} from '../assets/icons';

const CountButton = ({value, onSelect, style, valueStyle, del}) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(value)}
      style={[styles.mainContainer, style]}>
      {del ? (
        <Image source={icons.delete} style={styles.del} resizeMode="center" />
      ) : (
        <Text style={[styles.label, valueStyle]}>{value}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CountButton;

const styles = StyleSheet.create({
  mainContainer: {
    width: scale(128),
    height: scale(130),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF7FD',
    marginBottom: scale(35),
    marginRight: scale(29),
  },
  label: {
    color: colors.black,
    fontWeight: '700',
    fontSize: scale(53),
  },
  del: {
    width: scale(34),
    height: scale(34),
  },
});
