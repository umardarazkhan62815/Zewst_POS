import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import {icons} from '../../../assets/icons';
import {
  addOrder,
  removeOrder,
} from '../../../src/Redux/Slices/CreateOrderSlice';
import {useDispatch, useSelector} from 'react-redux';

const ToppingCard = ({item, setTopping, product}) => {
  const dispatch = useDispatch();
  // console.log('Product', product?.groups);
  // console.log('Item', item);
  const [quantity, setQuantity] = useState(0);
  const order = useSelector(state => state.createOrder);

  const handlePress = () => {
    setTopping('');
  };

  useEffect(() => {
    if (order && order.orders) {
      let totalQuantity = 0;

      order.orders.forEach(orderC => {
        if (orderC?.modifier?._id === item._id) {
          totalQuantity += orderC.quantity;
        }
      });
      setQuantity(totalQuantity);
    }
  }, [order]);
  const handlePlusPress = () => {
    product?.groups.map(group => {
      if (group?.groupName === 'BASE') {
      } else {
        group?.modifiers.map(modifier => {
          if (modifier === item) {
            const data = {order: product, modifier: item};
            dispatch(addOrder(data));
          }
        });
      }
    });
  };
  const handleMinusPress = () => {
    product?.groups.map(group => {
      if (group?.groupName === 'BASE') {
      } else {
        group?.modifiers.map(modifier => {
          if (modifier === item) {
            const data = {order: product, modifier: item};
            dispatch(removeOrder(data));
          }
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemLeftView}>
        <Text style={styles.title}>{item?.modifier}</Text>
        <Text style={styles.price}>{`$${item?.additionalPrice}`}</Text>
      </View>
      <View style={styles.quantityContainer}>
        {quantity > 0 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleMinusPress()}>
            <Image
              style={styles.plus}
              source={icons.minus}
              resizeMode="center"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button1} />
        )}
        <Text style={styles.quantity}>{`${
          quantity < 10 ? '0' : ''
        }${quantity}`}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePlusPress()}>
          <Image style={styles.plus} source={icons.plus} resizeMode="center" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginRight: scale(20),
    paddingHorizontal: scale(16),
    borderRadius: scale(10),
    width: scale(308),
    paddingVertical: scale(15),
  },
  discount: {
    fontSize: scale(10),
    fontWeight: '500',
    lineHeight: scale(12),
    color: colors.purple,
  },
  title: {
    fontSize: scale(20),
    fontWeight: '500',
    lineHeight: scale(30),
    color: colors.black,
  },

  price: {
    color: '#818181',
    fontSize: scale(18),
    fontWeight: '500',
    lineHeight: scale(27),
  },
  itemLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(12),
    justifyContent: 'space-between',
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

export default ToppingCard;
