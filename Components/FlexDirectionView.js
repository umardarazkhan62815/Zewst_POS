import React from 'react';
import {View} from 'react-native';

const FlexDirectionView = props => {
  return (
    <View
      style={[
        props.style,
        {
          flexDirection: props.Row ? 'row' : 'column',
          justifyContent: props.spaceBetween
            ? 'space-between'
            : props.center
            ? 'center'
            : props.justifyContent,
        },
      ]}>
      {props.children}
    </View>
  );
};

export default FlexDirectionView;
