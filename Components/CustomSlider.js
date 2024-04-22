import React, {useState, useRef} from 'react';
import {View, PanResponder, Animated} from 'react-native';
// import {LinearGradient} from 'expo-linear-gradient';
const CustomSlider = () => {
  const [value, setValue] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const thumbPosition = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // Get the initial thumb position when responder is granted
        thumbPosition.setOffset(thumbPosition._value);
        thumbPosition.setValue(0);
      },
      onPanResponderMove: (event, gestureState) => {
        const newX = gestureState.dx + thumbPosition._offset;
        const newValue = Math.max(0, Math.min(1, newX / trackWidth));
        setValue(newValue);
        thumbPosition.setValue(newX);
      },
      onPanResponderRelease: () => {
        // Reset offset when responder is released
        thumbPosition.flattenOffset();
      },
    }),
  ).current;

  const onLayoutTrack = event => {
    // Get the width of the track when it is laid out
    setTrackWidth(event.nativeEvent.layout.width);
  };

  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <View
        style={{
          width: '80%',
          height: 40,
          justifyContent: 'center',
        }}
        onLayout={onLayoutTrack}
        {...panResponder.panHandlers}>
        {/* <LinearGradient
          colors={['#01CDA8', '#B2B2B2']} // Gradient colors
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={{
            flex: 1,
            borderRadius: 20,
          }}>
          <Animated.View
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 20,
              backgroundColor: 'transparent',
              position: 'absolute',
              transform: [{translateX: thumbPosition}],
            }}
          />
        </LinearGradient> */}
      </View>
    </View>
  );
};

export default CustomSlider;
