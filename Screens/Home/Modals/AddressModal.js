import React, {useState, useRef} from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  PanResponder,
} from 'react-native';
import {colors} from '../../../utilities/colors';
import {images} from '../../../assets/images';
import {icons} from '../../../assets/icons';
import {scale} from '../../../utilities/scale';
import {DropdownPicker} from '../../../Components/DropDownPicker';
import CustomButton from '../../../Components/CustomButton';

const AddressModal = ({visible, setVisible}) => {
  const [address, setAddress] = useState('');
  const [caller, setCaller] = useState('');
  const [isAddressSelected, setIsAddressSelected] = useState(false);

  const handlePress = () => {
    if (isAddressSelected) {
      setVisible();
    } else {
      setIsAddressSelected(true);
    }
  };
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.selectTxt}>{'Select Location'}</Text>
          {!isAddressSelected ? (
            <>
              <DropdownPicker
                style={styles.addressView}
                options={['Address1', 'Address2']}
                onSelect={val => setAddress(val)}
                selectedValue={address}
                dropStyle={styles.dropStyle}
                valStyle={styles.valStyle}
              />
              <DropdownPicker
                style={styles.addressView}
                options={['caller', 'caller']}
                onSelect={val => setCaller(val)}
                selectedValue={caller}
                dropStyle={styles.dropStyle}
                valStyle={styles.valStyle}
              />
            </>
          ) : (
            <View>
              <View style={styles.addView}>
                <Text style={styles.addressTxt}>
                  {
                    '9876 Willow Lane, Apartment 203\nGreenwood Heights\nSpringfield, AnyStateUnited States\n of America'
                  }
                </Text>
              </View>
              <CustomButton
                title={'Change location'}
                style={styles.backBtn}
                titleStyle={styles.backTxt}
                onPress={() => setIsAddressSelected(false)}
              />
            </View>
          )}
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

export default AddressModal;
