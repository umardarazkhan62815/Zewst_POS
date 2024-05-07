import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import {icons} from '../../../assets/icons';
import OrderItem from './OrderItem';

const OrderDetails = ({navigation}) => {
  const data = [
    {
      id: '1',
      title: 'Goat Nihari',
      price: '$12.95',
      detail: 'Ginger',
      extraPrice: '$1.00',
      note: 'Please make the Nihari less oily',
    },
    {
      id: '1',
      title: 'Goat Nihari',
      price: '$12.95',
      detail: 'Ginger',
      extraPrice: '$1.00',
      note: 'Please make the Nihari less oily',
    },
    {
      id: '1',
      title: 'Goat Nihari',
      price: '$12.95',
      detail: 'Ginger',
      extraPrice: '$1.00',
      note: 'Please make the Nihari less oily',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.orderId}>{'Order#215'}</Text>
      <View style={styles.addCustomerView}>
        <Image
          source={icons.addProfile}
          style={styles.profile}
          resizeMode="center"
        />
        <Text style={styles.orderId}>{'Add a customer'}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <OrderItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.scrollView}
      />
      <View style={styles.footer}>
        <View style={styles.row}>
          <Text style={styles.detailText}>Tax 5.25%</Text>
          <Text style={styles.detailText}>$2.67</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.detailText}>{'subTotal'}</Text>
          <Text style={styles.detailText}>$48.67</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.totalText}>{'Total'}</Text>
          <Text style={styles.totalText}>$51.67</Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate('Payment')}>
          <Image source={icons.check} style={styles.tick} />
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  orderId: {
    fontSize: scale(25),
    color: colors.black,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: scale(10),
    lineHeight: scale(38),
  },
  addCustomerView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.purpleLight,
    justifyContent: 'center',
    paddingHorizontal: scale(85),
    paddingVertical: scale(25),
  },
  profile: {
    width: scale(30),
    height: scale(30),
    marginRight: scale(30),
  },
  scrollView: {
    padding: 20,
  },
  orderItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
  },

  extraPrice: {
    fontSize: 16,
  },

  footer: {
    borderTopColor: colors.borderGray,
    borderTopWidth: 1,
    paddingTop: scale(5),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scale(10),
    paddingHorizontal: scale(25),
  },
  tax: {
    color: colors.black,
    fontSize: scale(16),
  },
  detailText: {
    fontSize: scale(16),
    fontWeight: '600',
    lineHeight: scale(24),
    color: '#828384',
  },
  checkoutButton: {
    backgroundColor: '#F3F4FF',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: scale(15),
  },
  tick: {
    width: scale(20),
    height: scale(22),
    marginRight: scale(10),
  },
  checkoutButtonText: {
    fontSize: scale(21),
    fontWeight: '600',
    color: '#1B67F9',
    lineHeight: scale(30),
  },
  totalText: {
    fontSize: scale(16),
    fontWeight: '600',
    lineHeight: scale(24),
    color: colors.black,
  },
});

export default OrderDetails;
