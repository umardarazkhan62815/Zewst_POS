import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from '../../../utilies/scale';
import {Image} from '@rneui/base/dist/Image/Image';
import {icons} from '../../../assets/icons';
import {colors} from '../../../utilies/colors';

const data = [
  {name: 'DashBoard', icon: icons.category, selected: true},
  {name: 'Demand Planning', icon: icons.bag, selected: false},
  {name: 'Online store', icon: icons.user2, selected: false},
  {name: 'Inventory', icon: icons.folder, selected: false},
  {name: 'Menu Engineering', icon: icons.document, selected: false},
  {name: 'Recipe Engineering', icon: icons.chart, selected: false},
  {name: 'SDS', icon: icons.settingn, selected: false},
];
const TranscationLeftView = () => {
  const dashBoardPress = name => {};
  return (
    <View style={styles.mainContainer}>
      <Image source={icons.zewst} style={styles.zeward} resizeMode="center" />
      <View style={styles.dashBoardView}>
        {data?.map(item => {
          return (
            <TouchableOpacity
              style={item?.selected ? styles.menuItem1 : styles.menuItem}
              onPress={() => dashBoardPress(item?.name)}>
              <Image
                source={item?.icon}
                style={item?.selected ? styles.dashIcon1 : styles.dashIcon}
                resizeMode="center"
              />
              <Text style={item?.selected ? styles.itemTxt1 : styles.itemTxt}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          );
        })}
        <View style={{flex: 1}} />
        <View style={styles.contactView}>
          <Image source={icons.call} style={styles.dashIcon} />
          <Text style={styles.itemTxt}>{'Contact Support'}</Text>
        </View>
        <View style={styles.menuItem}>
          <Image source={icons.logoutR} style={styles.logoutIcon} />
          <Text style={styles.logoutTxt}>{'Logout'}</Text>
        </View>
      </View>
    </View>
  );
};

export default TranscationLeftView;

const styles = StyleSheet.create({
  mainContainer: {
    width: '20%',
    backgroundColor: colors.white,
    paddingTop: scale(20),
    alignItems: 'center',
  },
  zeward: {
    width: scale(188),
    height: scale(44),
    alignSelf: 'center',
  },
  dashBoardView: {
    marginTop: scale(45),
    paddingBottom: scale(60),
  },
  dashIcon: {
    width: scale(17),
    height: scale(19),
    tintColor: colors.black,
    marginRight: scale(14),
  },
  dashIcon1: {
    width: scale(17),
    height: scale(19),
    tintColor: colors.white,
    marginRight: scale(14),
  },
  logoutIcon: {
    width: scale(17),
    height: scale(19),
    marginRight: scale(7),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(17),
    paddingVertical: scale(14),
    marginBottom: scale(20),
  },
  menuItem1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(17),
    paddingVertical: scale(14),
    marginBottom: scale(20),
    backgroundColor: colors.purple,
    borderRadius: scale(10),
  },
  contactView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(9),
    paddingVertical: scale(14),
    marginBottom: scale(20),
    backgroundColor: 'rgba(94, 99, 102, 0.1)',
    borderRadius: scale(14),
  },
  itemTxt: {
    fontSize: scale(12),
    lineHeight: scale(14),
    fontWeight: '400',
    color: '#53545C',
  },
  itemTxt1: {
    fontSize: scale(12),
    lineHeight: scale(14),
    fontWeight: '400',
    color: colors.white,
  },
  logoutTxt: {
    fontSize: scale(12),
    lineHeight: scale(14),
    fontWeight: '400',
    color: '#CC5F5F',
  },
});
