import { View, ImageBackground, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import IconButton from '../UI/IconButton';
import LoadingIndicator from '../UI/LoadingIndicator';

type FoodImageProps = {
  uri: string;
  shareAs: string;
};

const FoodImage: React.FC<FoodImageProps> = ({ uri, shareAs }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onPress = () => console.log('Button Pressed');

  return (
    <View className="overflow-hidden w-full h-[156px] rounded-t-lg">
      <ImageBackground
        source={{ uri: uri }}
        resizeMode="cover"
        className="flex-row pb-2 pr-2 justify-end items-end w-full h-[156px] rounded-lg gap-x-2"
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
      >
        {isLoading && <LoadingIndicator />}

        <IconButton
          elevation={2}
          name="heart-outline"
          onPress={onPress}
          size={18}
          style="p-2 h-10 w-10 bg-white rounded-full"
        />

        <IconButton
          elevation={2}
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
