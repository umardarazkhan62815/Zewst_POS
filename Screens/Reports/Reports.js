import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../../utilities/scale';
import ReportCard from './Components/ReportCard';
import {colors} from '../../utilities/colors';
import {icons} from '../../assets/icons';
import FlexDirectionView from '../../Components/FlexDirectionView';
import CustomButton from '../../Components/CustomButton';
import OrderItem from './Components/OrderItem';
import {BarChart, PieChart} from 'react-native-gifted-charts';
const data = [
  {id: '1', text: 'Gross Sales', color: '#25B85E', icon: icons.gross},
  {id: '2', text: 'Net sales', color: '#F04A6A', icon: icons.netSale},
  {id: '3', text: 'Sales', color: '#E87A3F', icon: icons.sale},
  {id: '4', text: 'Item 4', color: '#5E61FC', icon: icons.average},
  {id: '5', text: 'Item 5', color: '#A561D8', icon: icons.refund},
  {id: '6', text: 'Item 6', color: '#D17C8F', icon: icons.discount},
];
const pieData = [
  {value: 21, color: 'rgba(38,17,188,1)', text: '21%'},
  {value: 66, color: 'rgba(209,35,17,1)', text: '66%'},
  {value: 13, color: 'rgba(253,134,8,1)', text: '13%'},
];
const chartValue = [
  {
    value: 400000,
    frontColor: 'rgba(39,153,257,1)',
    gradientColor: 'rgba(39,153,257,1)',
    spacing: scale(6),
    label: 'USA',
  },
  {
    value: 50000,
    frontColor: 'rgba(64,54,184,1)',
    gradientColor: 'rgba(64,54,184,1)',
  },

  {
    value: 250000,
    frontColor: 'rgba(39,153,257,1)',
    gradientColor: 'rgba(39,153,257,1)',
    spacing: 6,
    label: 'China',
  },
  {
    value: 120000,
    frontColor: 'rgba(64,54,184,1)',
    gradientColor: 'rgba(64,54,184,1)',
  },

  {
    value: 110000,
    frontColor: 'rgba(39,153,257,1)',
    gradientColor: 'rgba(39,153,257,1)',
    spacing: 6,
    label: 'Brazil',
  },
  {
    value: 10000,
    frontColor: 'rgba(64,54,184,1)',
    gradientColor: 'rgba(64,54,184,1)',
  },

  {
    value: 75000,
    frontColor: 'rgba(39,153,257,1)',
    gradientColor: 'rgba(39,153,257,1)',
    spacing: 6,
    label: 'EU',
  },
  {
    value: 120000,
    frontColor: 'rgba(64,54,184,1)',
    gradientColor: 'rgba(64,54,184,1)',
  },

  {
    value: 20000,
    frontColor: '#006DFF',
    gradientColor: '#009FFF',
    spacing: 6,
    label: 'India',
  },
  {
    value: 10000,
    frontColor: 'rgba(64,54,184,1)',
    gradientColor: 'rgba(64,54,184,1)',
  },

  {
    value: 10000,
    frontColor: 'rgba(39,153,257,1)',
    gradientColor: 'rgba(39,153,257,1)',
    spacing: 6,
    label: 'Russia',
  },

  {
    value: 80000,
    frontColor: 'rgba(64,54,184,1)',
    gradientColor: 'rgba(64,54,184,1)',
  },
];

