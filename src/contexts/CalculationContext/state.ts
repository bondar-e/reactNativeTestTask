import { CalculationData, CalculationState } from './types';

type Action = {
  type: string;
  payload?: any;
};

export const actionTypes = {
  setCalculationData: 'setCalculationData',
  setResult: 'setResult',
};

export const actions = {
  setCalculationData: (payload: CalculationData) => ({ type: actionTypes.setCalculationData, payload }),
  setResult: (payload: number) => ({ type: actionTypes.setResult, payload }),
};

export const initialCalculationState: CalculationState = {
  firstNumber: null,
  secondNumber: null,
  operation: '',
  result: '',
};

export const calculationReducer = (state: CalculationState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.setCalculationData:
      return {
        ...state,
        firstNumber: payload.firstInputNumber,
        secondNumber: payload.secondInputNumber,
        operation: payload.operationValue,
      };
    case actionTypes.setResult:
      return { ...state, result: payload };
    default:
      return state;
  }
};
