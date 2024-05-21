import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utilities/colors';
import {scale} from '../../../utilities/scale';
import CustomButton from '../../../Components/CustomButton';
import FlexDirectionView from '../../../Components/FlexDirectionView';
const ServiceCharges = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>{'Service charges'}</Text>
      <FlexDirectionView Row spaceBetween style={styles.container}>
        <Text style={styles.nameTxt}>{'Delivery Fee'}</Text>
        <Text style={styles.amountTxt}>{'$5.00'}</Text>
      </FlexDirectionView>
      <FlexDirectionView Row spaceBetween style={styles.container}>
        <Text style={styles.nameTxt}>{'Guest Fee'}</Text>
        <TextInput
          placeholder="Enter fee $"
          placeholderTextColor={'#0000007D'}
          style={styles.input}
          keyboardType="number-pad"
        />
      </FlexDirectionView>
      <FlexDirectionView Row spaceBetween style={styles.container}>
        <Text style={styles.nameTxt}>{'Large party gratuity'}</Text>
        <TextInput
          placeholder="Enter fee $"
          placeholderTextColor={'#0000007D'}
          style={styles.input}
          keyboardType="number-pad"
        />
      </FlexDirectionView>
      <FlexDirectionView Row spaceBetween style={styles.container}>
        <Text style={styles.nameTxt}>{'Online order gratuity'}</Text>
        <TextInput
          placeholder="Enter fee $"
          placeholderTextColor={'#0000007D'}
          style={styles.input}
          keyboardType="number-pad"
        />
      </FlexDirectionView>
      <CustomButton title={'Add a new service charge'} style={styles.addBtn} />
    </View>
  );
};

export default ServiceCharges;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    flex: 1,
  },
  header: {
    color: colors.black,
    fontWeight: '600',
    fontSize: scale(22),
    lineHeight: scale(27),
    marginTop: scale(70),
    marginBottom: scale(10),
  },
  addBtn: {
    backgroundColor: colors.purple,
    marginTop: scale(36),
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGray,
    paddingBottom: scale(20),
  },
  nameTxt: {
    fontWeight: '400',
    fontSize: scale(20),
    lineHeight: scale(24),
    color: colors.black,
    flex: 1,
  },
  amountTxt: {
    fontWeight: '400',
    fontSize: scale(20),
    lineHeight: scale(24),
    color: colors.black,
    flex: 1,
    textAlign: 'right',
  },
  container: {
    borderBottomWidth: 1,
    paddingHorizontal: scale(15),
    borderBottomColor: colors.borderGray,
    paddingBottom: scale(20),
    marginTop: scale(30),
  },
  input: {
    color: colors.black,
    fontSize: scale(20),
    lineHeight: scale(24),
    fontWeight: '400',
    height: scale(50),
    margin: 0,
    padding: 0,
    textAlign: 'right',
  },
});
