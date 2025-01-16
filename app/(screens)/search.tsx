import { SafeAreaView } from 'react-native';
import React from 'react';
import SearchContent from '@/components/screens/Search/SearchContent';

const SearchScreen = () => {
  return (
    <SafeAreaView className="flex-1 px-4 pt-4 bg-background">
      <SearchContent />
    </SafeAreaView>
  );
};

export default SearchScreen;
