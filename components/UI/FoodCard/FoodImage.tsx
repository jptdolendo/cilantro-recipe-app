import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import IconButton from '../IconButton';

type FoodImageProps = {
  uri: string;
  shareAs: string;
};

const FoodImage: React.FC<FoodImageProps> = ({ uri, shareAs }) => {
  const onPress = () => console.log('Button Pressed');

  return (
    <View className="overflow-hidden w-full h-[156px] rounded-lg">
      <ImageBackground
        source={{ uri: uri }}
        resizeMode="cover"
        className="flex-row pb-2 pr-2 justify-end items-end w-full h-[156px] rounded-lg gap-x-2"
      >
        <IconButton
          name="heart-outline"
          onPress={onPress}
          size={18}
          style="p-2 h-10 w-10 bg-white rounded-full"
        />

        <IconButton
          name="share-outline"
          onPress={onPress}
          size={18}
          style="p-2 h-10 w-10 bg-white rounded-full"
        />
      </ImageBackground>
    </View>
  );
};

export default FoodImage;
