import { View, Text } from 'react-native';
import React from 'react';

const FavoritesScreen = () => {
  return (
    <View className="p-4 flex-1 justify-center items-center">
      <Text className="font-osemibold text-2xl text-center">
        Your bookmarked recipes will be listed here.
      </Text>
    </View>
  );
};

export default FavoritesScreen;
