import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    minWidth: 50,
    borderRadius: 20,
    backgroundColor: colors.gray,
  },
  title: {
    fontSize: fontSizes.m,
    fontWeight: '500',
    color: colors.white,
  },
});
