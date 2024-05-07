import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {icons} from '../../assets/icons';
import {scale} from '../../utilities/scale';
import FoodCard from './Components/FoodCard';
import {productTypes} from './statics';
import {colors} from '../../utilities/colors';
import Search from './Components/Search';
import ProductCard from './Components/ProductCard';
import FlexDirectionView from '../../Components/FlexDirectionView';
import WasteCard from './Components/WasteCard';

const Food = () => {
  const [product, setProduct] = useState('');
  const [isFilter, setIsFilter] = useState(false);
  const [isUpdateWaste, setIsUpdateWaste] = useState(false);

  const onBackPress = () => {
    if (isUpdateWaste) {
      setIsUpdateWaste(false);
    } else {
      setProduct('');
    }
  };
  return (
    <View style={styles.mainContainer}>
      {product !== '' ? (
        <TouchableOpacity style={styles.backBtn} onPress={onBackPress}>
          <Image
            source={icons.dropDown}
            style={styles.backArrow}
            resizeMode="center"
          />
        </TouchableOpacity>
      ) : null}
      <Image source={icons.naan} style={styles.naan} />
      <Text style={styles.kulchayTxt}>{'KULCHAY'}</Text>
      {product === '' ? (
        <View style={styles.productsView}>
          <FlatList
            data={productTypes}
            renderItem={({item}) => (
              <FoodCard item={item} onPress={val => setProduct(val)} />
            )}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={{gap: scale(40)}}
          />
        </View>
      ) : product.text === 'Food log' ? (
        <View style={styles.productsList}>
          <Text style={styles.heading1}>{product?.text}</Text>

          <WasteCard onPress={() => setProduct('')} type={'FoodLog'} />
        </View>
      ) : (
        <View style={styles.productsList}>
          <FlexDirectionView Row>
            <Text style={styles.heading}>{product?.text}</Text>
            {product?.text === 'Food waste' && !isUpdateWaste ? (
              <TouchableOpacity
                style={styles.foodWasteBtn}
                onPress={() => setIsUpdateWaste(true)}>
                <Image source={icons.plus} style={styles.plus} />
                <Text style={styles.updateTxt}>{'Update food waste'}</Text>
              </TouchableOpacity>
            ) : null}
          </FlexDirectionView>
          {!isUpdateWaste ? (
            <View style={styles.subContainer}>
              {isFilter ? (
                <TouchableOpacity
                  onPress={() => setIsFilter(false)}
                  style={styles.filterView}>
                  <Text style={styles.dateTxt}>{'By date'}</Text>
                </TouchableOpacity>
              ) : null}
              <FlexDirectionView Row style={styles.searchView}>
                <Search placeholder={'Search by Name, Brand, Varian etc…'} />
                <TouchableOpacity onPress={() => setIsFilter(!isFilter)}>
                  <Image source={icons.filter} style={styles.filterIcon} />
                </TouchableOpacity>
              </FlexDirectionView>
              <FlatList
                data={productTypes.slice(0, 4)}
                renderItem={({item}) => (
                  <ProductCard
                    item={item}
                    onPress={val => setProduct(val)}
                    type={product?.text == 'Food waste' ? true : false}
                  />
                )}
                keyExtractor={item => item.id}
              />
            </View>
          ) : (
            <WasteCard onPress={() => setIsUpdateWaste(false)} />
          )}
        </View>
      )}
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  backBtn: {
    position: 'absolute',
    left: scale(63),
    top: scale(25),
    height: scale(60),
    width: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    width: scale(28),
    height: scale(14),
    transform: [{rotate: '90deg'}],
    tintColor: '#14171F',
  },
  naan: {
    alignSelf: 'center',
    width: scale(248),
    height: scale(57),
    marginTop: scale(40),
  },
  kulchayTxt: {
    fontWeight: '400',
    fontSize: scale(30),
    lineHeight: scale(45),
    color: '#3F4C50',
    alignSelf: 'center',
    marginTop: scale(20),
    marginBottom: scale(64),
  },
  productsView: {
    paddingHorizontal: scale(96),
    flex: 1,
    paddingBottom: scale(20),
  },
  productsList: {
    paddingLeft: scale(60),
    flex: 1,
    paddingRight: scale(150),
  },
  heading: {
    fontWeight: '600',
    fontSize: scale(43),
    lineHeight: scale(65),
    color: '#171725',
    marginTop: scale(20),
    marginBottom: scale(57),
    flex: 1,
  },
  heading1: {
    fontWeight: '600',
    fontSize: scale(43),
    lineHeight: scale(65),
    color: '#171725',
    marginTop: scale(20),
    marginBottom: scale(57),
  },
  foodWasteBtn: {
    backgroundColor: colors.purple,
    width: scale(306),
    height: scale(92),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    flexDirection: 'row',
  },
  plus: {
    width: scale(20),
    height: scale(20),
    tintColor: colors.white,
  },
  updateTxt: {
    fontWeight: '600',
    fontSize: scale(24),
    lineHeight: scale(31),
    color: colors.white,
    marginLeft: scale(14),
  },
  subContainer: {
    backgroundColor: colors.white,
    flex: 1,
    borderTopRightRadius: scale(20),
    borderTopLeftRadius: scale(20),
    paddingLeft: scale(23),
    paddingRight: scale(57),
    paddingVertical: scale(60),
  },
  searchView: {
    alignItems: 'center',
  },
  filterIcon: {
    width: scale(20),
    height: scale(13),
    tintColor: '#44444F',
    marginLeft: scale(36),
  },
  filterView: {
    zIndex: 100,
    position: 'absolute',
    right: scale(60),
    backgroundColor: colors.white,
    width: scale(214),
    height: scale(52),
    top: scale(120),
    borderRadius: scale(10),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 2.84,
    elevation: 2,
    justifyContent: 'center',
  },
  dateTxt: {
    fontWeight: '400',
    fontSize: scale(21),
    lineHeight: scale(36),
    color: colors.black,
    marginLeft: scale(10),
  },
});
