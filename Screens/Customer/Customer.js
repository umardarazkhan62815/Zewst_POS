import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AllCustomer from './Components/AllCustomer';
import EditCustomer from './Components/EditCustomer';
import AddCustomerModal from './Modals/AddCustomerModal';
import {getCustomersAPI} from '../../src/Redux/Slices/GetCustomerSlice';
import {useDispatch, useSelector} from 'react-redux';
const Customer = () => {
  const dispatch = useDispatch();

  const branchId = useSelector(state => state.menu);
  // console.log('BranchId', branchId);
  const [isAddCustomer, setIsCustomer] = useState(false);
  const [card, setCard] = useState('all');
  const [customer, setCustomer] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    if (branchId && branchId?.data && branchId?.data?.posMenuItems) {
      dispatch(
        getCustomersAPI(branchId?.data?.posMenuItems?.brand?.branch?._id),
      );
    }
  }, [branchId]);
  return (
    <>
      <AddCustomerModal
        visible={isAddCustomer}
        setVisible={() => setIsCustomer(false)}
      />
      {card === 'all' ? (
        <AllCustomer
          onEditPress={val => {
            setCustomer(val);
            setIsEdit(true);
            setCard('add');
          }}
          eyePress={val => {
            setCustomer(val);
            setCard('add');
            setIsEdit(false);
          }}
          onAddPress={() => setIsCustomer(true)}
        />
      ) : (
        <EditCustomer
          onCancelPress={() => setCard('all')}
          item={customer}
          isEdit={isEdit}
        />
      )}
    </>
  );
};

export default Customer;

const styles = StyleSheet.create({});
