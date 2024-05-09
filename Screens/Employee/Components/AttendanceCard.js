import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import {scale} from '../../../utilities/scale';
import AttendanceInfo from './AttendanceInfo';

const data = [
  {id: '1', name: 'Item 1', late: true},
  {id: '2', name: 'Item 2'},
  {id: '3', name: 'Item 3'},
  {id: '4', name: 'Item 4'},
  {id: '5', name: 'Item 5', late: true},

  {id: '1', name: 'Item 1', late: true},
  {id: '2', name: 'Item 2'},
  {id: '3', name: 'Item 3'},
  {id: '4', name: 'Item 4'},
  {id: '5', name: 'Item 5', late: true},

  {id: '1', name: 'Item 1', late: true},
  {id: '2', name: 'Item 2'},
  {id: '3', name: 'Item 3'},
  {id: '4', name: 'Item 4'},
  {id: '5', name: 'Item 5'},
];

const AttendanceCard = () => {
  return (
    <View style={styles.mainContainer}>
      <FlexDirectionView Row>
        <Text style={styles.dateTxt}>{'Date'}</Text>
        <Text style={styles.checkTxt}>{'Check In'}</Text>
        <Text style={styles.checkTxt}>{'Check Out'}</Text>
        <Text style={styles.breakTxt}>{'Break'}</Text>
        <Text style={styles.dateTxt}>{'Working Hours'}</Text>
        <Text style={styles.dateTxt}>{'Status'}</Text>
      </FlexDirectionView>
      <View style={styles.attendanceList}>
        <FlatList
          data={data}
          renderItem={({item}) => <AttendanceInfo item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default AttendanceCard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  dateTxt: {
    color: '#A2A1A8',
    fontSize: scale(20),
    lineHeight: scale(30),
    width: scale(162),
  },
  checkTxt: {
    color: '#A2A1A8',
    fontSize: scale(20),
    lineHeight: scale(30),
    width: scale(175),
  },
  breakTxt: {
    color: '#A2A1A8',
    fontSize: scale(20),
    lineHeight: scale(30),
    width: scale(127),
  },
  attendanceList: {
    height: '100%',
  },
});
