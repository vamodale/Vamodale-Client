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
    color: theme.colors.white,
    fontSize: 20
  },

  nickname: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.purple,
    fontSize: 16,
    marginTop: -6
  },

  separator: {
    backgroundColor: "rgba(255, 255, 255, 1)",
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
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  atributeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 20
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
    color: theme.colors.white,
  },

  inputText: {
    borderColor: theme.colors.purple,
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 7,
    backgroundColor: theme.colors.lightGrey,
    fontSize: 16
  }
})