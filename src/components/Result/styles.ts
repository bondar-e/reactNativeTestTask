import { StyleSheet } from 'react-native';

import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';

export const style = StyleSheet.create({
  container: {
    width: '100%',
  },
  containerResult: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.gray,
  },
  title: {
    marginBottom: 10,
    fontSize: fontSizes.m,
  },
  text: {
    marginBottom: 5,
    fontSize: fontSizes.m,
  },
});
