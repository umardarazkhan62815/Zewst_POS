import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {images} from '../../../assets/images';
import {scale} from '../../../utilies/scale';
import {colors} from '../../../utilies/colors';
import {icons} from '../../../assets/icons';

const OrderItem = ({}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={images.profile} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.quantityView}>
            <Text style={styles.quantity}>{'1'}</Text>
          </View>
          <Text style={styles.name}>{'Lamb Seekh Kabab Roll'}</Text>
          <Text style={styles.price}>{'$12.00'}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Image
          style={styles.icon}
          source={icons.dropDown}
          resizeMode="center"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
    borderRadius: scale(10),
    padding: scale(20),
    marginBottom: scale(12),
    elevation: 2,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    marginRight: 12,
  },
  image: {
    width: scale(87),
    height: scale(87),
    borderRadius: scale(9),
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityView: {
    width: scale(45),
    height: scale(45),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black03,
    marginRight: scale(9),
  },
  quantity: {
    color: colors.black,
    fontSize: scale(30),
    fontWeight: '500',
    lineHeight: scale(45),
  },
  name: {
    color: colors.black,

    fontSize: scale(24),
    fontWeight: '500',
    lineHeight: scale(36),
    flex: 1,
  },
  price: {
    color: colors.black,

    fontSize: scale(24),
    fontWeight: '500',
    lineHeight: scale(36),
  },
  btn: {
    alignSelf: 'center',
  },
  icon: {
    width: scale(15),
    height: scale(10),
    tintColor: colors.black,
  },
});

export default OrderItem;
