import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import {icons} from '../../../assets/icons';

const DownloadCard = ({item, style}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <Text style={styles.nameTxt}>{item?.key}</Text>
      <View style={{flex: 1}} />
      <Image style={styles.eyeIcon} source={icons.eye} resizeMode="center" />
      <Image
        style={styles.downIcon}
        source={icons.download}
        resizeMode="center"
      />
    </View>
  );
};

export default DownloadCard;

const styles = StyleSheet.create({
  mainContainer: {
    width: scale(460),
    height: scale(69),
    borderRadius: scale(11),
    borderColor: colors.borderGray,
    borderWidth: 0.5,
    marginTop: scale(25),
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameTxt: {
    fontWeight: '400',
    fontSize: scale(20),
    lineHeight: scale(24),
    color: '#16151C',
  },
  eyeIcon: {
    width: scale(25),
    height: scale(17),
    tintColor: colors.black,
  },
  downIcon: {
    width: scale(22),
    height: scale(26),
    tintColor: colors.black,
    marginLeft: scale(24),
  },
});
