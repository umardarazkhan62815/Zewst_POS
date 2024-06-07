import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import RecomendationCard from './RecomendationCard';
import {colors} from '../../../utilities/colors';
import {scale} from '../../../utilities/scale';
const OrderCard = item => {
  console.log('DDDDDD', item?.item);
  const [order, setOrder] = useState('');
  return (
    <>
      <View>
        {item?.item?.items?.length > 0 ? (
          <Text style={styles.categoryTxt}>{item?.item?.categoryTypeName}</Text>
        ) : null}
        <FlatList
          data={item?.item?.items}
          renderItem={({item: _item}) => (
            <RecomendationCard
              item={_item}
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
      {/* {order !== '' ? (
        <View>
          <Text style={styles.categoryTxt}>{'Toppings'}</Text>
          <FlatList
            data={companies}
            renderItem={({item}) => (
              <ToppingCard item={item} setTopping={val => setTopping(val)} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ) : null} */}
    </>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  categoryTxt: {
    fontSize: scale(30),
    fontWeight: '500',
    lineHeight: scale(45),
    color: colors.black,
    marginVertical: scale(10),
  },
});
