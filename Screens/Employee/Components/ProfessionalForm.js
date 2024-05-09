import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {scale} from '../../../utilities/scale';
import EditText from '../../../Components/EditText';
import {DropdownPicker} from '../../../Components/DropDownPicker';
import {Slider} from '@rneui/themed';
import {colors} from '../../../utilities/colors';
import CustomDatePicker from '../../../Components/DatePicker';
const ProfessionalForm = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const onValueChange = value => {
    setSliderValue(value);
  };
  return (
    <View style={styles.mainContainer}>
      <EditText placeholder={'Employee ID'} />
      <View style={styles.numberView}>
        <DropdownPicker
          options={['Status1', 'Status2']}
          onSelect={val => console.log(val)}
          style={styles.dropDown}
          valStyle={styles.valStyle}
          placeholder={'Select Department'}
          dropStyle={styles.flatList1}
        />
        <DropdownPicker
          options={['Status1', 'Status2']}
          onSelect={val => console.log(val)}
          style={styles.dropDown}
          valStyle={styles.valStyle}
          placeholder={'Role'}
          dropStyle={styles.flatList1}
        />
      </View>
      <View style={styles.numberView}>
        <DropdownPicker
          options={['Status1', 'Status2']}
          onSelect={val => console.log(val)}
          style={styles.dropDown}
          valStyle={styles.valStyle}
          placeholder={'Employment status'}
          dropStyle={styles.flatList1}
        />
      </View>
      <View style={styles.numberView}>
        <DropdownPicker
          options={['Status1', 'Status2']}
          onSelect={val => console.log(val)}
          style={styles.dropDown}
          valStyle={styles.valStyle}
          placeholder={'Select Working Days'}
          dropStyle={styles.flatList1}
        />
        <CustomDatePicker
          style={styles.dateView}
          placeHolder={'Select Joining Date'}
        />
      </View>
      <View style={styles.rateView}>
        <Text style={styles.rateTxt}>{'Hourly rate'}</Text>
        <Slider
          value={sliderValue}
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
          options={['Status1', 'Status2']}
          onSelect={val => console.log(val)}
          style={styles.dropDownBranch}
          valStyle={styles.valStyle}
          placeholder={'Select branch'}
          dropStyle={styles.flatList1}
        />
      </View>
    </View>
  );
};

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
    height: scale(30),
    padding: scale(20),
  },
  slider: {
    height: scale(10),
    backgroundColor: 'transparent',
    marginTop: scale(20),
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
