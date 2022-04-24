import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import { Input } from '@shared/Input';
import { Button } from '@shared/Button';
import { FormValues } from './types';
import { formResolver } from './validations';
import { style } from './styles';

const Form: React.FC = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      firstInputNumber: null,
      secondInputNumber: null,
    },
    resolver: formResolver,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <View style={style.container}>
      <View style={style.inputsContainer}>
        <Input
          name="firstInputNumber"
          label="First input"
          keyboardType="numeric"
          styles={style.firstInput}
          control={control}
        />
        <Input name="secondInputNumber" label="Second input" keyboardType="numeric" control={control} />
      </View>
      <Button title="Calculate" styles={style.submit} onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export { Form };
