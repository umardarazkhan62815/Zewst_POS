import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from '../../../utilities/scale';
import EditText from '../../../Components/EditText';
import {DropdownPicker} from '../../../Components/DropDownPicker';
import {Slider} from '@rneui/themed';
import {colors} from '../../../utilities/colors';
import CustomDatePicker from '../../../Components/DatePicker';
import DayPickerModal from '../Modals/DaysPickerModal';
import {reverseDateFormatted} from '../../../utilities/Convertor';

const ProfessionalForm = forwardRef(
  ({roles, department, ProInfo, professionInfo, userDetails}, ref) => {
    // console.log('department', department);
    const [selectedDays, setSelectedDays] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [employId, setEmployId] = useState('');
    const [departmentValue, setDepartmentValue] = useState('');
    const [role, setRole] = useState('');
    const [joiningDate, setJoiningDate] = useState('');
    const [hourlyRate, setHourlyRate] = useState(0);
    const [branch, setBranch] = useState('');
    const [employStatus, setEmployStatus] = useState('');
    const [daysString, setDaysString] = useState('');

    useEffect(() => {
      if (professionInfo !== '') {
        getDays(professionInfo?.selectedDays);
        setEmployId(professionInfo?.employId);
        setDepartmentValue(professionInfo?.departmentValue);
        setRole(professionInfo?.role);
        setJoiningDate(professionInfo?.joiningDate);
        setHourlyRate(professionInfo?.hourlyRate);
        setBranch(professionInfo?.branch);
        setEmployStatus(professionInfo?.employStatus);
        setSelectedDays(professionInfo?.selectedDays);
      }
    }, [professionInfo]);
    useEffect(() => {
      if (userDetails !== '') {
        console.log('DATA', userDetails);
        setDaysString(formatDaysToString(userDetails?.working_days));
        setEmployId(userDetails?.employee_id);
        setRole(getRole(userDetails?.role));
        setJoiningDate(reverseDateFormatted(userDetails?.joining_date));
        setHourlyRate(userDetails?.hourly_rate);
        setBranch(userDetails?.branch);
        setEmployStatus(userDetails?.employee_status);
        setDepartmentValue(getDepartment(userDetails?.department_id));
        setSelectedDays(updateDaysFormate(userDetails?.working_days));
      }
    }, [userDetails]);
    const getDepartment = id => {
      const departmentItem = department?.find(item => item.id === id);
      return departmentItem || null;
    };
    const updateDaysFormate = daysObject => {
      const daysArray = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ];

      const convertedDaysList = daysArray.map(day => ({
        title: day,
        selected: daysObject[day.toLowerCase()] || false,
      }));

      return convertedDaysList;
    };
    const getRole = name => {
      const res = roles.filter(item => item?.name === name);
      return res[0];
    };
    const formatDaysToString = daysObject => {
      const daysArray = Object.entries(daysObject)
        .filter(([day, isSelected]) => isSelected)
        .map(([day, isSelected]) => day);

      return daysArray.join(', ');
    };

    const onValueChange = value => {
      setHourlyRate(value);
    };

    const getDays = data => {
      const filteredDays = data
        .filter(item => item.selected)
        .map(item => item.title)
        .join(', ');
      setDaysString(filteredDays);
    };

    useImperativeHandle(ref, () => ({
      setForm() {
        ProInfo({
          employId,
          departmentValue,
          role,
          joiningDate,
          hourlyRate,
          branch,
          employStatus,
          selectedDays,
        });
      },
    }));

    return (
      <View style={styles.mainContainer}>
        <DayPickerModal
          visible={modalVisible}
          setVisible={val => {
            setModalVisible(false);
            getDays(val);
            setSelectedDays(val);
          }}
        />
        <EditText
          placeholder={'Employee ID'}
          value={employId}
          onChangeText={val => setEmployId(val)}
        />
        <View style={styles.numberView}>
          <DropdownPicker
            options={department}
            onSelect={val => setDepartmentValue(val)}
            style={styles.dropDown}
            valStyle={styles.valStyle}
            placeholder={'Select Department'}
            dropStyle={styles.flatList1}
            selectedValue={departmentValue?.name}
          />
          <DropdownPicker
            options={roles}
            onSelect={val => setRole(val)}
            style={styles.dropDown}
            valStyle={styles.valStyle}
            placeholder={'Role'}
            dropStyle={styles.flatList1}
            selectedValue={role?.name}
          />
        </View>
        <View style={styles.numberView}>
          <DropdownPicker
            options={[{name: 'PERMANENT'}, {name: 'CONTRACT'}]}
            onSelect={val => setEmployStatus(val?.name)}
            style={styles.dropDown}
            valStyle={styles.valStyle}
            placeholder={'Employment status'}
            dropStyle={styles.flatList1}
            selectedValue={employStatus}
          />
        </View>
        <View style={styles.numberView}>
          <TouchableOpacity
            style={styles.dayView}
            onPress={() => setModalVisible(true)}>
            <Text style={daysString === '' ? styles.dayTxt : styles.dayTxt1}>
              {daysString === '' ? 'Select days' : daysString}
            </Text>
          </TouchableOpacity>
          <CustomDatePicker
            style={styles.dateView}
            placeHolder={'Select Joining Date'}
            selectedDate={val => setJoiningDate(val)}
            date={joiningDate}
          />
        </View>
        <View style={styles.rateView}>
          <Text style={styles.rateTxt}>{'Hourly rate'}</Text>
          <Slider
            value={hourlyRate}
            onValueChange={val => onValueChange(val)}
            maximumValue={10}
            minimumValue={0}
            thumbStyle={styles.thumb}
            style={styles.slider}
            minimumTrackTintColor={colors.purple}
            maximumTrackTintColor={'#EDEEF1'}
            step={1}
          />
        </View>
        <View style={styles.numberView}>
          <DropdownPicker
            options={[{name: 'Branch1'}, {name: 'Branch2'}]}
            onSelect={val => setBranch(val?.name)}
            style={styles.dropDownBranch}
            valStyle={styles.valStyle}
            placeholder={'Select branch'}
            dropStyle={styles.flatList1}
            selectedValue={branch}
          />
        </View>
      </View>
    );
  },
);

