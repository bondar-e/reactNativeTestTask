import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import { Input } from '@shared/Input';
import { Button } from '@shared/Button';

const Form: React.FC = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      input: '',
    },
  });

  const onSubmit = (data: { input: string }) => {
    console.log(data);
  };

  return (
    <View>
      <Input name="input" label="Input" control={control} />
      <Button title="Calculate" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export { Form };
