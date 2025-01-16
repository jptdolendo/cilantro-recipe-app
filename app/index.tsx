import PrimaryButton from '@/components/UI/PrimaryButton';
import SecondaryButton from '@/components/UI/SecondaryButton';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

const Index = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-background justify-center items-center">
      <Text className="font-osemibold text-6xl text-onBackground">
        Dont Starve,
      </Text>

      <Text className="font-osemibold text-6xl text-onBackground">
        Just Order
      </Text>

      <PrimaryButton
        label="Order Now"
        onPress={() => {
          router.push('/search');
        }}
      />
    </View>
  );
};

export default Index;
