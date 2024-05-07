import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../../../utilities/scale';
import {Image} from 'react-native';
import {images} from '../../../assets/images';
import {colors} from '../../../utilities/colors';

const ProductCard = ({item, type}) => {
  return (
    <View style={styles.mainContainer}>
      {!type ? (
        <>
          <View style={styles.iconView}>
            <Image
              source={images.product}
              style={styles.icon}
              resizeMode="center"
            />
          </View>
          <Text style={styles.titleTxt}>{'Special pizza'}</Text>
          <Text style={styles.unitTxt}>{'Unit Price'}</Text>
          <Text
            style={[styles.titleTxt, {width: 'auto', marginLeft: scale(10)}]}>
            {'$10.0035'}
          </Text>
          <Text style={styles.unitTxt}>{'Stock'}</Text>
          <Text
            style={[styles.titleTxt, {width: 'auto', marginLeft: scale(10)}]}>
            {'5'}
          </Text>
        </>
      ) : (
        <Text style={styles.wasteTxt}>{'Jack’s Creek Black Angus'}</Text>
      )}
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: scale(30),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: colors.borderGray,
    paddingBottom: scale(28),
  },
  iconView: {
    width: scale(95),
    height: scale(95),
    backgroundColor: '#FFF4E6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(6),
    marginRight: scale(22),
  },
  icon: {
    width: scale(78),
    height: scale(81),
  },
  titleTxt: {
    fontWeight: '500',
    fontSize: scale(34),
    lineHeight: scale(51),
    color: '#21132B',
    width: scale(400),
  },
  wasteTxt: {
    fontWeight: '500',
    fontSize: scale(34),
    lineHeight: scale(51),
    color: '#21132B',
    width: scale(400),
    marginVertical: scale(30),
  },
  unitTxt: {
    fontWeight: '500',
    fontSize: scale(34),
    lineHeight: scale(51),
    color: '#8F9BAD',
    marginLeft: scale(200),
  },
});
