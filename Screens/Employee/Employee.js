import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AllEmployee from './Components/AllEmployee';
import AddEmploy from './Components/AddEmploy';
import ProfileCard from './Components/ProfileCard';
const Customer = () => {
  const [card, setCard] = useState('all');
  return (
    <>
      {card === 'all' ? (
        <AllEmployee
          onAddPress={() => setCard('add')}
          eyePress={() => setCard('profile')}
        />
      ) : card === 'add' ? (
        <AddEmploy onCancelPress={() => setCard('all')} />
      ) : (
        <ProfileCard onEditPress={() => setCard('add')} />
      )}
    </>
  );
};

export default Customer;

const styles = StyleSheet.create({});
