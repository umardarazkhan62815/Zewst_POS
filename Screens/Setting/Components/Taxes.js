import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utilities/colors';
import {scale} from '../../../utilities/scale';
import CustomButton from '../../../Components/CustomButton';
const data = [1];
const Taxes = () => {
  const renderItem = () => {
    return (
      <View style={styles.item}>
        <Text style={styles.nameTxt}>{'VAT'}</Text>
        <Text style={styles.nameTxt}>{'20%'}</Text>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>{'Payment types'}</Text>
      <View style={styles.flatList}>
        <FlatList data={data} renderItem={renderItem} />
      </View>
      <CustomButton title={'Add a new tax'} style={styles.addBtn} />
    </View>
  );
};

export default Taxes;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    flex: 1,
  },
  header: {
    color: colors.black,
    fontWeight: '600',
    fontSize: scale(22),
    lineHeight: scale(27),
    marginTop: scale(70),
    marginBottom: scale(30),
  },
  addBtn: {
    backgroundColor: colors.purple,
    marginTop: scale(36),
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGray,
    paddingBottom: scale(20),
  },
  nameTxt: {
    fontWeight: '400',
    fontSize: scale(20),
    lineHeight: scale(24),
    color: colors.black,
  },
});
