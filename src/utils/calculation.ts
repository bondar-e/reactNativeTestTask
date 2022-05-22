import { NativeModules } from 'react-native';

import { CalculationData } from '@contexts/CalculationContext/types';

export const calculate = (
  { firstInputNumber, secondInputNumber, operationValue }: CalculationData,
  callback: (result: number) => void
) => {
  NativeModules.CalculationModule.calculate(
    firstInputNumber,
    secondInputNumber,
    operationValue,
    // TODO: add error handling
    (_err: any, result: number) => {
      callback(result);
    }
  );
};
