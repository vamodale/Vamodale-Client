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

  container: {
    backgroundColor: theme.colors.darkPurple,
    padding: 24,
    borderRadius: 24,
  },

  title: {
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
    fontSize: 16
  },

  infoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4
  },

  info:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  infoText: {
    fontSize: 12,
    color: theme.colors.white,
    fontFamily: theme.fonts.medium,
    paddingLeft: 8
  }

});