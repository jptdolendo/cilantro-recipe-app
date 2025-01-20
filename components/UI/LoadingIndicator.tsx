import { ActivityIndicator } from 'react-native';
import React from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const LoadingIndicator = () => {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      className="absolute inset-0 justify-center items-center"
    >
      <ActivityIndicator size="large" color="#ee7d24" />
    </Animated.View>
  );
};

export default LoadingIndicator;
