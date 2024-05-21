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
import CustomButton from '../../../Components/CustomButton';
import {DropdownPicker} from '../../../Components/DropDownPicker';
import ShiftData from '../Components/ShiftData';

const CloseResturantModal = ({visible, onPress, onClosePress}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.statusModalView}>
        <View style={styles.modalView}>
          <View>
            <Text style={styles.emplyTxt}>{'Employee'}</Text>
            <DropdownPicker
              selectedValue={'David'}
              style={styles.dropDown}
              dropStyle={{width: scale(426)}}
              options={['David']}
              onSelect={val => {
                console.log(val);
              }}
            />
          </View>
          <View style={styles.shiftView}>
            <View style={[styles.rowView, {marginTop: 0}]}>
              <ShiftData
                style={{width: scale(426)}}
                icon
                label={'Start of the shift'}
                value={'123.00'}
              />
              <ShiftData
                style={{width: scale(426)}}
                label={'1 ¢'}
                value={'123.00'}
              />
            </View>
            <View style={styles.rowView}>
              <ShiftData
                style={{width: scale(426)}}
                label={'1 $'}
                value={'123.00'}
              />
              <ShiftData
                style={{width: scale(426)}}
                label={'5 $'}
                value={'123.00'}
              />
            </View>

            <View style={styles.rowView}>
              <ShiftData
                style={{width: scale(426)}}
                label={'10 $'}
                value={'123.00'}
              />
              <ShiftData
                style={{width: scale(426)}}
                label={'20 $'}
                value={'123.00'}
              />
            </View>

            <View style={styles.rowView}>
              <ShiftData
                style={{width: scale(426)}}
                label={'50 $'}
                value={'123.00'}
              />
              <ShiftData
                style={{width: scale(426)}}
                label={'100 $'}
                value={'123.00'}
              />
            </View>
            <ShiftData
              style={styles.totalSale}
              label={'Total sales'}
              value={'246.00'}
              labelStyle={styles.totalTxt}
              valueStyle={{backgroundColor: colors.purple}}
              valTxtStyle={{color: colors.white}}
            />
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
    </Modal>
  );
};

export default CloseResturantModal;

const styles = StyleSheet.create({
  statusModalView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: scale(1147),
    height: scale(1056),
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: scale(35),
    paddingHorizontal: scale(100),
  },
  emplyTxt: {
    fontSize: scale(31),
    fontWeight: '400',
    color: colors.black,
  },
  dropDown: {
    width: scale(426),
    height: scale(53),
    // marginTop: scale(20),
  },
  shiftView: {
    borderColor: colors.purple,
    borderWidth: 1,
    borderRadius: scale(7),
    paddingHorizontal: scale(26),
    paddingVertical: scale(30),
    marginTop: scale(30),
    width: '100%',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: scale(20),
  },
  totalSale: {
    width: scale(426),
    alignSelf: 'center',
    marginTop: scale(20),
  },
  totalTxt: {
    fontWeight: '700',
  },
  closeView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(40),
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
    backgroundColor: colors.purpleLight,
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
