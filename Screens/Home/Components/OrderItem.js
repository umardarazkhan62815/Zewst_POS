import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
const OrderItem = ({item}) => {
  let price = 0;

  if (item?.modifier?.additionalPrice > 0) {
    price =
      (item?.modifier?.additionalPrice + item?.order?.price) * item?.quantity;
  } else {
    price = item?.order?.price * item?.quantity;
  }
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => setShow(!show)}>
        <Text style={styles.count}>{`${item?.quantity < 10 ? '0' : ''}${
          item?.quantity
        }`}</Text>
        <Text style={styles.title}>{item?.order?.item}</Text>
        <View style={styles.p2View}>
          <Text style={styles.p2}>{'P2'}</Text>
        </View>
        <View style={{flex: 1}} />

        <Text style={styles.price}>{`$${price}`}</Text>
      </TouchableOpacity>
      {show && (
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>{item?.modifier?.modifier}</Text>
            <Text style={[styles.detailText, {color: colors.black}]}>
              {/* {'Remove'} */}
            </Text>
            <Text style={styles.detailText}>
              ${item?.modifier?.additionalPrice}
            </Text>
          </View>
          {/* <Text
            style={[
              styles.detailText,
              {color: colors.black, paddingTop: scale(19)},
            ]}>
            {'Note'}
          </Text>
          <Text style={styles.noteTxt}>
            {'Please make the Nihari less oily'}
          </Text> */}
        </View>
      )}
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginBottom: scale(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    fontSize: scale(18),
    lineHeight: scale(27),
    color: colors.black,
    fontWeight: '600',
    marginRight: scale(25),
  },
  title: {
    fontSize: scale(18),
    lineHeight: scale(27),
    color: colors.black,
    fontWeight: '600',
  },
  p2View: {
    width: scale(30),
    height: scale(30),
    marginLeft: scale(10),
    backgroundColor: colors.borderGray,
    borderRadius: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  p2: {
    fontSize: scale(16),
    lineHeight: scale(24),
    color: colors.white,
    fontWeight: '500',
  },
  price: {
    fontSize: scale(18),
    lineHeight: scale(27),
    color: colors.black,
    fontWeight: '600',
  },
  detailsContainer: {
    paddingRight: scale(20),
    marginTop: scale(13),
    paddingLeft: scale(20),
    borderLeftWidth: 1,
    borderLeftColor: colors.borderGray,
    marginBottom: scale(19),
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    fontSize: scale(16),
    fontWeight: '600',
    lineHeight: scale(24),
    color: '#828384',
  },
  noteTxt: {
    fontSize: scale(16),
    fontWeight: '600',
    lineHeight: scale(24),
    color: '#828384',
  },

  detailPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  note: {
    marginTop: scale(10),
    fontSize: scale(16),
  },
});
