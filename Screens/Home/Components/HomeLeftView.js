import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {icons} from '../../../assets/icons';
import {colors} from '../../../utilities/colors';
import {scale} from '../../../utilities/scale';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import {useDispatch, useSelector} from 'react-redux';
import {dateToTime} from '../../../utilities/Convertor';

const DATA = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  {id: '4', title: 'Item 4'},
  {id: '5', title: 'Item 5'},
];
const HomeLeftView = ({
  navigation,
  logoutPress,
  showMenu,
  transctionPress,
  screen,
}) => {
  const dispatch = useDispatch();
  const ordersData = useSelector(state => state.ordersList);
  // console.log('ordersData', ordersData);

  const [logoutMenu, setLogoutMenu] = useState([
    {icon: icons.attendence, selected: true, name: 'home'},
    {icon: icons.cashCircle, selected: false, name: 'transcation'},
    {icon: icons.window, selected: false, name: ''},
    {icon: icons.history, selected: false, name: ''},
    {icon: icons.chat, selected: false, name: 'customer'},
    {icon: icons.call, selected: false, name: ''},

    {icon: icons.dropDown, selected: false, name: 'more'},
    {icon: icons.cashRegister, selected: false, name: 'reserve'},
    {icon: icons.orderOutline, selected: false, name: 'food'},
    {icon: icons.customer, selected: false, name: 'employee'},
    {icon: icons.overView1, selected: false, name: 'report'},

    {icon: icons.settingn, selected: false, name: 'setting'},

    {icon: icons.logout, selected: false, name: 'logout'},
  ]);
  const [isMore, setIsMore] = useState(false);
  const [isShowOrder, setIsShowOrder] = useState(true);
  const [ordersList, setOrdersList] = useState([]);
  const [type, setType] = useState(0);
  useEffect(() => {
    logoutMenu.map(item => {
      if (item.name === screen) {
        menuPress(item);
      }
    });
  }, [screen]);

  useEffect(() => {
    if (ordersData && ordersData?.data && ordersData?.data?.ordersData) {
      console.log('Order Length', ordersData?.data?.ordersData?.length);
      setOrdersList(ordersData?.data?.ordersData);
    }
  }, [ordersData]);
  const menuPress = async selectedItem => {
    const updatedMenuItems = logoutMenu.map(item =>
      item.name === selectedItem.name
        ? {...item, selected: true}
        : {...item, selected: false},
    );
    setLogoutMenu(updatedMenuItems);
    if (selectedItem.name === 'logout') {
      // try {
      //   await AsyncStorage.removeItem('auth');
      //   navigation.replace('Login');
      // } catch (error) {
      //   console.log('Async_Remove_Error', error);
      // }
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
    } else if (selectedItem?.name === 'setting') {
      transctionPress('setting');
    } else if (selectedItem?.name === 'customer') {
      transctionPress('customer');
    }
  };
  const renderItem = ({item}) => {
    // console.log('Item', item?.customer?.fullName);
    let firstName = null;
    if (item?.customer?.fullName) {
      firstName = item?.customer?.fullName.split(' ')[0];
    }
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
              <Text style={styles.timeTxt}>{dateToTime(item?.orderedOn)}</Text>
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
            source={item?.KdsStatus === 'PENDING' ? icons.time : icons.tick}
            resizeMode="center"
          />

          <Text style={styles.readyTxt}>{item?.KdsStatus}</Text>
        </TouchableOpacity>
        <View style={styles.itemSubView}>
          <View style={styles.itemIconView}>
            <Image
              source={
                item?.type === 'DELIVERY'
                  ? icons.delivery
                  : item?.type === 'TAKE_AWAY'
                  ? icons.takeaway
                  : icons.dine
              }
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
            <Text style={styles.nameTxt}>
              {firstName ? firstName : 'No Name'}
            </Text>
            <View style={styles.itemRow}>
              <Text
                style={styles.itemTxt}>{`${item?.items.length} items`}</Text>
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

  const filterHandle = filter => {
    setType(filter);
    if (filter === 0) {
      setOrdersList(ordersData?.data?.ordersData);
    } else if (filter === 1) {
      const filter1 = ordersData?.data?.ordersData.filter(
        item => item?.KdsStatus === 'COMPLETED',
      );
      setOrdersList(filter1);
    } else if (filter === 2) {
      const filter2 = ordersData?.data?.ordersData.filter(
        item => item?.KdsStatus === 'PENDING',
      );
      setOrdersList(filter2);
    }
  };
  return (
    <View style={isShowOrder ? styles.leftView : styles.leftView1}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity
            style={styles.menuView}
            onPress={() => setIsShowOrder(!isShowOrder)}>
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
                  item?.name === 'employee' ||
                  item?.name === 'setting') &&
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
        {isShowOrder ? (
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
                    style={[styles.allbtn, {borderBottomColor: colors.green}]}
                    onPress={() => filterHandle(0)}>
                    <Text style={type === 0 ? styles?.allTxt1 : styles.allTxt}>
                      {'All'}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.allbtn}
                    onPress={() => filterHandle(1)}>
                    <Text style={type === 1 ? styles?.allTxt1 : styles.allTxt}>
                      {'Ready to Pick'}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.allbtn}
                    onPress={() => filterHandle(2)}>
                    <Text style={type === 2 ? styles?.allTxt1 : styles.allTxt}>
                      {'In Progress'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.flatListView}>
                <FlatList
                  data={ordersList}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default HomeLeftView;

const styles = StyleSheet.create({
  leftView: {
    width: '17%',
  },
  leftView1: {
    width: '5%',
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
    // borderWidth: 1,
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

  allTxt1: {
    fontWeight: '500',
    fontSize: scale(12),
    color: '#000000',
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
    maxHeight: '86%',
  },
});
