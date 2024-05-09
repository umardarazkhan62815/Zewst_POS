import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import Search from '../../../Components/Search';
import CustomButton from '../../../Components/CustomButton';
import {icons} from '../../../assets/icons';
import {employee} from '../statics';
import EmployCard from './EmployCard';
const AllEmployee = ({onAddPress, eyePress}) => {
  const [digit, setDigit] = useState(1);

  const EmptyList = () => {
    return (
      <View style={styles.emptyListContainer}>
        <View style={styles.plusView}>
          <Image source={icons.plus} style={styles.plusIcon} />
        </View>
        <CustomButton
          title={'add new employee'}
          style={styles.addBtn1}
          titleStyle={styles.addTxt1}
        />
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>{'All Employees'}</Text>
      <Text style={styles.infoTxt}>{'All Employee Information'}</Text>
      <View style={styles.container}>
        <FlexDirectionView Row style={styles.searchView}>
          <Search iconStyle={styles.searchIcon} />
          <CustomButton
            title={'Add New Employee'}
            style={styles.addBtn}
            icon={icons.plus}
            titleStyle={styles.addTxt}
            iconStyle={styles.addIcon}
            onPress={() => onAddPress()}
          />
          <CustomButton
            title={'Filter'}
            style={styles.filterBtn}
            icon={icons.filter}
            titleStyle={styles.filterTxt}
            iconStyle={styles.filterIcon}
          />
        </FlexDirectionView>
        <View style={styles.flatList}>
          <FlexDirectionView Row style={styles.userView}>
            <Text style={styles.nameTxt}>{'Employee Name'}</Text>
            <View style={{flex: 1}} />
            <Text style={styles.nameId}>{'Employee ID'}</Text>
            <Text style={styles.department}>{'Department'}</Text>
            <Text style={styles.role}>{'Roles'}</Text>
            <Text style={styles.status}>{'Status'}</Text>
            <Text style={styles.action}>{'Action'}</Text>
          </FlexDirectionView>
          <FlatList
            data={employee}
            renderItem={({item}) => (
              <EmployCard item={item} eyePress={() => eyePress()} />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={EmptyList}
          />
        </View>
        <FlexDirectionView Row style={styles.footer}>
          <Text style={styles.showTxt}>{'Showing'}</Text>
          <FlexDirectionView Row style={styles.tenView}>
            <Text style={styles.tenTxt}>{'10'}</Text>
            <Image
              source={icons.dropDown}
              style={styles.dropArrow}
              resizeMode="center"
            />
          </FlexDirectionView>
          <Text style={styles.showTxt1}>
            {'Showing 1 to 10 out of 60 records'}
          </Text>
          <FlexDirectionView Row>
            <Image
              source={icons.dropDown}
              style={styles.leftArrow}
              resizeMode="center"
            />
            {[1, 2, 3, 4].map(item => {
              return (
                <TouchableOpacity
                  onPress={() => setDigit(item)}
                  style={digit === item ? styles.count : styles.count1}>
                  <Text style={styles.countTxt}>{item}</Text>
                </TouchableOpacity>
              );
            })}
            <Image
              source={icons.dropDown}
              style={styles.rightArrow}
              resizeMode="center"
            />
          </FlexDirectionView>
        </FlexDirectionView>
      </View>
    </View>
  );
};

export default AllEmployee;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: scale(84),
    paddingLeft: scale(94),
    paddingRight: scale(192),
  },
  container: {
    borderWidth: 1,
    borderColor: colors.borderGray,
    flex: 1,
    padding: scale(23),
    marginTop: scale(11),
    marginBottom: scale(20),
    borderRadius: scale(10),
  },
  searchView: {},
  heading: {
    color: colors.black,
    fontWeight: '600',
    fontSize: scale(24),
    lineHeight: scale(33),
  },
  searchIcon: {
    width: scale(24),
    height: scale(24),
  },
  infoTxt: {
    color: '#A2A1A8',
    fontWeight: '300',
    fontSize: scale(16),
    lineHeight: scale(25),
  },
  addBtn: {
    marginLeft: scale(72),
    backgroundColor: colors.purple,
    height: scale(52),
    width: scale(253),
    marginRight: scale(23),
    borderRadius: scale(11),
  },
  addTxt: {
    color: colors.white,
    fontWeight: '500',
    fontSize: scale(18),
    lineHeight: scale(27),
  },
  addIcon: {
    tintColor: colors.white,
    width: scale(23),
    height: scale(23),
  },
  filterBtn: {
    backgroundColor: colors.white,
    height: scale(52),
    width: scale(134),
    borderRadius: scale(11),
    borderWidth: 1,
    borderColor: colors.borderGray,
  },
  filterTxt: {
    color: colors.black,
    fontWeight: '500',
    fontSize: scale(18),
    lineHeight: scale(27),
  },
  filterIcon: {
    tintColor: colors.black,
    width: scale(27),
    height: scale(27),
  },
  flatList: {
    flex: 1,
    marginTop: scale(30),
  },
  userView: {
    marginBottom: scale(17),
  },
  nameTxt: {
    color: '#A2A1A8',
    fontWeight: '500',
    fontSize: scale(18),
    lineHeight: scale(22),
  },
  nameId: {
    color: '#A2A1A8',
    fontWeight: '500',
    fontSize: scale(18),
    lineHeight: scale(22),
    width: scale(151),
  },
  department: {
    color: '#A2A1A8',
    fontWeight: '500',
    fontSize: scale(18),
    lineHeight: scale(22),
    width: scale(196),
  },
  role: {
    color: '#A2A1A8',
    fontWeight: '500',
    fontSize: scale(18),
    lineHeight: scale(22),
    width: scale(185),
  },
  status: {
    color: '#A2A1A8',
    fontWeight: '500',
    fontSize: scale(18),
    lineHeight: scale(22),
    width: scale(125),
  },
  action: {
    color: '#A2A1A8',
    fontWeight: '500',
    fontSize: scale(18),
    lineHeight: scale(22),
    width: scale(114),
  },
  footer: {
    marginTop: scale(10),
    height: scale(52),
  },
  showTxt: {
    color: '#A2A1A8',
    fontWeight: '300',
    fontSize: scale(16),
    lineHeight: scale(25),
  },
  showTxt1: {
    color: '#A2A1A8',
    fontWeight: '300',
    fontSize: scale(16),
    lineHeight: scale(25),
    flex: 1,
    textAlign: 'center',
  },
  tenView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.borderGray,
    backgroundColor: colors.white,
    borderRadius: scale(11),
    paddingHorizontal: scale(10),
    height: '100%',
    marginLeft: scale(22),
  },
  tenTxt: {
    color: colors.black,
    fontWeight: '300',
    fontSize: scale(16),
    lineHeight: scale(25),
    marginRight: scale(13),
  },
  dropArrow: {
    tintColor: 'black',
    width: scale(10),
    height: scale(4),
  },
  arrowBox: {
    height: scale(22),
    width: scale(22),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(13),
  },
  leftArrow: {
    height: scale(7),
    width: scale(13),
    tintColor: colors.black,
    transform: [{rotate: '90deg'}],
    marginRight: scale(11),
  },
  rightArrow: {
    height: scale(7),
    width: scale(13),
    tintColor: colors.black,
    transform: [{rotate: '270deg'}],
    marginLeft: scale(11),
  },
  count: {
    width: scale(40),
    height: scale(42),
    borderColor: colors.purple,
    borderWidth: 1,
    borderRadius: scale(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale,
  },
  count1: {
    width: scale(40),
    height: scale(42),
    borderRadius: scale(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale,
  },
  countTxt: {
    color: colors.black,
    fontWeight: '600',
    fontSize: scale(16),
    lineHeight: scale(25),
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  plusView: {
    width: scale(100),
    height: scale(100),
    backgroundColor: colors.purpleLight,
    borderRadius: scale(50),
    marginTop: scale(230),
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    tintColor: colors.purple,
    width: scale(50),
    height: scale(50),
  },
  addBtn1: {
    marginTop: scale(113),
    backgroundColor: colors.purpleLight,
    height: scale(64),
    width: scale(270),
    borderRadius: scale(11),
  },
  addTxt1: {
    color: colors.purple,
    fontWeight: '500',
    fontSize: scale(15),
    lineHeight: scale(45),
  },
});
