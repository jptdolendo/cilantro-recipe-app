import { ScrollView } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import LoadingIndicator from '@/components/UI/LoadingIndicator';
import { fetchRecipeByUri } from '@/utils/api';
import RecipeHeader from './RecipeHeader';
import NotFoundScreen from '../NotFound/NotFoundScreen';
import RecipeTitle from './RecipeTitle';
import RecipeHealthLabels from './RecipeHealthLabels';
import RecipeNutritionFacts from './RecipeNutritionFacts';
import RecipeIngredientLines from './RecipeIngredientLines';
import RecipeInstructions from './RecipeInstructions';

type RecipeContentProps = {
  recipeUri: string | string[];
};

const RecipeContent: React.FC<RecipeContentProps> = ({ recipeUri }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [recipeDetails, setRecipeDetails] = useState<Recipe | null>(null);

  const fetchRecipeDetails = async () => {
    fetchRecipeByUri(recipeUri)
      .then((result) => {
        setRecipeDetails(result);
      })
      .catch()
      .finally(() => {
        setIsLoading(false);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchRecipeDetails();
    }, [recipeUri])
  );

  if (isLoading) return <LoadingIndicator />;

  if (!recipeDetails) return <NotFoundScreen />;

  return (
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
      <RecipeHeader uri={recipeDetails.image} shareAs={recipeDetails.shareAs} />
      <RecipeTitle
        label={recipeDetails.label}
        source={recipeDetails.source}
        calories={recipeDetails.calories}
        totalTime={recipeDetails.totalTime}
      />
      <RecipeHealthLabels labels={recipeDetails.healthLabels} />
      <RecipeIngredientLines ingredientLines={recipeDetails.ingredientLines} />
      <RecipeInstructions
        url={recipeDetails.url}
        source={recipeDetails.source}
      />
      <RecipeNutritionFacts totalNutrients={recipeDetails.totalNutrients} />
    </ScrollView>
  );
};

export default RecipeContent;
