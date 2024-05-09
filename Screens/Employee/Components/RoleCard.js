import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../../Components/CustomButton';
import {icons} from '../../../assets/icons';
import {colors} from '../../../utilities/colors';
import {scale} from '../../../utilities/scale';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import PermissionModal from '../Modals/PermissionModal';

const RoleCard = () => {
  const [visible, setVisible] = useState(false);
  const [permissions, setPermissions] = useState([]);
  return (
    <View style={styles.mainContainer}>
      <PermissionModal
        visible={visible}
        setVisible={() => setVisible(false)}
        onNextPress={val => {
          console.log('val', val);
          setPermissions(val);

          setVisible(false);
        }}
      />
      {permissions.length > 0 ? (
        <>
          <FlexDirectionView Row style={styles.labelView}>
            <Text style={styles.srNo}>{'Sr. No.'}</Text>
            <Text style={styles.permTxt}>{'Permission'}</Text>
          </FlexDirectionView>
          {permissions.map((item, index) => {
            return (
              <FlexDirectionView Row style={styles.labelView1}>
                <Text style={styles.srNo1}>{index + 1}</Text>
                <Text style={styles.permTxt1}>{item?.name}</Text>
              </FlexDirectionView>
            );
          })}
        </>
      ) : (
        <CustomButton
          style={styles.permissionBtn}
          title={'Add Permission'}
          icon={icons.plus}
          titleStyle={styles.permissionTxt}
          iconStyle={styles.iconStyle}
          onPress={() => setVisible(true)}
        />
      )}
    </View>
  );
};

export default RoleCard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  permissionBtn: {
    backgroundColor: colors.purple,
    alignSelf: 'center',
    width: scale(272),
    height: scale(62),
  },
  permissionTxt: {
    color: colors.white,
    fontSize: scale(20),
    lineHeight: scale(30),
    fontWeight: '500',
  },
  iconStyle: {
    tintColor: colors.white,
    width: scale(25),
    height: scale(25),
  },
  labelView: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderGray,
    paddingBottom: scale(15),
  },
  srNo: {
    color: '#A2A1A8',
    fontWeight: '300',
    fontSize: scale(20),
    lineHeight: scale(30),
    width: scale(88),
  },
  permTxt: {
    color: '#A2A1A8',
    fontWeight: '300',
    fontSize: scale(20),
    lineHeight: scale(30),
  },
  labelView1: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderGray,
    paddingVertical: scale(15),
  },
  srNo1: {
    color: '#16151C',
    fontWeight: '400',
    fontSize: scale(20),
    lineHeight: scale(30),
    width: scale(88),
  },
  permTxt1: {
    color: '#16151C',
    fontWeight: '400',
    fontSize: scale(20),
    lineHeight: scale(30),
  },
});
