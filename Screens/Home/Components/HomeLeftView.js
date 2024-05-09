import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {icons} from '../../../assets/icons';
import {colors} from '../../../utilities/colors';
import {scale} from '../../../utilities/scale';
import FlexDirectionView from '../../../Components/FlexDirectionView';

const DATA = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  {id: '4', title: 'Item 4'},
  {id: '5', title: 'Item 5'},
];
const HomeLeftView = ({navigation, logoutPress, showMenu, transctionPress}) => {
  const [logoutMenu, setLogoutMenu] = useState([
    {icon: icons.attendence, selected: true, name: 'home'},
    {icon: icons.cashCircle, selected: false, name: 'transcation'},
    {icon: icons.window, selected: false, name: ''},
    {icon: icons.history, selected: false, name: ''},
    {icon: icons.chat, selected: false, name: ''},
    {icon: icons.call, selected: false, name: ''},
    {icon: icons.dropDown, selected: false, name: 'more'},
    {icon: icons.reserve, selected: false, name: 'reserve'},
    {icon: icons.time, selected: false, name: 'food'},
    {icon: icons.setting, selected: false, name: 'report'},
    {icon: icons.addProfile, selected: false, name: 'employee'},

    {icon: icons.logout, selected: false, name: 'logout'},
  ]);
  const [isMore, setIsMore] = useState(false);

  const menuPress = selectedItem => {
    const updatedMenuItems = logoutMenu.map(item =>
      item.name === selectedItem.name
        ? {...item, selected: true}
        : {...item, selected: false},
    );
    setLogoutMenu(updatedMenuItems);
    if (selectedItem.name === 'logout') {
      logoutPress();
    } else if (selectedItem?.name === 'transcation') {
      transctionPress('transcation');
    } else if (selectedItem?.name === 'home') {
      transctionPress('home');
    } else if (selectedItem?.name === 'more') {
      setIsMore(!isMore);
    } else if (selectedItem?.name === 'reserve') {
      transctionPress('more');
    } else if (selectedItem?.name === 'food') {
      transctionPress('food');
    } else if (selectedItem?.name === 'report') {
      transctionPress('report');
    } else if (selectedItem?.name === 'employee') {
      transctionPress('employee');
    }
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.orderItem}>
        <FlexDirectionView Row spaceBetween style={styles.topView}>
          <View style={styles.time}>
            <Image
              source={icons.time}
              style={styles.timeIcon}
              resizeMode="center"
            />
            <View>
              <Text style={styles.timeTxt}>{'18:20 PM'}</Text>
              <Text style={styles.startTime}>{'(00:45)'}</Text>
            </View>
          </View>
          <View style={styles.tableView}>
            <FlexDirectionView Row style={{marginBottom: scale(3)}}>
              <View style={{flex: 1}} />
              <Image
                source={icons.table}
                style={styles.tableIcon}
                resizeMode="cover"
              />
              <Text style={styles.tableTxt}>{'Table 5'}</Text>
            </FlexDirectionView>
            <FlexDirectionView Row>
              <Image
                source={icons.mobile}
                style={styles.mobileIcon}
                resizeMode="cover"
              />
              <Text style={styles.tableTxt}>{'DoorDash 62387'}</Text>
            </FlexDirectionView>
          </View>
        </FlexDirectionView>
        <View style={styles.sliderView}>
          <View style={styles.processed} />
          <View style={styles.point} />
          <View style={styles.processing} />
        </View>

        <TouchableOpacity style={styles.readyBtn}>
          <Image
            style={styles.tickIcon}
            source={icons.tick}
            resizeMode="center"
          />
          <Text style={styles.readyTxt}>{'In progress'}</Text>
        </TouchableOpacity>
        <View style={styles.itemSubView}>
          <View style={styles.itemIconView}>
            <Image
              source={icons.dine}
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
          {/* <View style={styles.takaway}>
            <Image
              source={icons.takeaway}
              style={styles.takeaway}
              resizeMode="center"
            />
            <Text style={styles.takeAwayTxt}>{'Take away'}</Text>
          </View> */}
          {/* <View style={styles.recepit}>
            <Image
              source={icons.recepit}
              style={styles.logIcon}
              resizeMode="center"
            />
          </View> */}

          {logoutMenu.map(item => {
            return (
              <TouchableOpacity
                style={[styles.logMenuItem]}
                onPress={() => menuPress(item)}>
                {(item?.name === 'reserve' ||
                  item?.name === 'food' ||
                  item?.name === 'report' ||
                  item?.name === 'employee') &&
                !isMore ? null : (
                  <View
                    style={[
                      styles.logItem,
                      {
                        backgroundColor: item?.selected
                          ? '#EFE7F5'
                          : colors.white,
                      },
                    ]}>
                    <Image
                      source={item.icon}
                      style={[
                        styles.logIcon,
                        {
                          tintColor: item?.selected
                            ? colors.purple
                            : colors.black5,
                        },
                      ]}
                      resizeMode="center"
                    />
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{flex: 1}}>
          <View style={styles.newOrderView}>
            <Image source={icons.order} style={styles.orderIcon} />
            <Text style={styles.newTxt}>{'New Order'}</Text>
          </View>
          {/* <View style={styles.orderType}>
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
          </View> */}
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
                  style={[styles.allbtn, {borderBottomColor: colors.green}]}>
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
            <View style={styles.flatListView}>
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
    color: colors.black,
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
    // backgroundColor: colors.white,
    // borderWidth: 1,
    // borderColor: colors.borderGray,
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
    borderRadius: scale(8),
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
  time: {
    flexDirection: 'row',
  },

  timeIcon: {
    width: scale(16),
    height: scale(16),
    marginRight: scale(6),
  },
  timeTxt: {
    color: colors.black,
    fontSize: scale(14),
    lineHeight: scale(14),
    fontWeight: '500',
  },
  startTime: {
    color: colors.black,
    fontSize: scale(12),
    lineHeight: scale(12),
    fontWeight: '500',
    marginTop: scale(3),
  },
  tableTxt: {
    color: colors.black,
    fontSize: scale(12),
    lineHeight: scale(14),
    fontWeight: '500',
  },
  tableView: {
    // backgroundColor: 'red',
  },
  tableIcon: {
    width: scale(18),
    height: scale(13),
    marginRight: scale(5),
  },
  mobileIcon: {
    width: scale(10),
    height: scale(14),
    marginRight: scale(5),
  },
  orderItem: {
    borderBottomColor: colors.borderGray,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    marginBottom: scale(20),
    borderRadius: scale(12),
    paddingLeft: scale(4),
    paddingRight: scale(8),
  },
  itemSubView: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingLeft: scale(16),
    paddingBottom: scale(12),
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
    backgroundColor: colors.white,
    paddingHorizontal: scale(11),
    width: scale(114),
    paddingVertical: scale(3),
    borderRadius: scale(230),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: scale(1),
    borderColor: colors.borderGray,
    // marginLeft: scale(16),
    marginBottom: scale(14),
  },
  readyTxt: {
    fontSize: scale(12),
    fontWeight: '500',
    lineHeight: scale(18),
    color: colors.black,
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
  topView: {
    marginBottom: scale(11),
    marginTop: scale(12),
    paddingLeft: scale(16),
    paddingRight: scale(12),
  },
  sliderView: {
    width: '100%',
    // height: scale(3),
    backgroundColor: colors.white,
    marginBottom: scale(14),
    flexDirection: 'row',
    alignItems: 'center',
  },
  processed: {
    width: '20%',
    height: scale(3),
    backgroundColor: colors.purple,
  },
  point: {
    width: scale(7),
    height: scale(7),
    backgroundColor: colors.purple,
    marginHorizontal: scale(2),
    borderRadius: scale(5),
  },
  processing: {
    flex: 1,
    height: scale(3),
    backgroundColor: colors.purpleLight,
  },
  moreView: {
    width: 100,
    height: 100,
    backgroundColor: colors.purpleLight,
    position: 'absolute',
    top: '51%',
    left: scale(10),
    zIndex: 100,
    borderRadius: scale(10),
    alignItems: 'center',
    paddingVertical: scale(10),
  },
  reservationTxt: {
    color: colors.purple,
  },
  flatListView: {
    backgroundColor: colors.purpleLight,
    paddingTop: scale(17),
    paddingHorizontal: scale(12),
  },
});
