import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {colors} from '../../utilies/colors';
import {scale} from '../../utilies/scale';
import FlexDirectionView from '../FlexDirectionView';
import CheckButton from '../CheckButton';
import CustomButton from '../CustomButton';

const data = [
  {id: '1', title: 'Delivery fee (5 Miles) - $5.00'},
  {id: '2', title: 'Guest fee 10%'},
  {id: '3', title: 'Large party gratuity 10%'},
  {id: '4', title: 'Large party gratuity 10%'},
  {id: '5', title: 'Online order take out gratuity 10%'},
  {id: '6', title: 'Online order take out non-gratuity 10%'},
];

const ServiceChargesModal = ({visible, setVisible}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckPress = itemId => {
    setSelectedItems(prevSelectedItems => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter(item => item !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const renderItem = ({item}) => (
    <FlexDirectionView
      Row
      style={{marginBottom: scale(27), alignItems: 'center'}}>
      <CheckButton
        checked={selectedItems.includes(item.id)}
        onPress={() => {
          handleCheckPress(item.id);
        }}
      />
      <Text style={styles.title}>{item.title}</Text>
    </FlexDirectionView>
  );

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{'Service Charges'}</Text>
          <View style={styles.fListView}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <CustomButton
              title={'Done'}
              style={styles.btn}
              titleStyle={styles.btnTxt}
              onPress={setVisible}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black025,
  },
  modalContent: {
    backgroundColor: '#FAFAFA',
    paddingHorizontal: scale(170),
    paddingVertical: scale(50),
  },
  modalText: {
    fontSize: scale(36),
    lineHeight: scale(54),
    fontWeight: '500',
    color: '#0B0410',
    marginBottom: scale(30),
  },
  fListView: {
    backgroundColor: colors.white,
    paddingHorizontal: scale(30),
    paddingVertical: scale(35),
    height: scale(600),
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.black,
    fontSize: scale(32),
    left: scale(48),
    fontWeight: '400',
  },
  btn: {
    backgroundColor: colors.purple,
    height: scale(77),
    width: scale(413),
    marginTop: scale(50),
    alignSelf: 'center',
  },
  btnTxt: {
    fontSize: scale(36),
    fontWeight: '700',
  },
});

export default ServiceChargesModal;
