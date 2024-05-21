import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {scale} from '../../utilities/scale';
import {colors} from '../../utilities/colors';
import Search from '../../Components/Search';
import FlexDirectionView from '../../Components/FlexDirectionView';
import {settingMenu} from './statics';
import MenuItem from './Components/MenuItem';
import PaymentsTypes from './Components/PaymentsTypes';
import Taxes from './Components/Taxes';
import Receipt from './Components/Receipt';
import SmartTipping from './Components/SmartTipping';
import CustomerManagement from './Components/CustomerManagement';
import CardReader from './Components/CardReader';
import PassCode from './Components/PassCode';
import ConfigureProfiles from './Components/ConfigureProfiles';
import Alerts from './Components/Alerts';
import ServiceCharges from './Components/ServiceCharges';

const Setting = () => {
  const [selectedType, setSelectedType] = useState(settingMenu[0]?.type);

  const handleItemPress = item => {
    console.log('Item', item);
    setSelectedType(item?.type);
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.settingTxt}>{'Settings'}</Text>
      <Text style={styles.subTxt}>{'Manage Zewst POS'}</Text>
      <FlexDirectionView Row style={styles.searchView}>
        <Search placeholder={'Search'} iconStyle={styles.searchIcon} />
      </FlexDirectionView>
      <FlexDirectionView Row style={styles.settingView}>
        <View style={styles.flatList}>
          <FlatList
            data={settingMenu}
            renderItem={({item}) => (
              <MenuItem
                item={item}
                onPress={val => handleItemPress(val)}
                selectedType={selectedType}
              />
            )}
          />
        </View>
        <View style={styles.divider} />
        {selectedType === 'Payment types' ? (
          <PaymentsTypes />
        ) : selectedType === 'Taxes' ? (
          <Taxes />
        ) : selectedType === 'Receipt' ? (
          <Receipt />
        ) : selectedType === 'Smart tipping' ? (
          <SmartTipping />
        ) : selectedType === 'Customer management' ? (
          <CustomerManagement />
        ) : selectedType === 'Card reader' ? (
          <CardReader />
        ) : selectedType === 'Passcodes' ? (
          <PassCode />
        ) : selectedType === 'Configure profiles' ? (
          <ConfigureProfiles />
        ) : selectedType === 'Alerts' ? (
          <Alerts />
        ) : selectedType === 'Service charges' ? (
          <ServiceCharges />
        ) : null}
      </FlexDirectionView>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: scale(84),
    paddingLeft: scale(129),
    paddingRight: scale(140),
    paddingBottom: scale(50),
  },
  settingTxt: {
    color: colors.blackV,
    fontSize: scale(23),
    lineHeight: scale(34),
    fontWeight: '600',
  },
  subTxt: {
    color: colors.placeHolder,
    fontSize: scale(16),
    lineHeight: scale(25),
    fontWeight: '300',
    marginBottom: scale(34),
  },
  searchView: {
    marginBottom: scale(39),
  },
  searchIcon: {
    width: scale(27),
    height: scale(27),
    tintColor: colors.blackV,
  },
  settingView: {
    flex: 1,
  },
  flatList: {
    width: scale(550),
    height: '100%',
  },
  divider: {
    height: '100%',
    backgroundColor: '#EAEAEA',
    width: scale(10),
    borderRadius: scale(10),
    marginHorizontal: scale(40),
  },
});
