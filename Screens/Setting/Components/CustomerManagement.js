import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utilities/colors';
import {scale} from '../../../utilities/scale';
import PaymentItem from './PaymentItem';

const data = [
  {id: 1, title: 'Enable instant profiles'},
  {id: 2, title: 'Collect information before checkout'},
  {id: 3, title: 'Collect information after checkout'},
  {id: 4, title: 'Charge and save cards to customer profiles'},
];
const CustomerManagement = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>{'Payment types'}</Text>

      <View style={styles.flatList}>
        <FlatList
          data={data}
          renderItem={({item}) => <PaymentItem item={item} detail />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default CustomerManagement;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
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
    // flex: 1,
  },
});
