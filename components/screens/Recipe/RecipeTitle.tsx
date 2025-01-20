import { View, Text } from 'react-native';
import React from 'react';
import IconButton from '@/components/UI/IconButton';
import Icon from '@/components/UI/Icon';

type RecipeTitleProps = {
  label: string;
  source: string;
  calories: number;
  totalTime: number;
};

const RecipeTitle: React.FC<RecipeTitleProps> = ({
  label,
  source,
  calories,
  totalTime
}) => {
  const onPress = () => {};

  return (
    <View className="p-4">
      <View className="flex-row justify-between items-center p-px">
        <View>
          <Text className="font-obold text-2xl">{label}</Text>
          <Text className="font-olight text-onBackground">by {source}</Text>
        </View>

        <IconButton
          elevation={2}
          name="heart-outline"
          onPress={onPress}
          size={18}
          style="p-2 h-10 w-10 bg-white rounded-full"
        />
      </View>

      <View className="flex-row gap-2">
        <View className="pt-2 flex flex-row justify-start items-center">
          <Icon name="fire" color="#4f4f4f" size={22} />

          <Text className="font-oregular"> {calories.toFixed(0)}</Text>
        </View>

        <View className="pt-2 flex flex-row justify-start items-center">
          <Icon name="clock-outline" color="#4f4f4f" size={22} />

          <Text className="font-oregular"> {totalTime} mins</Text>
        </View>
      </View>
    </View>
  );
};

export default RecipeTitle;
