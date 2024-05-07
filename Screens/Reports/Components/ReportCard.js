import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import {icons} from '../../../assets/icons';

const ReportCard = ({item}) => {
  return (
    <FlexDirectionView Row style={styles.container}>
      <View style={styles.leftView}>
        <FlexDirectionView Row>
          <View style={[styles.iconView, {backgroundColor: item?.color}]}>
            <Image
              source={item?.icon}
              style={styles.gross}
              resizeMode="center"
            />
          </View>
          <Text style={styles.grossTxt}>{item?.text}</Text>
        </FlexDirectionView>
        <Text style={styles.amountTxt}>{'$198.49'}</Text>
        <FlexDirectionView Row style={styles.increaseView}>
          <View style={[styles.taxView, {backgroundColor: item?.color}]}>
            <Image
              source={icons.streamline}
              style={styles.streamline}
              resizeMode="center"
            />
          </View>
          <Text style={styles.increaseTxt}>{'+3.76% Increase'}</Text>
        </FlexDirectionView>
      </View>
      <View style={styles.rightView}>
        <Image
          source={icons.wave1}
          style={[styles.wave, {tintColor: item?.color}]}
          resizeMode="center"
        />
      </View>
    </FlexDirectionView>
  );
};

export default ReportCard;

const styles = StyleSheet.create({
  container: {
    width: scale(426),
    height: scale(184),
    backgroundColor: colors.white,
    borderRadius: scale(6),
    padding: scale(27),
  },

  leftView: {
    flex: 1,
    height: '100%',
  },
  rightView: {
    flex: 1,
    height: '100%',
    alignItems: 'flex-end',
  },
  wave: {
    width: scale(109),
    height: scale(36),
  },
  iconView: {
    width: scale(44),
    height: scale(44),
    backgroundColor: 'blue',
    borderRadius: scale(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(10),
  },
  grossTxt: {
    fontSize: scale(16),
    lineHeight: scale(19),
    fontWeight: '600',
    color: colors.black,
  },
  amountTxt: {
    fontSize: scale(36),
    lineHeight: scale(44),
    fontWeight: '600',
    color: colors.black,
    marginTop: scale(18),
  },
  increaseTxt: {
    fontSize: scale(14),
    lineHeight: scale(16),
    fontWeight: '500',
    color: colors.black,
  },
  increaseView: {
    marginTop: scale(17),
  },
  taxView: {
    width: scale(24),
    height: scale(24),
    backgroundColor: 'blue',
    borderRadius: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(9),
  },
  streamline: {
    width: scale(13),
    height: scale(7),
    tintColor: colors.white,
  },
  gross: {
    width: scale(20),
    height: scale(20),
    tintColor: colors.white,
  },
});
