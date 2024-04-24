import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {icons} from '../../../assets/icons';
import {scale} from '../../../utilies/scale';
import {colors} from '../../../utilies/colors';

const TranscationCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        source={icons.masterCard}
        style={styles.card}
        resizeMode="center"
      />
      <View>
        <Text style={styles.nameTxt}>{'Rizwan Nasir'}</Text>
        <Text style={styles.priceTxt}>{'$24.88'}</Text>
        <Text style={styles.tipTxt}>{'$22.88 + $2.00 Tip'}</Text>
      </View>
      <View style={{flex: 1}} />
      <View>
        <Text style={styles.idTxt}>{'ID: #12718235825'}</Text>
        <Text style={styles.dateTxt}>{'Saturday, December 23th, 2023'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: scale(26),
    paddingVertical: scale(16),
    alignItems: 'center',
    marginBottom: scale(10),
    width: scale(507),
  },
  card: {
    width: scale(22),
    height: scale(17),
    marginRight: scale(20),
  },
  nameTxt: {
    fontWeight: '600',
    fontSize: scale(20),
    lineHeight: scale(24),
    color: colors.black,
  },
  priceTxt: {
    fontWeight: '600',
    fontSize: scale(20),
    lineHeight: scale(24),
    color: colors.black,
  },
  tipTxt: {
    fontWeight: '500',
    fontSize: scale(12),
    lineHeight: scale(15),
    color: colors.black,
  },
  idTxt: {
    fontWeight: '500',
    fontSize: scale(12),
    lineHeight: scale(15),
    color: colors.black,
    textAlign: 'right',
  },
  dateTxt: {
    fontWeight: '600',
    fontSize: scale(14),
    lineHeight: scale(18),
    color: colors.black,
  },
});

export default TranscationCard;
