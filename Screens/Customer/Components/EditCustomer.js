import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import {icons} from '../../../assets/icons';
import EditText from '../../../Components/EditText';
import {DropdownPicker} from '../../../Components/DropDownPicker';
import CustomButton from '../../../Components/CustomButton';
import {editCustomer} from '../../../src/APICalling/APIs';
import {useDispatch, useSelector} from 'react-redux';
import {getCustomersAPI} from '../../../src/Redux/Slices/GetCustomerSlice';
import {isValidEmail} from '../../../utilities/Convertor';
import Toast from 'react-native-toast-message';
const EditCustomer = ({onCancelPress, item, isEdit}) => {
  const dispatch = useDispatch();
  let branchId = useSelector(state => state.menu);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [isEnable, setIsEnable] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setFullName(item?.fullName);
    setPhone(item?.contact?.[0]?.contactNumber);
    setEmail(item?.email);
    setAddress1(item?.address[0]?.addressLine1);
    setAddress2(item?.address[0]?.addressLine2);
    setIsGuest(item?.guest);
    setCity(item?.address[0]?.city);
    setState(item?.address[0]?.state);
    setPostalCode(item?.address[0]?.zipCode);
  }, [item]);

  useEffect(() => {
    const isValid = isValidEmail(email);
    if (phone !== '' && isValid) {
      setIsEnable(true);
    } else {
      setIsEnable(false);
    }
  }, [email, phone]);
  const onNextPress = async () => {
    setIsLoading(true);
    const data = {
      id: item?._id,
      fullName: fullName,
      email: email,
      contactNumber: phone,
      addressLine1: address1,
      addressLine2: address2,
      zipCode: postalCode,
      city: city,
      State: state,
      guest: isGuest,
    };
    try {
      const res = await editCustomer(data);
      console.log('RESult', res);
      if (res?.message === 'Customer updated successfully!') {
        setIsLoading(false);
        Toast.show({
          type: 'success',
          text1: 'Zewst',
          text2: 'Customer Updated Successfully',
        });
        dispatch(
          getCustomersAPI(branchId?.data?.posMenuItems?.brand?.branch?._id),
        );
        onCancelPress();
      }
    } catch (error) {
      setIsLoading(false);

      console.log('Error', error.response.data);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <FlexDirectionView Row>
        <TouchableOpacity style={styles.stepView}>
          <Image
            source={icons.addProfile}
            style={styles.stepIcon}
            resizeMode="center"
          />
          <Text style={styles.stepTxt}>{'Personal Information'}</Text>
        </TouchableOpacity>
      </FlexDirectionView>

      <View style={styles.formView}>
        <TouchableOpacity style={styles.cameraView}>
          <Image style={styles.camera} source={icons.camera} />
        </TouchableOpacity>
        <FlexDirectionView Row>
          <EditText
            placeholder={'full Name'}
            style={styles.input}
            value={fullName}
            onChangeText={val => setFullName(val)}
          />
          {/* <EditText placeholder={'Last Name'} style={styles.input1} /> */}
        </FlexDirectionView>
        <FlexDirectionView Row style={styles.numberView}>
          <EditText
            placeholder={'Mobile Number'}
            style={styles.input}
            value={phone}
            onChangeText={val => setPhone(val)}
          />
          <EditText
            placeholder={'Email Address'}
            style={styles.input1}
            value={email}
            onChangeText={val => setEmail(val)}
          />
        </FlexDirectionView>

        <FlexDirectionView Row style={styles.numberView}>
          <EditText
            placeholder={'Address line 1'}
            style={styles.input}
            value={address1}
            onChangeText={val => setAddress1(val)}
          />
          <EditText
            placeholder={'Address line 2'}
            style={styles.input1}
            value={address2}
            onChangeText={val => setAddress2(val)}
          />
        </FlexDirectionView>
        <View style={styles.numberView1}>
          <DropdownPicker
            options={['Guj', 'Lah']}
            onSelect={val => setCity(val)}
            style={styles.dropDownB}
            valStyle={styles.valStyle}
            placeholder={'City'}
            dropStyle={styles.flatList}
            selectedValue={city}
          />
          <DropdownPicker
            options={['puj', 'Sindh']}
            onSelect={val => setState(val)}
            style={styles.dropDownB}
            valStyle={styles.valStyle}
            placeholder={'State'}
            dropStyle={styles.flatList}
            selectedValue={state}
          />
          <DropdownPicker
            options={['123', '1234']}
            onSelect={val => setPostalCode(val)}
            style={[styles.dropDownB, {marginRight: 0}]}
            valStyle={styles.valStyle}
            placeholder={'Code'}
            dropStyle={styles.flatList}
            selectedValue={postalCode}
          />
        </View>
      </View>
      <View style={{flex: 1}} />

      <View style={styles.btnView}>
        <View style={{flex: 1}} />
        <CustomButton
          title={'Cancel'}
          style={styles.cancelBtn}
          titleStyle={styles.cancelTxt}
          onPress={() => onCancelPress()}
        />
        {isEdit ? (
          <CustomButton
            loading={isLoading}
            title={'Next'}
            style={isEnable ? styles.nextBtn : styles.nextBtn1}
            titleStyle={styles.nextTxt}
            onPress={() => {
              console.log('Pressed', isEnable);
              isEnable ? onNextPress() : null;
            }}
          />
        ) : null}
      </View>
    </View>
  );
};

