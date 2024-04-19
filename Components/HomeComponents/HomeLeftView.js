import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {icons} from '../../assets/icons';
import {colors} from '../../utilies/colors';
import {scale} from '../../utilies/scale';

const logoutMenu = [
  {icon: icons.attendence, color: '#F9D9C9', name: ''},
  {icon: icons.cashCircle, color: '#D1E3F4', name: ''},
  {icon: icons.window, color: '#F9D9E7', name: ''},
  {icon: icons.history, color: '#DDD6FC', name: ''},
  {icon: icons.chat, color: '#F9D9C9', name: ''},
  {icon: icons.call, color: '#D1E3F4', name: ''},
  {icon: icons.logout, color: '#F9D9E7', name: 'logout'},
];

const DATA = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  {id: '4', title: 'Item 4'},
  {id: '5', title: 'Item 5'},
];
const HomeLeftView = ({logoutPress, showMenu}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.orderItem}>
        <View style={styles.itemSubView}>
          <View style={styles.itemIconView}>
            <Image
              source={icons.delivery}
              style={styles.itemIcon}
              resizeMode="cover"
            />
          </View>
          <View>
            {item?.id == '2' ? (
              <Text style={styles.itemTxt}>
                {'Order # 255'}
                <Text style={{color: 'red'}}>{'(not paid)'}</Text>
              </Text>
            ) : null}
            <Text style={styles.nameTxt}>{'Jessica S.'}</Text>
            <View style={styles.itemRow}>
              <Text style={styles.itemTxt}>{'2 items'}</Text>
              <Image
                source={icons.rightArrow}
                style={styles.farwardArrow}
                resizeMode="center"
              />
              <Image
                source={icons.cap}
                style={styles.capIcon}
                resizeMode="center"
              />
              <Text style={styles.itemTxt}>{'Kitchen'}</Text>
            </View>
          </View>
        </View>
        <View style={styles.itemBtnView}>
          <TouchableOpacity style={styles.readyBtn}>
            <Image
              style={styles.tickIcon}
              source={icons.tickCircle}
              resizeMode="center"
            />
            <Text style={styles.readyTxt}>{'Ready'}</Text>
          </TouchableOpacity>
          <View style={styles.timeView}>
            <Image
              style={styles.tickIcon}
              source={icons.time}
              resizeMode="center"
            />
            <Text style={[styles.readyTxt, {color: colors.black}]}>
              {'05:23'}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.leftView}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity style={styles.menuView} onPress={showMenu}>
            <Image
              source={icons.menu}
              style={styles.menuBtn}
              resizeMode="center"
            />
          </TouchableOpacity>
          <View style={styles.takaway}>
            <Image
              source={icons.takeaway}
              style={styles.takeaway}
              resizeMode="center"
            />
            <Text style={styles.takeAwayTxt}>{'Take away'}</Text>
          </View>
          <View style={styles.recepit}>
            <Image
              source={icons.recepit}
              style={styles.logIcon}
              resizeMode="center"
            />
          </View>

          {logoutMenu.map(item => {
            return (
              <TouchableOpacity
                style={styles.logMenuItem}
                onPress={() => {
                  if (item.name == 'logout') {
                    logoutPress();
                  }
                }}>
                <View style={[styles.logItem, {backgroundColor: item.color}]}>
                  <Image
                    source={item.icon}
                    style={styles.logIcon}
                    resizeMode="center"
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{flex: 1}}>
          <View style={styles.newOrderView}>
            <Image source={icons.order} style={styles.orderIcon} />
            <Text style={styles.newTxt}>{'New Order'}</Text>
          </View>
          <View style={styles.orderType}>
            <View style={styles.takaway}>
              <Image
                source={icons.delivery}
                style={styles.takeaway}
                resizeMode="center"
              />
              <Text style={styles.takeAwayTxt}>{'Delivery'}</Text>
            </View>
            <View
              style={[
                styles.takaway,
                {
                  backgroundColor: 'rgba(183, 75, 99, 0.1)',
                  borderColor: '#B74B63',
                  borderWidth: 1,
                },
              ]}>
              <Image
                source={icons.dine}
                style={styles.takeaway}
                resizeMode="center"
              />
              <Text style={styles.takeAwayTxt}>{'Dine In'}</Text>
            </View>
            <View style={styles.takaway}>
              <Image
                source={icons.reserve}
                style={styles.takeaway}
                resizeMode="center"
              />
              <Text style={styles.takeAwayTxt}>{'Reserve Slot'}</Text>
            </View>
          </View>
          <View style={styles.openOrderView}>
            <View style={styles.orderTypea}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={icons.attendence}
                  style={styles.attend}
                  resizeMode="center"
                />
                <Text style={styles.openTxt}>{'Open Orders'}</Text>
                <View style={{flex: 1}} />
                <Image
                  source={icons.leftArrow}
                  style={styles.leftArrow}
                  resizeMode="center"
                />
              </View>
              <View style={styles.statusTxtView}>
                <TouchableOpacity
                  style={[styles.allbtn, {borderBottomColor: colors.black}]}>
                  <Text style={[styles.allTxt, {color: colors.black}]}>
                    {'All'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.allbtn}>
                  <Text style={styles.allTxt}>{'Ready to Pick'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.allbtn}>
                  <Text style={styles.allTxt}>{'In Progress'}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeLeftView;

const styles = StyleSheet.create({
  leftView: {
    width: '17%',
  },
  menuView: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(90),
    height: scale(90),
  },
  menuBtn: {
    width: scale(18),
    height: scale(14),
  },
  takaway: {
    width: scale(90),
    height: scale(84),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(6),
  },
  takeAwayTxt: {
    fontWeight: '500',
    fontSize: scale(12),
    lineHeight: scale(18),
    marginTop: scale(3),
  },
  takeaway: {
    width: scale(18),
    height: scale(21),
  },
  recepit: {
    width: scale(90),
    height: scale(84),
    backgroundColor: '#F9D9E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logIcon: {
    width: scale(30),
    height: scale(30),
  },
  logMenuItem: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderGray,
    width: scale(90),
    height: scale(80),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(18),
    paddingVertical: scale(16),
  },
  logItem: {
    width: scale(52),
    height: scale(52),
    alignItems: 'center',
    justifyContent: 'center',
  },
  newOrderView: {
    flexDirection: 'row',
    backgroundColor: colors.purpleLight,
    height: scale(84),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderIcon: {
    width: scale(22),
    height: scale(17),
    marginRight: scale(15),
  },
  newTxt: {
    color: colors.purple,
    fontWeight: '500',
    fontSize: scale(17),
  },
  orderType: {
    height: scale(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  openOrderView: {
    borderColor: colors.borderGray,
    borderWidth: 1,
  },
  orderTypea: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(16),
  },

  attend: {
    width: scale(17),
    height: scale(19),
  },
  openTxt: {
    lineHeight: scale(27),
    fontSize: scale(18),
    fontWeight: '500',
    color: colors.black,
    marginLeft: scale(10),
  },
  leftArrow: {
    width: scale(14),
    height: scale(12),
  },
  statusTxtView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(14),
    justifyContent: 'space-between',
  },
  allTxt: {
    fontWeight: '500',
    fontSize: scale(12),
    color: '#B3B3B3',
    textDecorationLine: 'underline',
    lineHeight: scale(18),
  },
  allbtn: {
    borderBottomWidth: 1,
    borderBottomColor: '#B3B3B3',
    paddingBottom: scale(4),
  },
  itemIcon: {
    width: scale(23),
    height: scale(23),
    tintColor: '#AB587D',
  },
  orderItem: {
    borderBottomColor: colors.borderGray,
    paddingHorizontal: scale(36),
    paddingVertical: scale(17),
    borderBottomWidth: 1,
  },
  itemSubView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIconView: {
    width: scale(36),
    height: scale(36),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9D9E7',
    borderRadius: scale(6),
    marginRight: scale(15),
    alignSelf: 'flex-start',
  },
  itemTxt: {
    fontSize: scale(13),
    fontWeight: '500',
    color: colors.black,
  },
  nameTxt: {
    color: colors.black,
    fontSize: scale(16),
    fontWeight: '500',
    lineHeight: scale(24),
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  farwardArrow: {
    width: scale(11),
    height: scale(9),
    marginLeft: scale(2),
  },
  capIcon: {
    width: scale(14),
    height: scale(14),
    marginHorizontal: scale(5),
  },
  itemBtnView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(9),
    justifyContent: 'space-between',
  },

  readyBtn: {
    backgroundColor: '#00A183',
    paddingHorizontal: scale(23),
    paddingVertical: scale(3),
    borderRadius: scale(230),
    flexDirection: 'row',
    alignItems: 'center',
  },
  readyTxt: {
    fontSize: scale(12),
    fontWeight: '500',
    lineHeight: scale(18),
    color: colors.white,
  },
  tickIcon: {
    width: scale(13),
    height: scale(13),
    marginRight: scale(5),
  },
  timeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
