import {StyleSheet, TextInput, View} from 'react-native';
import React, {cloneElement} from 'react';
import {scale} from '../utilities/scale';
import {colors} from '../utilities/colors';

const EditText = ({style, placeholder, value, onChangeText}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={'#A2A1A8CC'}
        value={value}
        onChangeText={val => onChangeText(val)}
      />
    </View>
  );
};

export default EditText;

const styles = StyleSheet.create({
  mainContainer: {
    height: scale(69),
    borderWidth: 1,
    borderColor: colors.borderGray,
    borderRadius: scale(11),
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: scale(20),
    fontSize: scale(20),
    lineHeight: scale(20),
    fontWeight: '300',
    color: colors.black,
    padding: 0,
  },
});
