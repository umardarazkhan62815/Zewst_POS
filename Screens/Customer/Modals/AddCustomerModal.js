import React from 'react';
import {Modal, Text, View, StyleSheet, Platform} from 'react-native';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import EditText from '../../../Components/EditText';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import CustomButton from '../../../Components/CustomButton';

const AddCustomerModal = ({visible, setVisible}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible();
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.customerTxt}>{'Customer Details'}</Text>
          <EditText placeholder={'Full name'} style={styles.input} />
          <EditText placeholder={'Phone no'} style={styles.input} />
          <EditText placeholder={'Email ID'} style={styles.input} />
          <Text style={styles.BillingTxt}>{'Billing Address'}</Text>
          <EditText placeholder={'Address line 1'} style={styles.input} />
          <EditText placeholder={'Address line 1'} style={styles.input} />
          <FlexDirectionView Row>
            <EditText
              placeholder={'City'}
              style={[styles.input1, {marginRight: scale(10)}]}
            />
            <EditText placeholder={'State'} style={styles.input1} />
          </FlexDirectionView>
          <EditText placeholder={'Postal code'} style={styles.input} />
          <CustomButton
            title={'Save customer'}
            style={styles.btn}
            titleStyle={styles.btnTxt}
            onPress={() => setVisible()}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingTop: Platform.OS == 'ios' ? scale(300) : scale(250),
    paddingRight: scale(200),
  },
  modalContent: {
    width: scale(437),
    backgroundColor: 'white',
    paddingVertical: scale(18),
    borderRadius: scale(10),
    paddingHorizontal: scale(17),
  },
  customerTxt: {
    fontWeight: '500',
    fontSize: scale(20),
    lineHeight: scale(30),
    color: colors.black,
  },
  input: {
    marginTop: scale(18),
    backgroundColor: '#EFF1F999',
    borderWidth: 0,
  },
  BillingTxt: {
    fontWeight: '500',
    fontSize: scale(20),
    lineHeight: scale(30),
    color: colors.black,
    marginTop: scale(18),
  },
  input1: {
    marginTop: scale(18),
    backgroundColor: '#EFF1F999',
    borderWidth: 0,
    flex: 1,
  },
  btn: {
    backgroundColor: colors.purple,
    marginTop: scale(18),
  },
  btnTxt: {
    fontWeight: '500',
    fontSize: scale(24),
    lineHeight: scale(30),
    color: colors.white,
  },
});

export default AddCustomerModal;
