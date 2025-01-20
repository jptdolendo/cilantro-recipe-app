import { View, Text } from 'react-native';
import React from 'react';

type ChipsLabelProps = {
  label: string;
  className: string;
};

const ChipsLabel: React.FC<ChipsLabelProps> = ({ label, className }) => {
  return (
    <Text className={`p-2 font-oregular rounded-full mx-1 ${className}`}>
      {label}
    </Text>
  );
};

export default ChipsLabel;
