import React, {useState} from 'react';
import {
  View,
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {icons} from '../assets/icons';
import {scale} from '../utilities/scale';
import {colors} from '../utilities/colors';

const CustomDatePicker = ({style, placeHolder}) => {
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = newDate => {
    setDate(newDate);
  };

  const handlePress = () => {
    setShowDatePicker(true);
  };

  const handleDone = () => {
    setShowDatePicker(false);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={date ? styles.date1 : styles.date}>
        {date ? date.toDateString() : placeHolder}
      </Text>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={icons.calendar1}
          style={styles.camera}
          resizeMode="center"
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showDatePicker}
        onRequestClose={() => setShowDatePicker(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <DatePicker
              date={date || new Date()}
              mode="date"
              onDateChange={handleDateChange}
            />
            <Button title="Done" onPress={handleDone} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderGray,
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 4,
  },
  camera: {
    width: scale(30),
    height: scale(30),
    tintColor: '#16151C',
  },
  date: {
    color: '#A2A1A8CC',
    fontWeight: '300',
    fontSize: scale(20),
    lineHeight: scale(30),
  },
  date1: {
    color: '#16151C',
    fontWeight: '300',
    fontSize: scale(20),
    lineHeight: scale(30),
  },
});

export default CustomDatePicker;
