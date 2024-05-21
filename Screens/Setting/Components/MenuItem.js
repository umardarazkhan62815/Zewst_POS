import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {icons} from '../../../assets/icons';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';

const MenuItem = ({item, onPress, selectedType}) => {
  return (
    <TouchableOpacity
      style={selectedType === item?.type ? styles.item : styles.item1}
      onPress={() => onPress(item)}>
      <Image source={item.icon} style={styles.payment} resizeMode="center" />
      <Text style={styles.text}>{item?.type}</Text>
      <View style={{flex: 1}} />
      <Text style={styles.activeTxt}>{item?.status}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(32),
    height: scale(90),
    marginBottom: scale(10),
    backgroundColor: '#E2E2E2',
  },
  item1: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(32),
    height: scale(90),
    marginBottom: scale(10),
  },
  payment: {
    width: scale(26),
    height: scale(26),
    marginRight: scale(20),
  },
  icon: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: colors.black,
    fontSize: scale(20),
    lineHeight: scale(24),
    fontWeight: '600',
  },
  activeTxt: {
    color: colors.black,
    fontSize: scale(20),
    lineHeight: scale(24),
    fontWeight: '500',
  },
});
