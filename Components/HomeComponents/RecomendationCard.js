import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {scale} from '../../utilies/scale';
import {colors} from '../../utilies/colors';
import {icons} from '../../assets/icons';

const RecomendationCard = ({title, price}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Lamb Seekh Kabab Roll'}</Text>
      <Text style={styles.price}>{'$12.95'}</Text>
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
      <Image source={icons.zeward} style={styles.zeward} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginRight: scale(20),
    borderTopWidth: scale(10),
    borderTopColor: 'rgba(194, 70, 108, 0.7)',
    padding: scale(25),
    borderRadius: scale(12),
    width: scale(283),
  },
  title: {
    fontSize: scale(18),
    fontWeight: '500',
    lineHeight: scale(27),
    color: colors.black,
    marginBottom: scale(10),
  },
  price: {
    color: '#818181',
    fontSize: scale(18),
    fontWeight: '500',
    lineHeight: scale(27),
    marginBottom: scale(20),
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(10),
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: colors.white,
    borderColor: colors.borderGray,
    borderWidth: 1,
    width: scale(40),
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(5),
  },
  plus: {
    width: scale(16),
    height: scale(16),
  },
  minus: {
    width: scale(16),
    height: scale(2),
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
    fontSize: scale(32),
    fontWeight: '600',
    alignSelf: 'center',
    color: colors.black,
  },
  promo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.purple,
    marginTop: scale(21),
  },
});

export default RecomendationCard;
