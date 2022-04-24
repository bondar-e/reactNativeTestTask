import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { messages } from '@constants/validations';

export const formResolver = yupResolver(
  Yup.object().shape({
    firstInputNumber: Yup.number().required(messages.required).max(99, messages.max),
    secondInputNumber: Yup.number().required(messages.required).max(99, messages.max),
  })
);
