import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const globalStyles = StyleSheet.create({
  headerTitle: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.white,
    paddingLeft: 8
  },

  headerLeftIcon: {
    paddingHorizontal: 8
  }
});