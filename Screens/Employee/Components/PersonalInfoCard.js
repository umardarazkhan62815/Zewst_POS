import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {steps} from '../statics';
import {Image} from '@rneui/base/dist/Image/Image';
import {scale} from '../../../utilities/scale';
import {colors} from '../../../utilities/colors';
import InfoCard from './InfoCard';
import FlexDirectionView from '../../../Components/FlexDirectionView';
import DownloadCard from './DownloadCard';

const PersonalInfoCard = () => {
  const [step, setStep] = useState(steps[0]);
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
            <InfoCard title={'First Name'} name={'Brooklyn'} />
            <InfoCard
              title={'Last Name'}
              name={'Simmons'}
              style={styles.cardView}
            />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard title={'Mobile Number'} name={'(702) 555-0122'} />
            <InfoCard
              title={'Email Address'}
              name={'brooklyn.s@example.com'}
              style={styles.cardView}
            />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard title={'Date of Birth'} name={'July 14, 1995'} />
            <InfoCard
              title={'Marital Status'}
              name={'Married'}
              style={styles.cardView}
            />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard title={'Gender'} name={'Female'} />
            <InfoCard
              title={'Nationality'}
              name={'America'}
              style={styles.cardView}
            />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard
              title={'Address'}
              name={'2464 Royal Ln. Mesa, New Jersey'}
            />
            <InfoCard
              title={'City'}
              name={'California'}
              style={styles.cardView}
            />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard title={'State'} name={'United State'} />
            <InfoCard
              title={'Zip Code'}
              name={'35624'}
              style={styles.cardView}
            />
          </FlexDirectionView>
        </>
      ) : step === steps[1] ? (
        <>
          <FlexDirectionView Row>
            <InfoCard title={'Employee ID'} name={'879912390'} />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard title={'Department'} name={'Project Manager'} />
            <InfoCard
              title={'Designation'}
              name={'Project Manager'}
              style={styles.cardView}
            />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard title={'Employment status'} name={'Permanent'} />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <InfoCard title={'Working Days'} name={'5 Days'} />
            <InfoCard
              title={'Joining Date'}
              name={'July 10, 2022'}
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
        <>
          <FlexDirectionView Row>
            <DownloadCard name={'Appointment Letter.pdf'} />
            <DownloadCard
              name={'Appointment Letter.pdf'}
              style={{marginLeft: scale(25)}}
            />
          </FlexDirectionView>

          <FlexDirectionView Row>
            <DownloadCard name={'Appointment Letter.pdf'} />
            <DownloadCard
              name={'Appointment Letter.pdf'}
              style={{marginLeft: scale(25)}}
            />
          </FlexDirectionView>
          <FlexDirectionView Row>
            <DownloadCard name={'Appointment Letter.pdf'} />
            <DownloadCard
              name={'Appointment Letter.pdf'}
              style={{marginLeft: scale(25)}}
            />
          </FlexDirectionView>
        </>
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
});
