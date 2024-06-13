import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
import UploadCard from './UploadCard';
import {scale} from '../../../utilities/scale';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import {
  attachDocumentAPI,
  getEmployeeDocs,
  removeDocument,
  uploadDocument,
} from '../../../src/APICalling/APIs';
import {colors} from '../../../utilities/colors';
import Toast from 'react-native-toast-message';
const Document = ({userDetails, DocInfo, docsList, removeDoc}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [appointment, setAppointment] = useState('');
  const [salary, setSalary] = useState('');
  const [reliving, setReliving] = useState('');
  const [experience, setExperience] = useState('');
  const [documentList, setDocumentList] = useState([]);

  useEffect(() => {
    if (docsList.length > 0) {
      console.log('docsList', docsList);
      docsList.map(item => {
        if (item?.key === 'appointment-letter') {
          setAppointment(item);
        } else if (item?.key === 'salary-slip') {
          setSalary(item);
        } else if (item?.key === 'reliving-letter') {
          setReliving(item);
        } else if (item?.key === 'experience-letter') {
          setExperience(item);
        }
      });
    }
  }, [docsList]);

  useEffect(() => {
    if (userDetails !== '') {
      console.log('userDetails?.docs', userDetails);
      getDocuments(userDetails?.id);
    }
  }, [userDetails]);

  const getDocuments = async id => {
    try {
      const res = await getEmployeeDocs(id);
      if (res?.message === 'Employee docs found successfully') {
        setDocumentList(res?.docs);
        res?.docs.map(item => {
          DocInfo(item);
          if (item?.doc?.key === 'appointment-letter') {
            setAppointment(item?.doc);
          } else if (item?.doc?.key === 'salary-slip') {
            setSalary(item?.doc);
          } else if (item?.doc?.key === 'reliving-letter') {
            setReliving(item?.doc);
          } else if (item?.doc?.key === 'experience-letter') {
            setExperience(item?.doc);
          }
        });
      }
    } catch (error) {
      console.log('getDocs-Error', error);
    }
  };

  const choosePdf = async (type, name) => {
    try {
      const res = await DocumentPicker.pick({
        type: [
          DocumentPicker.types.pdf,
          DocumentPicker.types.csv,
          DocumentPicker.types.images,
        ],
      });
      console.log(res);
      console.log(res[0].uri, res[0].type, res[0].name, res[0].size);

      const formData = new FormData();

      formData.append('doc_url', {
        uri: res[0].uri,
        type: res[0].type,
        name: res[0].name,
      });
      formData.append('type', 'csv');
      formData.append('filename', name);
      try {
        setIsLoading(true);
        const res = await uploadDocument(formData);
        console.log('Res', res);
        if (res.status === 'success') {
          setIsLoading(false);
          if (type === 1) {
            setAppointment(res?.data[0]);
            DocInfo({
              key: res?.data[0]?.filename,
              value: res?.data[0]?.doc_url,
            });
          } else if (type === 2) {
            DocInfo({
              key: res?.data[0]?.filename,
              value: res?.data[0]?.doc_url,
            });
            setSalary(res?.data[0]);
          } else if (type === 3) {
            setReliving(res?.data[0]);
            DocInfo({
              key: res?.data[0]?.filename,
              value: res?.data[0]?.doc_url,
            });
          } else if (type === 4) {
            setExperience(res?.data[0]);
            DocInfo({
              key: res?.data[0]?.filename,
              value: res?.data[0]?.doc_url,
            });
          }
          if (userDetails !== '') {
            attachDocument({
              key: res?.data[0]?.filename,
              value: res?.data[0]?.doc_url,
            });
          }
        }
      } catch (error) {}
    } catch (err) {
      setIsLoading(false);
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        console.error(err);
      }
    }
  };

  const deleteDoc = async (type, doc) => {
    if (userDetails !== '') {
      try {
        const documentItem = documentList.find(
          item => item?.doc?.key === doc?.key,
        );

        if (documentItem) {
          const id = documentItem.id;

          const body = {
            employee_id: userDetails?.id,
            doc_ids: [id],
          };

          const res = await removeDocument(body);
          if (res?.message === 'Document(s) removed successfully') {
            Toast.show({
              type: 'success',
              text1: 'Zewst',
              text2: 'Document removed successfully',
            });
            setAppointment('');
            setExperience('');
            setReliving('');
            setSalary('');
            getDocuments(userDetails?.id);
          }
        } else {
          console.error('Document not found');
        }
      } catch (error) {
        console.error('Error removing document:', error);
      }
    } else {
      if (type === 1) {
        removeDoc(doc);
        setAppointment('');
      } else if (type === 2) {
        removeDoc(doc);
        setSalary('');
      } else if (type === 3) {
        removeDoc(doc);
        setReliving('');
      } else if (type === 4) {
        removeDoc(doc);
        setExperience('');
      }
    }
  };

  const attachDocument = async data => {
    const body = {
      employee_id: userDetails?.id,
      doc: [data],
    };
    try {
      const res = await attachDocumentAPI(body);
      console.log('attachDocument Result', res);
      if (res?.message === 'Document attached successfully') {
        Toast.show({
          type: 'success',
          text1: 'Zewst',
          text2: 'Document attached successfully',
        });
      }
    } catch (error) {}
  };
  return (
    <View style={styles.mainContainer}>
      <Modal visible={isLoading} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <ActivityIndicator size={'small'} color={colors.purple} />
          <Text style={styles.uploadTxt}>{'Document Uploading....'}</Text>
        </View>
      </Modal>
      <FlexDirectionView Row spaceBetween>
        <UploadCard
          title={'Appointment Letter Uploaded'}
          onPress={() => choosePdf(1, 'appointment-letter')}
          data={appointment}
          onDelPress={() => deleteDoc(1, appointment)}
        />
        <UploadCard
          title={'Upload Salary Slips'}
          style={styles.card}
          onPress={() => choosePdf(2, 'salary-slip')}
          data={salary}
          onDelPress={() => deleteDoc(2, salary)}
        />
      </FlexDirectionView>
      <FlexDirectionView Row spaceBetween style={styles.uploadView}>
        <UploadCard
          title={'Upload Reliving Letter'}
          onPress={() => choosePdf(3, 'reliving-letter')}
          data={reliving}
          onDelPress={() => deleteDoc(3, reliving)}
        />
        <UploadCard
          title={'Upload Experience Letter'}
          style={styles.card}
          onPress={() => choosePdf(4, 'experience-letter')}
          data={experience}
          onDelPress={() => deleteDoc(4, experience)}
        />
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
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.black025,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadTxt: {
    color: colors.purple,
    fontSize: scale(24),
    marginTop: scale(10),
    fontWeight: '400',
  },
});
