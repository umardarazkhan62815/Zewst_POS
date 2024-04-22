import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import {scale} from '../../../utilies/scale';
import {colors} from '../../../utilies/colors';

const CategoryCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'title'}</Text>
      <View style={styles.divider} />
      <View style={styles.progressView}>
        <Text style={styles.itemTxt}>{'4 items'}</Text>
        <Text
          style={[
            styles.itemTxt,
            {marginLeft: scale(30), marginRight: scale(15)},
          ]}>
          {'70%'}
        </Text>
        <Progress.Bar
          progress={0.7}
          width={scale(100)}
          height={scale(10)}
          borderRadius={scale(7)}
          color={'#00A183'}
          borderColor="rgba(56, 57, 71, 0.7)"
          unfilledColor={colors.white}
        />
        {/* <View style={styles.progressBar}>
          <View style={[styles.progress, {width: '70%'}]} />
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(56, 57, 71, 0.7)',
    borderRadius: 10,
    paddingHorizontal: scale(20),
    paddingVertical: scale(30),
    marginBottom: scale(30),
    marginRight: scale(30),
  },
  title: {
    fontSize: scale(42),
    fontWeight: '500',
    marginBottom: scale(30),
    color: colors.white,
    lineHeight: scale(63),
  },
  divider: {
    borderTopColor: colors.white,
    borderTopWidth: scale(2),
  },
  progressView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(15),
  },
  itemTxt: {
    color: colors.white,
    fontSize: scale(18),
    lineHeight: scale(27),
    fontWeight: '500',
  },
  itemCount: {
    fontSize: 16,
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  progress: {
    height: '100%',
    backgroundColor: 'red',
    borderRadius: 5,
  },
});

export default CategoryCard;
