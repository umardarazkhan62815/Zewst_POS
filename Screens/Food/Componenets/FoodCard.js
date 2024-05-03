import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from '../../../utilies/scale';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import {colors} from '../../../utilies/colors';
import {icons} from '../../../assets/icons';

const FoodCard = ({item, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.mainConatiner}
      onPress={() => onPress(item)}>
      <FlexDirectionView Row style={styles.ItemView}>
        <View style={[styles.wasteView, {backgroundColor: item?.bgColor}]}>
          <Image
            source={item?.icon}
            style={[styles.waste, {tintColor: item?.tintColor}]}
          />
        </View>
        <View>
          <Text style={styles.titleTxt}>{item?.text}</Text>
          {item?.count === null ? null : (
            <FlexDirectionView Row style={{alignItems: 'center'}}>
              {item?.count < 11 ? <View style={styles.warn} /> : null}
              <Text style={styles.countTxt}>{item?.count}</Text>
            </FlexDirectionView>
          )}
        </View>
        <View style={{flex: 1}} />
        {item?.arrow ? (
          <Image
            style={styles.forwardArrow}
            source={icons.dropDown}
            resizeMode="center"
          />
        ) : null}
      </FlexDirectionView>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: scale(30),
    paddingHorizontal: scale(100),
    paddingVertical: scale(50),
    borderRadius: scale(32),
  },
  ItemView: {
    alignItems: 'center',
  },
  wasteView: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.borderGray,
    marginRight: scale(40),
  },
  waste: {
    width: scale(46),
    height: scale(46),
  },
  titleTxt: {
    color: '#49586E',
    fontWeight: '400',
    fontSize: scale(26),
    lineHeight: scale(39),
  },
  countTxt: {
    color: '#49586E',
    fontWeight: '400',
    fontSize: scale(32),
    lineHeight: scale(48),
  },
  warn: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(10),
    backgroundColor: '#E62063',
    marginRight: scale(10),
  },
  forwardArrow: {
    width: scale(28),
    height: scale(14),
    transform: [{rotate: '270deg'}],
    tintColor: '#14171F',
  },
});
