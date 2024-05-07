import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import {icons} from '../../../assets/icons';
import {images} from '../../../assets/images';
import CustomButton from '../../../Components/CustomButton';
import * as Progress from 'react-native-progress';

const ShiftStatusModal = ({visible, onPress, onEndPress}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.statusModalView}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={onPress}>
            <Image source={icons.cross} style={styles.cross} />
          </TouchableOpacity>
          <View style={styles.mainContent}>
            <View style={styles.parts}>
              <View style={styles.leftView}>
                <Image source={images.profile} style={styles.profile} />
                <View style={styles.nameBroader}>
                  <Text style={styles.nameTxt}>{'N.David'}</Text>
                  <Text style={styles.mailTxt}>{'n.david@mail.com'}</Text>
                </View>
                <View style={styles.shifView}>
                  <Text style={styles.shiftTxt}>{'Shift :'}</Text>
                  <Text style={styles.timeTxt}>{'7h:30m'}</Text>
                </View>
              </View>
              <View style={styles.rightView}>
                <Text style={styles.statusTxt}>{'Status'}</Text>
                <Text style={styles.completeTxt}>{'50 % complete'}</Text>
                <Progress.Bar
                  progress={0.5}
                  width={scale(430)}
                  height={scale(15)}
                  borderRadius={scale(7)}
                  color={colors.purple}
                  style={{marginTop: scale(20)}}
                />
                <View style={styles.ednShitView}>
                  <CustomButton
                    title={'End shift'}
                    style={styles.shitButton}
                    titleStyle={styles.shiftbtnTxt}
                    onPress={onEndPress}
                  />
                  <TouchableOpacity style={styles.playBtn}>
                    <Image
                      source={icons.pause}
                      style={styles.pause}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
                <CustomButton
                  title={'Overtime'}
                  style={styles.overTimeButton}
                  titleStyle={styles.overTimebtnTxt}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ShiftStatusModal;

const styles = StyleSheet.create({
  statusModalView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(418),
    paddingVertical: scale(230),
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    padding: scale(30),
  },
  cross: {
    width: scale(25),
    height: scale(25),
    alignSelf: 'flex-end',
  },
  mainContent: {
    padding: scale(50),
    marginBottom: scale(90),
    marginTop: scale(60),
    // marginHorizontal: scale(5),
  },
  parts: {
    flexDirection: 'row',
  },
  leftView: {
    flex: 1,
  },
  rightView: {
    flex: 1,
    marginLeft: scale(30),
  },
  profile: {
    width: scale(143),
    height: scale(143),
    borderRadius: scale(71.5),
    alignSelf: 'center',
  },
  nameBroader: {
    borderWidth: 1,
    borderColor: colors.purple,
    marginTop: scale(55),
    paddingVertical: scale(10),
    alignSelf: 'center',
    paddingHorizontal: scale(50),
    borderRadius: scale(7),
  },
  nameTxt: {
    // marginTop: scale(65),
    color: colors.black,
    fontWeight: '700',
    fontSize: scale(42),
    textAlign: 'center',
    lineHeight: scale(50),
  },
  mailTxt: {
    color: colors.black,
    fontWeight: '500',
    fontSize: scale(32),
    textAlign: 'center',
    lineHeight: scale(38),
    marginTop: scale(30),
  },
  shifView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(60),
    justifyContent: 'space-between',
    paddingHorizontal: scale(100),
  },
  shiftTxt: {
    color: colors.black,
    fontWeight: '700',
    fontSize: scale(42),
    textAlign: 'center',
    lineHeight: scale(50),
  },
  timeTxt: {
    color: colors.black,
    fontWeight: '400',
    fontSize: scale(42),
    textAlign: 'center',
    lineHeight: scale(50),
  },
  statusTxt: {
    color: colors.black,
    fontWeight: '700',
    fontSize: scale(49),
    lineHeight: scale(58),
  },
  completeTxt: {
    color: colors.black,
    fontWeight: '400',
    fontSize: scale(36),
    lineHeight: scale(42),
    marginTop: scale(25),
  },
  ednShitView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(85),
  },
  shitButton: {
    width: scale(412),
    height: scale(85),
    backgroundColor: colors.purple,
    borderRadius: scale(7),
  },
  shiftbtnTxt: {
    color: colors.white,
    fontSize: scale(37),
    fontWeight: '700',
  },
  playBtn: {
    width: scale(85),
    height: scale(85),
    borderWidth: 1,
    borderColor: colors.purple,
    marginLeft: scale(20),
    borderRadius: scale(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  pause: {
    width: scale(36),
    height: scale(40),
  },
  overTimeButton: {
    width: scale(412),
    height: scale(85),
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: scale(7),
    marginTop: scale(25),
  },
  overTimebtnTxt: {
    color: colors.purple,
    fontSize: scale(42),
    fontWeight: '700',
  },
});
