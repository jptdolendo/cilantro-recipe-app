import { View, Text, Linking, Alert } from 'react-native';
import React from 'react';
import SecondaryButton from '@/components/UI/SecondaryButton';

type RecipeInstructionsProps = {
  url: string;
  source: string;
};

const RecipeInstructions: React.FC<RecipeInstructionsProps> = ({
  url,
  source
}) => {
  const onPressShare = async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Error', `Unable to open the link: ${url}`);
    }
  };

  return (
    <View className="px-4 pt-4">
      <Text className="font-obold text-2xl mb-2">Instructions</Text>
      <SecondaryButton label={`Visit ${source}`} onPress={onPressShare} />
    </View>
  );
};

export default RecipeInstructions;
