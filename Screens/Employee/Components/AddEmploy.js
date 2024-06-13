import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import {steps} from '../statics';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import {icons} from '../../../assets/icons';
import EditText from '../../../Components/EditText';
import {DropdownPicker} from '../../../Components/DropDownPicker';
import CustomButton from '../../../Components/CustomButton';
import ProfessionalForm from './ProfessionalForm';
import Document from './Document';
import CustomDatePicker from '../../../Components/DatePicker';
import {
  createEmployee,
  editEmployee,
  getDepartmentsApi,
  getEmployeeDetails,
  getRolesApi,
} from '../../../src/APICalling/APIs';
import {useSelector} from 'react-redux';
import {dateFormated, reverseDateFormatted} from '../../../utilities/Convertor';
import Toast from 'react-native-toast-message';
const AddEmploy = ({onCancelPress, data}) => {
  const posId = useSelector(state => state?.menu);
  // console.log('POSID', posId?.data?.posMenuItems?.brand?.branch?.branchId);
  const professionalFormRef = useRef(null);
  const [step, setStep] = useState(steps[0]);
  const [rolesList, setRolesList] = useState([]);
  const [departmentsList, setDepartmentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [DOB, setDOB] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [code, setCode] = useState('');
  const [professionInfo, setProfessionInfo] = useState('');
  const [docInfo, setDocInfo] = useState([]);

  const [userDetails, setUserDetails] = useState('');

  useEffect(() => {
    if (posId && posId?.data && posId?.data?.posMenuItems) {
      getDepartment(posId?.data?.posMenuItems?.id);
    }
    getRoles();
  }, [posId]);

  useEffect(() => {
    if (data !== undefined) {
      getDetails(data?.id);
    }
  }, [data]);

  const getDetails = async id => {
    try {
      const res = await getEmployeeDetails(id);
      const {message, employeeDetails} = res;
      if (message === 'Employee added successfully') {
        setFirstName(employeeDetails?.first_name);
        setLastName(employeeDetails?.last_name);
        setMobile(employeeDetails?.phone_number);
        setEmail(employeeDetails?.email);
        setDOB(reverseDateFormatted(employeeDetails?.dob));
        setMaritalStatus(employeeDetails?.marital_status);
        setGender(employeeDetails?.gender);
        setNationality(employeeDetails?.nationality);
        setAddress(employeeDetails?.address?.line1);
        setCity(employeeDetails?.city);
        setState(employeeDetails?.state);
        setCode(employeeDetails?.postal_code);
        setUserDetails(employeeDetails);
      }
    } catch (error) {
      console.log('getDetails-Error', error);
    }
  };

  const getDepartment = async id => {
    try {
      const result = await getDepartmentsApi(id);
      if (result?.message === 'POS Departments found successfully') {
        setDepartmentsList(result?.posDepartments?.departments);
      }
    } catch (error) {}
  };

  const getRoles = async () => {
    try {
      const result = await getRolesApi();
      if (result?.message === 'Roles found successfully') {
        const transformedData = result?.roles.map(item => ({
          ...item,
          name: item.role_name,
          role_name: undefined,
        }));
        setRolesList(transformedData);
      }
    } catch (error) {}
  };

  const onNextPress = async () => {
    if (step === steps[0]) {
      setStep(steps[1]);
    } else if (step === steps[1]) {
      setStep(steps[2]);
      if (professionalFormRef.current) {
        professionalFormRef.current.setForm();
      }
    } else if (step === steps[2]) {
      setIsLoading(true);
      const working_days = professionInfo?.selectedDays.reduce((acc, day) => {
        acc[day.title.toLowerCase()] = day.selected;
        return acc;
      }, {});
      const body = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: '12345678@WWWWa',
        phoneNumber: mobile,
        dob: dateFormated(DOB.toString()),
        branch_id: posId?.data?.posMenuItems?.brand?.branch?.branchId,
        marital_status: maritalStatus,
        gender: gender,
        nationality: nationality,
        address: {
          line1: address,
          line2: 'Xyz',
        },
        postal_code: code,
        city: city,
        state: state,
        country: nationality,
        employee_id: professionInfo?.employId,
        department_id: professionInfo?.departmentValue?.id,
        employee_status: professionInfo?.employStatus,
        working_days: working_days,
        joining_date: dateFormated(professionInfo?.joiningDate),
        hourly_rate: professionInfo?.hourlyRate.toString(),
        role_id: professionInfo?.role?.id,
        doc: docInfo,
      };
      console.log('userDetails?.id', userDetails);

      if (userDetails === '') {
        try {
          const res = await createEmployee(body);
          console.log('Result createEmployee', res);
          if (res?.message === 'Employee added successfully') {
            Toast.show({
              type: 'success',
              text1: 'Zewst',
              text2: 'Employee Created Successfully',
            });
            setIsLoading(false);
            onCancelPress();
          } else {
            setIsLoading(false);

            Toast.show({
              type: 'error',
              text1: 'Zewst',
              text2: res?.message,
            });
          }
        } catch (error) {
          setIsLoading(false);
          console.log('Create Employ Error', error);
        }
      } else {
        try {
          body.id = userDetails?.id;
          const res = await editEmployee(body);
          console.log('Result editEmployee', res);
          if (res?.message === 'Employee updated successfully') {
            Toast.show({
              type: 'success',
              text1: 'Zewst',
              text2: 'Employee updated Successfully',
            });
            setIsLoading(false);

            onCancelPress();
          } else {
            Toast.show({
              type: 'error',
              text1: 'Zewst',
              text2: res?.message,
            });
            setIsLoading(false);
          }
        } catch (error) {
          setIsLoading(false);

          console.log('Create Employ Error', error);
        }
      }
    }
  };
  const onBackPress = () => {
    if (step === steps[1]) {
      setStep(steps[0]);
    } else if (step === steps[2]) {
      setStep(steps[1]);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <FlexDirectionView Row>
        {steps.map(item => {
          return (
            <View
              // onPress={() => setStep(item)}
              style={step === item ? styles.stepView : styles.stepView1}>
              <Image
                source={item?.icon}
                style={step === item ? styles.stepIcon : styles.stepIcon1}
                resizeMode="center"
              />
              <Text style={step === item ? styles.stepTxt : styles.stepTxt1}>
                {item.name}
              </Text>
            </View>
          );
        })}
      </FlexDirectionView>
      {step === steps[0] ? (
        <View style={styles.formView}>
          <TouchableOpacity style={styles.cameraView}>
            <Image style={styles.camera} source={icons.camera} />
          </TouchableOpacity>
          <FlexDirectionView Row>
            <EditText
              placeholder={'First Name'}
              style={styles.input}
              value={firstName}
              onChangeText={val => setFirstName(val)}
            />
            <EditText
              placeholder={'Last Name'}
              style={styles.input1}
              value={lastName}
              onChangeText={val => setLastName(val)}
            />
          </FlexDirectionView>
          <FlexDirectionView Row style={styles.numberView}>
            <EditText
              placeholder={'Mobile Number'}
              style={styles.input}
              value={mobile}
              onChangeText={val => setMobile(val)}
            />
            <EditText
              placeholder={'Email Address'}
              style={styles.input1}
              value={email}
              onChangeText={val => setEmail(val)}
            />
          </FlexDirectionView>
          <View style={styles.numberView}>
            <CustomDatePicker
              style={styles.dateView}
              placeHolder={'Date of Birth'}
              selectedDate={dat => setDOB(dat)}
              date={DOB}
            />
            <DropdownPicker
              options={[{name: 'Married'}, {name: 'Single'}]}
              onSelect={val => setMaritalStatus(val?.name)}
              style={[styles.dropDown, {marginLeft: scale(25)}]}
              valStyle={styles.valStyle}
              dropStyle={styles.flatList1}
              placeholder={'Marital Status'}
              selectedValue={maritalStatus}
            />
          </View>

          <View style={styles.numberView}>
            <DropdownPicker
              options={[{name: 'MALE'}, {name: 'FEMALE'}, {name: 'OTHER'}]}
              onSelect={val => setGender(val?.name)}
              style={styles.dropDown}
              valStyle={styles.valStyle}
              placeholder={'Gender'}
              dropStyle={styles.flatList1}
              selectedValue={gender}
            />
            <DropdownPicker
              options={[{name: 'Pakistan'}, {name: 'USA'}]}
              onSelect={val => setNationality(val?.name)}
              style={[styles.dropDownR, {marginLeft: scale(25)}]}
              valStyle={styles.valStyle}
              placeholder={'Nationality'}
              dropStyle={styles.flatList1}
              selectedValue={nationality}
            />
          </View>

          <EditText
            placeholder={'Address'}
            style={styles.address}
            value={address}
            onChangeText={val => setAddress(val)}
          />

          <View style={styles.numberView1}>
            <DropdownPicker
              options={[{name: 'Gujranwala'}, {name: 'Lahore'}]}
              onSelect={val => setCity(val?.name)}
              style={styles.dropDownB}
              valStyle={styles.valStyle}
              placeholder={'City'}
              dropStyle={styles.flatList}
              selectedValue={city}
            />
            <DropdownPicker
              options={[{name: 'state1'}, {name: 'state2'}]}
              onSelect={val => setState(val?.name)}
              style={styles.dropDownB}
              valStyle={styles.valStyle}
              placeholder={'State'}
              dropStyle={styles.flatList}
              selectedValue={state}
            />
            <DropdownPicker
              options={[{name: '234'}, {name: '534'}]}
              onSelect={val => setCode(val.name)}
              style={[styles.dropDownB, {marginRight: 0}]}
              valStyle={styles.valStyle}
              placeholder={'Code'}
              dropStyle={styles.flatList}
              selectedValue={code}
            />
          </View>
        </View>
      ) : step === steps[1] ? (
        <ProfessionalForm
          ref={professionalFormRef}
          roles={rolesList}
          department={departmentsList}
          ProInfo={val => {
            console.log('ProInfo', val);
            setProfessionInfo(val);
          }}
          professionInfo={professionInfo}
          userDetails={userDetails}
        />
      ) : (
        <Document
          userDetails={userDetails}
          DocInfo={val => {
            console.log('DocInfo', val);
            setDocInfo(prevDocInfo => {
              const index = prevDocInfo.findIndex(doc => doc.key === val.key);

              if (index !== -1) {
                const updatedArray = [...prevDocInfo];
                updatedArray[index] = val;
                return updatedArray;
              } else {
                return [...prevDocInfo, val];
              }
            });
          }}
          docsList={docInfo}
          removeDoc={val => {
            setDocInfo(prevDocInfo => {
              const index = prevDocInfo.findIndex(doc => doc.key === val.key);
              if (index !== -1) {
                const updatedArray = prevDocInfo.filter((_, i) => i !== index);
                return updatedArray;
              }
            });
          }}
        />
      )}
      <View style={styles.btnView}>
        <View style={{flex: 1}} />
        <CustomButton
          title={step === steps[0] ? 'Cancel' : 'Back'}
          style={styles.cancelBtn}
          titleStyle={styles.cancelTxt}
          onPress={() => {
            step === steps[0] ? onCancelPress() : onBackPress();
          }}
        />
        <CustomButton
          title={userDetails === '' ? 'Save' : 'Update'}
          style={styles.nextBtn}
          titleStyle={styles.nextTxt}
          onPress={() => {
            onNextPress();
          }}
          loading={isLoading}
        />
      </View>
    </View>
  );
};

export default AddEmploy;

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
    borderBottomColor: colors.purple,
    borderBottomWidth: 2,
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
