import { View, TextInput } from 'react-native';
import React, { useState } from 'react';
import Icon from './Icon';
import IconButton from './IconButton';

type SearchBarType = {
  clearSearch: () => void;
  onChangeText: (text: string) => void;
  style?: string;
  value: string;
};

const SearchBar: React.FC<SearchBarType> = ({
  clearSearch,
  value,
  onChangeText,
  style
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      className={`flex-row px-2 py-1 justify-center items-center rounded-xl  ${
        isFocused ? 'bg-primary ' : 'bg-white'
      } ${style}`}
    >
      <Icon name="magnify" color={isFocused ? '#ffffff' : '#38b168'} />

      <TextInput
        className={`flex-1 font-oregular text-base rounded-xl ${
          isFocused ? 'text-onPrimary' : 'text-onBackground'
        }  `}
        placeholder="Search for a Recipe"
        placeholderTextColor={isFocused ? '#ffffff' : '#38b168'}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {value && (
        <IconButton
          name="close"
          color={isFocused ? '#ffffff' : '#38b168'}
          onPress={clearSearch}
        />
      )}
    </View>
  );
};

export default SearchBar;
