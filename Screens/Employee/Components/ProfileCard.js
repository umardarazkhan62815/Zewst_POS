import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import {images} from '../../../assets/images';
import {icons} from '../../../assets/icons';
import CustomButton from '../../../Components/CustomButton';
import {profileSteps} from '../statics';
import PersonalInfoCard from './PersonalInfoCard';
import AttendanceCard from './AttendanceCard';
import RoleCard from './RoleCard';

const ProfileCard = ({onEditPress}) => {
  const [type, setType] = useState(profileSteps[0]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileView}>
        <Image
          source={images.profile}
          style={styles.profile}
          resizeMode="center"
        />
        <View style={styles.nameView}>
          <Text style={styles.name}>{'Brooklyn Simmons'}</Text>
          <FlexDirectionView Row>
            <Image source={icons.bag} style={styles.bag} resizeMode="center" />
            <Text style={styles.status}>{'Project Manager'}</Text>
          </FlexDirectionView>
          <FlexDirectionView Row style={styles.emailView}>
            <Image
              source={icons.email}
              style={styles.bag}
              resizeMode="center"
            />
            <Text style={styles.status}>{'brooklyn.s@example.com'}</Text>
          </FlexDirectionView>
        </View>

        <View style={{flex: 1}} />
        <CustomButton
          title={'Edit Profile'}
          style={styles.editBtn}
          icon={icons.edit1}
          iconStyle={styles.iconEdit}
          onPress={() => onEditPress()}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.attendenceView}>
          {profileSteps.map(item => {
            return (
              <TouchableOpacity
                onPress={() => setType(item)}
                style={type === item ? styles.roleView : styles.roleView1}>
                <Image
                  source={item?.icon}
                  style={type === item ? styles.roleIcon : styles.roleIcon1}
                />
                <Text style={type === item ? styles.roleTxt : styles.roleTxt1}>
                  {item?.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{flex: 1}}>
          {type === profileSteps[0] ? (
            <PersonalInfoCard />
          ) : type === profileSteps[1] ? (
            <AttendanceCard />
          ) : (
            <RoleCard />
          )}
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: scale(153),
    marginLeft: scale(94),
    borderWidth: 1,
    borderRadius: scale(11),
    borderColor: colors.borderGray,
    flex: 1,
    marginRight: scale(330),
    marginBottom: scale(124),
    padding: scale(24),
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGray,
    paddingBottom: scale(37),
    marginBottom: scale(38),
  },
  profile: {
    width: scale(123),
    height: scale(123),
    borderRadius: scale(12),
  },
  nameView: {
    marginLeft: scale(20),
    height: '100%',
  },
  name: {
    color: colors.black,
    fontWeight: '700',
    fontSize: scale(25),
    lineHeight: scale(30),
    marginBottom: scale(10),
  },
  bag: {
    width: scale(30),
    height: scale(30),
    tintColor: colors.black,
  },
  status: {
    marginLeft: scale(10),
    fontWeight: '400',
    fontSize: scale(24),
    lineHeight: scale(30),
    color: colors.black,
  },
  emailView: {
    marginTop: scale(10),
  },
  editBtn: {
    width: scale(192),
    height: scale(61),
    backgroundColor: colors.purple,
  },
  iconEdit: {
    width: scale(22),
    height: scale(22),
    tintColor: colors.white,
  },
  attendenceView: {
    width: scale(296),
    marginRight: scale(37),
    borderRadius: scale(11),
    borderWidth: 1,
    borderColor: colors.borderGray,
  },
  roleView: {
    height: scale(67),
    backgroundColor: colors.purple,
    borderRadius: scale(11),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(25),
  },
  roleIcon: {
    width: scale(30),
    height: scale(30),
    tintColor: colors.white,
  },
  roleTxt: {
    color: colors.white,
    fontWeight: '700',
    fontSize: scale(20),
    lineHeight: scale(24),
    marginLeft: scale(12),
  },
  roleView1: {
    height: scale(67),
    backgroundColor: colors.white,
    borderRadius: scale(11),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(25),
  },
  roleIcon1: {
    width: scale(30),
    height: scale(30),
    tintColor: colors.black,
  },
  roleTxt1: {
    color: '#16151C',
    fontWeight: '700',
    fontSize: scale(20),
    lineHeight: scale(24),
    marginLeft: scale(12),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
});