export default ProfessionalForm;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: scale(36),
  },
  numberView: {
    marginTop: scale(25),
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  dropDown: {
    height: scale(69),
    borderColor: '#A2A1A833',
    justifyContent: 'center',
    width: scale(627),
  },
  dayView: {
    height: scale(69),
    borderRadius: scale(10),
    borderColor: colors.borderGray,
    borderWidth: scale(1),
    width: scale(627),
    justifyContent: 'center',
    paddingHorizontal: scale(10),
  },
  dayTxt: {
    fontSize: scale(20),
    color: '#A2A1A8CC',
  },
  dayTxt1: {
    fontSize: scale(20),
    color: colors.black,
  },
  valStyle: {
    marginTop: 0,
  },
  flatList1: {
    width: scale(627),
  },
  dropDownStatus: {
    height: scale(69),
    borderColor: '#A2A1A833',
    justifyContent: 'center',
    width: scale(627),
  },
  dropDownBranch: {
    width: scale(1279),
    height: scale(69),
    borderColor: '#A2A1A833',
    justifyContent: 'center',
  },
  rateView: {
    borderColor: '#A2A1A833',
    borderWidth: 1,
    height: scale(94),
    marginTop: scale(25),
  },
  rateTxt: {
    color: '#A2A1A8CC',
    fontWeight: '300',
    fontSize: scale(20),
    padding: scale(20),
  },
  slider: {
    height: scale(10),
    backgroundColor: 'transparent',
    width: '98%',
    alignSelf: 'center',
  },
  thumb: {
    height: scale(25),
    width: scale(25),
    backgroundColor: colors.purple,
    borderWidth: scale(6),
    borderColor: colors.white,
  },
  sliderView: {
    color: colors.purple,
  },
  dateView: {
    height: scale(69),
    borderColor: '#A2A1A833',
    width: scale(627),
  },
});
