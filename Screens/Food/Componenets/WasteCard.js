import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import {images} from '../../../assets/images';
import {scale} from '../../../utilies/scale';
import {colors} from '../../../utilies/colors';
import ProductInput from './ProductInput';
import CustomButton from '../../../Components/CustomButton';

const WasteCard = ({onPress}) => {
  return (
    <View style={styles.container}>
      <FlexDirectionView Row style={styles.mainContainer}>
        <View style={styles.leftView}>
          <FlexDirectionView Row>
            <Image
              source={images.product}
              style={styles.product}
              resizeMode="center"
            />
            <Text style={styles.nameTxt}>
              {'Galbani - Whole Milk Mozzarella Cheese'}
            </Text>
            <Text style={styles.unitTxt}>{'Unit Price'}</Text>
            <Text style={styles.nameTxt}>{'$85.0035'}</Text>
          </FlexDirectionView>
          <FlexDirectionView Row style={styles.dateView}>
            <View style={styles.boxView}>
              <Text style={styles.dateTxt}>{'date created'}</Text>
              <Text style={styles.nameTxt}>{'05th Feb, 2024'}</Text>
            </View>
            <View style={styles.boxView}>
              <Text style={styles.dateTxt}>{'Category'}</Text>
              <Text style={styles.nameTxt}>{'All category'}</Text>
            </View>
            <View>
              <Text style={styles.dateTxt}>{'Unit'}</Text>
              <Text style={styles.nameTxt}>{'Grams'}</Text>
            </View>
          </FlexDirectionView>
          <Text style={styles.dateTxt}>{'Day start count'}</Text>
          <FlexDirectionView Row style={{marginTop: scale(10)}}>
            <View style={styles.dot} />
            <Text style={styles.nameTxt}>{'300'}</Text>
          </FlexDirectionView>
          <ProductInput title={'Spillage'} value={'100'} />
          <ProductInput title={'Expired'} value={'100'} />
          <ProductInput title={'Supply Chain Losses'} value={'100'} />
          <ProductInput title={'Lack of Preservation'} value={'100'} />
          <ProductInput title={'Others'} value={'100'} />
        </View>
        <View style={styles.rightView}>
          <Image
            source={images.qrCode}
            style={styles.qrIcon}
            resizeMode="center"
          />
          <Image
            source={images.barcode}
            style={styles.barcode}
            resizeMode="center"
          />
        </View>
      </FlexDirectionView>
      <CustomButton
        title={'Update food waste'}
        style={styles.btn}
        titleStyle={styles.btnTxt}
        onPress={onPress}
      />
    </View>
  );
};

export default WasteCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: scale(40),
    paddingLeft: scale(47),
    paddingRight: scale(75),
    marginBottom: scale(50),
    borderRadius: scale(12),
  },
  mainContainer: {
    alignItems: 'flex-start',
  },
  leftView: {
    flex: 1,
    height: '100%',
  },
  rightView: {
    flex: 1,
    height: '100%',
    alignItems: 'flex-end',
  },

  qrIcon: {
    width: scale(112),
    height: scale(117),
    marginBottom: scale(44),
  },
  barcode: {
    width: scale(112),
    height: scale(57),
  },
  product: {
    width: scale(43),
    height: scale(44),
    marginRight: scale(10),
  },
  nameTxt: {
    fontWeight: '600',
    fontSize: scale(18),
    lineHeight: scale(27),
    color: '#21132B',
  },
  unitTxt: {
    fontWeight: '500',
    fontSize: scale(16),
    lineHeight: scale(24),
    color: '#8F9BAD',
    marginLeft: scale(100),
    marginRight: scale(20),
  },
  dateView: {
    marginTop: scale(15),
    marginBottom: scale(40),
  },
  dateTxt: {
    fontWeight: '400',
    fontSize: scale(16),
    lineHeight: scale(24),
    color: '#49586E',
  },
  boxView: {
    marginRight: scale(170),
  },
  dot: {
    width: scale(10),
    height: scale(10),
    borderRadius: scale(5),
    backgroundColor: colors.green,
    marginRight: scale(20),
  },
  btn: {
    backgroundColor: colors.purple,
    marginTop: scale(35),
  },
});
