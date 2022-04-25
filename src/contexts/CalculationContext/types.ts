import { FormValues } from '@components/Form/types';

export type CalculationData = FormValues & {
  operationValue: string;
};

export type CalculationState = {
  firstNumber: number | null;
  secondNumber: number | null;
  operation: string;
  result: number | string;
};

export type CalculationContextState = CalculationState & {
  setCalculationData: (data: CalculationData) => void;
  setResult: (result: number) => void;
};
