import { processFontFamily } from 'expo-font';
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    button_off_on: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        paddingLeft: 16
    },

    footer: {
        alignItems: 'center',
        marginTop: 50
    },

    switch: {
        display: 'flex',
        fontFamily: theme.fonts.regular,
        fontSize: 16,
        color: theme.colors.white,
        marginTop: -4
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
});