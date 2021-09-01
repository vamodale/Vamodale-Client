import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },

  wrapperPicture: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center'
  },

  userIn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    alignContent: 'space-between'
  },

  profilePicture: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'grey'
  },

  names: {
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

  attribute: {
    paddingLeft: 8,
    fontFamily: theme.fonts.semibold,
    fontSize: 16,
    color: theme.colors.white,
  },

  date: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.white,
    marginTop: -6,
  },
})