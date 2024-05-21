import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import EditAmount from './EditAmount';
import CountButton from '../../../Components/CountButton';
import {icons} from '../../../assets/icons';
import CustomButton from '../../../Components/CustomButton';
import SplitBillModal from '../Modals/SplitBillModal';
import {DropdownPicker} from '../../../Components/DropDownPicker';

const bills = [
  {name: 'Zewards', icon: icons.run},
  {name: 'Bill Split', icon: icons.recepit2},
  {name: 'Service charge', icon: icons.recepit},
];
const payments = [
  {name: 'Cash', icon: icons.money, selected: true},
  {name: 'Card payment', icon: icons.card, selected: false},
  {name: 'QR payment', icon: icons.qr, selected: false},
  {name: 'NFC payment', icon: icons.nfc, selected: false},
];
const PaymentMiddleView = ({
  navigation,
  serviceChargesPress,
  qrCodePress,
  zewardPress,
  screen,
  sendLink,
}) => {
  const [balance, setBalance] = useState('');
  const [tenderedAmount, setTenderedAmount] = useState('');
  const [tip, setTip] = useState('');
  const [focus, setFocus] = useState('');
  const [isSplit, setIsSplit] = useState(false);
  const [isGenerateLink, setIsGenerateLink] = useState(false);
  const [linkType, setLinkType] = useState('');
  const [email, setEmail] = useState('');

  const handlePaymentPress = item => {
    if (item?.name === 'QR payment') {
      qrCodePress(true);
    }
  };

  const handleBillPress = item => {
    if (item?.name === 'Service charge') {
      serviceChargesPress(true);
    } else if (item?.name === 'Zewards') {
      zewardPress();
    } else if (item?.name === 'Bill Split') {
      setIsSplit(true);
    }
  };

  const checkFoucs = type => {
    setFocus(type);
    console.log('Type', type);
  };

  const valueCheck = val => {
    if (val === 11) {
      if (focus === 'balance') {
        setBalance(prevBalance => prevBalance.slice(0, -1));
      } else if (focus === 'amount') {
        setTenderedAmount(prevAmount => prevAmount.slice(0, -1));
      } else if (focus === 'tip') {
        setTip(prevTip => prevTip.slice(0, -1));
      }
    } else {
      const newVal = val.toString();
      if (focus === 'balance') {
        setBalance(prevBalance => prevBalance + newVal);
      } else if (focus === 'amount') {
        setTenderedAmount(prevAmount => prevAmount + newVal);
      } else if (focus === 'tip') {
        setTip(prevTip => prevTip + newVal);
      } else {
        console.log(newVal);
      }
    }
  };
  return (
    <View style={styles.mainContainer}>
      <SplitBillModal visible={isSplit} onClose={() => setIsSplit(false)} />
      {screen === 'Payment link' ? (
        <>
          <Text style={styles.registerTxt}>{'Create Payment link'}</Text>
          <DropdownPicker
            options={['Email', 'Phone']}
            onSelect={val => setLinkType(val)}
            style={styles.dropdown}
            dropStyle={styles.dropStyle}
            placeholder={'Through email address'}
            selectedValue={linkType}
          />
          <TextInput
            placeholder={
              email === 'Email' ? 'Enter email address' : 'Enter Number'
            }
            style={styles.input}
            placeholderTextColor={'#A2A1A8CC'}
            onChangeText={val => setEmail(val)}
          />
          <View style={{flex: 1}} />
          <CustomButton
            title={'Send'}
            style={email === '' ? styles.paymentBtn2 : styles.paymentBtn1}
            onPress={() => {
              email === '' ? null : sendLink('link');
            }}
            titleStyle={{fontSize: scale(40)}}
          />
        </>
      ) : (
        <>
          <Text style={styles.registerTxt}>{'Register'}</Text>
          <View style={styles.calculatorView}>
            <View style={styles.inputViews}>
              <EditAmount
                title={'Balance'}
                placeHolder={'18.00'}
                editInput={styles.blanceInput}
                value={balance}
                onFocus={() => checkFoucs('balance')}
                onBlur={() => {
                  setFocus('');
                }}
              />
              <EditAmount
                title={'Tendered amount'}
                placeHolder={'18.00'}
                editInput={styles.tendInput}
                value={tenderedAmount}
                onFocus={() => checkFoucs('amount')}
                onBlur={() => {
                  setFocus('');
                }}
              />
              <EditAmount
                title={'Tip'}
                placeHolder={'18.00'}
                editInput={[styles.blanceInput, {marginRight: 0}]}
                value={tip}
                onFocus={() => checkFoucs('tip')}
                onBlur={() => {
                  setFocus('');
                }}
              />
            </View>
            <View style={styles.padView}>
              <View style={styles.keyBoard}>
                <View style={styles.rowCount}>
                  <CountButton
                    value={1}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => valueCheck(val)}
                  />
                  <CountButton
                    value={2}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => valueCheck(val)}
                  />
                  <CountButton
                    value={3}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => valueCheck(val)}
                  />
                  <CountButton
                    value={4}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => valueCheck(val)}
                  />
                </View>
                <View style={styles.rowCount}>
                  <CountButton
                    value={5}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => valueCheck(val)}
                  />
                  <CountButton
                    value={6}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => valueCheck(val)}
                  />
                  <CountButton
                    value={7}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => valueCheck(val)}
                  />
                  <CountButton
                    value={8}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => valueCheck(val)}
                  />
                </View>
                <View style={styles.rowCount}>
                  <CountButton
                    value={9}
                    style={styles.countbtnl}
                    valueStyle={styles.val}
                    onSelect={val => valueCheck(val)}
                  />
                  <CountButton
                    value={0}
                    style={styles.countbtnl}
                    valueStyle={styles.val}
                    onSelect={val => valueCheck(val)}
                  />
                  <CountButton
                    value={'00'}
                    style={styles.countbtnl}
                    valueStyle={styles.val}
                    onSelect={val => valueCheck(val)}
                  />
                  <CountButton
                    value={11}
                    style={styles.countbtnl}
                    valueStyle={styles.val}
                    onSelect={val => valueCheck(val)}
                    del
                  />
                </View>
              </View>
              <View style={{paddingTop: scale(25)}}>
                {bills.map(item => {
                  return (
                    <TouchableOpacity
                      style={styles.takaway}
                      onPress={() => handleBillPress(item)}>
                      <Image
                        source={item?.icon}
                        style={styles.takeaway}
                        resizeMode="center"
                      />
                      <Text style={styles.takeAwayTxt}>{item?.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
          <Text
            style={[
              styles.registerTxt,
              {marginTop: scale(11), marginBottom: scale(36)},
            ]}>
            {'Payment'}
          </Text>
          <View style={styles.paymentView}>
            {payments.map(item => {
              return (
                <TouchableOpacity
                  onPress={() => handlePaymentPress(item)}
                  style={item?.selected ? styles.payments : styles.payment}>
                  <Image
                    source={item?.icon}
                    style={styles.paymentIcon}
                    resizeMode="center"
                  />
                  <Text style={styles.paymentTxt}>{item?.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <CustomButton
            title={'Pay'}
            style={styles.paymentBtn}
            onPress={() => navigation.navigate('PaymentSuccess')}
            titleStyle={{fontSize: scale(40)}}
          />
        </>
      )}
    </View>
  );
};

export default PaymentMiddleView;

const styles = StyleSheet.create({
  mainContainer: {
    width: '41%',
    backgroundColor: colors.white,
    paddingLeft: scale(61),
    paddingRight: scale(40),
  },
  registerTxt: {
    fontWeight: '500',
    fontSize: scale(42),
    lineHeight: scale(63),
    color: colors.black,
    marginBottom: scale(11),
  },
  calculatorView: {
    backgroundColor: colors.white,

    borderRadius: scale(10),
    shadowColor: colors.black03,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: scale(40),
    paddingVertical: scale(30),
  },
  inputViews: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  blanceInput: {
    width: scale(182),
    marginRight: scale(24),
    color: colors.black,
  },
  tendInput: {
    width: scale(248),
    marginRight: scale(24),
  },
  padView: {
    marginTop: scale(30),
    flexDirection: 'row',
  },
  keyBoard: {},
  rowCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countbtn: {
    width: scale(96),
    height: scale(99),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    backgroundColor: '#FAF7FD',
    // marginBottom: scale(0),
  },
  countbtnl: {
    width: scale(96),
    height: scale(99),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    backgroundColor: '#FAF7FD',
    marginBottom: scale(0),
  },
  val: {
    fontSize: scale(42),
    lineHeight: scale(51),
    fontWeight: '700',
  },
  takaway: {
    width: scale(156),
    height: scale(93),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: colors.borderGray,
    marginBottom: scale(22),
  },
  takeAwayTxt: {
    color: colors.black,
    fontWeight: '400',
    fontSize: scale(14),
    lineHeight: scale(21),
    marginTop: scale(10),
  },
  takeaway: {
    width: scale(32),
    height: scale(32),
    tintColor: colors.black,
  },
  paymentView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  payments: {
    width: scale(170),
    height: scale(150),
    backgroundColor: colors.black03,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: colors.purple,
    marginRight: scale(21),
  },
  payment: {
    width: scale(170),
    height: scale(150),

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: scale(21),
  },
  paymentTxt: {
    color: colors.black,
    fontWeight: '500',
    fontSize: scale(24),
    lineHeight: scale(36),
    marginTop: scale(22),
  },
  paymentIcon: {
    width: scale(45),
    height: scale(45),
    tintColor: colors.black,
  },
  paymentBtn: {
    width: '100%',
    height: scale(76),
    backgroundColor: colors.purple,
    marginTop: scale(52),
    borderRadius: 0,
  },
  paymentBtn1: {
    width: '100%',
    height: scale(76),
    backgroundColor: colors.purple,
    marginBottom: scale(52),
    borderRadius: 0,
  },
  paymentBtn2: {
    width: '100%',
    height: scale(76),
    backgroundColor: colors.borderGray,
    marginBottom: scale(52),
    borderRadius: 0,
  },
  dropdown: {
    height: scale(69),
    width: '100%',
    justifyContent: 'center',
  },
  dropStyle: {
    width: '100%',
  },
  input: {
    marginTop: scale(25),
    borderRadius: scale(11),
    borderColor: colors.borderGray,
    borderWidth: 1,
    height: scale(69),
    paddingHorizontal: scale(15),
    padding: 0,
    fontSize: scale(20),
    fontWeight: '500',
    color: colors.black,
  },
});
