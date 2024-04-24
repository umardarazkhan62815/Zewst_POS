import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../utilies/colors';
import {scale} from '../../../utilies/scale';
import {icons} from '../../../assets/icons';
import {images} from '../../../assets/images';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import CustomButton from '../../../Components/CustomButton';
import TranscationCard from './TranscationCard';
import OrderItem from '../../PaymentSuccess/Components/OrderItem';

const duration = ['Today', 'Yesterday', 'Week', 'Month'];

const data = [
  {id: '1', name: 'Item 1'},
  {id: '2', name: 'Item 2'},
  {id: '3', name: 'Item 3'},
  {id: '1', name: 'Item 1'},
  {id: '2', name: 'Item 2'},
  {id: '3', name: 'Item 3'},
  {id: '3', name: 'Item 3'},
];
const TranscationRightView = () => {
  const [isfulfilled, setIsFulFilled] = useState(true);
  return (
    <View style={styles.mainContainer}>
      {/* <View style={styles.headerView}>
        <TouchableOpacity style={styles.iconView}>
          <Image
            source={icons.plus}
            style={styles.headerIcon}
            resizeMode="center"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconView}>
          <Image
            source={icons.search}
            style={styles.headerIcon}
            resizeMode="center"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconView}>
          <Image
            source={icons.message}
            style={styles.headerIcon}
            resizeMode="center"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconView}>
          <Image
            source={icons.bell}
            style={styles.headerIcon}
            resizeMode="center"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileView}>
          <Image
            source={images.profile}
            style={styles.profileImage}
            resizeMode="center"
          />
          <View style={styles.onlineView}></View>
        </TouchableOpacity>
      </View> */}
      <View style={styles.container}>
        <FlexDirectionView Row spaceBetween>
          <View>
            <Text style={styles.transcation}>{'Transactions'}</Text>
            <Text style={styles.hereTxt}>{'Manage transactions'}</Text>
          </View>
          <View style={styles.durationView}>
            {duration?.map(item => {
              return (
                <View
                  style={item === 'Today' ? styles.dayView1 : styles.dayView}>
                  <Text
                    style={item === 'Today' ? styles.dayTxt1 : styles.dayTxt}>
                    {item}
                  </Text>
                </View>
              );
            })}
          </View>
        </FlexDirectionView>
        <View style={styles.searchView}>
          <Image
            source={icons.search}
            style={styles.headerIcon}
            resizeMode="center"
          />
          <TextInput
            placeholder="Search"
            style={styles.input}
            placeholderTextColor={'rgba(22, 21, 28, 0.2)'}
          />
        </View>
        <FlexDirectionView Row>
          <View style={styles.leftView}>
            <FlexDirectionView Row>
              <CustomButton
                title={'Fulfilled'}
                style={isfulfilled ? styles.fulfilBtn : styles.fulfilBtn1}
                titleStyle={isfulfilled ? styles.fulfilTxt : styles.refundTxt}
                onPress={() => setIsFulFilled(true)}
              />
              <CustomButton
                title={'Refund'}
                style={isfulfilled ? styles.refundBtn : styles.refundBtn1}
                titleStyle={isfulfilled ? styles.refundTxt : styles.fulfilTxt}
                onPress={() => setIsFulFilled(false)}
              />
            </FlexDirectionView>
            <View style={styles.flatListView}>
              <FlatList
                data={data}
                renderItem={item => <TranscationCard item={item} />}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.rightView}>
            <Text style={styles.cardTxt}>{'Card payment'}</Text>
            <FlexDirectionView Row style={styles.cardView}>
              <Image
                style={styles.card}
                source={icons.masterCard}
                resizeMode="center"
              />
              <Text style={styles.masterTxt}>
                {'Master card  **** **** **** 6753'}
              </Text>
            </FlexDirectionView>
            <FlexDirectionView Row style={styles.cardView}>
              <Image
                style={styles.doc1}
                source={icons.doc1}
                resizeMode="cover"
              />
              <Text style={styles.masterTxt}>{'Receipt number  #466546'}</Text>
            </FlexDirectionView>
            <Text style={styles.itemTxt}>{'Item'}</Text>
            <View>
              <FlatList
                data={[1, 2]}
                renderItem={item => (
                  <OrderItem item={item} style={styles.orderItem} />
                )}
              />
            </View>
            {isfulfilled ? (
              <FlexDirectionView Row style={{marginTop: scale(40)}}>
                <CustomButton
                  title={'Send Receipt'}
                  style={styles.fulfilBtn}
                  titleStyle={styles.fulfilTxt}
                />
                <CustomButton
                  title={'Issue refund'}
                  style={styles.refundBtnIssue}
                  titleStyle={styles.refundTxt}
                />
              </FlexDirectionView>
            ) : null}
          </View>
        </FlexDirectionView>
      </View>
    </View>
  );
};

