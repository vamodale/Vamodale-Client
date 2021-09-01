import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },

  head: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16
  },

  profilePicture: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },

  names: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 16
  },

  name: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.purple,
    fontSize: 20
  },

  nickname: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.purple,
    fontSize: 16,
    marginTop: -6
  },

  separator: {
    backgroundColor: "rgba(78, 65, 135, 0.25)",
    height: 1,
    width: "100%",
  },

  hour: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.purple,
    fontSize: 16
  },

  attributes: {
    paddingTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  atributeWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },

  attribute: {
    paddingLeft: 8,
    fontFamily: theme.fonts.semibold,
    fontSize: 16,
    color: theme.colors.purple,
  },

  attributeLabel: {
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    color: theme.colors.purple,
  },
})