import React, {useEffect, useState} from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import EditText from '../../../Components/EditText';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import CustomButton from '../../../Components/CustomButton';
import {CreateCustomer} from '../../../src/APICalling/APIs';
import {isValidEmail} from '../../../utilities/Convertor';
import Toast from 'react-native-toast-message';

const AddCustomerModal = ({visible, setVisible}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [enable, setEnable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isValid = isValidEmail(email);
    if (phone !== '' && isValid) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [email, phone]);
  const savePress = async () => {
    setIsLoading(true);
    const data = {
      fullName: fullName,
      email: email,
      guest: false,
      contactNumber: phone,
      addressLine1: address1,
      addressLine2: address2,
      zipCode: postalCode,
      city: city,
      State: state,
    };
    try {
      const res = await CreateCustomer(data);
      console.log('CreateCustomer_response', res);

      if (res?.message === 'Customer already exists.') {
        setIsLoading(false);
        Toast.show({
          type: 'error',
          text1: 'Zewst',
          text2: 'Customer already exists',
        });
        // setVisible();
      } else {
        setIsLoading(false);

        Toast.show({
          type: 'success',
          text1: 'Zewst',
          text2: 'Customer Created Successfully',
        });
        setAddress1('');
        setAddress2('');
        setCity('');
        setState('');
        setFullName('');
        setEmail('');
        setPhone('');
        setPostalCode('');
        setVisible();
      }
    } catch (error) {
      setIsLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Zewst',
        text2: 'Error in Creating Customer',
      });
      console.log('CreateCustomer_Error', error.message);
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible();
      }}>
      <TouchableOpacity
        style={styles.modalContainer}
        onPress={() => setVisible()}>
        <Pressable style={styles.modalContent} onPress={() => {}}>
          <Text style={styles.customerTxt}>{'Customer Details'}</Text>
          <EditText
            placeholder={'Full name'}
            style={styles.input}
            value={fullName}
            onChangeText={val => setFullName(val)}
          />
          <EditText
            placeholder={'Phone no'}
            style={styles.input}
            value={phone}
            onChangeText={val => setPhone(val)}
          />
          <EditText
            placeholder={'Email ID'}
            style={styles.input}
            value={email}
            onChangeText={val => setEmail(val)}
          />
          <Text style={styles.BillingTxt}>{'Billing Address'}</Text>
          <EditText
            placeholder={'Address line 1'}
            style={styles.input}
            value={address1}
            onChangeText={val => setAddress1(val)}
          />
          <EditText
            placeholder={'Address line 2'}
            style={styles.input}
            value={address2}
            onChangeText={val => setAddress2(val)}
          />
          <FlexDirectionView Row>
            <EditText
              placeholder={'City'}
              style={[styles.input1, {marginRight: scale(10)}]}
              value={city}
              onChangeText={val => setCity(val)}
            />
            <EditText
              placeholder={'State'}
              style={styles.input1}
              value={state}
              onChangeText={val => setState(val)}
            />
          </FlexDirectionView>
          <EditText
            placeholder={'Postal code'}
            style={styles.input}
            value={postalCode}
            onChangeText={val => setPostalCode(val)}
          />
          <CustomButton
            title={'Save customer'}
            style={enable ? styles.btn : styles.btn1}
            titleStyle={styles.btnTxt}
            onPress={() => {
              enable ? savePress() : null;
            }}
            loading={isLoading}
          />
        </Pressable>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingTop: Platform.OS == 'ios' ? scale(300) : scale(250),
    paddingRight: scale(200),
  },
  modalContent: {
    width: scale(437),
    backgroundColor: 'white',
    paddingVertical: scale(18),
    borderRadius: scale(10),
    paddingHorizontal: scale(17),
  },
  customerTxt: {
    fontWeight: '500',
    fontSize: scale(20),
    lineHeight: scale(30),
    color: colors.black,
  },
  input: {
    marginTop: scale(18),
    backgroundColor: '#EFF1F999',
    borderWidth: 0,
  },
  BillingTxt: {
    fontWeight: '500',
    fontSize: scale(20),
    lineHeight: scale(30),
    color: colors.black,
    marginTop: scale(18),
  },
  input1: {
    marginTop: scale(18),
    backgroundColor: '#EFF1F999',
    borderWidth: 0,
    flex: 1,
  },
  btn: {
    backgroundColor: colors.purple,
    marginTop: scale(18),
  },
  btn1: {
    backgroundColor: colors.borderGray,
    marginTop: scale(18),
  },
  btnTxt: {
    fontWeight: '500',
    fontSize: scale(24),
    lineHeight: scale(30),
    color: colors.white,
  },
});

export default AddCustomerModal;
