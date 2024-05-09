import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';

const InfoCard = ({style, title, name}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <Text style={styles.keyTxt}>{title}</Text>
      <Text style={styles.nameTxt}>{name}</Text>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  mainContainer: {
    width: scale(458),
    height: scale(65),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderGray,
    marginTop: scale(25),
  },
  keyTxt: {
    fontSize: scale(17),
    lineHeight: scale(27),
    fontWeight: '300',
    color: '#A2A1A8',
  },
  nameTxt: {
    fontSize: scale(20),
    lineHeight: scale(24),
    fontWeight: '400',
    color: '#16151C',
    marginTop: scale(6),
  },
});
