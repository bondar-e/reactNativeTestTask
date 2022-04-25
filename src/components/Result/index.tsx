import React, { useContext, useMemo } from 'react';
import { Text, View } from 'react-native';

import { CalculationContext } from '@contexts/CalculationContext';
import { isNullable } from '@utils/main';
import { style } from './styles';

const Result: React.FC = () => {
  const { firstNumber, secondNumber, operation, result } = useContext(CalculationContext);

  const numbers = useMemo(
    () => (!isNullable(firstNumber) && !isNullable(secondNumber) ? `${firstNumber} ${secondNumber}` : ''),
    [firstNumber, secondNumber]
  );

  return (
    <View style={style.container}>
      <Text style={style.title}>Result</Text>
      <View style={style.containerResult}>
        <Text style={style.text}>Numbers: {numbers}</Text>
        <Text style={style.text}>Math operation: {`'${operation}'`}</Text>
        <Text style={style.text}>Result: {result}</Text>
      </View>
    </View>
  );
};

export { Result };
