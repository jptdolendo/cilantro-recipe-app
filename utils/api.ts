import axios from 'axios';

const client = axios.create({
  baseURL: process.env.EXPO_PUBLIC_EDAMAM_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Edamam-Account-User': process.env.EXPO_PUBLIC_EDAMAM_USER
  }
});

export const fetchRecipes = async (query: string) => {
  try {
    const response = await client.get('/recipes/v2', {
      params: {
        type: 'public',
        q: query,
        app_id: process.env.EXPO_PUBLIC_EDAMAM_APP_ID,
        app_key: process.env.EXPO_PUBLIC_EDAMAM_APP_KEY
      }
    });

    return response.data.hits;
  } catch (error: any) {
    console.error('Error fetching recipes:', error.response);
    throw error;
  }
};

export const fetchRecipeByUri = async (uri: string | string[]) => {
  try {
    const response = await client.get('/recipes/v2/by-uri', {
      params: {
        type: 'public',
        uri: uri,
        app_id: process.env.EXPO_PUBLIC_EDAMAM_APP_ID,
        app_key: process.env.EXPO_PUBLIC_EDAMAM_APP_KEY
      }
    });

    return response.data.hits[0].recipe;
  } catch (error: any) {
    console.error('Error fetching recipe:', error.response);
    throw error;
  }
};
