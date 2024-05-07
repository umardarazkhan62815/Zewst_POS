import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import {icons} from '../../../assets/icons';
import CustomButton from '../../../Components/CustomButton';
import {FlatList} from 'react-native';
import ReservationCard from './ReservationCard';
import {DropdownPicker} from '../../../Components/DropDownPicker';
import SeatCard from './SeatCard';
import TimeCard from './TimeCard';
import {images} from '../../../assets/images';

const data = [
  {id: '1', text: 'Item 1'},
  {id: '2', text: 'Item 2'},
  {id: '3', text: 'Item 3'},
  {id: '4', text: 'Item 4'},
];
const dropDownOptions = ['Reserved slots', 'Reserve a slot'];

const seatsdata = [
  {id: '1', text: '1 Seat'},
  {id: '2', text: '2 Seats'},
  {id: '3', text: '3 Seats'},
  {id: '4', text: '4 Seats'},
  {id: '5', text: '5 Seats'},
  {id: '5', text: '5 Seats'},
  {id: '5', text: '5 Seats'},
  {id: '5', text: '5 Seats'},
  {id: '5', text: '5 Seats'},
  {id: '5', text: '5 Seats'},
  {id: '5', text: '5 Seats'},
  {id: '5', text: '5 Seats'},
  {id: '5', text: '9 Seats'},
  {id: '5', text: '10 Seats'},
  {id: '5', text: '11 Seats'},
  {id: '5', text: '12 Seats'},
];
const timedata = [
  {id: '1', text: '12:00 PM'},
  {id: '1', text: '12:00 PM'},
  {id: '1', text: '12:00 PM'},
  {id: '1', text: '12:00 PM'},
  {id: '1', text: '12:00 PM'},
  {id: '1', text: '12:00 PM'},
  {id: '1', text: '12:00 PM'},
  {id: '1', text: '12:00 PM'},
  {id: '1', text: '12:00 PM'},
  {id: '1', text: '12:00 PM'},
  {id: '1', text: '12:00 PM'},
  {id: '1', text: '12:00 PM'},
];

const timesFilter = ['All', 'Morning', 'Afternoon', 'Evening'];

const seatingData = [
  {name: 'Any', icon: icons.dropUp},
  {name: 'Standard', icon: icons.standard},
  {name: 'Outdoor', icon: icons.outDoor},
  {name: 'See View', icon: icons.wave},
  {name: 'High Top', icon: icons.dropUp},
  {name: 'Other', icon: icons.other},
];
const occasionData = [
  {name: 'Birthday', icon: icons.birth},
  {name: 'Anniversary', icon: icons.anniversary},
  {name: 'Date', icon: icons.date},
  {name: 'Special Occasion', icon: icons.business},
  {name: 'Business Meal', icon: icons.business},
  {name: 'Other', icon: icons.other},
];

