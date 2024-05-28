import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {scale} from '../../utilities/scale';
import {colors} from '../../utilities/colors';
import OrderItem from './Components/OrderItem';
import CustomButton from '../../Components/CustomButton';
import {icons} from '../../assets/icons';
import {images} from '../../assets/images';
import FlexDirectionView from '../../Components/FlexDirectionView';

const orderItems = [1, 2, 3, 4];

const PaymentSuccess = () => {
  const navigation = useNavigation();
  const [customerType, setCustomerType] = useState('zeward');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftView}>
        <FlexDirectionView Row style={styles.backView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={icons.rightArrow}
              style={styles.backBtn}
              resizeMode="center"
            />
          </TouchableOpacity>
          <Text style={styles.orderTxt}>{'Order Details'}</Text>
        </FlexDirectionView>
        <View style={{flex: 1, marginRight: scale(140)}}>
          <FlatList
            data={orderItems}
            renderItem={({item}) => <OrderItem item={item} />}
          />
        </View>
        <View style={styles.billDetailView}>
          <View style={styles.taxView}>
            <Text style={styles.totalTxt}>{'Tax'}</Text>
            <Text style={styles.amountTxt}>{'$ 4.00'}</Text>
          </View>
          <View style={styles.taxView}>
            <Text style={styles.totalTxt}>{'Discount'}</Text>
            <Text style={styles.amountTxt}>{'- $ 0.00'}</Text>
          </View>
          <View style={styles.taxView}>
            <Text style={styles.totalTxt}>{'Subtotal'}</Text>
            <Text style={styles.amountTxt}>{'$ 48.00'}</Text>
          </View>
          <View style={[styles.taxView, {marginBottom: 0}]}>
            <Text style={styles.totalTxt}>{'Total'}</Text>
            <Text style={styles.amountTxt}>{'$ 52.00'}</Text>
          </View>
        </View>
      </View>

      <View style={styles.rightView}>
        <View style={styles.divider} />
        <View style={styles.subContainer}>
          <Image source={icons.gTick} style={styles.tick} />
          <View style={styles.Bio}>
            {customerType === 'zeward' ? (
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
                <View
                  style={{
                    borderLeftWidth: 1,
                    borderColor: colors.purple,
                    marginLeft: scale(40),
                    height: scale(72),
                    marginRight: scale(30),
                  }}
                />
                <View>
                  <Image
                    source={icons.zeward}
                    style={styles.zeward}
                    resizeMode="center"
                  />
                  <Text style={styles.memberTxt}>{'member'}</Text>
                </View>
              </View>
            ) : customerType === 'email' ? (
              <View style={styles.userCustmerView}>
                <Image
                  style={styles.profileC}
                  source={images.profile}
                  resizeMode="center"
                />
                <View style={styles.customerView}>
                  <Text style={styles.nameC}>{'Customer '}</Text>

                  <Text style={styles.cname}>{'N.David'}</Text>
                </View>

                <View style={styles.emailView}>
                  <Text style={styles.nameC}>{'Email '}</Text>

                  <Text style={styles.cname}>{'Umerkhalid@mail.com'}</Text>
                </View>
              </View>
            ) : (
              <View style={styles.guestView}>
                <Text style={styles.nameC}>{'Customer '}</Text>

                <Text style={styles.cname}>{'Guest'}</Text>
              </View>
            )}
            <Text style={styles.thankTxt}>
              {'Thank you for your purchase!'}
            </Text>
            <Text style={styles.hiTxt}>
              {'Hi Suleman, Your order has been confirmed!'}
            </Text>
            <View style={styles.addressView}>
              <View>
                <Text style={styles.nameTxt}>{'Name'}</Text>
                <Text style={styles.peterTxt}>{'Peter Parker'}</Text>
              </View>
              <View>
                <Text style={styles.nameTxt}>{'Order No.'}</Text>
                <Text style={styles.peterTxt}>{'ID#15-1962AF'}</Text>
              </View>
            </View>
            <View style={styles.addressView}>
              <View>
                <Text style={styles.nameTxt}>{'Est. Delivery time'}</Text>
                <Text style={styles.peterTxt}>{'05/10/2021'}</Text>
              </View>
              <View>
                <Text style={styles.nameTxt}>{'Delivery Address'}</Text>
                <Text style={styles.peterTxt}>
                  {
                    '20 Ingram Street, Forest Hills, Queens, New York City, New York'
                  }
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.reOrderView}>
            <CustomButton
              title={'Re-order'}
              style={styles.orderBtn}
              titleStyle={{color: colors.black}}
            />
            <CustomButton
              title={'Main menu'}
              style={styles.menuBtn}
              titleStyle={{color: colors.purple}}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
          <CustomButton
            title={'Email receipt'}
            style={styles.receptBtn}
            icon={icons.email}
          />
        </View>
      </View>
    </View>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.purpleLight,
    paddingTop: Platform.OS === 'ios' ? scale(30) : 0,
    flexDirection: 'row',
  },
  backBtn: {
    width: scale(25),
    height: scale(30),
    tintColor: colors.black,
    transform: [{rotate: '180deg'}],
    paddingVertical: scale(20),
  },
  leftView: {
    backgroundColor: colors.white,
    width: '48%',
    paddingTop: scale(40),
    paddingLeft: scale(50),
  },
  backView: {
    marginBottom: scale(70),
  },
  rightView: {
    backgroundColor: 'white',
    width: '52%',
    flexDirection: 'row',
  },
  subContainer: {
    flex: 1,
    paddingVertical: scale(125),
    paddingLeft: scale(227),
    paddingRight: scale(188),
  },
  orderTxt: {
    color: colors.black,
    fontSize: scale(42),
    lineHeight: scale(63),
    fontWeight: '500',
    marginLeft: scale(20),
  },
  billDetailView: {
    backgroundColor: colors.white,
    paddingHorizontal: scale(52),
    marginRight: scale(140),
    borderTopWidth: 1,
    borderTopColor: colors.borderGray,
    paddingTop: scale(5),
    marginBottom: scale(200),
  },
  taxView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scale(10),
  },
  totalTxt: {
    color: '#48576E',
    fontSize: scale(24),
    fontWeight: '400',
    lineHeight: scale(36),
  },
  amountTxt: {
    color: '#48576E',
    fontSize: scale(18),
    fontWeight: '400',
    lineHeight: scale(27),
  },
  divider: {
    backgroundColor: '#EAEAEA',
    width: scale(12),
    height: '60%',
    marginTop: '12%',
    borderRadius: scale(10),
  },
  reOrderView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(60),
    marginBottom: scale(10),
  },
  receptBtn: {
    backgroundColor: colors.purple,
  },
  orderBtn: {
    flex: 1,
    backgroundColor: '#FAF7FD',
    marginRight: scale(40),
    borderRadius: 0,
  },
  menuBtn: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 0,
    borderColor: colors.purple,
    borderWidth: 1,
  },
  tick: {
    width: scale(78),
    height: scale(70),
    alignSelf: 'center',
    marginVertical: scale(65),
  },
  Bio: {},
  userView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  userCustmerView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  profile: {
    height: scale(76),
    width: scale(76),
    borderRadius: scale(38),
    marginRight: scale(12),
  },
  profileC: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(38),
    marginRight: scale(12),
  },
  name: {
    color: '#4D4D4D',
    fontSize: scale(27),
    lineHeight: scale(41),
    fontWeight: '600',
  },
  customerView: {
    width: scale(132),
  },
  guestView: {
    width: scale(132),
    marginLeft: scale(120),
  },
  nameC: {
    color: '#454545',
    fontSize: scale(12),
    lineHeight: scale(14),
    fontWeight: '500',
    marginBottom: scale(5),
  },
  cname: {
    color: colors.black,
    fontSize: scale(18),
    lineHeight: scale(21),
    fontWeight: '700',
  },
  emailView: {
    marginLeft: scale(20),
  },
  uid: {
    color: '#62748F',
    fontSize: scale(22),
    lineHeight: scale(29),
    fontWeight: '400',
  },
  zicon: {
    width: scale(28),
    height: scale(28),
    marginRight: scale(10),
  },
  idView: {
    flexDirection: 'row',
    alignItems: 'center',
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
  thankTxt: {
    color: colors.black,
    fontSize: scale(29),
    lineHeight: scale(40),
    fontWeight: '700',
    marginTop: scale(30),
    textAlign: 'center',
  },
  hiTxt: {
    color: '#463F3A',
    fontSize: scale(19),
    lineHeight: scale(25),
    fontWeight: '600',
    marginTop: scale(20),
    textAlign: 'center',
  },
  addressView: {
    borderTopWidth: 1,
    borderColor: colors.borderGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: scale(30),
    paddingVertical: scale(20),
  },
  nameTxt: {
    color: '#BCB8B1',
    fontSize: scale(14),
    lineHeight: scale(17),
    fontWeight: '500',
  },
  peterTxt: {
    color: '#8A817C',
    fontSize: scale(17),
    lineHeight: scale(19),
    fontWeight: '500',
    marginTop: scale(10),
    width: scale(176),
  },
});
