import { Text } from 'react-native';
import React from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const EmptyContent = () => {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      className="flex-1 justify-center items-center"
    >
      <Text className="font-oregular text-xl text-onBackground text-center">
        Ready to cook?
      </Text>
      <Text className="font-obold text-xl text-onBackground text-center">
        Start searching for a recipe!
      </Text>
    </Animated.View>
  );
};

export default EmptyContent;
