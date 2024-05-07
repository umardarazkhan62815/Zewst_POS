import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {icons} from '../../../assets/icons';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';

const ShiftData = ({
  icon,
  label,
  value,
  style,
  labelStyle,
  valueStyle,
  valTxtStyle,
}) => {
  return (
    <View style={(styles.mainContainer, style)}>
      <View style={styles.labelView}>
        {icon ? (
          <Image source={icons.lock} style={styles.icon} resizeMode="center" />
        ) : null}
        <Text style={(styles.label, labelStyle)}>{label}</Text>
      </View>
      <View style={[styles.valueView, valueStyle]}>
        <Text style={[styles.vlaueTxt, valTxtStyle]}>{value}</Text>
        <Text style={[styles.vlaueTxt, valTxtStyle]}>{'$'}</Text>
      </View>
    </View>
  );
};

export default ShiftData;

const styles = StyleSheet.create({
  mainContainer: {},
  labelView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: scale(20),
    width: scale(20),
    marginRight: scale(3),
  },
  label: {
    fontWeight: '400',
    fontSize: scale(24),
    color: colors.black,
  },
  valueView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: scale(7),
    borderColor: colors.purple05,
    paddingHorizontal: scale(21),
    paddingVertical: scale(13),
    marginTop: scale(20),
  },
  vlaueTxt: {
    color: colors.black,
    fontWeight: '500',
    fontSize: scale(28),
  },
});