const ReservationRightView = () => {
  const [selectedValue, setSelectedValue] = useState(dropDownOptions[0]);
  const [reserveOrder, setReserveOrder] = useState('');
  const [seats, setSeats] = useState('');
  const [time, setTime] = useState('');
  const [seating, setSeating] = useState('');
  const [occasion, setOccasion] = useState('');
  const [enable, setEnable] = useState(false);
  const [isConfirmOrder, setIsConfirmOrder] = useState(false);

  const [timeFilter, setTimeFilter] = useState(timesFilter[0]);

  useEffect(() => {
    if (occasion === '' || seating === '') {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [occasion, seating]);
  return (
    <View style={styles.mainContainer}>
      <DropdownPicker
        options={dropDownOptions}
        style={styles.reservedView}
        dropStyle={styles.dropStyle}
        textStyle={styles.reservedTxt}
        selectedValue={selectedValue}
        onSelect={val => setSelectedValue(val)}
        tintColor={colors.black}
      />
      {!isConfirmOrder ? (
        <>
          {selectedValue !== 'Reserved slots' ? (
            <FlexDirectionView Row style={styles.slots}>
              <View style={styles.slotView}>
                <Text style={styles.slotTxt}>{'View Available Slots'}</Text>
              </View>
              <TouchableOpacity style={styles.slotView1} onPress={() => {}}>
                <Text style={styles.slotTxt1}>{'START OVER'}</Text>
              </TouchableOpacity>
            </FlexDirectionView>
          ) : null}
          {reserveOrder === '' ? (
            <>
              <FlexDirectionView
                Row
                style={{alignSelf: 'center', marginTop: scale(30)}}>
                {['All', 'TODAY', 'tomorrow', 'menu'].map(item =>
                  item === 'menu' ? (
                    <Image source={icons.menuRound} style={styles.menu} />
                  ) : (
                    <View style={styles.daysView}>
                      <Text style={styles.allTxt}>{item}</Text>
                    </View>
                  ),
                )}
              </FlexDirectionView>
              <View style={styles.flatListVew}>
                <FlatList
                  data={data}
                  renderItem={({item}) => (
                    <ReservationCard
                      item={item}
                      onPress={() => {
                        selectedValue === 'Reserved slots'
                          ? null
                          : setReserveOrder('Reserved slots');
                      }}
                    />
                  )}
                  keyExtractor={item => item.id}
                  numColumns={2}
                  columnWrapperStyle={{gap: scale(40)}}
                  contentContainerStyle={{gap: scale(40)}}
                />
              </View>
              {selectedValue === 'Reserve a slot' ? null : (
                <CustomButton
                  title={'Book a table'}
                  style={styles.btn}
                  titleStyle={styles.btnTxt}
                />
              )}
            </>
          ) : seats === '' ? (
            <View style={styles.subContainer}>
              <Text style={styles.multiple}>Select Multiple</Text>
              <View>
                <FlatList
                  data={seatsdata}
                  renderItem={({item}) => (
                    <SeatCard item={item} onPress={val => setSeats(val)} />
                  )}
                  keyExtractor={item => item.id}
                  numColumns={4}
                  columnWrapperStyle={{gap: scale(50)}}
                  contentContainerStyle={{gap: scale(50)}}
                />
              </View>
            </View>
          ) : (
            <View style={styles.subContainer}>
              <FlexDirectionView
                Row
                spaceBetween
                style={{alignItems: 'center'}}>
                <Text style={styles.multiple}>{'Select Multiple'}</Text>
                {time ? (
                  <TouchableOpacity
                    style={styles.selectedStyle}
                    onPress={() => setTime('')}>
                    <Text style={styles.selectedTxt}>{'3 Selected'}</Text>
                    <Image source={icons.crossRound} style={styles.cross} />
                  </TouchableOpacity>
                ) : null}
              </FlexDirectionView>
              <View style={styles.timeFilterView}>
                {timesFilter.map(item => {
                  return (
                    <TouchableOpacity
                      onPress={() => setTimeFilter(item)}
                      style={
                        timeFilter === item ? styles.timeItem : styles.timeItem1
                      }>
                      <Text
                        style={
                          timeFilter === item ? styles.timeTxt : styles.timeTxt1
                        }>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              {time ? (
                <View style={styles.occaianView}>
                  <DropdownPicker
                    options={dropDownOptions[0]}
                    style={[styles.reservedView]}
                    dropStyle={styles.dropStyle}
                    textStyle={styles.reservedTxt}
                    selectedValue={selectedValue}
                    onSelect={val => setSelectedValue(val)}
                    tintColor={colors.black}
                  />
                  <FlexDirectionView Row style={{marginTop: scale(40)}}>
                    <View style={styles.occaianLeft}>
                      <Text style={styles.optionTxt}>{'Seating options'}</Text>
                      <View style={styles.seatingView}>
                        {seatingData.map(item => {
                          return (
                            <TouchableOpacity
                              style={
                                item?.name === seating
                                  ? styles.mapItem1
                                  : styles.mapItem
                              }
                              onPress={() => setSeating(item?.name)}>
                              <Image
                                source={item?.icon}
                                style={
                                  item?.name === seating
                                    ? styles.wave1
                                    : styles.wave
                                }
                                resizeMode="center"
                              />
                              <Text
                                style={
                                  item?.name === seating
                                    ? styles.anyTxt1
                                    : styles.anyTxt
                                }>
                                {item?.name}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.occaianRight}>
                      <Text style={styles.optionTxt}>
                        {'What’s the occasion?'}
                      </Text>
                      <View style={styles.seatingView}>
                        {occasionData.map(item => {
                          return (
                            <TouchableOpacity
                              style={
                                item?.name === occasion
                                  ? styles.mapItem1
                                  : styles.mapItem
                              }
                              onPress={() => setOccasion(item?.name)}>
                              <Image
                                source={item?.icon}
                                style={
                                  item?.name === occasion
                                    ? styles.wave1
                                    : styles.wave
                                }
                                resizeMode="center"
                              />
                              <Text
                                style={
                                  item?.name === occasion
                                    ? styles.anyTxt1
                                    : styles.anyTxt
                                }>
                                {item?.name}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    </View>
                  </FlexDirectionView>
                  <CustomButton
                    title={'Next'}
                    style={enable ? styles.nextBtn : styles.nextBtn1}
                    titleStyle={enable ? styles.nextTxt : styles.nextTxt}
                    onPress={() => {
                      enable ? null : setIsConfirmOrder(true);
                    }}
                  />
                  <CustomButton
                    title={'Skip'}
                    style={styles.skipBtn}
                    titleStyle={styles.skipTxt}
                    onPress={() => setIsConfirmOrder(true)}
                  />
                </View>
              ) : (
                <View>
                  <FlatList
                    data={timedata}
                    renderItem={({item}) => (
                      <TimeCard item={item} onPress={val => setTime(val)} />
                    )}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    columnWrapperStyle={{gap: scale(50)}}
                    contentContainerStyle={{gap: scale(50)}}
                  />
                </View>
              )}
            </View>
          )}
        </>
      ) : (
        <View style={styles.confirmContainer}>
          <View style={styles.orderView}>
            <View style={styles.profileView}>
              <Image source={images.profile} style={styles.profile} />
              <View style={styles.online} />
            </View>

            <Text style={styles.nameTxt}>{'Richard william'}</Text>
            <Text style={styles.kTxt}>{'Kulchay'}</Text>
            <Text style={styles.numberTxt}>{'(425) 585-1234'}</Text>
            <Text style={styles.emailTxt}>{'richard@domain.com'}</Text>
            <Text style={styles.dateTxt}>{'Today, 25th Feb.'}</Text>
            <FlexDirectionView Row style={styles.timeView}>
              <Image
                source={icons.time}
                style={styles.timeIcon}
                resizeMode="center"
              />
              <Text style={styles.timeTxt2}>{'5:00 PM'}</Text>
            </FlexDirectionView>
            <Text style={styles.tableTxt}>{'Table 5 (12 Seater)'}</Text>
            <FlexDirectionView Row style={styles.guestRow}>
              <Image
                source={icons.group}
                style={styles.group}
                resizeMode="center"
              />
              <Text style={styles.guestTxt}>{'8 Guest'}</Text>
            </FlexDirectionView>
            <FlexDirectionView Row style={styles.outDoor}>
              <Text style={styles.seatingTxt}>{'Seating :'}</Text>
              <Text
                style={[
                  styles.seatingTxt,
                  {backgroundColor: 'rgba(213,255,211,1)'},
                ]}>
                {'Outdoor'}
              </Text>
            </FlexDirectionView>
            <FlexDirectionView Row style={styles.outDoor}>
              <Text style={styles.seatingTxt}>{'Occasion :'}</Text>
              <Text
                style={[
                  styles.seatingTxt,
                  {backgroundColor: colors.purpleLight},
                ]}>
                {'Business meal'}
              </Text>
            </FlexDirectionView>
          </View>
          <CustomButton
            title={'Confirm'}
            style={styles.confirmBtn}
            titleStyle={styles.confirmTxt}
          />
          <CustomButton
            title={'Edit'}
            style={[styles.confirmBtn, {backgroundColor: '#48576E'}]}
            titleStyle={styles.confirmTxt}
            onPress={() => setIsConfirmOrder(false)}
          />
          <CustomButton
            title={'Skip'}
            style={styles.skipBtn}
            titleStyle={styles.skipTxt}
          />
        </View>
      )}
    </View>
  );
};

export default ReservationRightView;

const styles = StyleSheet.create({
  mainContainer: {
    width: scale(1567),
    // backgroundColor: 'red',
  },
  reservedView: {
    alignSelf: 'center',
    marginTop: scale(40),
    width: scale(708),
    borderWidth: 0,
    backgroundColor: null,
  },
  reservedTxt: {
    fontSize: scale(41),
    fontWeight: '700',
    lineHeight: scale(62),
    color: colors.purple,
  },
  daysView: {
    backgroundColor: colors.purpleLight,
    marginRight: scale(75),
  },
  dropStyle: {
    alignSelf: 'center',
    width: scale(708),
    marginTop: scale(20),
  },
  menu: {
    width: scale(41),
    height: scale(41),
  },
  allTxt: {
    fontWeight: '600',
    fontSize: scale(18),
    lineHeight: scale(21),
    paddingHorizontal: scale(30),
    paddingVertical: scale(15),
    color: colors.purple,
  },
  flatListVew: {
    marginVertical: scale(30),
    alignSelf: 'center',
    flex: 1,
  },
  btn: {
    width: scale(371),
    height: scale(90),
    backgroundColor: colors.purple,
    alignSelf: 'center',
    marginBottom: scale(111),
  },
  btnTxt: {
    fontSize: scale(40),
    lineHeight: scale(60),
    fontWeight: '500',
    color: colors.white,
  },
  slots: {
    alignSelf: 'center',
    marginTop: scale(30),
  },
  slotView: {
    borderBottomWidth: scale(2),
    borderBottomColor: colors.purple,
    marginRight: scale(42),
    paddingHorizontal: scale(10),
  },
  slotView1: {
    color: colors.purple,
    marginRight: scale(42),
  },
  slotTxt: {
    color: colors.purple,
    fontWeight: '700',
    fontSize: scale(20),
    lineHeight: scale(30),
    marginBottom: scale(5),
  },
  slotTxt1: {
    color: '#738298',
    fontWeight: '500',
    fontSize: scale(20),
    lineHeight: scale(30),
  },
  //multiple
  subContainer: {
    marginTop: scale(30),
    marginLeft: scale(200),
  },
  multiple: {
    color: '#1E1E1E',
    fontWeight: '700',
    fontSize: scale(32),
    lineHeight: scale(48),
    marginBottom: scale(30),
  },
  selectedStyle: {
    flexDirection: 'row',
    backgroundColor: '#3A4658',
    borderRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(14),
    paddingVertical: scale(11),
    marginRight: scale(236),
  },
  selectedTxt: {
    color: colors.white,
    fontSize: scale(12),
    lineHeight: scale(18),
    fontWeight: '500',
  },
  cross: {
    width: scale(18),
    height: scale(18),
    marginLeft: scale(8),
    tintColor: colors.white,
  },
  timeFilterView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(30),
  },
  timeItem: {
    backgroundColor: colors.purple,
    borderRadius: scale(10),
    marginRight: scale(70),
  },
  timeTxt: {
    color: colors.white,
    paddingVertical: scale(24),
    paddingHorizontal: scale(64),
    fontSize: scale(20),
    fontWeight: '500',
    lineHeight: scale(30),
  },
  timeItem1: {
    backgroundColor: '#EDECF0',
    borderRadius: scale(10),
    marginRight: scale(70),
  },
  timeTxt1: {
    color: '#49586E',
    paddingVertical: scale(24),
    paddingHorizontal: scale(64),
    fontSize: scale(20),
    fontWeight: '500',
    lineHeight: scale(30),
  },
  occaianView: {
    paddingRight: scale(200),
  },
  divider: {
    height: scale(390),
    backgroundColor: '#B4B4B4',
    width: scale(10),
    borderRadius: scale(10),
  },
  occaianLeft: {
    flex: 1,
  },
  optionTxt: {
    fontWeight: '500',
    fontSize: scale(27),
    lineHeight: scale(40),
    color: colors.black,
    marginBottom: scale(24),
  },
  occaianRight: {
    flex: 1,
    marginLeft: scale(40),
  },
  seatingView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mapItem: {
    width: scale(150),
    height: scale(130),
    borderColor: colors.purple,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(29),
    marginBottom: scale(30),
    borderRadius: scale(9),
  },
  mapItem1: {
    width: scale(150),
    height: scale(130),
    borderColor: colors.purple,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(29),
    marginBottom: scale(30),
    borderRadius: scale(9),
    backgroundColor: colors.purple,
  },
  wave: {
    width: scale(25),
    height: scale(25),
    marginBottom: scale(5),
    tintColor: colors.purple,
  },
  wave1: {
    width: scale(25),
    height: scale(25),
    marginBottom: scale(5),
    tintColor: colors.white,
  },
  anyTxt: {
    fontSize: scale(25),
    lineHeight: scale(38),
    fontWeight: '500',
    color: colors.purple,
    textAlign: 'center',
  },
  anyTxt1: {
    fontSize: scale(25),
    lineHeight: scale(38),
    fontWeight: '500',
    color: colors.white,
    textAlign: 'center',
  },
  nextBtn: {
    backgroundColor: '#C7CDD6',
    width: scale(506),
    height: scale(62),
    alignSelf: 'center',
    marginTop: scale(40),
    borderRadius: scale(73),
  },
  nextBtn1: {
    backgroundColor: colors.purple,
    width: scale(506),
    height: scale(62),
    alignSelf: 'center',
    marginTop: scale(40),
    borderRadius: scale(73),
  },
  skipBtn: {
    backgroundColor: colors.white,
    width: scale(506),
    height: scale(62),
    alignSelf: 'center',
    marginTop: scale(23),
    borderColor: colors.purple,
    borderRadius: scale(73),
    borderWidth: scale(1),
  },
  skipTxt: {
    color: colors.purple,
  },
  confirmContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(40),
  },
  orderView: {
    paddingVertical: scale(14),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: scale(60),
    borderRadius: scale(10),
  },
  profileView: {
    width: scale(114),
    height: scale(114),
  },
  profile: {
    width: scale(114),
    height: scale(114),
    borderRadius: scale(57),
  },
  online: {
    width: scale(21),
    height: scale(21),
    borderRadius: scale(11),
    backgroundColor: colors.green,
    position: 'absolute',
    bottom: scale(5),
    right: scale(5),
    borderColor: colors.white,
    borderWidth: scale(2),
  },
  nameTxt: {
    color: '#3F4C50',
    marginTop: scale(22),
    fontSize: scale(28),
    lineHeight: scale(42),
    fontWeight: '400',
  },
  kTxt: {
    color: '#4D4D4D',
    marginTop: scale(5),
    fontSize: scale(20),
    lineHeight: scale(30),
    fontWeight: '400',
  },
  numberTxt: {
    color: '#3F4C50',
    marginTop: scale(10),
    fontSize: scale(25),
    lineHeight: scale(30),
    fontWeight: '500',
  },
  emailTxt: {
    color: '#3F4C50',
    marginTop: scale(10),
    fontSize: scale(24),
    lineHeight: scale(28),
    fontWeight: '500',
  },
  dateTxt: {
    color: '#3F4C50',
    marginTop: scale(22),
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '700',
  },
  timeView: {
    backgroundColor: colors.purple,
    borderRadius: scale(100),
    paddingHorizontal: scale(17),
    paddingVertical: scale(10),
    alignItems: 'center',
    marginTop: scale(10),
  },
  timeIcon: {
    width: scale(14),
    height: scale(14),
    tintColor: colors.white,
  },
  group: {
    width: scale(18),
    height: scale(15),
    tintColor: colors.purple,
  },
  timeTxt2: {
    color: colors.white,
    fontSize: scale(14),
    lineHeight: scale(21),
    fontWeight: '500',
    marginLeft: scale(5),
  },
  tableTxt: {
    color: '#21132B',
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '500',
    marginTop: scale(10),
  },
  guestRow: {
    alignItems: 'center',
  },
  guestTxt: {
    color: colors.purple,
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '500',
    marginLeft: scale(5),
  },
  outDoor: {
    marginTop: scale(10),
    alignItems: 'center',
  },
  seatingTxt: {
    color: '#21132B',
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '500',
    paddingHorizontal: scale(5),
  },
  confirmBtn: {
    backgroundColor: colors.purple,
    width: scale(506),
    height: scale(62),
    alignSelf: 'center',
    marginTop: scale(23),
    borderColor: colors.purple,
    borderRadius: scale(73),
    borderWidth: scale(1),
  },
  confirmTxt: {
    color: colors.white,
    fontSize: scale(20),
    lineHeight: scale(26),
    fontWeight: '500',
  },
});
