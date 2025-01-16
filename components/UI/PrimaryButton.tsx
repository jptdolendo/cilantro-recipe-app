import React from 'react';
import { GestureResponderEvent, Pressable, Text } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

type ButtonProps = {
  disabled?: boolean;
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: string;
  textStyle?: string;
};

const PrimaryButton: React.FC<ButtonProps> = ({
  disabled,
  label,
  onPress,
  style,
  textStyle
}) => {
  const translateY = useSharedValue(0);

  const onPressIn = () => {
    translateY.value = withTiming(2, { duration: 100, easing: Easing.ease });
  };

  const onPressOut = () => {
    translateY.value = withTiming(0, { duration: 100, easing: Easing.ease });
  };

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      style={{
        transform: [{ translateY }]
      }}
    >
      <Pressable
        className={`bg-primary px-4 py-2 rounded-lg active:bg-primary-dark ${style}`}
        disabled={disabled}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <Text
          className={`font-oregular text-base text-onPrimary text-center ${textStyle}`}
        >
          {label}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default PrimaryButton;
