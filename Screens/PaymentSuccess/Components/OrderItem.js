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

const OrderItem = ({item, style}) => {
  return (
    <View style={[styles.mainContainer, style]}>
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
      {item === 3 ? (
        <View style={styles.extraContainer}>
          <Text style={styles.addTxt}>{'Add-on'}</Text>

          <Text style={styles.extra}>{'+    Extra Onion'}</Text>
          <Text style={styles.extraPrice}>{'$1.00'}</Text>
        </View>
      ) : null}
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
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
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
    width: scale(100),
    height: scale(86),
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
    fontSize: scale(24),
    fontWeight: '500',
    lineHeight: scale(36),
    flex: 1,
  },
  price: {
    color: '#49586E',
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
  addTxt: {
    color: colors.black,
    fontSize: scale(18),
    fontWeight: '500',
    lineHeight: scale(27),
    marginRight: scale(20),
    marginLeft: scale(15),
  },
  extra: {
    color: '#818181',
    fontSize: scale(18),
    fontWeight: '400',
    lineHeight: scale(27),
    flex: 1,
  },
  extraPrice: {
    color: '#818181',
    fontSize: scale(18),
    fontWeight: '400',
    lineHeight: scale(27),
  },
  extraContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(10),
  },
});

export default OrderItem;
