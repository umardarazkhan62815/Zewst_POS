import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {images} from '../../assets/images';
import {scale} from '../../utilities/scale';
import CountButton from '../../Components/CountButton';
import {colors} from '../../utilities/colors';
import {icons} from '../../assets/icons';
import {loginUser} from '../../src/Redux/Slices/LoginSlice';

const Login = ({navigation}) => {
  const [shakeAnimation] = useState(new Animated.Value(0));
  const dispatch = useDispatch();
  const User = useSelector(state => state.login);
  console.log('Error', User.error);
  const [code, setCode] = useState([]);
  let pinLength = 4;

  useEffect(() => {
    if (code.length === 4) {
      const number = parseInt(code.join(''), 10);
      const data = {pin: number};
      dispatch(loginUser(data));
      // navigation.replace('Home');
    }
  }, [code]);

  useEffect(() => {
    const updateUserToken = async () => {
      if (User.user?.message === 'POS logged in successfully') {
        try {
          await AsyncStorage.setItem('auth', JSON.stringify(User.user));
          await AsyncStorage.setItem(
            'Token',
            JSON.stringify(User?.user?.token?.token),
          );
          console.log('token Stored', User.user.token.token);
          navigation.replace('Home');
        } catch (error) {
          console.error('AsyncStorage Error:', error);
        }
      }
    };
    if (User.error) {
      Animated.sequence([
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: -10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
      setCode([]);
    }
    updateUserToken();
  }, [User.user?.message, User?.error]);

  const handlePress = val => {
    setCode(prevCode => [...prevCode, val]);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftSideView}>
        <ImageBackground source={images.wave} style={styles.bgImage1}>
          <ImageBackground source={images.wave2} style={styles.bgImage2}>
            <Image
              source={icons.zewst}
              style={{
                width: scale(288),
                height: scale(83),
                tintColor: colors.white,
              }}
              resizeMode="contain"
            />
            <View>
              <Image
                source={images.clock}
                style={styles.clock}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.dalTxt}>{'Dallas'}</Text>

            <Text style={styles.dalTxt}>{'06:15 PM'}</Text>
          </ImageBackground>
        </ImageBackground>
      </View>
      <View style={styles.rightSideView}>
        <View style={styles.subContainer}>
          <View>
            <Animated.View
              style={[
                styles.codeView,
                {transform: [{translateX: shakeAnimation}]},
              ]}>
              {[...Array(pinLength).keys()].map(index => {
                const isSelected = index < code.length;

                return (
                  <View key={index} style={[styles.codeItem]}>
                    {isSelected ? <View style={styles.codeFill} /> : null}
                  </View>
                );
              })}
            </Animated.View>

            <View style={[styles.row, {marginTop: scale(25)}]}>
              <CountButton value={1} onSelect={val => handlePress(val)} />
              <CountButton value={2} onSelect={val => handlePress(val)} />
              <CountButton value={3} onSelect={val => handlePress(val)} />
            </View>
            <View style={styles.row}>
              <CountButton value={4} onSelect={val => handlePress(val)} />
              <CountButton value={5} onSelect={val => handlePress(val)} />
              <CountButton value={6} onSelect={val => handlePress(val)} />
            </View>
            <View style={styles.row}>
              <CountButton value={7} onSelect={val => handlePress(val)} />
              <CountButton value={8} onSelect={val => handlePress(val)} />
              <CountButton value={9} onSelect={val => handlePress(val)} />
            </View>
            <View style={[styles.row, {justifyContent: 'center'}]}>
              <CountButton value={0} onSelect={val => handlePress(val)} />
            </View>
            {/* <View style={styles.buttonsView}>
              <CustomButton
                title={'Log in'}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      count == 4 ? colors.purple : colors.purple05,
                  },
                ]}
                onPress={() => {
                  setCount(0);
                  setCode([10, 10, 10, 10]);
                  setName('');
                  navigation.navigate('Home');
                }}
              />
              <TouchableOpacity>
                <Image source={icons.bio} style={styles.bio} />
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSideView: {
    backgroundColor: 'rgba(157,86,212,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  rightSideView: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    paddingHorizontal: scale(143),
    paddingVertical: scale(92),
  },
  bgImage1: {
    width: '100%',
    height: '100%',
  },
  bgImage2: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clock: {
    width: scale(292),
    height: scale(292),
    marginTop: scale(120),
  },
  dalTxt: {
    fontSize: scale(36),
    fontWeight: '700',
    lineHeight: scale(43),
    color: '#fff',
    marginTop: scale(40),
  },

  timeTxt: {
    fontSize: scale(36),
    fontWeight: '600',
    lineHeight: scale(49),
    color: '#fff',
    marginTop: scale(20),
  },
  subContainer: {
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
    borderRadius: scale(10),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 2.84,
    elevation: 2,
    paddingVertical: scale(58),
    paddingHorizontal: scale(111),
  },
  employeeTxt: {
    color: '#262527',
    fontSize: scale(32),
  },
  dropDown: {
    width: scale(440),
    height: scale(53),
    marginTop: scale(20),
  },
  codeView: {
    marginTop: scale(29),
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: scale(20),
  },
  codeItem: {
    width: scale(44),
    height: scale(44),
    borderRadius: scale(22),
    borderWidth: 1,
    borderColor: colors.purple05,
    marginRight: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeFill: {
    width: scale(25),
    height: scale(25),
    borderRadius: scale(12.5),
    backgroundColor: colors.purple,
  },
  padView: {
    marginTop: scale(24),
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scale(35),
  },
  button: {
    width: scale(450),
    // marginLeft: scale(-35),
  },
  buttonsView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  bio: {
    width: scale(48),
    height: scale(48),
    marginLeft: scale(21),
  },
});
