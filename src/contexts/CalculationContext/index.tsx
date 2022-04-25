import React, { useReducer } from 'react';

import { actions, calculationReducer, initialCalculationState } from './state';
import { CalculationData, CalculationContextState } from './types';

const initialState: CalculationContextState = {
  firstNumber: null,
  secondNumber: null,
  operation: '',
  result: '',
  setCalculationData: () => {},
  setResult: () => {},
};

const CalculationContext = React.createContext(initialState);

const CalculationProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(calculationReducer, initialCalculationState);

  const setCalculationData = (data: CalculationData) => {
    dispatch(actions.setCalculationData(data));
  };

  const setResult = (result: number) => {
    dispatch(actions.setResult(result));
  };

  return (
    <CalculationContext.Provider value={{ ...state, setCalculationData, setResult }}>
      {children}
    </CalculationContext.Provider>
  );
};

export { CalculationProvider, CalculationContext };
