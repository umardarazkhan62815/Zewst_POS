import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from '../utilities/scale';
import {colors} from '../utilities/colors';

const CustomButton = ({style, titleStyle, title, onPress, iconStyle, icon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.mainContainer, style]}>
      {icon ? (
        <Image
          source={icon}
          style={[styles.icon, iconStyle]}
          resizeMode="center"
        />
      ) : null}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  mainContainer: {
    height: scale(59),
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {color: colors.white, fontSize: scale(16), fontWeight: '600'},
  icon: {
    width: scale(30),
    height: scale(30),
    marginRight: scale(10),
  },
});
