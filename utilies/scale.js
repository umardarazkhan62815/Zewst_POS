import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const standardScreenWidth = 2120;
const standardScreenHeight = 1216;

const scaleWidth = width / standardScreenWidth;
const scaleHeight = height / standardScreenHeight;

export const scale = fontSize => {
  const scaledFontSize = Math.min(scaleWidth, scaleHeight) * fontSize;
  return Math.round(scaledFontSize);
};
