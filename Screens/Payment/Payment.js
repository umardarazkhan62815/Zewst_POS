import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../utilities/colors';
import {scale} from '../../utilities/scale';
import PaymentLeftView from './Components/PaymentLeftView';
import PaymentMiddleView from './Components/PaymentMiddleView';
import PaymentRightView from './Components/PaymentRightView';
import ServiceChargesModal from './Modals/ServiceChargesModal';
import {icons} from '../../assets/icons';
import QrCodeScanModal from './Modals/QrCodeScanModal';
import ChangeEmployee from './Modals/ChangeEmployee';
import SentLinkView from './Components/SentLinkView';
const Payment = ({navigation}) => {
  const [isOrder, setIsOrder] = useState(false);
  const [isShowServiceCharges, setIsShowServiceCharges] = useState(false);
  const [isShowQrCode, setIsShowQrCode] = useState(false);
  const [isShowZeward, setIsShowZeward] = useState(false);
  const [isChangeEmployee, setIsChangeEmployee] = useState(false);
  const [screen, setScreen] = useState('');
  const [linkScreen, setLinkScreen] = useState(false);
  return (
    <View style={styles.mainContiner}>
      {isOrder ? (
        <View style={styles.orderNo}>
          {[0, 1, 2].map(item => {
            return (
              <View style={styles.orderId}>
                <Text style={styles.orderIdTxt}>{'Order # 123123'}</Text>
              </View>
            );
          })}
          <View style={styles.plusView}>
            <Image
              source={icons.plus}
              style={styles.plus}
              resizeMode="center"
            />
          </View>
        </View>
      ) : (
        <View style={{height: scale(76), backgroundColor: 'white'}} />
      )}
      <View style={styles.subContainer}>
        <PaymentLeftView />
        {linkScreen ? (
          <SentLinkView backPress={() => setLinkScreen(false)} />
        ) : (
          <>
            <PaymentMiddleView
              navigation={navigation}
              serviceChargesPress={() => setIsShowServiceCharges(true)}
              qrCodePress={() => setIsShowQrCode(true)}
              zewardPress={() => setIsShowZeward(true)}
              screen={screen}
              sendLink={val => {
                setScreen('');
                setLinkScreen(true);
              }}
            />
            <PaymentRightView
              newPress={() => {
                setIsOrder(true);
              }}
              isOrder={isOrder}
              assignPress={val => {
                if (val === 'Assign to') {
                  setIsChangeEmployee(true);
                } else if (val === 'Payment link') {
                  setScreen(val);
                }
              }}
            />
          </>
        )}
      </View>

      <ServiceChargesModal
        visible={isShowServiceCharges}
        setVisible={() => setIsShowServiceCharges(false)}
      />
      <QrCodeScanModal
        visible={isShowQrCode}
        setVisible={() => setIsShowQrCode(false)}
        qr
      />
      <QrCodeScanModal
        visible={isShowZeward}
        setVisible={() => setIsShowZeward(false)}
      />
      <ChangeEmployee
        setVisible={() => setIsChangeEmployee(false)}
        visible={isChangeEmployee}
      />
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  mainContiner: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? scale(50) : 0,
    backgroundColor: colors.purpleLight,
  },
  subContainer: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  orderNo: {
    paddingVertical: scale(7),
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  orderId: {
    paddingVertical: scale(20),
    paddingHorizontal: scale(50),
    marginRight: scale(20),
    backgroundColor: '#FAF7FD',
    borderRadius: scale(12),
  },
  orderIdTxt: {
    color: colors.purple05,
    fontSize: scale(21),
    lineHeight: scale(31),
    fontWeight: '500',
  },
  plusView: {
    width: scale(130),
    height: scale(70),
    borderRadius: scale(12),
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    width: scale(30),
    height: scale(30),
    tintColor: colors.white,
  },
});
