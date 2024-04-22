import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from '../../utilies/scale';
import {colors} from '../../utilies/colors';
import CustomButton from '../CustomButton';
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const PaymentRightView = ({newPress, isOrder, assignPress}) => {
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => assignPress()}
      style={[
        styles.itemView,
        {marginRight: (index + 1) % 2 === 0 ? scale(0) : scale(50)},
      ]}>
      <Text style={styles.itemTxt}>{'Reprint ticket'}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.mainContainer}>
      {isOrder ? null : (
        <CustomButton
          title={'New Order'}
          style={styles.btn}
          onPress={() => newPress()}
        />
      )}
      <Text style={styles.actionTxt}>{'Actions'}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default PaymentRightView;

const styles = StyleSheet.create({
  mainContainer: {
    width: '25%',
    backgroundColor: colors.white,
    paddingLeft: scale(73),
    paddingBottom: scale(74),
  },
  actionTxt: {
    fontWeight: '500',
    fontSize: scale(42),
    lineHeight: scale(63),
    color: colors.black,
    marginBottom: scale(43),
    marginTop: scale(30),
  },
  btn: {
    width: scale(410),
    height: scale(81),
    backgroundColor: colors.purple,
    borderRadius: scale(12),
  },
  itemView: {
    backgroundColor: '#738298',
    width: scale(180),
    height: scale(80),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(50),
    borderRadius: scale(6),
  },
  itemTxt: {
    color: colors.white,
    fontSize: scale(24),
    lineHeight: scale(36),
    fontWeight: '500',
  },
});
