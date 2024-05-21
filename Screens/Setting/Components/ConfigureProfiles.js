import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utilities/colors';
import {scale} from '../../../utilities/scale';
import PaymentItem from './PaymentItem';
const data = [
  {id: 1, title: 'Name'},
  {id: 2, title: 'Phone'},
  {id: 3, title: 'Email'},
  {id: 4, title: 'Address'},
  {id: 5, title: 'Time zone'},
  {id: 6, title: 'City'},
  {id: 7, title: 'Payment type'},
];
const ConfigureProfiles = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>{'Configure profiles - Visible fields'}</Text>
      <View style={styles.flatList}>
        <FlatList
          data={data}
          renderItem={({item}) => <PaymentItem item={item} btn />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default ConfigureProfiles;

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
