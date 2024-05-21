import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {icons} from '../../../assets/icons';
import CategoryCard from './CategoryCard';
import RecomendationCard from './RecomendationCard';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import {Dimensions} from 'react-native';
import ToppingCard from './ToppingCard';
import CallModal from '../Modals/CallModal';
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
];
const HomeMiddleView = () => {
  const screenHeight = Dimensions.get('window').height / 2;

  const [selectedCategory, setSelectedCategory] = useState('');
  const [topping, setTopping] = useState('');
  const [order, setOrder] = useState('');
  const renderCompnies = ({item}) => (
    <View style={styles.companyItem}>
      <Image style={styles.clogo} source={icons.clogo} resizeMode="center" />
      <Text style={styles.companyTxt}>{'text'}</Text>
    </View>
  );
  return (
    <ScrollView style={styles.middleView} showsVerticalScrollIndicator={false}>
      <View>
        <FlatList
          data={companies}
          renderItem={renderCompnies}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{maxHeight: screenHeight}}>
        <Text style={styles.categoryTxt}>{'Categories'}</Text>
        {selectedCategory !== '' ? (
          <CategoryCard
            style={{width: scale(286)}}
            selectedItem={val => console.log(val)}
          />
        ) : null}
        <FlatList
          data={companies}
          renderItem={({item}) => (
            <CategoryCard
              item={item}
              selectedItem={val => setSelectedCategory(val)}
              type={selectedCategory !== '' ? true : false}
            />
          )}
          numColumns={4}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {selectedCategory !== '' ? (
        <>
          <View>
            <Text style={styles.categoryTxt}>{selectedCategory}</Text>
            <FlatList
              data={companies.slice(0, 8)}
              renderItem={({item}) => (
                <RecomendationCard
                  item={item}
                  setOrder={val => {
                    setOrder(val);
                  }}
                />
              )}
              numColumns={4}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{gap: scale(20)}}
            />
          </View>
          {selectedCategory !== '' && order !== '' ? (
            <View>
              <Text style={styles.categoryTxt}>{'Toppings'}</Text>
              <FlatList
                data={companies}
                renderItem={({item}) => (
                  <ToppingCard
                    item={item}
                    setTopping={val => setTopping(val)}
                  />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          ) : null}
          <View style={{paddingBottom: scale(50)}}>
            <Text style={styles.categoryTxt}>{'Add on'}</Text>
            <FlatList
              data={companies}
              renderItem={({item}) => (
                <RecomendationCard
                  item={item}
                  setOrder={val => {
                    console.log('VAl', val);
                  }}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </>
      ) : (
        <View>
          <Text style={styles.categoryTxt}>{'Recommendation'}</Text>
          <FlatList
            data={companies}
            renderItem={({item}) => (
              <RecomendationCard
                item={item}
                setOrder={val => {
                  console.log('VAl', val);
                }}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default HomeMiddleView;

const styles = StyleSheet.create({
  middleView: {
    flex: 1,
    paddingLeft: scale(50),
    backgroundColor: '#f5f5f5',
    paddingBottom: scale(50),
  },
  categoryTxt: {
    fontSize: scale(30),
    fontWeight: '500',
    lineHeight: scale(45),
    color: colors.black,
    marginVertical: scale(10),
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
