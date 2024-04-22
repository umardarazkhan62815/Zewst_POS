import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {scale} from '../../utilies/scale';
import {colors} from '../../utilies/colors';
import {icons} from '../../assets/icons';

const RecomendationCard = ({title, price}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.discount}>{'40% Discount Available'}</Text>

      <Text style={styles.title}>{'Lamb Seekh Kabab Roll'}</Text>
      <Text style={styles.price}>{'$12.95'}</Text>

      <View style={styles.itemLeftView}>
        <Image
          style={styles.stockIcon}
          source={icons.cap}
          resizeMode="center"
        />
        <Text style={styles.leftTxt}>{'251 Items left'}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.minus}
            source={icons.minus}
            resizeMode="center"
          />
        </TouchableOpacity>
        <Text style={styles.quantity}>01</Text>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.plus} source={icons.plus} resizeMode="center" />
        </TouchableOpacity>
      </View>
      {/* <Image source={icons.zeward} style={styles.zeward} /> */}
    </View>
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

export default RecomendationCard;
