import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { GestureResponderEvent, Pressable } from 'react-native';

type IconType = {
  color?: string;
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  size?: number;
};

const Icon: React.FC<IconType> = ({ color = '#38b168', name, size = 24 }) => {
  return <MaterialCommunityIcons color={color} name={name} size={size} />;
};

export default Icon;
