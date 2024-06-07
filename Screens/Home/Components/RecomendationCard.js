import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import {icons} from '../../../assets/icons';
import {useDispatch, useSelector} from 'react-redux';
import {
  addOrder,
  removeOrder,
} from '../../../src/Redux/Slices/CreateOrderSlice';

const RecomendationCard = ({item, setOrder}) => {
  const dispatch = useDispatch();
  const order = useSelector(state => state.createOrder);
  // console.log('Order', item);
  const [quantity, setQuantity] = useState(0);
  const handlePress = () => {
    setOrder(item);
  };
  useEffect(() => {
    if (order && order.orders) {
      let totalQuantity = 0;

      order.orders.forEach(orderC => {
        if (orderC.order._id === item._id) {
          totalQuantity += orderC.quantity;
        }
      });

      setQuantity(totalQuantity);
    }
  }, [order]);

  return (
    <TouchableOpacity onPress={() => handlePress()} style={styles.container}>
      {item?.discount ? (
        <Text style={styles.discount}>{'40% Discount Available'}</Text>
      ) : null}
      <Text style={styles.title}>{item?.item}</Text>
      <Text style={styles.price}>{`$${item?.price}`}</Text>

      <View style={styles.itemLeftView}>
        <Image
          style={styles.stockIcon}
          source={icons.cap}
          resizeMode="center"
        />
        <Text style={styles.leftTxt}>{'251 Items left'}</Text>
      </View>
      <View style={styles.quantityContainer}>
        {quantity > 0 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const data = {order: item, modifier: null};
              dispatch(removeOrder(data));
              handlePress();
            }}>
            <Image
              style={styles.plus}
              source={icons.minus}
              resizeMode="center"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button1} />
        )}
        <Text style={styles.quantity}>
          {`${quantity < 10 ? '0' : ''}${quantity}`}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (item?.groups?.length > 1) {
              // setQuantity(quantity + 1);
              // dispatch(addOrder(item));
              handlePress();
            } else {
              // setQuantity(quantity + 1);
              const data = {order: item, modifier: null};
              dispatch(addOrder(data));
              handlePress();
            }
          }}>
          <Image style={styles.plus} source={icons.plus} resizeMode="center" />
        </TouchableOpacity>
      </View>
      {/* <Image source={icons.zeward} style={styles.zeward} /> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginRight: scale(20),
    borderTopWidth: scale(10),
    borderTopColor: 'rgba(194, 70, 108, 0.7)',
    paddingHorizontal: scale(16),
    borderRadius: scale(10),
    width: scale(300),
    paddingVertical: scale(15),
  },
  discount: {
    fontSize: scale(10),
    fontWeight: '500',
    lineHeight: scale(12),
    color: colors.purple,
  },
  title: {
    fontSize: scale(18),
    fontWeight: '500',
    lineHeight: scale(27),
    color: colors.black,
  },

  price: {
    color: '#818181',
    fontSize: scale(16),
    fontWeight: '500',
    lineHeight: scale(24),
    marginBottom: scale(6),
  },
  itemLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(12),
  },
  stockIcon: {
    width: scale(10),
    height: scale(10),
    tintColor: colors.black,
    marginRight: scale(6),
  },
  leftTxt: {
    color: colors.black,
    fontSize: scale(10),
    fontWeight: '500',
    lineHeight: scale(12),
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: scale(10),
    // justifyContent: 'space-between',
  },
  button: {
    backgroundColor: colors.white,
    borderColor: colors.borderGray,
    borderWidth: 1,
    width: scale(32),
    height: scale(32),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(4),
  },
  button1: {
    backgroundColor: colors.white,
    borderColor: colors.borderGray,
    width: scale(32),
    height: scale(32),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(4),
  },
  plus: {
    width: scale(9),
    height: scale(9),
  },
  minus: {
    width: scale(9),
    height: scale(1),
    tintColor: colors.black,
  },
  zeward: {
    width: scale(80),
    height: scale(12),
    marginTop: scale(21),
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  quantity: {
    fontSize: scale(16),
    fontWeight: '500',
    alignSelf: 'center',
    color: colors.black,
    marginHorizontal: scale(18),
    lineHeight: scale(32),
  },
  promo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.purple,
    marginTop: scale(21),
  },
});

export default RecomendationCard;
