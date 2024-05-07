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
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import {icons} from '../../../assets/icons';

const OrderItem = ({}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={images.profile} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{'Lamb Seekh Kabab Roll'}</Text>
          <Text style={styles.price}>{'$12.00'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
    borderRadius: scale(10),
    padding: scale(20),
    marginTop: scale(18),
    elevation: 2,
    borderColor: colors.borderGray,
    borderWidth: 1,
    height: scale(99),
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
    width: scale(71),
    height: scale(61),
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
    color: '#49586E',
    fontSize: scale(20),
    fontWeight: '400',
    lineHeight: scale(30),
    flex: 1,
  },
  price: {
    color: '#49586E',
    fontSize: scale(20),
    fontWeight: '400',
    lineHeight: scale(30),
  },
});

export default OrderItem;
