import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {icons} from '../../../assets/icons';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import FlexDirectionView from '../../../Components/FlexDirectionView';

const ReservationCard = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <View style={styles.dateContainer}>
        <Image
          style={styles.calender}
          source={icons.calendar}
          resizeMode="center"
        />
        <Text style={styles.dateText}>{'Today, Monday, 25th Feb, 2023'}</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>5</Text>
        </View>
        <View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>12 Seats - Table 5</Text>
          </View>
          <Text style={styles.seatingTxt}>
            {'Seating:'}
            <Text style={{fontWeight: '400'}}>
              {' Outdoor, Standard '}
              <Text style={{fontWeight: '700'}}>{'+1 more'}</Text>
            </Text>
          </Text>
        </View>
      </View>
      <FlexDirectionView Row style={{marginTop: scale(30)}}>
        {['3:45 PM', '5:00 PM', '6:15 PM', '8:00 PM', '+5 More'].map(item => {
          return (
            <Text style={item === '+5 More' ? styles.itemTxt1 : styles.itemTxt}>
              {item}
            </Text>
          );
        })}
      </FlexDirectionView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: scale(10),
    padding: scale(40),
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calender: {
    width: scale(45),
    height: scale(45),
    marginRight: scale(10),
  },
  dateText: {
    color: '#49586E',
    fontSize: scale(18),
    fontWeight: '500',
    lineHeight: scale(27),
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(30),
  },
  circle: {
    backgroundColor: colors.purple,
    width: scale(75),
    height: scale(75),
    borderRadius: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(28),
  },
  circleText: {
    color: 'white',
    fontSize: scale(30),
    fontWeight: '700',
    lineHeight: scale(45),
  },
  infoContainer: {
    backgroundColor: colors.purpleLight,
  },
  infoText: {
    fontSize: scale(21),
    lineHeight: scale(31),
    fontWeight: '400',
    color: colors.purple,
    paddingHorizontal: scale(15),
    paddingVertical: scale(5),
  },
  seatingTxt: {
    fontWeight: '500',
    fontSize: scale(20),
    lineHeight: scale(28),
    marginTop: scale(30),
  },
  additionalText: {
    color: 'gray',
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  itemTxt: {
    fontSize: scale(18),
    lineHeight: scale(27),
    fontWeight: '400',
    color: colors.purple,
    marginRight: scale(23),
    backgroundColor: '#FAF7FD',
    paddingHorizontal: scale(15),
    paddingVertical: scale(5),
  },
  itemTxt1: {
    fontSize: scale(18),
    lineHeight: scale(27),
    fontWeight: '400',
    color: colors.black,
    paddingHorizontal: scale(15),
    paddingVertical: scale(5),
  },
});

export default ReservationCard;
