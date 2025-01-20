import { View, Text } from 'react-native';
import React from 'react';

type RecipeIngredientLinesProps = {
  ingredientLines: string[];
};

const RecipeIngredientLines: React.FC<RecipeIngredientLinesProps> = ({
  ingredientLines
}) => {
  return (
    <View className="px-4 pt-4">
      <Text className="font-obold text-2xl mb-2">Ingredients</Text>
      {ingredientLines.map((value, index) => (
        <View key={index}>
          <Text className="font-oregular pb-2">{value}</Text>
        </View>
      ))}
    </View>
  );
};

export default RecipeIngredientLines;
