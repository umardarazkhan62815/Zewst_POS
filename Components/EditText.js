import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {scale} from '../utilities/scale';
import {colors} from '../utilities/colors';

const EditText = ({style, placeholder}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <TextInput placeholder={placeholder} style={styles.input} />
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
  },
});
