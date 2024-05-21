import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {icons} from '../../../assets/icons';
import {Image} from 'react-native';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import Switch from '../../../Components/Switch';
const PaymentItem = ({item, detail, btn}) => {
  const [checked, setChecked] = useState();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.item}>
        <Image source={icons.fi_menu} style={styles.menu} resizeMode="center" />
        <Text style={styles.nameTxt}>{item.title}</Text>
        {btn ? null : (
          <Switch value={checked} onValueChange={() => setChecked(!checked)} />
        )}
      </View>
      {detail ? (
        <Text
          style={
            styles.detail
          }>{`${'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'}`}</Text>
      ) : null}
    </View>
  );
};

export default PaymentItem;

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: scale(20),
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGray,
    marginBottom: scale(17),
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu: {
    width: scale(32),
    height: scale(32),
    tintColor: colors.black,
    marginRight: scale(24),
  },
  nameTxt: {
    fontSize: scale(20),
    lineHeight: scale(24),
    color: colors.black,
    fontWeight: '400',
    flex: 1,
  },
  detail: {
    color: '#000000B2',
    fontWeight: '400',
    fontSize: scale(16),
    lineHeight: scale(19),
    marginTop: scale(18),
    paddingRight: '15%',
  },
});
