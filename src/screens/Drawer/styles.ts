import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.colors.lightBackground,
    width: 290
  },

  header: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16 
  },

  profilePicture: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },

  textContent: {
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.purple,
    marginBottom: -4
  },

  subtitle: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.purple,
  },

  separator: {
    backgroundColor: 'rgba(78, 65, 135, 0.25)',
    height: 1,
    width: '100%',
  },

  drawerItem: {
    paddingHorizontal: 16
  },

  drawerItemLabel: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.purple,
    marginLeft: -16
  },

  drawerHome: {
    display: 'none',
  }
});