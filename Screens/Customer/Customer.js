import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AllCustomer from './Components/AllCustomer';
import EditCustomer from './Components/EditCustomer';
import AddCustomerModal from './Modals/AddCustomerModal';
const Customer = () => {
  const [isAddCustomer, setIsCustomer] = useState(false);
  const [card, setCard] = useState('all');
  return (
    <>
      <AddCustomerModal
        visible={isAddCustomer}
        setVisible={() => setIsCustomer(false)}
      />
      {card === 'all' ? (
        <AllCustomer
          onEditPress={() => setCard('add')}
          eyePress={() => setCard('add')}
          onAddPress={() => setIsCustomer(true)}
        />
      ) : (
        <EditCustomer onCancelPress={() => setCard('all')} />
      )}
    </>
  );
};

export default Customer;

const styles = StyleSheet.create({});
