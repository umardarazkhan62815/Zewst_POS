import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import {icons} from '../../../assets/icons';
import {images} from '../../../assets/images';
import CustomButton from '../../../Components/CustomButton';
import {DropdownPicker} from '../../../Components/DropDownPicker';
import ShiftData from '../Components/ShiftData';
import CountButton from '../../../Components/CountButton';

const EndShiftModal = ({visible, onPress, onClosePress}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.statusModalView}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={onPress}>
            <Image source={icons.cross} style={styles.cross} />
          </TouchableOpacity>
          <View style={styles.mainContent}>
            <View style={styles.parts}>
              <View style={styles.leftView}>
                <Text style={styles.employeeTxt}>{'Employee'}</Text>
                <DropdownPicker
                  selectedValue={'David'}
                  style={styles.dropDown}
                  dropStyle={{width: scale(426)}}
                  options={['David']}
                  onSelect={val => {
                    console.log(val);
                  }}
                />
                <View style={styles.shiftTimeView}>
                  <ShiftData
                    label={'Start of the shift'}
                    icon
                    value={'123.00'}
                  />
                  <ShiftData
                    style={{marginTop: scale(40)}}
                    label={'Closing time'}
                    value={'123.00'}
                  />
                  <ShiftData
                    style={{marginTop: scale(75)}}
                    label={'Total sales'}
                    value={'246.00'}
                    labelStyle={styles.totalTxt}
                    valueStyle={{backgroundColor: colors.purple}}
                    valTxtStyle={{color: colors.white}}
                  />
                </View>
              </View>
              <View
                style={{
                  borderRightWidth: 5,
                  borderRightColor: '#E0E0E0',
                  marginHorizontal: scale(60),
                }}
              />
              <View style={styles.rightView}>
                <View style={[styles.valueView]}>
                  <Text style={[styles.vlaueTxt]}>{'123.00'}</Text>
                  <Text style={[styles.vlaueTxt]}>{'$'}</Text>
                </View>
                <View style={styles.rowView}>
                  <CountButton
                    value={1}
                    style={styles.count}
                    onSelect={() => {}}
                  />
                  <CountButton
                    value={2}
                    style={styles.count}
                    onSelect={() => {}}
                  />
                  <CountButton
                    value={3}
                    style={styles.count}
                    onSelect={() => {}}
                  />
                </View>
                <View style={styles.rowView}>
                  <CountButton
                    value={4}
                    style={styles.count}
                    onSelect={() => {}}
                  />
                  <CountButton
                    value={5}
                    style={styles.count}
                    onSelect={() => {}}
                  />
                  <CountButton
                    value={6}
                    style={styles.count}
                    onSelect={() => {}}
                  />
                </View>
                <View style={styles.rowView}>
                  <CountButton
                    value={7}
                    style={styles.count}
                    onSelect={() => {}}
                  />
                  <CountButton
                    value={8}
                    style={styles.count}
                    onSelect={() => {}}
                  />
                  <CountButton
                    value={9}
                    style={styles.count}
                    onSelect={() => {}}
                  />
                </View>
                <View style={[styles.rowView, {justifyContent: 'center'}]}>
                  <CountButton
                    value={0}
                    style={styles.count}
                    onSelect={() => {}}
                  />
                </View>
                <CustomButton
                  title={'Add funds'}
                  style={styles.fundBtn}
                  titleStyle={styles.fundTxt}
                />
              </View>
            </View>
            <View style={styles.closeView}>
              <CustomButton
                title={'End shift'}
                style={styles.shiftBtn}
                titleStyle={[
                  styles.closeTxt,
                  {color: colors.white, fontWeight: '700'},
                ]}
              />
              <CustomButton
                title={'Close restaurant'}
                style={styles.closeBtn}
                titleStyle={styles.closeTxt}
                onPress={onClosePress}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EndShiftModal;

const styles = StyleSheet.create({
  statusModalView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(435),
    paddingVertical: scale(82),
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    padding: scale(30),
  },
  cross: {
    width: scale(25),
    height: scale(25),
    alignSelf: 'flex-end',
  },
  mainContent: {
    paddingHorizontal: scale(70),
    paddingTop: scale(40),
  },
  parts: {
    flexDirection: 'row',
  },
  leftView: {
    flex: 1,
  },
  rightView: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: scale(10),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: scale(30),
    paddingHorizontal: scale(40),
  },
  employeeTxt: {
    color: colors.black,
    fontWeight: '400',
    fontSize: scale(32),
  },
  dropDown: {
    width: scale(426),
    height: scale(53),
    marginTop: scale(20),
  },
  shiftTimeView: {
    borderWidth: 1,
    borderColor: colors.purple,
    marginTop: scale(60),
    padding: scale(50),
    borderRadius: scale(7),
  },
  totalTxt: {
    fontWeight: '700',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  count: {
    width: scale(96),
    height: scale(99),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF7FD',
    marginBottom: scale(35),
  },
  valueView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: scale(7),
    borderColor: colors.purple05,
    paddingHorizontal: scale(21),
    paddingVertical: scale(13),
    marginTop: scale(20),
    height: scale(72),
    width: scale(394),
    marginBottom: scale(30),
  },
  vlaueTxt: {
    color: colors.black,
    fontWeight: '500',
    fontSize: scale(28),
  },
  fundBtn: {
    backgroundColor: colors.purple05,
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: scale(7),
  },
  fundTxt: {
    color: colors.purple,
  },
  closeView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(70),
    justifyContent: 'center',
  },
  shiftBtn: {
    width: scale(413),
    height: scale(77),
    backgroundColor: colors.purple,
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: scale(7),
  },
  closeBtn: {
    width: scale(413),
    height: scale(77),
    backgroundColor: colors.purple05,
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: scale(7),
    marginLeft: scale(50),
  },
  closeTxt: {
    color: colors.purple,
    fontSize: scale(36),
    fontWeight: '400',
  },
});
