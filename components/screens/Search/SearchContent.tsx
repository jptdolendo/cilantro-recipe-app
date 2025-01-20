import { ActivityIndicator, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import SearchBar from '@/components/UI/SearchBar';
import debounce from 'lodash.debounce';
import { fetchRecipes } from '@/utils/api';
import { FlashList } from '@shopify/flash-list';
import FoodCard from '@/components/FoodCard/FoodCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { isObjectEmpty } from '@/helpers/isObjectEmpty';
import EmptyContent from './EmptyContent';
import LoadingIndicator from '@/components/UI/LoadingIndicator';

const SearchContent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recipes, setRecipes] = useState<RecipeHit[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const insets = useSafeAreaInsets();

  const clearSearch = () => {
    setSearchQuery('');
    setRecipes([]);
  };

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      fetchRecipes(query)
        .then((results) => {
          setRecipes(results);
        })
        .catch()
        .finally(() => {
          setIsLoading(false);
        });
    }, 500),
    []
  );

  const onChangeText = (text: string) => {
    setIsLoading(true);
    setSearchQuery(text);
    debouncedSearch(text);
  };

  return (
    <View className="flex-1">
      <SearchBar
        clearSearch={clearSearch}
        onChangeText={onChangeText}
        value={searchQuery}
        style="mb-2"
      />

      {isLoading ? (
        <LoadingIndicator />
      ) : !isObjectEmpty(recipes) ? (
        <FlashList
          data={recipes}
          renderItem={({ item }) => <FoodCard recipe={item.recipe} />}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={20}
          contentContainerStyle={{
            paddingBottom: 60 + insets.bottom
          }}
        />
      ) : (
        <EmptyContent />
      )}
    </View>
  );
};

export default SearchContent;
