import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {icons} from '../../../assets/icons';
import CategoryCard from './CategoryCard';
import RecomendationCard from './RecomendationCard';
import {scale} from '../../../utilies/scale';
import {colors} from '../../../utilies/colors';

const companies = [
  {id: '1', icon: 'ios-home', text: 'Home'},
  {id: '2', icon: 'ios-settings', text: 'Settings'},
  {id: '3', icon: 'ios-person', text: 'Profile'},
  {id: '4', icon: 'ios-notifications', text: 'Notifications'},
  {id: '5', icon: 'ios-mail', text: 'Messages'},

  {id: '1', icon: 'ios-home', text: 'Home'},
  {id: '2', icon: 'ios-settings', text: 'Settings'},
  {id: '3', icon: 'ios-person', text: 'Profile'},
  {id: '4', icon: 'ios-notifications', text: 'Notifications'},
  {id: '5', icon: 'ios-mail', text: 'Messages'},

  {id: '1', icon: 'ios-home', text: 'Home'},
  {id: '2', icon: 'ios-settings', text: 'Settings'},
  {id: '3', icon: 'ios-person', text: 'Profile'},
  {id: '4', icon: 'ios-notifications', text: 'Notifications'},
  {id: '5', icon: 'ios-mail', text: 'Messages'},
];
const HomeMiddleView = () => {
  const renderCompnies = ({item}) => (
    <View style={styles.companyItem}>
      <Image style={styles.clogo} source={icons.clogo} resizeMode="center" />
      <Text style={styles.companyTxt}>{'text'}</Text>
    </View>
  );
  return (
    <View style={styles.middleView}>
      <View>
        <FlatList
          data={companies}
          renderItem={renderCompnies}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{height: '60%'}}>
        <Text style={styles.categoryTxt}>{'Categories'}</Text>
        <FlatList
          data={companies}
          renderItem={({item}) => <CategoryCard item={item} />}
          numColumns={4}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View>
        <Text style={styles.categoryTxt}>{'Recommendation'}</Text>
        <FlatList
          data={companies}
          renderItem={({item}) => <RecomendationCard item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeMiddleView;

const styles = StyleSheet.create({
  middleView: {
    flex: 1,
    paddingLeft: scale(50),
    backgroundColor: '#f5f5f5',
  },
  categoryTxt: {
    fontSize: scale(30),
    fontWeight: '500',
    lineHeight: scale(45),
    color: colors.black,
    marginBottom: scale(10),
  },
  companyItem: {
    width: scale(120),
    height: scale(92),
    backgroundColor: 'white',
    marginRight: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(8),
  },
  clogo: {
    width: scale(24),
    height: scale(20),
  },
  companyTxt: {
    color: '#4D4D4D',
    fontSize: scale(16),
    fontWeight: '500',
    lineHeight: scale(20),
    marginTop: scale(10),
  },
});
