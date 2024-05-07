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

const CashCoinModal = ({visible, onPress, cashPress}) => {
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
            <View style={styles.rowView}>
              <TouchableOpacity onPress={cashPress} style={styles.cashView}>
                <Image
                  source={icons.money}
                  style={styles.cash}
                  resizeMode="center"
                />
                <Text style={styles.cashTxt}>{'Cash'}</Text>
              </TouchableOpacity>
              <View style={styles.cashView}>
                <Image
                  source={icons.coin}
                  style={styles.cash}
                  resizeMode="center"
                />
                <Text style={styles.cashTxt}>{'Coin'}</Text>
              </View>
            </View>
          </View>

          <CustomButton
            title={'Go Back'}
            style={styles.closeBtn}
            titleStyle={styles.closeTxt}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CashCoinModal;

const styles = StyleSheet.create({
  statusModalView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(580),
    paddingVertical: scale(390),
  },
  modalView: {
    width: '100%',
    height: '100%',
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
    marginTop: scale(20),
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
  },
  cashView: {
    borderColor: colors.purple,
    borderRadius: scale(30),
    backgroundColor: '#FAF7FD',
    paddingHorizontal: scale(117),
    paddingVertical: scale(34),
    borderWidth: 1,
    alignItems: 'center',
  },
  cash: {
    width: scale(100),
    height: scale(72),
  },
  cashTxt: {
    fontSize: scale(24),
    color: colors.black,
    fontWeight: '500',
    marginTop: scale(25),
  },
  totalSale: {
    width: scale(426),
    alignSelf: 'center',
    marginTop: scale(40),
  },
  totalTxt: {
    fontWeight: '700',
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
    backgroundColor: colors.purpleLight,
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: scale(7),
    marginTop: scale(50),
  },

  closeTxt: {
    color: colors.purple,
    fontSize: scale(36),
    fontWeight: '400',
  },
});
