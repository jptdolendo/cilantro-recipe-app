import PrimaryButton from '@/components/UI/PrimaryButton';
import { useRouter } from 'expo-router';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const IndexContent = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();

  return (
    <View className="flex-1 bg-white justify-around">
      <View className="m-4">
        <Animated.View entering={FadeIn} exiting={FadeOut}>
          <Text className="font-oregular text-lg">Welcome to</Text>
          <Text className="font-obold text-2xl">Cilantro Recipe App</Text>
        </Animated.View>
      </View>

      <View className="flex-2 justify-center items-center">
        <Animated.View entering={FadeIn} exiting={FadeOut}>
          <Image
            source={require('../../../assets/images/breakfast.png')}
            style={{ width: width, height: 200 }}
          />
        </Animated.View>

        <Animated.View entering={FadeIn} exiting={FadeOut}>
          <Text className="font-obold text-2xl">Discover, Cook, Savor</Text>
        </Animated.View>

        <Animated.View entering={FadeIn} exiting={FadeOut}>
          <Text className="font-oregular text-lg">
            Your Personal Chef in Your Pocket!
          </Text>
        </Animated.View>
      </View>

      <View className="p-4">
        <PrimaryButton
          label="Search for Recipes Now"
          onPress={() => {
            router.push('/search');
          }}
          style="py-4"
        />
      </View>
    </View>
  );
};

export default IndexContent;