export default TranscationRightView;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  //header start
  headerView: {
    backgroundColor: colors.white,
    height: scale(64),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: scale(42),
  },
  iconView: {
    marginRight: scale(35),
  },
  headerIcon: {
    width: scale(27),
    height: scale(27),
    tintColor: colors.black,
  },
  profileView: {
    width: scale(36),
    height: scale(36),
  },
  profileImage: {
    width: scale(36),
    height: scale(36),
    borderRadius: scale(18),
  },
  onlineView: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'green',
    width: scale(10),
    height: scale(10),
    borderWidth: scale(2),
    borderColor: colors.white,
    borderRadius: scale(5),
  },
  //ends
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.01)',
    flex: 1,
    paddingTop: scale(84),
    paddingLeft: scale(129),
    paddingRight: scale(140),
  },
  transcation: {
    color: colors.black,
    fontWeight: '600',
    fontSize: scale(23),
    lineHeight: scale(34),
  },
  hereTxt: {
    color: '#A2A1A8',
    fontWeight: '300',
    fontSize: scale(16),
    lineHeight: scale(25),
  },
  durationView: {
    paddingVertical: scale(6),
    paddingHorizontal: scale(3),
    backgroundColor: '#ECE6F7',
    borderRadius: scale(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayView: {
    borderRadius: scale(10),
  },
  dayView1: {
    backgroundColor: colors.white,
    borderRadius: scale(10),
  },
  dayTxt: {
    color: colors.black5,
    fontWeight: '600',
    fontSize: scale(8),
    lineHeight: scale(18),
    paddingHorizontal: scale(12),
    paddingVertical: scale(7),
  },
  dayTxt1: {
    color: colors.purple,
    fontWeight: '600',
    fontSize: scale(8),
    lineHeight: scale(18),
    paddingHorizontal: scale(12),
    paddingVertical: scale(7),
  },
  searchView: {
    borderColor: colors.borderGray,
    borderRadius: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: scale(18),
    paddingVertical: scale(14),
    marginTop: scale(34),
  },
  input: {
    color: colors.black,
    fontSize: scale(18),
    lineHeight: scale(27),
    fontWeight: '300',
    paddingLeft: scale(11),
  },
  leftView: {
    marginTop: scale(27),
    width: scale(507),
  },
  divider: {
    width: scale(12),
    borderRadius: scale(12),
    height: scale(741),
    marginTop: scale(115),
    backgroundColor: '#EAEAEA',
    marginLeft: scale(71),
    marginRight: scale(40),
  },
  fulfilBtn: {
    backgroundColor: colors.purple,
    width: scale(225),
    height: scale(55),
    marginRight: scale(22),
    borderRadius: scale(10),
  },
  fulfilBtn1: {
    backgroundColor: colors.purpleLight,
    width: scale(225),
    height: scale(55),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: colors.purple,
    marginRight: scale(22),
  },
  fulfilTxt: {
    fontWeight: '700',
    fontSize: scale(16),
    lineHeight: scale(19),
  },
  refundBtn: {
    backgroundColor: colors.purpleLight,
    width: scale(260),
    height: scale(55),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: colors.purple,
  },
  refundBtn1: {
    backgroundColor: colors.purple,
    width: scale(260),
    height: scale(55),
    marginRight: scale(22),
    borderRadius: scale(10),
  },
  refundBtnIssue: {
    backgroundColor: colors.purpleLight,
    width: scale(225),
    height: scale(55),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: colors.purple,
  },
  refundTxt: {
    fontWeight: '400',
    fontSize: scale(16),
    lineHeight: scale(19),
    color: '#5D5961',
  },
  flatListView: {
    marginTop: scale(27),
  },
  rightView: {
    flex: 1,
  },
  cardTxt: {
    fontWeight: '600',
    fontSize: scale(22),
    lineHeight: scale(26),
    color: colors.black,
    marginTop: scale(109),
  },
  itemTxt: {
    fontWeight: '600',
    fontSize: scale(22),
    lineHeight: scale(26),
    color: colors.black,
    marginTop: scale(37),
    marginBottom: scale(30),
  },
  card: {
    width: scale(44),
    height: scale(34),
    marginRight: scale(16),
  },
  doc1: {
    width: scale(25),
    height: scale(28),
    marginRight: scale(16),
  },
  masterTxt: {
    fontSize: scale(20),
    lineHeight: scale(24),
    fontWeight: '400',
    color: colors.black,
  },
  cardView: {
    marginTop: scale(6),
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGray,
    paddingVertical: scale(24),
  },
  orderItem: {
    elevation: 0,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    backgroundColor: colors.white,
    marginBottom: scale(12),
  },
});
