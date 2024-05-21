import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utilities/colors';
import {scale} from '../../../utilities/scale';
import PaymentItem from './PaymentItem';

const Alerts = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>{'Configure profiles - Visible fields'}</Text>
      <PaymentItem item={{title: 'Allow alerts'}} />
      <Text style={styles.header1}>{'Frequency'}</Text>
      <PaymentItem item={{title: 'Immediately'}} />
      <PaymentItem item={{title: 'Every 5 minutes'}} />
      <PaymentItem item={{title: 'Every 15 minutes'}} />
      <PaymentItem item={{title: 'Every 30 minutes'}} />
    </View>
  );
};

export default Alerts;

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
  header1: {
    color: colors.black,
    fontWeight: '600',
    fontSize: scale(22),
    lineHeight: scale(27),
    marginTop: scale(23),
    marginBottom: scale(26),
  },
});
