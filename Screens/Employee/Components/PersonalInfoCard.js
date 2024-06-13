import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {steps} from '../statics';
import {Image} from '@rneui/base/dist/Image/Image';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import InfoCard from './InfoCard';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import DownloadCard from './DownloadCard';

const PersonalInfoCard = ({user, docs}) => {
  const [documentList, setDocumentList] = useState([]);
  const [step, setStep] = useState(steps[0]);
  const [workingDays, setWorkingDays] = useState(0);

  useEffect(() => {
    if (user?.working_days) {
      const days = Object.values(user.working_days).filter(
        day => day === true,
      ).length;
      setWorkingDays(days);
    }
  }, [user]);
  useEffect(() => {
    if (docs) {
      setDocumentList(docs);
    }
  }, [docs]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {steps.map(item => {
          return (
            <TouchableOpacity
              onPress={() => setStep(item)}
              style={step === item ? styles.stepView : styles.stepView1}>
              <Image
                source={item?.icon}
                style={step === item ? styles.stepIcon : styles.stepIcon1}
                resizeMode="center"
              />
              <Text style={step === item ? styles.stepTxt : styles.stepTxt1}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {step === steps[0] ? (
        <>
          <FlexDirectionView Row>
            <InfoCard title={'First Name'} name={user?.first_name} />
            <InfoCard
              title={'Last Name'}
              name={user?.last_name}
              style={styles.cardView}
            />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard title={'Mobile Number'} name={user?.phone_number} />
            <InfoCard
              title={'Email Address'}
              name={user?.email}
              style={styles.cardView}
            />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard title={'Date of Birth'} name={user?.dob} />
            <InfoCard
              title={'Marital Status'}
              name={user?.marital_status}
              style={styles.cardView}
            />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard title={'Gender'} name={user?.gender} />
            <InfoCard
              title={'Nationality'}
              name={user?.nationality}
              style={styles.cardView}
            />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard
              title={'Address'}
              name={user?.address?.line1 + ' ' + user?.address?.line2}
            />
            <InfoCard
              title={'City'}
              name={user?.city}
              style={styles.cardView}
            />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard title={'State'} name={user?.state} />
            <InfoCard
              title={'Zip Code'}
              name={user?.postal_code}
              style={styles.cardView}
            />
          </FlexDirectionView>
        </>
      ) : step === steps[1] ? (
        <>
          <FlexDirectionView Row>
            <InfoCard title={'Employee ID'} name={user?.employee_id} />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard title={'Department'} name={user?.department} />
            <InfoCard
              title={'Designation'}
              name={user?.role}
              style={styles.cardView}
            />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard
              title={'Employment status'}
              name={user?.employee_status}
            />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard title={'Working Days'} name={`${workingDays} Days`} />
            <InfoCard
              title={'Joining Date'}
              name={user?.dob}
              style={styles.cardView}
            />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard
              title={'Select branch'}
              name={'2464 Royal Ln. Mesa, New Jersey'}
            />
          </FlexDirectionView>
        </>
      ) : (
        <View>
          <FlatList
            data={documentList}
            renderItem={({item}) => <DownloadCard item={item} />}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={{paddingHorizontal: scale(10)}}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={5}
            ListEmptyComponent={() => (
              <View style={styles.emptyView}>
                <Text style={styles.emptyTxt}>{'No documents available'}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default PersonalInfoCard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.purple,
    borderBottomWidth: 2,
    marginRight: scale(25),
    paddingBottom: scale(8),
  },
  stepView1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.purple,
    marginRight: scale(25),
  },
  stepIcon: {
    width: scale(30),
    height: scale(30),
    tintColor: colors.purple,
    marginRight: scale(12),
  },
  stepIcon1: {
    width: scale(30),
    height: scale(30),
    tintColor: colors.black,
    marginRight: scale(12),
  },
  stepTxt: {
    color: colors.purple,
    fontSize: scale(20),
    lineHeight: scale(30),
    fontWeight: '300',
  },
  stepTxt1: {
    color: colors.black,
    fontSize: scale(20),
    lineHeight: scale(30),
    fontWeight: '300',
  },
  cardView: {
    marginLeft: scale(25),
  },
  emptyView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(30),
  },
  emptyTxt: {
    color: colors.black,
    fontSize: scale(24),
    fontWeight: '500',
  },
});
