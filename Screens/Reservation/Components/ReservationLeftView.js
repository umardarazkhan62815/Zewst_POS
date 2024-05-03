import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {scale} from '../../../utilies/scale';
import CustomButton from '../../../Components/CustomButton';
import {colors} from '../../../utilies/colors';
import {icons} from '../../../assets/icons';
import FlexDirectionView from '../../../Components/FlexDirectionView';

const menuData = [
  {name: '', icon: icons.docS, selected: true},

  {name: 'Existing orders', icon: icons.order1, selected: false},
  {name: 'Existing orders', icon: icons.dollerS, selected: false},
  {name: 'Overview', icon: icons.overView, selected: false},
  {name: 'Food Log', icon: icons.foodLog, selected: false},
  {name: 'Messages', icon: icons.sms, selected: false},
  {name: 'Support', icon: icons.supportS, selected: false},
  {name: 'Food Log', icon: icons.foodLog, selected: false},
  {name: 'Messages', icon: icons.sms, selected: false},
  {name: 'Support', icon: icons.supportS, selected: false},
];
const ReservationLeftView = () => {
  return (
    <View style={styles.mainContainer}>
      <CustomButton
        title={'New Order'}
        style={styles.newBtn}
        titleStyle={styles.btnTxt}
      />
      <View style={styles.menuView}>
        {menuData.map(item => {
          return (
            <FlexDirectionView
              Row
              style={item?.selected ? styles.itemView1 : styles.itemView}>
              <Image
                source={item?.icon}
                style={
                  item?.name === 'Food Log' ? styles.foodLog : styles.itemIcon
                }
                resizeMode="center"
              />
              <Text style={styles.itemStyle}>{item?.name}</Text>
            </FlexDirectionView>
          );
        })}
      </View>
      <View style={{flex: 1}} />
      <TouchableOpacity style={styles.logoutView}>
        <Image
          source={icons.logoutS}
          style={styles.logout}
          resizeMode="center"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ReservationLeftView;

const styles = StyleSheet.create({
  mainContainer: {
    width: '20%',
    paddingLeft: scale(26),
    paddingTop: Platform.OS === 'android' ? 0 : scale(50),
  },
  newBtn: {
    backgroundColor: colors.purple,
    marginTop: scale(14),
    height: scale(81),
  },
  btnTxt: {
    fontWeight: '500',
    fontSize: scale(21),
    lineHeight: scale(32),
    borderRadius: scale(12),
  },
  menuView: {
    // borderWidth: scale(1),
    borderBottomColor: colors.borderGray,
    marginTop: scale(14),
  },
  itemView: {
    paddingLeft: scale(28),
    paddingVertical: scale(26),
    alignItems: 'center',
    borderColor: colors.borderGray,
    borderWidth: 1,
  },
  itemView1: {
    paddingLeft: scale(28),
    paddingVertical: scale(26),
    alignItems: 'center',
    borderColor: colors.purple,
    borderWidth: 1,
    backgroundColor: colors.purpleLight,
  },
  foodLog: {
    width: scale(30),
    height: scale(45),
    marginRight: scale(22),
  },
  itemIcon: {
    width: scale(45),
    height: scale(45),
    marginRight: scale(22),
  },
  itemStyle: {
    fontWeight: '500',
    fontSize: scale(18),
    lineHeight: scale(27),
    color: colors.black,
  },
  logoutView: {
    borderWidth: 1,
    borderColor: colors.borderGray,
    width: scale(90),
    height: scale(84),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(33),
  },
  logout: {
    width: scale(45),
    height: scale(45),
    tintColor: colors.black,
  },
});
