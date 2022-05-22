import React from 'react';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';

import { style } from './styles';

type Props = {
  title: string;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const Button: React.FC<Props> = ({ title, styles, onPress }) => {
  return (
    <TouchableOpacity style={[style.container, styles]} onPress={onPress}>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export { Button };
