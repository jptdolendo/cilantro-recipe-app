import { View, Text } from 'react-native';
import React from 'react';

type RecipeNutritionFactsProps = {
  totalNutrients: { [key: string]: NutrientsInfo };
};

const RecipeNutritionFacts: React.FC<RecipeNutritionFactsProps> = ({
  totalNutrients
}) => {
  return (
    <View className="m-4 p-4 bg-white rounded-lg">
      <Text className="font-obold text-2xl mb-2">Nutrition Facts</Text>
      {Object.entries(totalNutrients).map(
        ([key, { label, quantity, unit }]) => (
          <View
            key={key}
            className="flex-row justify-between p-px py-2 border-t"
          >
            <Text className="font-osemibold">{label}</Text>
            <Text className="font-oregular">
              {quantity.toFixed(4)} {unit}
            </Text>
          </View>
        )
      )}
    </View>
  );
};

export default RecipeNutritionFacts;
