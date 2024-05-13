import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import {scale} from '../utilities/scale';
import {images} from '../assets/images';
import {colors} from '../utilities/colors';
import {icons} from '../assets/icons';
export const DropdownPicker = ({
  options,
  onSelect,
  selectedValue,
  style,
  mainStyle,
  dropStyle,
  valStyle,
  textStyle,
  itemTxtStyle,
  tintColor,
  label,
  placeholder,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSelectOption = item => {
    onSelect(item);
    handleToggleOptions();
  };

  return (
    <View style={[styles.dropdownContainer, mainStyle]}>
      <View
        style={[
          styles.dropdownHeader,
          {backgroundColor: selectedValue ? colors.purple : colors.white},
          style,
        ]}>
        <TouchableOpacity
          style={[styles.selectedView, valStyle]}
          onPress={handleToggleOptions}>
          <Text
            style={[
              styles.selectedText,
              {color: selectedValue ? colors.white : '#A2A1A8CC'},
              textStyle,
            ]}>
            {selectedValue
              ? selectedValue
              : placeholder
              ? placeholder
              : 'Select '}
          </Text>

          <Image
            source={icons.dropDown}
            style={[
              styles.icon,
              {transform: [{rotate: !showOptions ? '180deg' : '0deg'}]},
            ]}
            tintColor={
              tintColor
                ? tintColor
                : selectedValue
                ? colors.white
                : colors.black
            }
          />
        </TouchableOpacity>
      </View>
      {showOptions && (
        <View style={[styles.flatListView, dropStyle]}>
          <FlatList
            nestedScrollEnabled
            data={options}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => handleSelectOption(item)}
                style={styles.optionItem}>
                <Text style={[styles.nameTxt, itemTxtStyle]}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    position: 'relative',
  },
  dropdownHeader: {
    borderWidth: 1,
    borderColor: colors.purple05,
    borderRadius: scale(11),
    height: scale(56),
  },
  labelView: {
    flexDirection: 'row',
    marginTop: scale(-10),
    marginLeft: scale(12),
  },
  label: {
    paddingHorizontal: scale(4),
  },
  selectedView: {
    marginTop: scale(10),
    flexDirection: 'row',
    paddingHorizontal: scale(10),
    alignItems: 'center',
  },
  selectedText: {
    flex: 1,
    fontSize: scale(20),
    lineHeight: scale(30),
    fontWeight: '300',
  },
  icon: {
    width: scale(15),
    height: scale(9),
  },
  flatListView: {
    maxHeight: scale(200),
    width: scale(440),
    borderColor: colors.black025,
    borderWidth: 1,
    borderRadius: scale(8),
  },
  optionItem: {
    padding: 10,
  },
  nameTxt: {
    fontSize: scale(19),
    fontWeight: '500',
    color: colors.black,
  },
});
