import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utilities/colors';
import {scale} from '../../../utilities/scale';
import CountButton from '../../../Components/CountButton';

const EditAmount = ({
  title,
  placeHolder,
  editInput,
  value,
  onChangeText,
  onFocus,
  onBlur,
}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleTxt}>{title}</Text>
      <View style={[styles.editInput, editInput]}>
        <TextInput
          placeholder={placeHolder}
          style={styles.input}
          value={value}
          onChangeText={() => onChangeText()}
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
          placeholderTextColor={colors.borderGray}
        />
        <Text style={styles.doller}>{'$'}</Text>
      </View>
    </View>
  );
};

export default EditAmount;

const styles = StyleSheet.create({
  mainContainer: {},
  titleTxt: {
    color: colors.black,
    fontSize: scale(24),
    lineHeight: scale(36),
    fontWeight: '500',
  },
  editInput: {
    borderColor: colors.purple,
    borderWidth: 1,
    height: scale(72),
    borderRadius: scale(11),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(21),
  },
  input: {
    flex: 1,
    fontSize: scale(24),
    color: colors.black,
    fontWeight: '500',
    padding: 0,
  },
  doller: {
    fontWeight: '500',
    fontSize: scale(36),
    lineHeight: scale(54),
    color: '#5A5D6C',
  },
});
