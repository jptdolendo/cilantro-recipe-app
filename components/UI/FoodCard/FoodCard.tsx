import { View, Text, Image } from 'react-native';
import React from 'react';
import FoodDetails from './FoodDetails';
import FoodImage from './FoodImage';

type FoodCardProps = {
  recipe: Recipe;
};

const FoodCard: React.FC<FoodCardProps> = ({ recipe }) => {
  return (
    <View className="my-2 bg-white rounded-lg">
      <FoodImage uri={recipe.image} shareAs="" />
      {/* <Image
        source={{ uri: recipe.image }}
        style={{
          width: '100%',
          height: 156
        }}
        className="rounded-lg mr-2"
      /> */}

      <FoodDetails label={recipe.label} source={recipe.source} />
    </View>
  );
};

export default FoodCard;
