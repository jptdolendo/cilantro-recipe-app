import { Alert, ImageBackground, Linking, View } from 'react-native';
import React, { useState } from 'react';
import IconButton from '@/components/UI/IconButton';
import { useRouter } from 'expo-router';
import LoadingIndicator from '@/components/UI/LoadingIndicator';

type RecipeHeaderProps = {
  uri: string;
  shareAs: string;
};

const RecipeHeader: React.FC<RecipeHeaderProps> = ({ uri, shareAs }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  const onPressBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const onPressShare = async () => {
    const url = shareAs;
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Error', `Unable to open the link: ${url}`);
    }
  };

  return (
    <View>
      <ImageBackground
        source={{ uri: uri }}
        resizeMode="cover"
        className="w-full h-80 p-4"
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
      >
        {isLoading && <LoadingIndicator />}

        <View className="flex-row justify-between items-center">
          <IconButton
            elevation={2}
            name="chevron-left"
            onPress={onPressBack}
            size={18}
            style="p-2 h-10 w-10 bg-white rounded-full"
          />

          <IconButton
            elevation={2}
            name="share-outline"
            onPress={onPressShare}
            size={18}
            style="p-2 h-10 w-10 bg-white rounded-full"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default RecipeHeader;
