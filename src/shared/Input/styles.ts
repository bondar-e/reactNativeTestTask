import { StyleSheet } from 'react-native';

import { fontSizes } from '@theme/fontSizes';
import { colors } from '@theme/colors';

export const style = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginBottom: 10,
    fontSize: fontSizes.m,
  },
  input: {
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.gray,
    fontSize: fontSizes.m,
  },
  error: {
    marginTop: 5,
    fontSize: fontSizes.s,
    color: colors.red,
  },
});
