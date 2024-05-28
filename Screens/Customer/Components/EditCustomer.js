import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import {icons} from '../../../assets/icons';
import EditText from '../../../Components/EditText';
import {DropdownPicker} from '../../../Components/DropDownPicker';
import CustomButton from '../../../Components/CustomButton';
const EditCustomer = ({onCancelPress}) => {
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
          <EditText placeholder={'First Name'} style={styles.input} />
          <EditText placeholder={'Last Name'} style={styles.input1} />
        </FlexDirectionView>
        <FlexDirectionView Row style={styles.numberView}>
          <EditText placeholder={'Mobile Number'} style={styles.input} />
          <EditText placeholder={'Email Address'} style={styles.input1} />
        </FlexDirectionView>

        <FlexDirectionView Row style={styles.numberView}>
          <EditText placeholder={'Address line 1'} style={styles.input} />
          <EditText placeholder={'Address line 2'} style={styles.input1} />
        </FlexDirectionView>
        <View style={styles.numberView1}>
          <DropdownPicker
            options={['Status1', 'Status2']}
            onSelect={val => console.log(val)}
            style={styles.dropDownB}
            valStyle={styles.valStyle}
            placeholder={'City'}
            dropStyle={styles.flatList}
          />
          <DropdownPicker
            options={['Status1', 'Status2']}
            onSelect={val => console.log(val)}
            style={styles.dropDownB}
            valStyle={styles.valStyle}
            placeholder={'State'}
            dropStyle={styles.flatList}
          />
          <DropdownPicker
            options={['Status1', 'Status2']}
            onSelect={val => console.log(val)}
            style={[styles.dropDownB, {marginRight: 0}]}
            valStyle={styles.valStyle}
            placeholder={'Code'}
            dropStyle={styles.flatList}
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
        <CustomButton
          title={'Next'}
          style={styles.nextBtn}
          titleStyle={styles.nextTxt}
          onPress={() => onCancelPress()}
        />
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
  nextTxt: {
    color: colors.white,
    fontWeight: '300',
    fontSize: scale(20),
    lineHeight: scale(30),
  },
});
