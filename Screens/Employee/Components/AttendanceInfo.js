import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';

const AttendenceInfo = ({item}) => {
  return (
    <FlexDirectionView Row style={styles.mainContainer}>
      <Text style={styles.dateTxt}>{'July 01, 2023'}</Text>
      <Text style={styles.checkTxt}>{'09:28 AM'}</Text>
      <Text style={styles.checkTxt}>{'07:00 PM'}</Text>
      <Text style={styles.breakTxt}>{'00:20 Min'}</Text>
      <Text style={styles.dateTxt}>{'09:20 Hrs'}</Text>
      <View style={styles.statusView}>
        <Text style={item.late ? styles.statusTxt1 : styles.statusTxt}>
          {item?.late ? 'Late' : 'On Time'}
        </Text>
      </View>
    </FlexDirectionView>
  );
};

export default AttendenceInfo;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: scale(12),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderGray,
    paddingVertical: scale(10),
  },
  dateTxt: {
    color: '#16151C',
    fontSize: scale(20),
    lineHeight: scale(24),
    width: scale(162),
  },
  checkTxt: {
    color: '#16151C',
    fontSize: scale(20),
    lineHeight: scale(24),
    width: scale(175),
  },
  breakTxt: {
    color: '#16151C',
    fontSize: scale(20),
    lineHeight: scale(24),
    width: scale(127),
  },
  statusView: {
    flexDirection: 'row',
    width: scale(116),
  },
  statusTxt: {
    backgroundColor: '#3FC28A1A',
    color: '#3FC28A',
    fontWeight: '300',
    fontSize: scale(15),
    lineHeight: scale(22),
    paddingHorizontal: scale(8),
    paddingVertical: scale(3),
  },

  statusTxt1: {
    backgroundColor: '#F45B691A',
    color: '#F45B69',
    fontWeight: '300',
    fontSize: scale(15),
    lineHeight: scale(22),
    paddingHorizontal: scale(8),
    paddingVertical: scale(3),
  },
});
