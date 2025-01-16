import { View, Text } from 'react-native';
import React from 'react';

type FoodDetailsProps = {
  label: string;
  source: string;
};

const FoodDetails: React.FC<FoodDetailsProps> = ({ label, source }) => {
  return (
    <View className="px-4 py-2">
      <Text className="font-obold">{label}</Text>
      <Text className="font-oregular">{source}</Text>
    </View>
  );
};

export default FoodDetails;
