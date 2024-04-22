import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {colors} from '../../utilies/colors';
import {scale} from '../../utilies/scale';
import FlexDirectionView from '../FlexDirectionView';
import CheckButton from '../CheckButton';
import CustomButton from '../CustomButton';
import {DropdownPicker} from '../DropDownPicker';
import CountButton from '../CountButton';
import {icons} from '../../assets/icons';
const data = ['N.Davaid', 'J.Kavin', 'L.Sam', 'P.John'];

const ChangeEmployee = ({visible, setVisible}) => {
  const [selectedItems, setSelectedItems] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{'Select Employee'}</Text>
          <DropdownPicker
            selectedValue={selectedItems}
            style={styles.dropDown}
            dropStyle={{width: scale(723), marginTop: scale(70)}}
            options={data}
            onSelect={val => {
              setSelectedItems(val);
              console.log(val);
            }}
          />
          {isLogin ? (
            <View style={styles.padView}>
              <View style={styles.keyBoard}>
                <View style={styles.rowCount}>
                  <CountButton
                    value={1}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => console.log(val)}
                  />
                  <CountButton
                    value={2}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => console.log(val)}
                  />
                  <CountButton
                    value={3}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => console.log(val)}
                  />
                </View>
                <View style={styles.rowCount}>
                  <CountButton
                    value={4}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => console.log(val)}
                  />
                  <CountButton
                    value={5}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => console.log(val)}
                  />
                  <CountButton
                    value={6}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => console.log(val)}
                  />
                </View>
                <View style={styles.rowCount}>
                  <CountButton
                    value={7}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => console.log(val)}
                  />
                  <CountButton
                    value={8}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => console.log(val)}
                  />
                  <CountButton
                    value={9}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => console.log(val)}
                  />
                </View>
                <View style={styles.lastCount}>
                  <CountButton
                    value={0}
                    style={styles.countbtn}
                    valueStyle={styles.val}
                    onSelect={val => console.log(val)}
                  />
                </View>
              </View>
              <FlexDirectionView Row>
                <CustomButton
                  title={'Log in'}
                  style={styles.btnLogin}
                  titleStyle={styles.btnTxtLogin}
                  onPress={() => {
                    setVisible();
                    setIsLogin(false);
                  }}
                />
                <TouchableOpacity style={styles.bioBtn}>
                  <Image source={icons.bio} style={styles.bio} />
                </TouchableOpacity>
              </FlexDirectionView>
            </View>
          ) : (
            <CustomButton
              title={'Assign to'}
              style={[
                styles.btn,
                {
                  backgroundColor:
                    selectedItems !== '' ? colors.purple : colors.purpleLight,
                },
              ]}
              titleStyle={[
                styles.btnTxt,
                {color: selectedItems !== '' ? colors.white : colors.purple},
              ]}
              onPress={() => setIsLogin(true)}
            />
          )}
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
    paddingHorizontal: scale(102),
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
    backgroundColor: colors.purpleLight,
    height: scale(76),
    width: scale(723),
    marginTop: scale(50),
    alignSelf: 'center',
  },
  btnLogin: {
    backgroundColor: colors.purple,
    height: scale(60),
    width: scale(458),
    marginTop: scale(70),
    alignSelf: 'center',
  },
  bioBtn: {
    width: scale(60),
    height: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(22),
    marginTop: scale(70),
  },
  bio: {
    width: scale(49),
    height: scale(49),
    tintColor: colors.black,
  },
  btnTxt: {
    fontSize: scale(36),
    fontWeight: '700',
    color: colors.purple,
  },
  btnTxtLogin: {
    fontSize: scale(16),
    fontWeight: '600',
    color: colors.white,
    lineHeight: scale(24),
  },
  dropDown: {
    width: scale(723),
    height: scale(53),
    marginTop: scale(20),
    backgroundColor: colors.white,
  },
  padView: {
    marginTop: scale(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  countbtn: {
    width: scale(130),
    height: scale(132),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    backgroundColor: '#FAF7FD',
    // marginBottom: scale(0),
  },

  rowCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastCount: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  val: {
    fontWeight: '700',
    fontSize: scale(54),
    color: colors.black,
  },
});

export default ChangeEmployee;
