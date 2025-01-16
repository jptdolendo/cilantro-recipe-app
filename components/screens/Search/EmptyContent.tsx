import { View, Text } from 'react-native';
import React from 'react';

const EmptyContent = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-oregular text-xl text-onBackground text-center">
        Ready to cook?
      </Text>
      <Text className="font-obold text-xl text-onBackground text-center">
        Start searching for a recipe!
      </Text>
    </View>
  );
};

export default EmptyContent;
