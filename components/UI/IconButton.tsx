import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { GestureResponderEvent, Pressable } from 'react-native';

type IconButtonType = {
  color?: string;
  elevation?: number;
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  onPress: (event: GestureResponderEvent) => void;
  size?: number;
  style?: string;
};

const IconButton: React.FC<IconButtonType> = ({
  color = '#4f4f4f',
  elevation = 0,
  name,
  onPress,
  size = 24,
  style
}) => {
  return (
    <Pressable
      onPress={onPress}
      className={`${style} justify-center items-center`}
      style={{ elevation: elevation }}
    >
      <MaterialCommunityIcons color={color} name={name} size={size} />
    </Pressable>
  );
};

export default IconButton;
