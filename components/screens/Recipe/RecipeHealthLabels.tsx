import { View } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';
import ChipsLabel from '@/components/UI/ChipsLabel';

type RecipeHealthLabelsProps = {
  labels: string[];
};

const RecipeHealthLabels: React.FC<RecipeHealthLabelsProps> = ({ labels }) => {
  return (
    <View>
      <FlashList
        data={labels}
        renderItem={({ item }) => (
          <ChipsLabel
            label={item}
            className="bg-primary-light text-white text-center pr-4"
          />
        )}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={20}
        horizontal={true}
      />
    </View>
  );
};

export default RecipeHealthLabels;
