import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';

const CategoryCard = ({item, selectedItem, style, type}) => {
  const pressHandle = () => {
    selectedItem('Rolls');
  };
  return type ? (
    <View style={styles.mainContainer1}>
      <Text style={styles.title1}>{'title'}</Text>
      <Text style={styles.itemTxt}>{'4 items'}</Text>
    </View>
  ) : (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => pressHandle()}>
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
    </TouchableOpacity>
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
  mainContainer1: {
    backgroundColor: '#DAAFAF',
    paddingVertical: scale(21),
    paddingHorizontal: scale(10),
    borderRadius: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scale(30),
    marginRight: scale(30),
    width: scale(261),
  },
  title: {
    fontSize: scale(42),
    fontWeight: '500',
    marginBottom: scale(30),
    color: colors.white,
    lineHeight: scale(63),
  },
  title1: {
    fontSize: scale(24),
    fontWeight: '700',
    color: colors.white,
    lineHeight: scale(40),
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