export default EditCustomer;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: scale(154),
    marginLeft: scale(94),
    marginBottom: scale(87),
    marginRight: scale(336),
    borderWidth: 1,
    borderColor: colors.borderGray,
    borderRadius: scale(11),
    // flex: 1,
    padding: scale(24),
  },
  stepView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: scale(25),
    paddingBottom: scale(8),
  },
  stepView1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.purple,
    marginRight: scale(25),
  },
  stepIcon: {
    width: scale(30),
    height: scale(30),
    tintColor: colors.purple,
    marginRight: scale(12),
  },
  stepIcon1: {
    width: scale(30),
    height: scale(30),
    tintColor: colors.black,
    marginRight: scale(12),
  },
  stepTxt: {
    color: colors.purple,
    fontSize: scale(20),
    lineHeight: scale(30),
    fontWeight: '300',
  },
  stepTxt1: {
    color: colors.black,
    fontSize: scale(20),
    lineHeight: scale(30),
    fontWeight: '300',
  },
  cameraView: {
    width: scale(123),
    height: scale(123),
    borderRadius: scale(11),
    borderWidth: 1,
    borderColor: colors.borderGray,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A2A1A833',
    marginBottom: scale(25),
  },
  camera: {
    width: scale(22),
    height: scale(21),
    tintColor: '#16151C',
    marginTop: scale(25),
    marginLeft: scale(25),
  },
  formView: {
    marginTop: scale(36),
  },
  input: {
    marginRight: scale(25),
    width: scale(627),
    height: scale(69),
  },
  input1: {
    width: scale(627),
    height: scale(69),
  },
  numberView: {
    marginTop: scale(25),
    flexDirection: 'row',
    alignItems: 'flex-start',
    // justifyContent: 'space-between',
  },
  numberView1: {
    marginTop: scale(25),
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  address: {
    marginTop: scale(25),
    width: scale(1283),
  },
  dropDown: {
    height: scale(69),
    borderColor: '#A2A1A833',
    justifyContent: 'center',
    width: scale(627),
  },
  dateView: {
    height: scale(69),
    borderColor: '#A2A1A833',
    // justifyContent: 'center',
    width: scale(627),
  },
  dropDownR: {
    height: scale(69),
    borderColor: '#A2A1A833',
    justifyContent: 'center',
    width: scale(627),
  },
  dropDownB: {
    height: scale(69),
    borderColor: '#A2A1A833',
    justifyContent: 'center',
    width: scale(410),
    marginRight: scale(25),
  },
  flatList: {
    width: scale(410),
  },

  valStyle: {
    marginTop: 0,
  },
  dropStyle: {
    height: scale(300),
  },
  flatList1: {
    width: scale(627),
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(25),
  },
  cancelBtn: {
    width: scale(112),
    height: scale(61),
    borderWidth: 1,
    borderColor: colors.borderGray,
    marginRight: scale(25),
  },
  cancelTxt: {
    color: colors.black,
    fontWeight: '300',
    fontSize: scale(20),
    lineHeight: scale(30),
  },
  nextBtn: {
    width: scale(112),
    height: scale(61),
    backgroundColor: colors.purple,
  },
  nextBtn1: {
    width: scale(112),
    height: scale(61),
    backgroundColor: colors.borderGray,
  },
  nextTxt: {
    color: colors.white,
    fontWeight: '300',
    fontSize: scale(20),
    lineHeight: scale(30),
  },
});
