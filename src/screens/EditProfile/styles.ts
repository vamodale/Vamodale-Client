import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },

  headerContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  },

  search: {
    paddingRight: 8
  },

  footerText: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.purple,
    fontSize: 16,
  }
});