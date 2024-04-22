import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {colors} from '../../../utilies/colors';
import {scale} from '../../../utilies/scale';
import {images} from '../../../assets/images';
import {icons} from '../../../assets/icons';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import Slider from '@react-native-community/slider';
import {LinearGradient} from 'react-native-linear-gradient';

const QrCodeScanModal = ({visible, setVisible, qr}) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [grayTrackWidth, setGrayTrackWidth] = useState('100%');

  const onValueChange = value => {
    console.log('VAlue', value);
    setSliderValue(value);
    const sV = sliderValue * 100;
    setGrayTrackWidth(`${100 - sV}%`);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.pink}>
            {qr ? (
              <TouchableOpacity style={styles.qrView} onPress={setVisible}>
                <Text style={styles.modalText}>
                  {'Ask customer to scan QR'}
                </Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.zewardView}>
                <View style={styles.userView}>
                  <Image
                    style={styles.profile}
                    source={images.profile}
                    resizeMode="center"
                  />
                  <View>
                    <Text style={styles.name}>{'Suleman'}</Text>
                    <View style={styles.idView}>
                      <Image
                        source={icons.zIcon}
                        style={styles.zicon}
                        resizeMode="center"
                      />
                      <Text style={styles.uid}>{'8333'}</Text>
                    </View>
                  </View>
                  <View style={styles.divider} />
                  <View>
                    <Image
                      source={icons.zeward}
                      style={styles.zeward}
                      resizeMode="center"
                    />
                    <Text style={styles.memberTxt}>{'member'}</Text>
                  </View>
                </View>
                <FlexDirectionView
                  Row
                  style={{marginTop: scale(30), alignItems: 'center'}}>
                  <Text style={styles.redeemTxt}>{'Zewards Redeeming'}</Text>
                  <Image
                    source={icons.zIcon}
                    style={styles.zicon1}
                    resizeMode="center"
                  />
                  <Text style={styles.redeemTxt}>{'436'}</Text>
                  <View style={{flex: 1}} />
                  <Text style={styles.redeemTxt}>{'$102.98'}</Text>
                </FlexDirectionView>
                <FlexDirectionView
                  Row
                  style={{marginTop: scale(48), alignItems: 'center'}}>
                  <Text style={[styles.leftTxt]}>
                    {'How much you want to redeem?'}
                  </Text>
                  <View style={{flex: 1}} />
                  <Text style={styles.leftTxt}>{'Zewards Left 1200'}</Text>

                  <Image
                    source={icons.setting}
                    style={styles.setting}
                    resizeMode="center"
                  />
                  <Image
                    source={icons.dropDown}
                    style={styles.dropDown}
                    resizeMode="center"
                  />
                </FlexDirectionView>
                <FlexDirectionView
                  Row
                  style={{
                    marginTop: scale(6),
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Image
                    source={icons.zIcon}
                    style={styles.zicon2}
                    resizeMode="center"
                  />
                  <Text style={styles.idTxt}>{'8833'}</Text>
                </FlexDirectionView>

                <View style={styles.sliderMainView}>
                  <LinearGradient
                    colors={['#01CDA8', '#8D23DD']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    onValueChange={onValueChange}
                    style={styles.linerGradient}
                  />
                  <View
                    style={{
                      alignSelf: 'flex-end',
                      position: 'absolute',
                      top: scale(15) - scale(4) / 2,
                      width: grayTrackWidth,
                      height: scale(4),
                      backgroundColor: '#B2B2B2',
                      zIndex: 1,
                    }}
                  />
                  <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="transparent"
                    maximumTrackTintColor="transparent"
                    thumbTintColor="transparent"
                    onValueChange={onValueChange}
                    thumbImage={icons.thumb}
                  />
                </View>
                <View style={styles.avaiableView}>
                  <Text style={styles.avaiableTxt}>{'Zewards Available'}</Text>
                  <FlexDirectionView Row style={styles.btnView}>
                    <View style={[styles.meatView, {marginRight: scale(5)}]}>
                      <Text style={[styles.avaiableTxt, {textAlign: 'center'}]}>
                        {'Meatdukan'}
                      </Text>
                      <FlexDirectionView Row>
                        <TouchableOpacity style={styles.btn}>
                          <Text style={styles.currentTxt}>{'Current'}</Text>
                          <Text style={styles.fiveTxt}>{'500'}</Text>
                          <Image
                            source={icons.fillTick}
                            style={styles.tick}
                            resizeMode="center"
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[styles.btn, {marginLeft: scale(8)}]}>
                          <Text style={styles.currentTxt}>{'In-Network'}</Text>
                          <Text style={styles.fiveTxt}>{'500'}</Text>
                          <Image
                            source={icons.fillTick}
                            style={styles.tick}
                            resizeMode="center"
                          />
                        </TouchableOpacity>
                      </FlexDirectionView>
                    </View>
                    <View style={styles.meatView}>
                      <Text style={[styles.avaiableTxt, {textAlign: 'center'}]}>
                        {'Out of Network'}
                      </Text>
                      <FlexDirectionView Row>
                        <TouchableOpacity
                          onPress={setVisible}
                          style={[styles.btn, {paddingHorizontal: scale(32)}]}>
                          <Text style={styles.fiveTxt}>{'1500'}</Text>
                          <Image
                            source={icons.fillTick}
                            style={styles.tick}
                            resizeMode="center"
                          />
                        </TouchableOpacity>
                      </FlexDirectionView>
                    </View>
                  </FlexDirectionView>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black025,
  },
  modalContent: {
    backgroundColor: colors.white,
    paddingHorizontal: scale(99),
    paddingVertical: scale(132),
    borderRadius: scale(16),
  },
  pink: {
    backgroundColor: '#FAF7FD',
    paddingHorizontal: scale(30),
    paddingVertical: scale(35),
  },
  qrView: {
    backgroundColor: colors.white,
    width: scale(458),
    height: scale(183),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: scale(28),
    lineHeight: scale(42),
    fontWeight: '600',
    color: '#0B0410',
  },
  zewardView: {
    backgroundColor: colors.white,
    paddingHorizontal: scale(11),
    paddingTop: scale(20),
  },
  userView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FAF7FD',
    paddingHorizontal: scale(16),
    paddingVertical: scale(19),
  },
  profile: {
    height: scale(76),
    width: scale(76),
    borderRadius: scale(38),
    marginRight: scale(12),
  },
  name: {
    color: '#4D4D4D',
    fontSize: scale(27),
    lineHeight: scale(41),
    fontWeight: '600',
  },
  idView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  zicon: {
    width: scale(28),
    height: scale(28),
    marginRight: scale(10),
  },
  zicon1: {
    width: scale(16),
    height: scale(16),
    marginLeft: scale(8),
    marginRight: scale(5),
  },
  zicon2: {
    width: scale(36),
    height: scale(36),
    marginRight: scale(14),
  },
  setting: {
    width: scale(22),
    height: scale(22),
    marginRight: scale(2),
  },
  dropDown: {
    width: scale(7),
    height: scale(4),
    marginLeft: scale(2),
    marginRight: scale(8),
  },
  uid: {
    color: '#62748F',
    fontSize: scale(22),
    lineHeight: scale(29),
    fontWeight: '400',
  },
  zeward: {
    width: scale(100),
    height: scale(17),
  },
  memberTxt: {
    color: '#62748F',
    fontSize: scale(18),
    lineHeight: scale(27),
    fontWeight: '400',
  },
  divider: {
    borderLeftWidth: 1,
    borderColor: colors.purple,
    marginLeft: scale(40),
    height: scale(72),
    marginRight: scale(30),
  },
  redeemTxt: {
    fontWeight: '500',
    fontSize: scale(16),
    lineHeight: scale(19),
    color: colors.purple,
  },
  leftTxt: {
    fontWeight: '400',
    fontSize: scale(11),
    lineHeight: scale(14),
    color: '#4A5568',
    marginRight: scale(23),
  },
  idTxt: {
    fontWeight: '400',
    fontSize: scale(76),
    lineHeight: scale(99),
    color: '#62748F',
  },
  avaiableView: {
    paddingHorizontal: scale(15),
    paddingVertical: scale(15),
  },
  avaiableTxt: {
    color: '#62748F',
    fontWeight: '400',
    fontSize: scale(10),
    lineHeight: scale(14),
    marginBottom: scale(10),
  },
  meatView: {
    backgroundColor: 'rgba(250, 247, 253, 0.5)',
    paddingHorizontal: scale(13),
    paddingVertical: scale(10),
    borderRadius: scale(5),
  },
  btn: {
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(90),
    flexDirection: 'row',
    paddingVertical: scale(7),
    paddingHorizontal: scale(12),
  },
  currentTxt: {
    fontSize: scale(8),
    lineHeight: scale(10),
    fontWeight: '400',
    color: colors.white,
    marginRight: scale(4),
  },
  fiveTxt: {
    fontSize: scale(12),
    lineHeight: scale(14),
    fontWeight: '400',
    color: colors.white,
    marginRight: scale(4),
  },
  tick: {
    width: scale(10),
    height: scale(10),
    tintColor: colors.white,
  },
  btnView: {
    justifyContent: 'space-between',
  },
  sliderMainView: {
    width: scale(367),
    height: scale(30),
    alignSelf: 'center',
    alignItems: 'center',
  },
  linerGradient: {
    position: 'absolute',
    top: scale(15) - scale(4) / 2,
    width: '100%',
    height: scale(4),
    borderRadius: scale(4) / 2,
  },
  slider: {
    zIndex: 1000,
    width: '100%',
    height: '100%',
    // position: 'absolute',
    top: scale(-20),
    // paddingHorizontal: scale(0),
    // backgroundColor: 'yellow',
  },
});

export default QrCodeScanModal;
