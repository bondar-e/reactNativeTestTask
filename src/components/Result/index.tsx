import React from 'react';
import { Text, View } from 'react-native';
import { style } from './styles';

const Result: React.FC = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Result</Text>
      <View style={style.containerResult}>
        <Text style={style.text}>Numbers: </Text>
        <Text style={style.text}>Math operation: </Text>
        <Text style={style.text}>Result: </Text>
      </View>
    </View>
  );
};

export { Result };
