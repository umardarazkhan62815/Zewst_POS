import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import {icons} from '../../../assets/icons';

const UploadCard = ({title, style, onPress, data, onDelPress}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <Text style={styles.headingText}>{title}</Text>
      <View style={styles.cardView}>
        {data ? (
          <>
            <TouchableOpacity onPress={() => onDelPress()}>
              <Image source={icons.crossRound} style={styles.btnStyle1} />
            </TouchableOpacity>
            <Text style={styles.uploadTxt}>{`${data?.key} Uploaded`}</Text>
          </>
        ) : (
          <>
            <Image source={icons.uploadButton} style={styles.btnStyle} />

            <Text style={styles.dragText}>
              {'Drag & Drop or '}
              <Text style={{color: colors.purple}} onPress={() => onPress()}>
                {'choose file'}
              </Text>
              {' to upload'}
            </Text>
            <Text style={styles.formatText}>
              {'Supported formats : Jpeg, pdf'}
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

export default UploadCard;

const styles = StyleSheet.create({
  mainContainer: {
    width: scale(627),
  },
  headingText: {
    fontSize: scale(20),
    lineHeight: scale(30),
    fontWeight: '300',
    color: colors.black,
    marginBottom: scale(20),
  },
  btnStyle1: {
    height: scale(50),
    width: scale(50),
    resizeMode: 'contain',
    tintColor: colors.black,
  },
  btnStyle: {
    height: scale(50),
    width: scale(50),
    resizeMode: 'contain',
  },
  dragText: {
    fontSize: scale(18),
    lineHeight: scale(26),
    fontWeight: '300',
    color: colors.black,
  },
  cardView: {
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: colors.purple,
    padding: scale(24),
    borderRadius: 10,
  },
  formatText: {
    fontSize: scale(13),
    lineHeight: scale(26),
    fontWeight: '300',
    color: colors.black,
  },
  uploadTxt: {
    fontSize: scale(20),
    lineHeight: scale(26),
    fontWeight: '300',
    color: colors.black,
    marginTop: scale(20),
  },
});
