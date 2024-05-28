import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../utilities/colors';
import {scale} from '../../../utilities/scale';
import CustomButton from '../../../Components/CustomButton';
import TaxModal from '../Modal/TaxModal';
const data = [{type: 'Vat1', tax: '10%'}];
const Taxes = () => {
  const [isAdd, setIsAdd] = useState(false);

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.nameTxt}>{item?.type}</Text>
        <Text style={styles.nameTxt}>{item?.tax}</Text>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <TaxModal
        visible={isAdd}
        setVisible={val => {
          data.push(val);
          setIsAdd(false);
        }}
      />
      <Text style={styles.header}>{'Payment types'}</Text>
      <View style={styles.flatList}>
        <FlatList data={data} renderItem={renderItem} />
      </View>
      <CustomButton
        title={'Add a new tax'}
        style={styles.addBtn}
        onPress={() => setIsAdd(true)}
      />
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
    marginTop: scale(20),
  },
  nameTxt: {
    fontWeight: '400',
    fontSize: scale(20),
    lineHeight: scale(24),
    color: colors.black,
  },
});
