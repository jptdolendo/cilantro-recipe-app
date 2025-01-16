interface Recipe {
  label: string;
  images: {
    THUMBNAIL: { url: string; height: number; width: number };
    LARGE: { url: string; height: number; width: number };
  };
  image: string;
  url: string;
  ingredients: string[];
  calories: number;
  source: string;
}

interface RecipeHit {
  recipe: Recipe;
}

interface RecipeResponse {
  hits: RecipeHit[];
}
