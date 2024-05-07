import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utilities/colors';
import {scale} from '../../../utilities/scale';

const SeatCard = ({item, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => onPress(item?.text)}>
      <Text style={styles.itemTxt}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default SeatCard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.purpleLight,
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: scale(6),
    width: scale(243),
    height: scale(112),
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTxt: {
    color: colors.purple,
  },
});
