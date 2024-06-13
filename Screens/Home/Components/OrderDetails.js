import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';

import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import {icons} from '../../../assets/icons';
import OrderItem from './OrderItem';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import CustomButton from '../../../Components/CustomButton';
import DiscountModal from '../Modals/DiscountModal';
import {images} from '../../../assets/images';
import CallModal from '../Modals/CallModal';
import AddressModal from '../Modals/AddressModal';
import {useDispatch, useSelector} from 'react-redux';
import {createOrder} from '../../../src/APICalling/APIs';
import Toast from 'react-native-toast-message';
import {resetOrder} from '../../../src/Redux/Slices/CreateOrderSlice';
import UserSelectionModal from '../Modals/UserSelectionModal';

const OrderDetails = ({navigation, addCustomerPress}) => {
  const dispatch = useDispatch();
  const orderList = useSelector(state => state.createOrder);
  const menu = useSelector(state => state.menu);
  // console.log(
  //   'menu>>>',
  //   JSON.stringify(menu?.data?.posMenuItems?.brand?.branch?.tax),
  // );
  const [isUser, setIsUser] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isAttend, setIsAttend] = useState(false);
  const [isCall, setIsCall] = useState(false);
  const [isAddress, setIsAddress] = useState(false);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [zewstCharges, setZewstCharges] = useState(0);

  const [data, setData] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const transformOrders = orders => {
    return orders.map(orderC => {
      const {order, modifier, quantity} = orderC;
      return {
        id: order._id,
        itemId: order._id,
        item: order.item,
        quantity: quantity,
        price: order.price,
        total:
          (order.price + (modifier ? modifier.additionalPrice : 0)) * quantity,
        modifiers: [
          {
            modifierId: modifier ? modifier._id : null,
            quantity: 1,
            unitPrice: modifier ? modifier.additionalPrice : 0,
            total: modifier ? modifier.additionalPrice : 0,
          },
        ],
        unitPrice: order.price,
      };
    });
  };

  const onCheckOutPress = async () => {
    if (data.length > 0) {
      setIsLoading(true);
      const transformedOrders = await transformOrders(data);

      const obj = {
        subTotal: subTotal,
        discount: discount,
        tax: tax,
        total: total,
        brand: menu?.data?.posMenuItems?.brand?._id,
        branch: menu?.data?.posMenuItems?.brand?.branch?._id,
        items: transformedOrders,
        customer: orderList?.user ? orderList.user._id : '',
        orderVia: 'ZEWST_APP',
        type: 'TAKE_AWAY',
        orderRoute: 'BRANCH',
        tax_charges: 0.0,
        zewst_charges: zewstCharges,
        isGuestCheckout: orderList?.user ? orderList.user.guest : true,
      };
      try {
        const result = await createOrder(obj);
        console.log('results', result);
        if (result?.message === undefined) {
          setIsLoading(false);
          Toast.show({
            type: 'success',
            text1: 'Zewst',
            text2: 'Order created successfully',
          });
          setData([]);
          dispatch(resetOrder([]));
          navigation.navigate('Payment');
        }
      } catch (error) {
        setIsLoading(false);
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Zewst',
        text2: 'Please add at Least on Item.',
      });
    }
  };

  useEffect(() => {
    if (orderList && orderList?.orders.length > 0) {
      setData(orderList?.orders);
      let totalPrice = 0;

      orderList.orders.forEach(orderC => {
        const itemPrice = orderC.order.price;
        const additionalPrice = orderC.modifier
          ? orderC.modifier.additionalPrice
          : 0;
        const quantity = orderC.quantity;
        const itemTotal = (itemPrice + additionalPrice) * quantity;

        totalPrice += itemTotal;
      });
      const taxAmount =
        (totalPrice / 100) * menu?.data?.posMenuItems?.brand?.branch?.tax;
      const zCharge = (totalPrice / 100) * 3 + taxAmount;
      setZewstCharges(zCharge);
      setTax(taxAmount);
      setTotal(totalPrice + taxAmount + zCharge);
      setSubTotal(totalPrice);
    } else {
      setData([]);
    }
  }, [orderList]);

  return (
    <View style={styles.mainContainer}>
      <UserSelectionModal
        visible={isUser}
        setVisible={() => {
          setIsUser(false);
        }}
        onAddPress={() => addCustomerPress()}
      />
      <Text style={styles.orderId}>{'Order#215'}</Text>
      <Text style={styles.orderId}>
        {orderList?.user?.fullName.split(' ')[0]}
      </Text>

      <CallModal
        visible={isCall}
        setVisible={val => {
          if (val === 'yes') {
            setIsCall(false);
            setIsAttend(true);
          } else {
            setIsCall(false);
          }
        }}
      />
      <AddressModal
        visible={isAddress}
        setVisible={() => {
          setIsAddress(false);
        }}
      />
      {isAttend ? (
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.profileSection}>
              <Image style={styles.profileImage} source={images.profile} />
              <View>
                <Text style={styles.profileName}>Unknown</Text>
                <Text style={styles.timerText}>00:01</Text>
              </View>
            </View>

            <View style={styles.buttonSection}>
              <TouchableOpacity style={styles.iconButton}>
                <Image source={icons.loudSpeaker} style={styles.iconstyle} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Image
                  source={icons.playPause}
                  style={[styles.iconstyle, {marginHorizontal: scale(15)}]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.endCallButton}
                onPress={() => setIsAttend(false)}>
                <Image source={icons.CutCall} style={styles.iconstyle} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.addCustomerView}
          onPress={() => setIsUser(true)}>
          <Image
            source={icons.addProfile}
            style={styles.profile}
            resizeMode="center"
          />
          <Text style={styles.orderId}>{'Add a customer'}</Text>
        </TouchableOpacity>
      )}
      <FlatList
        data={data}
        renderItem={({item}) => <OrderItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.scrollView}
      />
      <View style={styles.footer}>
        <View style={styles.row}>
          <Text
            style={
              styles.detailText
            }>{`Tax ${menu?.data?.posMenuItems?.brand?.branch?.tax}%`}</Text>
          <Text style={styles.detailText}>{tax.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.detailText}>{`Zewst Charges`}</Text>
          <Text style={styles.detailText}>{zewstCharges.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.detailText}>Discount</Text>
          <Text style={styles.detailText}>{`$${discount}`}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.detailText}>{'subTotal'}</Text>
          <Text style={styles.detailText}>{`$${subTotal}`}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.totalText}>{'Total'}</Text>
          <Text style={styles.totalText}>{`$${total}`}</Text>
        </View>
        <FlexDirectionView Row>
          {isAttend ? (
            <>
              <CustomButton
                title={'Send'}
                style={styles.sendButton}
                titleStyle={styles.sendButtonText}
                icon={icons.email}
                iconStyle={styles.send}
                onPress={() => setIsAddress(true)}
              />
              <CustomButton
                title={'Hold'}
                style={styles.holdButton}
                titleStyle={styles.holdButtonText}
                icon={icons.pause}
                iconStyle={styles.hold}
              />
            </>
          ) : null}
          <CustomButton
            title={'Checkout'}
            style={styles.checkoutButton}
            titleStyle={styles.checkoutButtonText}
            onPress={() => onCheckOutPress()}
            icon={icons.check}
            iconStyle={styles.tick}
            loading={isLoading}
            color={colors.purple}
          />
          {isAttend ? null : (
            <CustomButton
              title={'Discount'}
              style={styles.discountButton}
              titleStyle={styles.discountButtonText}
              onPress={() => setVisible(true)}
              icon={icons.plus}
              iconStyle={styles.discount}
            />
          )}
        </FlexDirectionView>
      </View>
      <DiscountModal
        visible={visible}
        setVisible={(val, isamount) => {
          // console.log('val', val, isamount);
          setDiscount(val);
          setVisible(false);
          setTotal(total - discount);
        }}
      />
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
    justifyContent: 'center',
    paddingVertical: scale(15),
    flex: 1,
  },
  holdButton: {
    backgroundColor: colors.purpleLight,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(15),
    flex: 1,
  },
  sendButton: {
    backgroundColor: colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(15),
    flex: 1,
  },
  discountButton: {
    backgroundColor: '#C7600B12',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(15),
    flex: 1,
  },
  tick: {
    width: scale(20),
    height: scale(22),
    marginRight: scale(10),
  },
  hold: {
    width: scale(20),
    height: scale(22),
    marginRight: scale(10),
    tintColor: 'red',
  },
  send: {
    width: scale(20),
    height: scale(22),
    marginRight: scale(10),
    tintColor: colors.white,
  },
  checkoutButtonText: {
    fontSize: scale(21),
    fontWeight: '600',
    color: '#1B67F9',
    lineHeight: scale(30),
  },
  holdButtonText: {
    fontSize: scale(21),
    fontWeight: '600',
    color: 'red',
    lineHeight: scale(30),
  },
  sendButtonText: {
    fontSize: scale(21),
    fontWeight: '600',
    color: colors.white,
    lineHeight: scale(30),
  },
  discountButtonText: {
    fontSize: scale(21),
    fontWeight: '600',
    color: '#C7600B',
    lineHeight: scale(30),
  },
  totalText: {
    fontSize: scale(16),
    fontWeight: '600',
    lineHeight: scale(24),
    color: colors.black,
  },
  discount: {
    width: scale(20),
    height: scale(22),
    marginRight: scale(10),
    tintColor: '#C7600B',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    flexDirection: 'row',
    backgroundColor: '#EFE6FA',
    paddingVertical: scale(12),
    paddingHorizontal: scale(16),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 20,
  },
  profileImage: {
    width: scale(58),
    height: scale(58),
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: scale(24),
    lineHeight: scale(36),
    fontWeight: '400',
  },
  timerText: {
    fontSize: scale(20),
    lineHeight: scale(24),
    fontWeight: '500',
    color: colors.black4,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: scale(70),
  },
  iconstyle: {
    height: scale(40),
    width: scale(40),
    resizeMode: 'contain',
  },
  endCallButton: {
    // backgroundColor: 'red',
    // borderRadius: 20,
    // padding: 10,
    // elevation: 2,
  },
});

export default OrderDetails;
