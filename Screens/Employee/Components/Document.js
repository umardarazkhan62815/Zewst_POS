import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UploadCard from './UploadCard';
import {scale} from '../../../utilities/scale';
import FlexDirectionView from '../../../Components/FlexDirectionView';
const Document = () => {
  return (
    <View style={styles.mainContainer}>
      <FlexDirectionView Row spaceBetween>
        <UploadCard title={'Upload Appointment Letter'} />
        <UploadCard title={'Upload Salary Slips'} style={styles.card} />
      </FlexDirectionView>
      <FlexDirectionView Row spaceBetween style={styles.uploadView}>
        <UploadCard title={'Upload Reliving Letter'} />
        <UploadCard title={'Upload Experience Letter'} style={styles.card} />
      </FlexDirectionView>
    </View>
  );
};

export default Document;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: scale(37),
  },
  uploadView: {
    marginTop: scale(25),
  },
  card: {
    marginLeft: scale(25),
  },
});
