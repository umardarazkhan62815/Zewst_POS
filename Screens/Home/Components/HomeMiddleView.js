import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  BackHandler,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {icons} from '../../../assets/icons';
import CategoryCard from './CategoryCard';
import RecomendationCard from './RecomendationCard';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import {Dimensions} from 'react-native';
import ToppingCard from './ToppingCard';
import {useSelector} from 'react-redux';
import FlexDirectionView from '../../../Components/FlexDirectionView';
const companies = [
  {id: '1', icon: 'ios-home', text: 'Home'},
  {id: '2', icon: 'ios-settings', text: 'Settings'},
  {id: '3', icon: 'ios-person', text: 'Profile'},
  {id: '4', icon: 'ios-notifications', text: 'Notifications'},
  {id: '5', icon: 'ios-mail', text: 'Messages'},

  {id: '6', icon: 'ios-home', text: 'Home'},
  {id: '7', icon: 'ios-settings', text: 'Settings'},
  {id: '8', icon: 'ios-person', text: 'Profile'},
  {id: '9', icon: 'ios-notifications', text: 'Notifications'},
  {id: '10', icon: 'ios-mail', text: 'Messages'},
];
const HomeMiddleView = () => {
  const menu = useSelector(state => state.menu);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoriesTypes, setCategoriesTypes] = useState([]);
  const [groups, setGroups] = useState([]);

  const [topping, setTopping] = useState('');
  const [order, setOrder] = useState('');

  useEffect(() => {
    updateCategories();
  }, [menu]);

  const updateCategories = () => {
    const branchCategories =
      menu?.data?.posMenuItems?.brand?.branch?.categories;
    if (branchCategories !== undefined) {
      setCategories(branchCategories);
    }
  };

  const screenHeight = Dimensions.get('window').height / 2;

  const renderCompnies = ({item}) => (
    <View style={styles.companyItem}>
      <Image style={styles.clogo} source={icons.clogo} resizeMode="center" />
      <Text style={styles.companyTxt}>{'Some'}</Text>
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
        <FlexDirectionView Row>
          <Text style={styles.categoryTxt}>{'Categories'}</Text>
          {menu?.loading ? (
            <ActivityIndicator size={'small'} color={colors.purple} />
          ) : null}
        </FlexDirectionView>
        {selectedCategory !== '' ? (
          <CategoryCard
            item={selectedCategory}
            style={{width: scale(286)}}
            selectedItem={val => console.log(val)}
            cross
            onCrossPress={() => {
              setGroups([]);
              setOrder('');
              setSelectedCategory('');
            }}
          />
        ) : null}
        <FlatList
          data={categories}
          renderItem={({item}) => (
            <CategoryCard
              item={item}
              selectedItem={val => {
                setCategoriesTypes(val?.categoryTypes);
                setSelectedCategory(val);
              }}
              type={selectedCategory !== '' ? true : false}
            />
          )}
          numColumns={4}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {selectedCategory !== '' ? (
        <>
          {categoriesTypes.map(item => {
            return (
              <View>
                {item?.items?.length > 0 ? (
                  <Text style={styles.categoryTxt}>
                    {item?.categoryTypeName}
                  </Text>
                ) : null}
                <FlatList
                  data={item?.items}
                  renderItem={({item: _item}) => (
                    <RecomendationCard
                      item={_item}
                      setOrder={val => {
                        setOrder(val);
                        if (val?.groups.length > 0) {
                          setGroups(val?.groups.slice(1, val?.groups.length));
                        }
                      }}
                    />
                  )}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  contentContainerStyle={{gap: scale(20)}}
                />
              </View>
            );
          })}
          {selectedCategory !== '' && groups?.length > 0 ? (
            <View>
              {groups.map(group => {
                // console.log('Groups', group);
                return (
                  <View key={group._id}>
                    <Text style={styles.categoryTxt}>{group?.groupName}</Text>
                    <FlatList
                      data={group.modifiers}
                      renderItem={({item}) => (
                        <ToppingCard
                          item={item}
                          setTopping={val => setTopping(val)}
                          product={order}
                        />
                      )}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                    />
                  </View>
                );
              })}
            </View>
          ) : null}
          {/* <View style={{paddingBottom: scale(50)}}>
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
          </View> */}
        </>
      ) : (
        <View>
          {/* <Text style={styles.categoryTxt}>{'Recommendation'}</Text>
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
          /> */}
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
