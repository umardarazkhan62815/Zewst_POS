import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../assets/images';
import {scale} from '../../utilies/scale';
import {DropdownPicker} from '../../Components/DropDownPicker';
import CustomButton from '../../Components/CustomButton';
import CountButton from '../../Components/CountButton';
import {colors} from '../../utilies/colors';
import {icons} from '../../assets/icons';
const Login = ({navigation}) => {
  const [name, setName] = useState('');
  let [code, setCode] = useState([10, 10, 10, 10]);
  const [count, setCount] = useState(0);
  const handlePress = val => {
    if (count < 3) {
      if (code.length > 5) {
      } else {
        setCode(prevCode => {
          const newCode = [...prevCode];
          newCode[count] = val;
          setCount(count + 1);

          return newCode;
        });
      }
    } else {
      setCode(prevCode => {
        const newCode = [...prevCode];
        newCode[count] = val;
        setCount(count + 1);

        return newCode;
      });
      setCount(0);
      setCode([10, 10, 10, 10]);
      setName('');
      navigation.navigate('Home');
      // console.log('Hir', code);
    }
  };
  const renderItem = item => {
    return <CountButton value={item} onSelect={val => handlePress(val)} />;
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
            {/* <Text style={styles.employeeTxt}>{'Select Employee'}</Text> */}
            {/* <DropdownPicker
              options={['Umar', 'Hadi']}
              onSelect={item => {
                setName(item);
              }}
              style={styles.dropDown}
              selectedValue={name}
            /> */}
            {/* {name.length > 0 ? ( */}
            <View style={styles.codeView}>
              {code.map((item, index) => {
                return (
                  <View style={styles.codeItem}>
                    {item !== 10 ? <View style={styles.codeFill} /> : null}
                  </View>
                );
              })}
            </View>

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
