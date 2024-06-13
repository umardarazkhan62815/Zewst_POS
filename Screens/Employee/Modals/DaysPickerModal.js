import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {colors} from '../../../utilities/colors';
import {scale} from '../../../utilities/scale';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import CheckButton from '../../../Components/CheckButton';
import CustomButton from '../../../Components/CustomButton';

const data = [
  {title: 'Monday', selected: false},
  {title: 'Tuesday', selected: false},
  {title: 'Wednesday', selected: false},
  {title: 'Thursday', selected: false},
  {title: 'Friday', selected: false},
  {title: 'Saturday', selected: false},
  {title: 'Sunday', selected: false},
];

const DayPickerModal = ({visible, setVisible}) => {
  const [selectedItems, setSelectedItems] = useState(data);

  const handleCheckPress = dayTitle => {
    setSelectedItems(prevSelectedItems =>
      prevSelectedItems.map(item =>
        item.title === dayTitle ? {...item, selected: !item.selected} : item,
      ),
    );
  };

  const renderItem = ({item}) => (
    <FlexDirectionView
      Row
      style={{marginBottom: scale(27), alignItems: 'center'}}>
      <CheckButton
        checked={item.selected}
        onPress={() => handleCheckPress(item.title)}
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
              data={selectedItems}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <CustomButton
              title={'Done'}
              style={styles.btn}
              titleStyle={styles.btnTxt}
              onPress={() => setVisible(selectedItems)}
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

export default DayPickerModal;
