import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {colors} from '../../../utilies/colors';
import {scale} from '../../../utilies/scale';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import CheckButton from '../../../Components/CheckButton';
import CustomButton from '../../../Components/CustomButton';
import {icons} from '../../../assets/icons';
import {DropdownPicker} from '../../../Components/DropDownPicker';
import CheckTickButton from '../../../Components/CheckTickButton';

const data = [
  {id: '1', title: 'Delivery fee (5 Miles) - $5.00'},
  {id: '2', title: 'Guest fee 10%'},
  {id: '3', title: 'Large party gratuity 10%'},
  {id: '4', title: 'Large party gratuity 10%'},
  {id: '5', title: 'Online order take out gratuity 10%'},
  {id: '6', title: 'Online order take out non-gratuity 10%'},
];

const IssueRefundModal = ({visible, setVisible}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isAmountRefund, setIsAmountRefund] = useState(true);

  const handleCheckPress = itemId => {
    setSelectedItems(prevSelectedItems => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter(item => item !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const renderItem = ({item}) => (
    <FlexDirectionView
      Row
      style={{
        marginBottom: scale(27),
        alignItems: 'center',
      }}>
      <CheckTickButton
        checked={selectedItems.includes(item.id)}
        onPress={() => {
          handleCheckPress(item.id);
        }}
      />
      <FlexDirectionView
        Row
        spaceBetween
        style={{width: scale(589), paddingLeft: scale(20)}}>
        <View>
          <Text style={styles.title}>{'Chicken Seekh Kabab'}</Text>
          <Text style={styles.regular}>{'Regular ($1.25)'}</Text>
        </View>
        <Text style={styles.price}>{'$3.50'}</Text>
      </FlexDirectionView>
    </FlexDirectionView>
  );

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.crossBtn} onPress={setVisible}>
            <Image
              source={icons.cross}
              style={styles.close}
              resizeMode="center"
            />
          </TouchableOpacity>
          <FlexDirectionView Row>
            <CustomButton
              title={'Refund items'}
              style={[
                isAmountRefund ? styles.refundBtn : styles.refundBtnA,
                {marginRight: scale(10)},
              ]}
              titleStyle={isAmountRefund ? styles.refundTxt : styles.refundTxtA}
              onPress={() => setIsAmountRefund(false)}
            />
            <CustomButton
              title={'Refund amount'}
              style={isAmountRefund ? styles.refundBtnA : styles.refundBtn}
              titleStyle={isAmountRefund ? styles.refundTxtA : styles.refundTxt}
              onPress={() => setIsAmountRefund(true)}
            />
          </FlexDirectionView>
          {isAmountRefund ? (
            <View>
              <Text style={styles.addText}>{'Add a refund amount'}</Text>
              <Text style={styles.detailText}>
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nulla eu est elementum venenatis non non odio. Phasellus sit amet augue ullamcorper,'
                }
              </Text>
              <FlexDirectionView Row style={{marginBottom: scale(20)}}>
                <View style={styles.txtView}>
                  <Text style={styles.toTxt}>{'Refund to'}</Text>
                </View>
                <View style={[styles.txtView, {width: scale(443)}]}>
                  <Text style={styles.visaTxt}>
                    {'Visa **** **** **** 3274'}
                  </Text>
                </View>
              </FlexDirectionView>
              <FlexDirectionView Row style={{marginBottom: scale(20)}}>
                <View style={styles.txtView}>
                  <Text style={styles.toTxt}>{'Selling Price'}</Text>
                </View>
                <View style={[styles.txtView, {width: scale(443)}]}>
                  <FlexDirectionView Row spaceBetween>
                    <Text style={styles.visaTxt}>{'$87.97'}</Text>
                    <Text style={styles.visaTxt}>{'$200 Maximum'}</Text>
                  </FlexDirectionView>
                </View>
              </FlexDirectionView>
              <View style={styles.divider} />

              <FlexDirectionView Row style={{marginVertical: scale(20)}}>
                <View style={styles.txtView}>
                  <Text style={styles.toTxt}>{'Reason for refund'}</Text>
                </View>
                <DropdownPicker
                  options={['Canceled order', 'item Finished']}
                  style={styles.dropDown}
                  textStyle={styles.dropDownTxt}
                  onSelect={val => console.log(val)}
                  itemTxtStyle={styles.dropDownTxt}
                />
              </FlexDirectionView>
            </View>
          ) : (
            <View>
              <Text style={styles.addText}>{'Select item(s) to refund'}</Text>
              <Text style={styles.detailText}>
                {'item amount includes taxes and discounts., if applicable.'}
              </Text>
              <FlexDirectionView Row spaceBetween>
                <Text style={styles.amountText}>{'Item'}</Text>
                <Text style={styles.amountText}>{'Amount'}</Text>
              </FlexDirectionView>
              <View style={styles.divider} />
              <View style={styles.fListView}>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </View>
          )}
          <CustomButton
            title={'Issue Refund'}
            style={styles.btn}
            titleStyle={styles.btnTxt}
            onPress={setVisible}
          />
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
    paddingHorizontal: scale(50),
    paddingTop: scale(70),

    paddingBottom: scale(31),
    borderRadius: scale(12),
  },
  crossBtn: {
    position: 'absolute',
    right: scale(25),
    top: scale(32),
  },
  close: {
    width: scale(18),
    height: scale(18),
    marginBottom: scale(10),
  },
  refundBtn: {
    backgroundColor: colors.purpleLight,
    width: scale(293),
    height: scale(41),
    marginRight: scale(10),
  },
  refundTxt: {
    color: '#010101',
    fontWeight: '400',
    fontSize: scale(12),
    lineHeight: scale(15),
  },
  refundBtnA: {
    backgroundColor: colors.purple,
    width: scale(293),
    height: scale(41),
  },
  refundTxtA: {
    color: colors.white,
    fontWeight: '400',
    fontSize: scale(12),
    lineHeight: scale(15),
  },
  modalText: {
    fontSize: scale(36),
    lineHeight: scale(54),
    fontWeight: '500',
    color: '#0B0410',
    marginBottom: scale(30),
  },
  addText: {
    fontSize: scale(15),
    lineHeight: scale(18),
    fontWeight: '700',
    color: colors.black,
    marginBottom: scale(9),
    marginTop: scale(20),
  },
  amountText: {
    fontSize: scale(16),
    lineHeight: scale(17),
    fontWeight: '700',
    color: colors.black,
    marginVertical: scale(20),
  },
  detailText: {
    fontSize: scale(12),
    lineHeight: scale(15),
    fontWeight: '500',
    color: colors.black,
    marginBottom: scale(20),
    width: scale(596),
  },
  txtView: {
    width: scale(142),
    height: scale(41),
    backgroundColor: 'rgba(239, 241, 249, 0.6)',
    justifyContent: 'center',
    paddingHorizontal: scale(13),
    borderRadius: scale(6),
    marginRight: scale(9),
  },
  toTxt: {
    color: '#5D5961',
    fontSize: scale(12),
    lineHeight: scale(15),
    fontWeight: '400',
  },
  visaTxt: {
    color: colors.black,
    fontSize: scale(12),
    lineHeight: scale(15),
    fontWeight: '400',
  },
  dropDown: {
    width: scale(443),
    height: scale(40),
    backgroundColor: 'rgba(239, 241, 249, 0.6)',
    borderWidth: 0,
  },
  dropDownTxt: {
    fontWeight: '400',
    fontSize: scale(12),
    lineHeight: scale(15),
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: colors.borderGray,
  },
  fListView: {
    backgroundColor: colors.white,
    marginTop: scale(20),
    height: scale(300),
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.black,
    fontSize: scale(16),
    fontWeight: '400',
    lineHeight: scale(20),
  },

  regular: {
    color: colors.black,
    fontSize: scale(10),
    fontWeight: '400',
    lineHeight: scale(12),
  },
  price: {
    color: colors.black,
    fontSize: scale(16),
    fontWeight: '400',
    lineHeight: scale(20),
  },
  btn: {
    backgroundColor: colors.purple,
    height: scale(47),
    width: scale(597),
    marginTop: scale(30),
  },
  btnTxt: {
    color: colors.white,
    fontSize: scale(17),
    fontWeight: '700',
  },
});

export default IssueRefundModal;
