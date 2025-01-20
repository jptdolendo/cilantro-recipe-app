import { View, Text } from 'react-native';
import React from 'react';

const GroceryListScreen = () => {
  return (
    <View className="p-4 flex-1 justify-center items-center">
      <Text className="font-osemibold text-2xl text-center">
        Your grocery list will be displayed here.
      </Text>
    </View>
  );
};

export default GroceryListScreen;
