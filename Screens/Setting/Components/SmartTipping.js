import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utilities/colors';
import {scale} from '../../../utilities/scale';
import PaymentItem from './PaymentItem';

const SmartTipping = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>{'Smart Tipping'}</Text>
      <PaymentItem item={{title: 'Add tips to customers order'}} />
      <Text
        style={
          styles.detail
        }>{`${'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'}`}</Text>
    </View>
  );
};

export default SmartTipping;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    flex: 1,
  },
  header: {
    color: colors.black,
    fontWeight: '600',
    fontSize: scale(22),
    lineHeight: scale(27),
    marginTop: scale(70),
    marginBottom: scale(30),
  },
  detail: {
    color: '#000000B2',
    fontWeight: '400',
    fontSize: scale(16),
    lineHeight: scale(19),
    marginTop: scale(23),
  },
});
