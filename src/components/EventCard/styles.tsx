import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    padding: 24,
    marginBottom: 8,
    backgroundColor: theme.colors.purple,
    borderRadius: 20,
    position: 'relative',
  },

  subtitle: {
    marginTop: -4,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start'
  },

  title: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
    fontSize: 20,
  },

  date: {
    fontFamily: theme.fonts.semibold,
    color: theme.colors.white,
    fontSize: 16,
  },

  hour: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.white,
    fontSize: 16
  },

  attributes: {
    paddingTop: 4,
  },

  attribute: {
    fontFamily: theme.fonts.semibold,
    fontSize: 12,
    color: theme.colors.white,
  },

  attributeLabel: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.white,
  },

  subscribers: {
    paddingTop: 8,
    display: 'flex',
    flexDirection: 'row'
  },

  subscriber: {
    width: 26,
    height: 26,
    borderRadius: 13,
    position: 'absolute',
    left: 0,
    top: 0,
    borderWidth: 1,
    backgroundColor: 'grey',
    borderColor: theme.colors.purple,
  },

  subscriberWraper: {
    position: "relative",
    width: 22,
    height: 26,
  },

  info: {
    position: 'absolute',
    backgroundColor: theme.colors.green,
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    right: 0,
    bottom: 0,
  },

  infoAdornmentWrapper: {
    width: 20,
    height: 20,
    backgroundColor: theme.colors.green,
    position: 'absolute'
  },

  infoAdornment: {
    width: 20,
    height: 20,
    backgroundColor: theme.colors.purple,
    borderBottomRightRadius: 20
  },

  infoAdornmentLeftWrapper: {
    right: 40,
    bottom: 0,
  },

  infoAdornmentTopWrapper: {
    bottom: 40,
    right: 0,
  }
})