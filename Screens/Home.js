import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  Platform,
} from 'react-native';
import {colors} from '../utilies/colors';
import {scale} from '../utilies/scale';
import ShiftStatusModal from '../Components/HomeComponents/ShiftStatusModal';
import EndShiftModal from '../Components/HomeComponents/EndShiftModal';
import CloseResturantModal from '../Components/HomeComponents/CloseResturantModal';
import RecordSaleModal from '../Components/HomeComponents/RecordSaleModal';
import CashCoinModal from '../Components/HomeComponents/CashCoinModal';
import {icons} from '../assets/icons';
import OrderDetails from '../Components/HomeComponents/OrderDetails';
import HomeMiddleView from '../Components/HomeComponents/HomeMiddleView';
import HomeLeftView from '../Components/HomeComponents/HomeLeftView';

const Home = ({navigation}) => {
  const [statusModalvisible, setStatusModalvisible] = useState(false);
  const [endShifModalVisible, setEndShifModalVisible] = useState(false);
  const [closeRestModalVisible, setCloseRestModalVisible] = useState(false);
  const [showSaleModal, setShowSaleModal] = useState(false);
  const [showCashModal, setShowCashModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
        {showMenu ? (
          <TouchableOpacity
            style={styles.menuView}
            onPress={() => setShowMenu(false)}>
            <Image
              source={icons.menu}
              style={styles.menuBtn}
              resizeMode="center"
            />
          </TouchableOpacity>
        ) : (
          <HomeLeftView
            logoutPress={() => setStatusModalvisible(true)}
            showMenu={() => setShowMenu(true)}
          />
        )}
        <HomeMiddleView />
        <View style={styles.rightView}>
          <OrderDetails navigation={navigation} />
        </View>
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
