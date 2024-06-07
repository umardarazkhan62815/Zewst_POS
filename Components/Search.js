import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {icons} from '../assets/icons';
import {scale} from '../utilities/scale';
import {colors} from '../utilities/colors';
const Search = ({placeholder, iconStyle, value, onChangeText}) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={icons.search}
        style={[styles.search, iconStyle]}
        resizeMode="center"
      />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={'#92929D'}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: scale(56),
    borderRadius: scale(12),
    borderWidth: scale(1.8),
    borderColor: '#E2E2EA',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(22),
  },
  search: {
    width: scale(37),
    height: scale(36),
    tintColor: '#92929D',
  },
  input: {
    flex: 1,
    paddingLeft: scale(14),
    color: colors.black,
    margin: 0,
    padding: 0,
    fontSize: scale(18),
    fontWeight: '500',
  },
});
