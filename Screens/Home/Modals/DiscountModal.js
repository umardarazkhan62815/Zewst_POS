import React, {useState} from 'react';
import {Modal, View, Text, StyleSheet, TextInput} from 'react-native';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import CustomButton from '../../../Components/CustomButton';

const DiscountModal = ({visible, setVisible}) => {
  const [isAmount, setIsAmount] = useState(false);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible()}>
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.enterTxt}>{'Enter Discount'}</Text>
          <Text style={styles.detailTxt}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nulla eu est elementum venenatis non non odio. Phasellus sit amet augue ullamcorper,'
            }
          </Text>
          <FlexDirectionView Row spaceBetween>
            <CustomButton
              title={'Discount ny percentage %'}
              style={isAmount ? styles.amountBtn : styles.percentageBtn}
              titleStyle={isAmount ? styles.amountTxt : styles.percentageTxt}
              onPress={() => setIsAmount(true)}
            />
            <View style={{width: scale(10)}} />
            <CustomButton
              title={'Discount by amount'}
              style={isAmount ? styles.percentageBtn : styles.amountBtn}
              titleStyle={isAmount ? styles.percentageTxt : styles.amountTxt}
              onPress={() => setIsAmount(false)}
            />
          </FlexDirectionView>
          <TextInput
            placeholder={isAmount ? 'Enter amount' : 'Enter Discount'}
            style={styles.input}
            placeholderTextColor={'#A2A1A8'}
          />
          <CustomButton
            title={'Apply discount'}
            style={styles.applyBtn}
            titleStyle={styles.amountTxt}
            onPress={() => setVisible()}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: scale(40),
    borderRadius: scale(11),
    paddingVertical: scale(46),
  },
  enterTxt: {
    color: colors.black,
    fontWeight: '500',
    fontSize: scale(26),
    lineHeight: scale(30),
    marginBottom: scale(16),
    textAlign: 'center',
  },
  detailTxt: {
    color: colors.black,
    fontWeight: '400',
    fontSize: scale(14),
    lineHeight: scale(21),
    marginBottom: scale(24),
    width: scale(570),
    textAlign: 'center',
  },
  percentageBtn: {
    backgroundColor: colors.purpleLight,
    width: scale(293),
  },
  percentageTxt: {
    color: colors.black,
    fontWeight: '400',
    fontSize: scale(12),
    lineHeight: scale(15),
  },
  amountBtn: {
    backgroundColor: colors.purple,
    width: scale(293),
  },
  amountTxt: {
    color: colors.white,
    fontWeight: '600',
    fontSize: scale(12),
    lineHeight: scale(15),
  },
  input: {
    height: scale(69),
    borderRadius: scale(11),
    borderWidth: 1,
    borderColor: colors.borderGray,
    marginVertical: scale(30),
    paddingHorizontal: scale(15),
    color: colors.black,
    fontWeight: '300',
    fontSize: scale(16),
    lineHeight: scale(24),
    padding: 0,
  },
  applyBtn: {
    backgroundColor: colors.purple,
  },
});

export default DiscountModal;
