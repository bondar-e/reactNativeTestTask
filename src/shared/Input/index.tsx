import React from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';
import { style } from './styles';

type Props = UseControllerProps<any> & {
  label: string;
};

const Input: React.FC<Props> = ({ name, control, rules, label }) => {
  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <>
            <TextInput value={value} style={style.input} onChangeText={onChange} onBlur={onBlur} />
            <Text style={style.error}>{error ? error?.message : ''}</Text>
          </>
        )}
      />
    </View>
  );
};

export { Input };
