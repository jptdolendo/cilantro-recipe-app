import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { GestureResponderEvent, Pressable } from 'react-native';

type IconButtonType = {
  color?: string;
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  onPress: (event: GestureResponderEvent) => void;
  size?: number;
  style?: string;
};

const IconButton: React.FC<IconButtonType> = ({
  color = '#4f4f4f',
  name,
  onPress,
  size = 24,
  style
}) => {
  return (
    <Pressable
      onPress={onPress}
      className={`${style} justify-center items-center`}
    >
      <MaterialCommunityIcons color={color} name={name} size={size} />
    </Pressable>
  );
};

export default IconButton;
