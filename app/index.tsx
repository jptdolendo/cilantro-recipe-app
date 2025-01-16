import PrimaryButton from '@/components/UI/PrimaryButton';
import SecondaryButton from '@/components/UI/SecondaryButton';
import { Text, View } from 'react-native';

const Index = () => {
  return (
    <View className="flex-1 bg-background justify-center items-center">
      <Text className="font-osemibold text-6xl text-onBackground">
        Dont Starve,
      </Text>

      <Text className="font-osemibold text-6xl text-onBackground">
        Just Order
      </Text>

      <SecondaryButton
        label="Order Now"
        onPress={() => {
          return;
        }}
      />
    </View>
  );
};

export default Index;
