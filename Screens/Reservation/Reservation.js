import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReservationLeftView from './Components/ReservationLeftView';
import ReservationRightView from './Components/ReservationRightView';

const Reservation = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <ReservationLeftView /> */}
      <ReservationRightView />
    </View>
  );
};

export default Reservation;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
