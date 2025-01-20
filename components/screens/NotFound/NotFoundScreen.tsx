import { View, Text } from 'react-native';
import React from 'react';

const NotFoundScreen = () => {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="font-obold text-xl text-center">
        Sorry! We're having trouble.
      </Text>
      <Text className="font-oregular text-xl text-center">
        Please try again later.
      </Text>
    </View>
  );
};

export default NotFoundScreen;
