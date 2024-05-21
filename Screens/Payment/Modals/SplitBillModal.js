import React from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import {DropdownPicker} from '../../../Components/DropDownPicker';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import CountButton from '../../../Components/CountButton';
import CustomButton from '../../../Components/CustomButton';

const SplitBillModal = ({visible, onClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{'Split bill'}</Text>
          <Text style={styles.employTxt}>{'Employee'}</Text>
          <DropdownPicker
            options={['David']}
            onSelect={val => console.log(val)}
            selectedValue={'David'}
            dropStyle={styles.dropStyle}
          />
          <View style={styles.billView}>
            <Text style={styles.billTxt}>{'Total Bill'}</Text>
            <View style={styles.totalView}>
              <Text style={styles.totalTxt}>{'246.00'}</Text>
              <Text style={styles.totalTxt}>{'$'}</Text>
            </View>
            <Text style={styles.splitTxt}>{'Split 1'}</Text>
            <View style={styles.splitView}>
              <Text style={styles.splitTxt1}>{'200.00'}</Text>
              <Text style={styles.splitTxt1}>{'$'}</Text>
            </View>
            <FlexDirectionView Row style={styles.btnView}>
              <CountButton
                value={2}
                style={styles.countBtn}
                valueStyle={styles.valTxt}
                onSelect={val => console.log(val)}
              />
              <CountButton
                value={3}
                style={styles.countBtn}
                valueStyle={styles.valTxt}
                onSelect={val => console.log(val)}
              />
              <CountButton
                value={4}
                style={styles.countBtn}
                valueStyle={styles.valTxt}
                onSelect={val => console.log(val)}
              />
              <TouchableOpacity style={styles.customBtn}>
                <Text style={styles.valTxt}>{'Custom'}</Text>
              </TouchableOpacity>
            </FlexDirectionView>
          </View>
          <CustomButton
            title={'Continue'}
            style={styles.continueBtn}
            onPress={onClose}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: scale(628),
    backgroundColor: 'white',
    borderRadius: scale(12),
    paddingHorizontal: scale(50),
    paddingVertical: scale(40),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: colors.black,
    fontWeight: '500',
    fontSize: scale(36),
    lineHeight: scale(54),
    marginBottom: scale(44),
  },
  employTxt: {
    color: colors.black,
    fontWeight: '400',
    fontSize: scale(26),
    lineHeight: scale(32),
    marginBottom: scale(10),
  },
  dropStyle: {
    width: scale(528),
  },
  billView: {
    borderColor: colors.borderGray,
    borderWidth: 1,
    borderRadius: scale(11),
    padding: scale(50),
    marginTop: scale(70),
  },
  billTxt: {
    color: colors.black,
    fontSize: scale(28),
    fontWeight: '700',
    marginBottom: scale(20),
  },
  totalView: {
    flexDirection: 'row',
    backgroundColor: colors.purple,
    paddingHorizontal: scale(20),
    height: scale(75),
    borderRadius: scale(11),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalTxt: {
    color: colors.white,
    fontSize: scale(28),
    fontWeight: '700',
  },
  splitTxt: {
    marginTop: scale(30),
    marginBottom: scale(20),
    color: colors.black,
    fontWeight: '400',
    fontSize: scale(24),
    lineHeight: scale(26),
  },
  splitView: {
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    height: scale(75),
    borderRadius: scale(11),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.purple,
    borderWidth: 1,
    marginBottom: scale(30),
  },
  splitTxt1: {
    color: '#5A5D6C',
    fontSize: scale(28),
    fontWeight: '400',
  },
  countBtn: {
    width: scale(60),
    height: scale(60),
    marginRight: scale(14),
    backgroundColor: '#FAF7FD',
    marginBottom: 0,
  },
  valTxt: {
    fontWeight: '500',
    fontSize: scale(24),
    lineHeight: scale(26),
    color: colors.black,
  },
  customBtn: {
    backgroundColor: '#FAF7FD',
    width: scale(206),
    height: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueBtn: {
    backgroundColor: colors.purple,
    marginTop: scale(50),
  },
});

export default SplitBillModal;
