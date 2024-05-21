import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utilities/colors';
import {scale} from '../../../utilities/scale';
import PaymentItem from './PaymentItem';

const data = [
  {id: 1, title: 'Cash'},
  {id: 2, title: 'Manual credit card entry'},
  {id: 3, title: 'Customer card on file'},
  {id: 4, title: 'Invoice'},
  {id: 5, title: 'Email receipt to customer'},
  {id: 6, title: 'Manual gift card entry'},
  {id: 7, title: 'Split the bill option'},
];
const PaymentsTypes = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>{'Payment types'}</Text>
      <View style={styles.flatList}>
        <FlatList
          data={data}
          renderItem={({item}) => <PaymentItem item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <Text
        style={
          styles.detail
        }>{`${'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'}`}</Text>
    </View>
  );
};

export default PaymentsTypes;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: scale(100),
  },
  header: {
    color: colors.black,
    fontWeight: '600',
    fontSize: scale(22),
    lineHeight: scale(27),
    marginTop: scale(70),
    marginBottom: scale(28),
  },
  detail: {
    color: '#000000B2',
    fontWeight: '400',
    fontSize: scale(16),
    lineHeight: scale(19),
    marginTop: scale(23),
  },
  flatList: {
    paddingBottom: scale(30),
  },
});
