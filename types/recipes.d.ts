interface Recipe {
  shareAs: string;
  totalTime: any;
  ingredientLines: string[];
  totalNutrients: { [key: string]: NutrientsInfo };
  healthLabels: string[];
  label: string;
  ingredients: Ingredient[];
  instructions: string[];
  images: {
    THUMBNAIL: { url: string; height: number; width: number };
    LARGE: { url: string; height: number; width: number };
  };
  image: string;
  url: string;
  uri: string;
  calories: number;
  source: string;
  cuisineType: string;
  dishType: string;
  mealType: string;
}

interface RecipeHit {
  recipe: Recipe;
}

interface RecipeResponse {
  hits: RecipeHit[];
}

interface Ingredient {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: number;
  foodId: string;
}

interface NutrientsInfo {
  label: string;
  quantity: number;
  unit: string;
}
