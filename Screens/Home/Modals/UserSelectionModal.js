import React, {useEffect, useState} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../../../utilities/colors';
import {scale} from '../../../utilities/scale';
import {useDispatch, useSelector} from 'react-redux';
import {addUser} from '../../../src/Redux/Slices/CreateOrderSlice';
import CustomButton from '../../../Components/CustomButton';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import {icons} from '../../../assets/icons';

const UserSelectionModal = ({visible, setVisible, onAddPress}) => {
  const customerList = useSelector(state => state?.customersList);
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (
      customerList &&
      customerList?.data &&
      customerList?.data?.customersData
    ) {
      setUsers(customerList?.data?.customersData);
    }
  }, [customerList]);

  const handleSearch = text => {
    setSearchQuery(text);
    const filteredUsers = customerList.data.customersData.filter(
      user =>
        user.fullName.toLowerCase().includes(text.toLowerCase()) ||
        user.email.toLowerCase().includes(text.toLowerCase()),
    );
    setUsers(filteredUsers);
  };
  const itemPress = item => {
    dispatch(addUser(item));
    setVisible();
  };
  const renderItem = ({item}) => {
    const name = item?.fullName.split(' ')[0];

    return (
      <TouchableOpacity onPress={() => itemPress(item)} style={styles.itemView}>
        <Text style={styles.nameTxt}>{name}</Text>
        <Text style={styles.emailTxt}>{item?.email}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <FlexDirectionView Row spaceBetween>
            <Text style={styles.modalTitle}>{'Select a User'}</Text>
            <TouchableOpacity onPress={() => setVisible()}>
              <Image
                source={icons.cross}
                style={{width: scale(20), height: scale(20)}}
                resizeMode="center"
              />
            </TouchableOpacity>
          </FlexDirectionView>
          <TextInput
            placeholder="Search user"
            style={styles.searchView}
            value={searchQuery}
            onChangeText={handleSearch}
            placeholderTextColor={colors.placeHolder}
          />
          <View style={styles.flatView}>
            <FlatList
              data={users}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <CustomButton
            title={'Add Customer'}
            style={styles.addBtn}
            onPress={() => onAddPress()}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: scale(710),
    padding: scale(20),
    backgroundColor: 'white',
    borderRadius: scale(10),
  },
  modalTitle: {
    fontSize: scale(20),
    fontWeight: 'bold',
  },
  searchView: {
    borderWidth: 1,
    borderColor: colors.borderGray,
    borderRadius: scale(10),
    paddingVertical: scale(10),
    paddingHorizontal: scale(15),
    fontSize: scale(20),
    color: colors.black,
    marginTop: scale(15),
  },
  flatView: {
    height: scale(700),
  },
  itemView: {
    borderWidth: scale(1),
    borderColor: colors.borderGray,
    paddingVertical: scale(10),
    paddingHorizontal: scale(15),
    marginVertical: scale(5),
    borderRadius: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameTxt: {
    fontSize: scale(20),
    color: colors.black,
    fontWeight: '500',
    width: scale(100),
  },
  emailTxt: {
    fontSize: scale(20),
    color: colors.black,
    fontWeight: '500',
  },
  addBtn: {
    backgroundColor: colors.purple,
    marginTop: scale(10),
  },
});

export default UserSelectionModal;
