import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import {scale} from '../../../utilities/scale';
import {Image} from 'react-native';
import {images} from '../../../assets/images';
import {colors} from '../../../utilities/colors';
import {icons} from '../../../assets/icons';
const EmployCard = ({item, eyePress, onEditPress}) => {
  // console.log('item>>>', item);
  return (
    <FlexDirectionView Row style={styles.mainContainer}>
      <Image
        source={images.profile}
        style={styles.profile}
        resizeMode="center"
      />
      <Text
        style={styles.nameTxt}>{`${item?.first_name} ${item?.last_name}`}</Text>
      <View style={{flex: 1}} />
      <Text style={styles.nameId}>{item?.employee_id}</Text>
      <Text style={styles.department}>{item?.department}</Text>
      <Text style={styles.role}>{item?.role}</Text>
      <View style={styles.statusView}>
        <Text style={styles.status}>{item?.employee_status}</Text>
      </View>
      <FlexDirectionView Row spaceBetween style={styles.action}>
        <TouchableOpacity onPress={() => eyePress(item)}>
          <Image source={icons.eye} style={styles.delete} resizeMode="center" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onEditPress(item)}>
          <Image
            source={icons.edit1}
            style={styles.delete}
            resizeMode="center"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={icons.delete1}
            style={styles.delete}
            resizeMode="center"
          />
        </TouchableOpacity>
      </FlexDirectionView>
    </FlexDirectionView>
  );
};

export default EmployCard;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: scale(11),
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGray,
    paddingBottom: scale(2),
  },
  profile: {
    width: scale(41),
    height: scale(41),
    borderRadius: scale(21),
    marginRight: scale(11),
  },
  nameTxt: {
    color: '#16151C',
    fontWeight: '400',
    fontSize: scale(18),
    lineHeight: scale(22),
  },
  nameId: {
    color: '#16151C',
    fontWeight: '400',
    fontSize: scale(18),
    lineHeight: scale(22),
    width: scale(151),
  },
  department: {
    color: '#16151C',
    fontWeight: '400',
    fontSize: scale(18),
    lineHeight: scale(22),
    width: scale(196),
  },
  role: {
    color: '#16151C',

    fontWeight: '400',
    fontSize: scale(18),
    lineHeight: scale(22),
    width: scale(185),
  },
  status: {
    color: '#16151C',
    fontWeight: '300',
    fontSize: scale(14),
    lineHeight: scale(20),
    backgroundColor: colors.purpleLight,
    width: scale(100),
    textAlign: 'center',
    paddingVertical: scale(4),
  },
  statusView: {
    width: scale(125),
  },
  action: {
    color: '#16151C',

    fontWeight: '400',
    fontSize: scale(18),
    lineHeight: scale(22),
    width: scale(114),
  },
  delete: {
    width: scale(21),
    height: scale(23),
    tintColor: colors.black,
  },
});
