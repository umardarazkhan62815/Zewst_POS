import React, {useState, useRef} from 'react';
import {Modal, Text, View, StyleSheet} from 'react-native';
import {colors} from '../../../utilities/colors';

import {scale} from '../../../utilities/scale';
import {DropdownPicker} from '../../../Components/DropDownPicker';
import CustomButton from '../../../Components/CustomButton';

const TaxModal = ({visible, setVisible}) => {
  const [taxtype, setTaxType] = useState('');
  const [tax, setTax] = useState('');

  const handlePress = () => {
    setVisible({type: taxtype, tax: tax});
    setTaxType('');
    setTax('');
  };
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.selectTxt}>{'Add new tax'}</Text>

          <DropdownPicker
            style={styles.addressView}
            options={['Vat1', 'Vat2', 'Vat3', 'Vat4']}
            onSelect={val => setTaxType(val)}
            selectedValue={taxtype}
            dropStyle={styles.dropStyle}
            valStyle={styles.valStyle}
          />
          <DropdownPicker
            style={styles.addressView}
            options={['5%', '10%', '15%', '20%']}
            onSelect={val => setTax(val)}
            selectedValue={tax}
            dropStyle={styles.dropStyle}
            valStyle={styles.valStyle}
          />

          <CustomButton
            title={'Continue'}
            style={styles.continueBtn}
            titleStyle={styles.continueTxt}
            onPress={() => handlePress()}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  subContainer: {
    width: scale(667),
    backgroundColor: colors.white,
    borderRadius: scale(12),
    paddingVertical: scale(36),
    paddingHorizontal: scale(40),
  },
  selectTxt: {
    color: colors.black,
    fontSize: scale(26),
    lineHeight: scale(30),
    fontWeight: '500',
    textAlign: 'center',
    marginTop: scale(4),
  },
  addressView: {
    height: scale(69),
    width: scale(593),
    marginTop: scale(40),
    justifyContent: 'center',
  },
  dropStyle: {
    width: scale(593),
  },
  valStyle: {
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueBtn: {
    backgroundColor: colors.purple,
    height: scale(69),
    marginTop: scale(40),
    width: scale(597),
  },
  backBtn: {
    backgroundColor: colors.purpleLight,
    height: scale(69),
    marginTop: scale(40),
    width: scale(597),
    borderColor: colors.purple,
    borderWidth: scale(1),
  },
  continueTxt: {
    fontSize: scale(18),
    lineHeight: scale(18),
    fontWeight: '600',
    color: colors.white,
  },
  backTxt: {
    fontSize: scale(18),
    lineHeight: scale(18),
    fontWeight: '600',
    color: colors.purple,
  },
  addView: {
    borderWidth: 1,
    borderColor: colors.borderGray,
    borderRadius: scale(12),
    width: scale(597),
    padding: scale(20),
    marginTop: scale(40),
  },
  addressTxt: {
    color: '#A2A1A8CC',
    fontWeight: '300',
    fontSize: scale(16),
    lineHeight: scale(24),
  },
});

export default TaxModal;
