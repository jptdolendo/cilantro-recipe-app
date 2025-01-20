import { SafeAreaView } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import RecipeContent from '@/components/screens/Recipe/RecipeContent';

const RecipeScreen = () => {
  const { recipeUri } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <RecipeContent recipeUri={recipeUri} />
    </SafeAreaView>
  );
};

export default RecipeScreen;