const Reports = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>{'Overview'}</Text>
      <Text style={styles.reportTxt}> {'Overview of reports'}</Text>
      <View style={styles.flatListView}>
        <FlatList
          data={data}
          renderItem={({item}) => <ReportCard item={item} />}
          keyExtractor={item => item.id}
          numColumns={3}
          columnWrapperStyle={{gap: scale(30)}}
          contentContainerStyle={{gap: scale(16)}}
        />
      </View>
      <FlexDirectionView Row style={styles.chartView}>
        <View style={styles.barChartView}>
          <FlexDirectionView Row style={styles.valueView}>
            <Text style={styles.dailyTxt}>{'Daily gross sales'}</Text>
            <FlexDirectionView Row>
              <View style={styles.dot} />
              <Text style={styles.valTxt}>{'$198.49'}</Text>
              <View style={styles.dot1} />

              <Text style={[styles.valTxt, {color: colors.purple}]}>
                {'$267.18'}
              </Text>
            </FlexDirectionView>
          </FlexDirectionView>
          <BarChart
            height={scale(250)}
            width={scale(700)}
            data={chartValue}
            barWidth={scale(24)}
            initialSpacing={scale(30)}
            spacing={scale(50)}
            barBorderRadius={scale(6)}
            yAxisThickness={0}
            xAxisType={'solid'}
            xAxisColor={'lightgray'}
            yAxisTextStyle={{color: 'lightgray'}}
            stepValue={100000}
            maxValue={500000}
            noOfSections={5}
            yAxisLabelTexts={[0, 100000, 200000, 300000, 400000, 500000]}
            labelWidth={40}
            xAxisLabelTextStyle={{
              color: '#333333',
              textAlign: 'center',
              fontSize: scale(12),
              lineHeight: scale(14),
              fontWeight: '400',
            }}
          />
        </View>
        <View style={styles.pieChartView}>
          <Text style={styles.dailyTxt}>{'Sales by payments'}</Text>
          <PieChart
            isThreeD
            showText
            textColor={colors.white}
            radius={scale(150)}
            textSize={scale(20)}
            data={pieData}
          />
          <FlexDirectionView Row style={{marginTop: scale(40)}}>
            <View
              style={[styles.dot, {backgroundColor: 'rgba(38,17,188,1)'}]}
            />
            <Text style={styles.cardTxt}>{'Visa card'}</Text>
            <View
              style={[styles.dot1, {backgroundColor: 'rgba(209,35,17,1)'}]}
            />

            <Text style={[styles.cardTxt, {color: colors.purple}]}>
              {'Cash'}
            </Text>
            <View
              style={[styles.dot1, {backgroundColor: 'rgba(253,134,8,1)'}]}
            />

            <Text style={[styles.cardTxt, {color: colors.purple}]}>
              {'Master card'}
            </Text>
          </FlexDirectionView>
        </View>
      </FlexDirectionView>
      <FlexDirectionView Row style={styles.topView}>
        <View style={styles.topItemView}>
          <FlexDirectionView Row>
            <Text style={styles.topTxt}>{'Top items'}</Text>
            <View style={{flex: 1}} />
            <CustomButton
              style={styles.grossBtn}
              title={'Gross'}
              titleStyle={styles.grossTxt}
            />
            <CustomButton
              style={styles.countBtn}
              title={'Count'}
              titleStyle={styles.countTxt}
            />
          </FlexDirectionView>
          <View style={styles.fltList}>
            <FlatList
              data={[0, 1, 2]}
              renderItem={({item}) => <OrderItem item={item} />}
              keyExtractor={item => item.id}
              contentContainerStyle={{gap: scale(16)}}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.topCategoryView}>
          <FlexDirectionView Row>
            <Text style={styles.topTxt}>{'Top categories'}</Text>
            <View style={{flex: 1}} />
            <CustomButton
              style={styles.countBtn}
              title={'Gross'}
              titleStyle={styles.countTxt}
            />
            <CustomButton
              style={styles.grossBtn}
              title={'Count'}
              titleStyle={styles.grossTxt}
            />
          </FlexDirectionView>
          <View style={styles.fltList}>
            <FlatList
              data={[0, 1, 2]}
              renderItem={({item}) => <OrderItem item={item} />}
              keyExtractor={item => item.id}
              contentContainerStyle={{gap: scale(16)}}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </FlexDirectionView>
    </View>
  );
};

export default Reports;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingLeft: scale(126),
    paddingTop: scale(84),
    backgroundColor: '#FAFAFA',
  },
  heading: {
    color: '#16151C',
    fontWeight: '600',
    fontSize: scale(23),
    lineHeight: scale(34),
  },
  reportTxt: {
    color: '#A2A1A8',
    fontSize: scale(16),
    lineHeight: scale(25),
    fontWeight: '300',
  },
  flatListView: {
    marginTop: scale(24),
  },
  topView: {
    marginTop: scale(16),
    height: scale(345),
    width: scale(1338),
  },
  topItemView: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: scale(24),
    paddingVertical: scale(17),
    borderRadius: scale(8),
  },
  topCategoryView: {
    flex: 1,
    height: '100%',
    marginLeft: scale(18),
    paddingHorizontal: scale(24),
    paddingVertical: scale(17),
    backgroundColor: colors.white,
  },
  topTxt: {
    color: colors.black,
    fontWeight: '700',
    fontSize: scale(19),
    lineHeight: scale(23),
  },
  grossBtn: {
    backgroundColor: colors.purple,
    width: scale(168),
    height: scale(38),
    borderRadius: 0,
  },
  grossTxt: {
    color: colors.white,
    fontWeight: '400',
    fontSize: scale(14),
    lineHeight: scale(21),
  },
  countBtn: {
    backgroundColor: colors.white,
    width: scale(168),
    height: scale(38),
    borderRadius: 0,
    borderWidth: 1,
    borderColor: colors.borderGray,
  },
  countTxt: {
    color: colors.black4,
    fontWeight: '400',
    fontSize: scale(14),
    lineHeight: scale(21),
  },
  chartView: {
    height: scale(425),
    marginTop: scale(16),
    width: scale(1338),
  },
  barChartView: {
    width: scale(882),
    paddingTop: scale(37),
    paddingHorizontal: scale(30),
    paddingBottom: scale(18),
    backgroundColor: colors.white,
    height: scale(425),
  },
  pieChartView: {
    backgroundColor: colors.white,
    width: scale(426),
    height: scale(425),
    marginLeft: scale(30),
    paddingTop: scale(24),
    paddingLeft: scale(24),
  },
  valueView: {
    marginBottom: scale(23),
  },
  dailyTxt: {
    color: '#333333',
    fontWeight: '700',
    fontSize: scale(19),
    lineHeight: scale(23),
  },
  dot: {
    width: scale(13),
    height: scale(12),
    backgroundColor: '#2CAFFE',
    borderRadius: scale(6),
    marginRight: scale(7),
    marginLeft: scale(20),
  },
  dot1: {
    width: scale(13),
    height: scale(12),
    backgroundColor: colors.purple,
    borderRadius: scale(6),
    marginRight: scale(7),
    marginLeft: scale(24),
  },
  valTxt: {
    color: '#2CAFFE',
    fontWeight: '500',
    fontSize: scale(24),
    lineHeight: scale(29),
  },
  cardTxt: {
    color: colors.black,
    fontWeight: '400',
    fontSize: scale(13),
    lineHeight: scale(14),
  },
  fltList: {
    height: scale(280),
  },
});
