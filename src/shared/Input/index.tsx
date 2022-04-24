import React from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { KeyboardTypeOptions, StyleProp, Text, TextInput, View, ViewStyle } from 'react-native';

import { style } from './styles';

type Props = UseControllerProps<any> & {
  label: string;
  keyboardType?: KeyboardTypeOptions;
  styles?: StyleProp<ViewStyle>;
};

const Input: React.FC<Props> = ({ name, control, rules, label, keyboardType, styles }) => {
  return (
    <View style={[style.container, styles]}>
      <Text style={style.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <>
            <TextInput
              value={value}
              keyboardType={keyboardType}
              style={style.input}
              onChangeText={onChange}
              onBlur={onBlur}
            />
            <Text style={style.error}>{error ? error?.message : ''}</Text>
          </>
        )}
      />
    </View>
  );
};

export { Input };
