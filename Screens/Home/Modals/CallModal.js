import React, {useState, useRef} from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  PanResponder,
} from 'react-native';
import {colors} from '../../../utilities/colors';
import {images} from '../../../assets/images';
import {icons} from '../../../assets/icons';
import {scale} from '../../../utilities/scale';

const CallModal = ({visible, setVisible}) => {
  const [pan, setPan] = useState({x: 0, y: 0});

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        setPan({x: gesture.dx, y: gesture.dy});
      },
      onPanResponderRelease: () => {
        // You can add any release logic here
      },
    }),
  ).current;

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View
          style={[
            styles.modalView,
            {transform: [{translateX: pan.x}, {translateY: pan.y}]},
          ]}
          {...panResponder.panHandlers}>
          <Image source={icons.naan} style={styles.nannIcon} />
          <Image source={images.profile} style={styles.profileImage} />
          <Text style={styles.nameText}>{'Unknown'}</Text>
          <Text style={styles.durationText}>{'00:43'}</Text>
          <Text style={styles.numberText}>{'(000) 123 4567'}</Text>
          <View style={styles.decisionView}>
            <TouchableOpacity onPress={() => setVisible('no')}>
              <Image source={icons.CutCall} style={styles.callIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setVisible('yes')}>
              <Image source={icons.PickCall} style={styles.callIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.borderGray,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: scale(40),
    paddingHorizontal: scale(82),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  nannIcon: {
    height: scale(41),
    width: scale(176),
    resizeMode: 'contain',
  },
  profileImage: {
    height: scale(120),
    width: scale(120),
    borderRadius: scale(60),
    resizeMode: 'contain',
    marginTop: scale(40),
  },
  nameText: {
    fontSize: scale(28),
    lineHeight: scale(42),
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: scale(4),
    color: colors.black,
  },
  durationText: {
    fontSize: scale(20),
    lineHeight: scale(30),
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: scale(4),
    color: colors.black06,
  },
  numberText: {
    fontSize: scale(20),
    lineHeight: scale(30),
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: scale(4),
    color: colors.black06,
  },
  decisionView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(40),
    width: scale(160),
    justifyContent: 'space-between',
  },
  callIcon: {
    height: scale(64),
    width: scale(64),
    resizeMode: 'contain',
  },
});

export default CallModal;
