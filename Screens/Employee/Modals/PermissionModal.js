import React, {useState} from 'react';
import {View, Modal, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {scale} from '../../../utilities/scale';
import {permissions} from '../statics';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import CheckTickButton from '../../../Components/CheckTickButton';
import CustomButton from '../../../Components/CustomButton';
import {colors} from '../../../utilities/colors';

const PermissionModal = ({visible, setVisible, onNextPress}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckPress = item => {
    setSelectedItems(prevSelectedItems => {
      if (prevSelectedItems.find(selectedItem => selectedItem.id === item.id)) {
        return prevSelectedItems.filter(
          selectedItem => selectedItem.id !== item.id,
        );
      } else {
        // If the item is not selected, add it to the selected items
        return [...prevSelectedItems, item];
      }
    });
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible();
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.selectText}>{'Select Permissions'}</Text>
          <Text style={styles.permissionText}>{'Permissions'}</Text>

          {permissions.map(item => {
            return (
              <FlexDirectionView Row style={styles.row}>
                <CheckTickButton
                  checked={selectedItems.includes(item)}
                  onPress={() => {
                    handleCheckPress(item);
                  }}
                />
                <Text style={styles.rowTxt}>{item.name}</Text>
              </FlexDirectionView>
            );
          })}
          <FlexDirectionView Row style={styles.btnView} center>
            <CustomButton
              title={'Cancel'}
              style={styles.cancelBtn}
              onPress={() => setVisible()}
              titleStyle={styles.cancelTxt}
            />
            <CustomButton
              title={'Apply'}
              style={styles.nextBtn}
              onPress={() => onNextPress(selectedItems)}
            />
          </FlexDirectionView>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: scale(600),
    paddingVertical: scale(300),
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: scale(12),
    padding: scale(61),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: scale(815),
    height: scale(506),
  },
  openButton: {
    backgroundColor: '#f194ff',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  openButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  selectText: {
    color: '#16151C',
    fontWeight: '700',
    fontSize: scale(18),
    lineHeight: scale(22),
  },
  permissionText: {
    color: '#16151C',
    fontWeight: '700',
    fontSize: scale(15),
    lineHeight: scale(18),
    marginTop: scale(35),
    marginBottom: scale(10),
  },
  row: {
    marginTop: scale(9),
  },
  rowTxt: {
    color: '#16151C',
    fontWeight: '400',
    fontSize: scale(15),
    lineHeight: scale(18),
    marginLeft: scale(9),
  },
  cancelBtn: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderGray,
    width: scale(150),
    height: scale(45),
  },
  nextBtn: {
    backgroundColor: colors.purple,
    borderColor: colors.borderGray,
    width: scale(150),
    height: scale(45),
    marginLeft: scale(10),
  },
  cancelTxt: {
    color: '#16151C',
    fontWeight: '500',
    fontSize: scale(15),
    lineHeight: scale(18),
  },
  btnView: {
    marginTop: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PermissionModal;
