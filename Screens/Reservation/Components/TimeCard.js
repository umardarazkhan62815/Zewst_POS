import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utilies/colors';
import {scale} from '../../../utilies/scale';
import {icons} from '../../../assets/icons';

const TimeCard = ({item, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => onPress(item?.text)}>
      <Image source={icons.time} style={styles.icon} resizeMode="center" />
      <Text style={styles.itemTxt}>{item?.text}</Text>
    </TouchableOpacity>
  );
};

export default TimeCard;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: colors.purpleLight,
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: scale(20),
    width: scale(300),
    height: scale(85),
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTxt: {
    color: colors.purple,
    fontSize: scale(30),
    lineHeight: scale(45),
    fontWeight: '500',
  },
  icon: {
    width: scale(45),
    height: scale(45),
    tintColor: colors.purple,
    marginRight: scale(20),
  },
});
