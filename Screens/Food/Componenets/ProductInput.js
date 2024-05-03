import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../../../utilies/scale';
import {colors} from '../../../utilies/colors';

const ProductInput = ({title, value}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleTxt}>{title}</Text>
      <Text style={styles.valueTxt}>{value}</Text>
    </View>
  );
};

export default ProductInput;

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: scale(1),
    borderColor: '#ECECF2',
    borderRadius: scale(8),
    paddingHorizontal: scale(10),
    paddingVertical: scale(5),
    marginTop: scale(12),
  },
  titleTxt: {
    fontWeight: '400',
    fontSize: scale(18),
    lineHeight: scale(27),
    color: '#666666',
  },
  valueTxt: {
    fontWeight: '400',
    fontSize: scale(18),
    lineHeight: scale(27),
    color: colors.black,
    marginTop: scale(10),
  },
});
