import { Pressable, View } from 'react-native';
import React from 'react';
import FoodDetails from './FoodDetails';
import FoodImage from './FoodImage';
import Animated, {
  Easing,
  SlideInRight,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { Link } from 'expo-router';

type FoodCardProps = {
  recipe: Recipe;
};

const FoodCard: React.FC<FoodCardProps> = ({ recipe }) => {
  const translateY = useSharedValue(0);

  const onPressIn = () => {
    translateY.value = withTiming(2, { duration: 100, easing: Easing.ease });
  };

  const onPressOut = () => {
    translateY.value = withTiming(0, { duration: 100, easing: Easing.ease });
  };

  return (
    <Link
      href={{
        pathname: '/recipe/[recipeUri]',
        params: { recipeUri: recipe.uri }
      }}
      asChild
    >
      <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
        <Animated.View
          entering={SlideInRight}
          style={{
            transform: [{ translateY }]
          }}
        >
          <View className="mb-6 bg-white rounded-lg">
            <FoodImage uri={recipe.image} shareAs="" />

            <FoodDetails label={recipe.label} source={recipe.source} />
          </View>
        </Animated.View>
      </Pressable>
    </Link>
  );
};

export default FoodCard;
