import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import AllEmployee from './Components/AllEmployee';
import AddEmploy from './Components/AddEmploy';
import ProfileCard from './Components/ProfileCard';
const Customer = () => {
  const [card, setCard] = useState('all');
  const [employeeData, setEmployeeData] = useState('');
  return (
    <>
      {card === 'all' ? (
        <AllEmployee
          onAddPress={val => {
            setCard('add');
            setEmployeeData(val);
          }}
          eyePress={val => {
            setEmployeeData(val);
            setCard('profile');
          }}
        />
      ) : card === 'add' ? (
        <AddEmploy onCancelPress={() => setCard('all')} data={employeeData} />
      ) : (
        <ProfileCard onEditPress={() => setCard('add')} data={employeeData} />
      )}
    </>
  );
};

export default Customer;

const styles = StyleSheet.create({});
