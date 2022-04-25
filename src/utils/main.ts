import { mathOperations } from '@constants/math';

export const isNullable = (value: any) => value === null || value === undefined || value === '';

export const getRandomMathOperation = () => {
  const mathOperationIndex = Math.floor(Math.random() * mathOperations.length);

  return mathOperations[mathOperationIndex];
};
