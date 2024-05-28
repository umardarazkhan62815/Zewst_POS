import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  Platform,
  BackHandler,
} from 'react-native';
import {colors} from '../../utilities/colors';
import {scale} from '../../utilities/scale';
import ShiftStatusModal from './Modals/ShiftStatusModal';
import EndShiftModal from './Modals/EndShiftModal';
import CloseResturantModal from './Modals/CloseResturantModal';
import RecordSaleModal from './Modals/RecordSaleModal';
import CashCoinModal from './Modals/CashCoinModal';
import {icons} from '../../assets/icons';
import OrderDetails from './Components/OrderDetails';
import HomeMiddleView from './Components/HomeMiddleView';
import HomeLeftView from './Components/HomeLeftView';
import Transcation from '../Transaction/Transcation';
import Reservation from '../Reservation/Reservation';
import Food from '../Food/Food';
import Reports from '../Reports/Reports';
import Employee from '../Employee/Employee';
import Setting from '../Setting/Setting';
import CallModal from './Modals/CallModal';
import Customer from '../Customer/Customer';

const Home = ({navigation}) => {
  const [statusModalvisible, setStatusModalvisible] = useState(false);
  const [endShifModalVisible, setEndShifModalVisible] = useState(false);
  const [closeRestModalVisible, setCloseRestModalVisible] = useState(false);
  const [showSaleModal, setShowSaleModal] = useState(false);
  const [showCashModal, setShowCashModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [screen, setScreen] = useState('home');

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );

    return () => {
      backHandler.remove();
    };
  }, []);
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.purpleLight} barStyle="dark-content" />
      <ShiftStatusModal
        visible={statusModalvisible}
        onPress={() => setStatusModalvisible(false)}
        onEndPress={() => {
          setStatusModalvisible(false);
          setEndShifModalVisible(true);
        }}
      />
      <EndShiftModal
        visible={endShifModalVisible}
        onPress={() => setEndShifModalVisible(false)}
        onClosePress={() => {
          setEndShifModalVisible(false);
          setCloseRestModalVisible(true);
        }}
      />
      <CloseResturantModal
        visible={closeRestModalVisible}
        onClosePress={() => {
          setCloseRestModalVisible(false);
          setShowCashModal(true);
        }}
      />
      <CashCoinModal
        visible={showCashModal}
        cashPress={() => {
          setShowCashModal(false);
          setShowSaleModal(true);
        }}
      />
      <RecordSaleModal
        visible={showSaleModal}
        onRecordPress={() => navigation.replace('Login')}
      />

      <View
        style={{
          height: Platform.OS === 'ios' ? scale(50) : 0,
          backgroundColor: colors.purpleLight,
        }}
      />
      <View style={styles.subContainer}>
        {/* {showMenu ? (
          <TouchableOpacity
            style={styles.menuView}
            onPress={() => setShowMenu(false)}>
            <Image
              source={icons.menu}
              style={styles.menuBtn}
              resizeMode="center"
            />
          </TouchableOpacity>
        ) : ( */}
        <HomeLeftView
          navigation={navigation}
          logoutPress={() => setStatusModalvisible(true)}
          showMenu={() => setShowMenu(true)}
          transctionPress={val => setScreen(val)}
          screen={screen}
        />

        {screen === 'home' ? (
          <>
            <HomeMiddleView />
            <View style={styles.rightView}>
              <OrderDetails
                navigation={navigation}
                addCustomerPress={() => setScreen('customer')}
              />
            </View>
          </>
        ) : screen === 'more' ? (
          <Reservation />
        ) : screen === 'food' ? (
          <Food />
        ) : screen === 'report' ? (
          <Reports />
        ) : screen === 'employee' ? (
          <Employee />
        ) : screen === 'setting' ? (
          <Setting />
        ) : screen === 'customer' ? (
          <Customer />
        ) : (
          <Transcation />
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  homeTxt: {
    color: colors.black,
    fontSize: scale(36),
    marginBottom: scale(50),
  },

  rightView: {
    width: '21%',
    backgroundColor: 'red',
  },
  newOrderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuBtn: {
    width: scale(18),
    height: scale(14),
  },
  newOrder: {
    flexDirection: 'row',
  },

  menuView: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(90),
    height: scale(90),
  },
});
