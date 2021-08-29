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
    borderColor: theme.colors.green,
    borderStyle: 'dashed',
    borderWidth: 2,
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
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fonts.semibold,
    paddingTop: 10,
    paddingLeft: 17,
  }
})