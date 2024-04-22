import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {scale} from '../../../utilies/scale';
import {colors} from '../../../utilies/colors';
import {icons} from '../../../assets/icons';
import OrderItem from './OrderItem';
const orderItems = [1, 2, 3, 4, 5];
const PaymentLeftView = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 1}}>
        <View style={styles.orderDetailView}>
          <Text style={styles.orderTxt}>{'Order Details'}</Text>
          <TouchableOpacity>
            <Image
              style={styles.edit}
              source={icons.edit}
              resizeMode="center"
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={orderItems}
            renderItem={({item}) => <OrderItem item={item} />}
          />
        </View>
        <Text style={styles.orderTxt}>{'Bill details'}</Text>
        <View style={styles.billDetailView}>
          <View style={styles.taxView}>
            <Text style={styles.totalTxt}>{'Tax'}</Text>
            <Text style={styles.amountTxt}>{'$ 4.00'}</Text>
          </View>
          <View style={styles.taxView}>
            <Text style={styles.totalTxt}>{'Discount'}</Text>
            <Text style={styles.amountTxt}>{'- $ 0.00'}</Text>
          </View>
          <View style={styles.taxView}>
            <Text style={styles.totalTxt}>{'Subtotal'}</Text>
            <Text style={styles.amountTxt}>{'$ 48.00'}</Text>
          </View>
          <View style={[styles.taxView, {marginBottom: 0}]}>
            <Text style={styles.totalTxt}>{'Total'}</Text>
            <Text style={styles.amountTxt}>{'$ 52.00'}</Text>
          </View>
        </View>
        <View style={{backgroundColor: 'red', width: 10}}></View>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export default PaymentLeftView;

const styles = StyleSheet.create({
  mainContainer: {
    width: '34%',
    backgroundColor: colors.black03,
    paddingHorizontal: scale(34),
    flexDirection: 'row',
  },
  orderDetailView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scale(17),
  },
  orderTxt: {
    color: colors.black,
    fontSize: scale(42),
    lineHeight: scale(63),
    fontWeight: '500',
  },
  edit: {
    width: scale(26),
    height: scale(26),
  },
  billDetailView: {
    backgroundColor: colors.purple,
    paddingHorizontal: scale(49),
    paddingVertical: scale(35),
    borderRadius: scale(10),
    marginBottom: scale(49),
  },
  taxView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scale(10),
  },
  totalTxt: {
    color: colors.white,
    fontSize: scale(27),
    fontWeight: '700',
    lineHeight: scale(40),
  },
  amountTxt: {
    color: colors.white,
    fontSize: scale(18),
    fontWeight: '400',
    lineHeight: scale(27),
  },
  divider: {
    backgroundColor: colors.purple,
    width: scale(10),
    marginLeft: scale(40),
    height: '60%',
    marginTop: '12%',
    borderRadius: scale(10),
  },
});
