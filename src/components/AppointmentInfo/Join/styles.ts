import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },

  userIn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },

  backgroundColor: {
    backgroundColor: theme.colors.green,
    width: 48,
    height: 48,
    borderRadius: 24,
  },

  subtitle: {
    display: 'flex',
    flexDirection: 'row',
  },

  nickname: {
    fontFamily: theme.fonts.semibold,
    color: theme.colors.white,
    fontSize: 16,
  },

  name: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.white,
    fontSize: 16
  },

  attributes: {
    paddingTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  textWrapper: {
    paddingLeft: 16,
    display: 'flex',
    flexDirection: 'column'
  },

  click: {
    fontFamily: theme.fonts.semibold,
    fontSize: 12,
    color: theme.colors.white,
    marginTop: -6,
  },

  plustext: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.white,
    marginTop: -6,
  },

  icon: {
    padding: 12,
  }
})