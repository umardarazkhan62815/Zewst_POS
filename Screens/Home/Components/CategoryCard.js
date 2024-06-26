import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import * as Progress from 'react-native-progress';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import {icons} from '../../../assets/icons';

const CategoryCard = ({
  item,
  selectedItem,
  style,
  type,
  cross,
  onCrossPress,
}) => {
  // const pressHandle = () => {
  //   selectedItem(item);
  // };
  return type ? (
    <View style={styles.mainContainer1}>
      <Text style={styles.title1}>{item?.categoryName}</Text>
      <Text
        style={styles.itemTxt}>{`${item?.categoryTypes?.length} items`}</Text>
    </View>
  ) : (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => selectedItem(item)}>
      {cross ? (
        <TouchableOpacity
          style={styles.crossIcon}
          onPress={() => onCrossPress()}>
          <Image
            source={icons.cross}
            style={styles.cross}
            resizeMode="center"
          />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.title}>{item?.categoryName}</Text>
      <View style={styles.divider} />
      <View style={styles.progressView}>
        <Text
          style={styles.itemTxt}>{`${item?.categoryTypes?.length} items`}</Text>
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
  crossIcon: {
    width: scale(30),
    height: scale(30),
    backgroundColor: 'red',
    position: 'absolute',
    right: scale(-7),
    top: scale(-7),
    borderRadius: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cross: {
    width: scale(15),
    height: scale(15),
    tintColor: colors.white,
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
