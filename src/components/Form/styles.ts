import { processFontFamily } from 'expo-font';
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    button_off_on: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 8
    },

    footer: {
        alignItems: 'center',
        paddingHorizontal: 24,
        marginTop: 50
    },

    labelName: {
        display: 'flex',
        fontFamily: theme.fonts.regular,
        fontSize: 16,
        color: theme.colors.white,
        lineHeight: 24,
        marginLeft: 41,
        marginTop: 32,
    },

    inputName: {
        display: 'flex',
        fontSize: 16,
        fontFamily: theme.fonts.medium,
        backgroundColor: theme.colors.white,
        borderRadius: 20,
        height: 36,
        marginTop: 5,
        marginLeft: 24,
        paddingLeft: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },

    labelSport: {
        display: 'flex',
        fontFamily: theme.fonts.medium,
        fontSize: 16,
        color: theme.colors.white,
        lineHeight: 24,
        marginLeft: 41,
        marginTop: 5,
    },

    pickerSport: {
        display: 'flex',
        backgroundColor: theme.colors.white,
        fontFamily: theme.fonts.medium,
        color: theme.colors.lightGrey,
        borderRadius: 20,
        width: 162,
        height: 36,
        marginTop: 5,
        marginLeft: 24,
        paddingLeft: 16,
    },

    labelSlots: {
        display: 'flex',
        fontFamily: theme.fonts.regular,
        fontSize: 16,
        color: theme.colors.white,
        lineHeight: 24,
        marginLeft: 110,
        marginRight: 100,
        marginTop: 5,
    },

    inputSlots: {
        display: 'flex',
        backgroundColor: theme.colors.white,
        fontFamily: theme.fonts.medium,
        borderRadius: 20,
        width: 152,
        height: 36,
        marginRight: 24,
        marginLeft: 24,
        marginTop: 5,
        paddingLeft: 16,
    },

    labelHour: {
        display: 'flex',
        fontFamily: theme.fonts.regular,
        fontSize: 16,
        color: theme.colors.white,
        lineHeight: 24,
        marginLeft: 41,
        marginTop: 5,
    },

    inputHour: {
        display: 'flex',
        backgroundColor: theme.colors.white,
        fontFamily: theme.fonts.medium,
        borderRadius: 20,
        width: 94,
        height: 36,
        marginLeft: 24,
        marginTop: 5,
        paddingLeft: 16,
    },

    labelDate: {
        display: 'flex',
        fontFamily: theme.fonts.regular,
        fontSize: 16,
        color: theme.colors.white,
        lineHeight: 24,
        marginLeft: 78,
        marginTop: 5,
    },

    inputDate: {
        display: 'flex',
        backgroundColor: theme.colors.white,
        fontFamily: theme.fonts.medium,
        borderRadius: 20,
        width: 214,
        height: 36,
        marginRight: 24,
        marginLeft: 24,
        marginTop: 5,
        paddingLeft: 16,
    },

    labelCep: {
        display: 'flex',
        fontFamily: theme.fonts.regular,
        fontSize: 16,
        color: theme.colors.white,
        lineHeight: 24,
        marginLeft: 41,
        marginTop: -5,
    },

    inputCep: {
        display: 'flex',
        fontSize: 16,
        fontFamily: theme.colors.lightGrey,
        backgroundColor: theme.colors.white,
        borderRadius: 20,
        width: 208,
        height: 36,
        marginLeft: 24,
        marginTop: 5,
        paddingLeft: 16,
    },

    labelNumber: {
        display: 'flex',
        fontFamily: theme.fonts.regular,
        fontSize: 16,
        color: theme.colors.white,
        lineHeight: 24,
        marginLeft: 178,
        marginTop: 5,
    },

    inputNumber: {
        display: 'flex',
        backgroundColor: theme.colors.white,
        fontFamily: theme.fonts.medium,
        borderRadius: 20,
        width: 80,
        height: 36,
        marginRight: 24,
        marginLeft: 24,
        marginTop: 5,
        paddingLeft: 16,
    },

    labelDistrict: {
        display: 'flex',
        fontFamily: theme.fonts.regular,
        fontSize: 16,
        color: theme.colors.white,
        lineHeight: 24,
        marginLeft: 41,
        marginTop: 5,
    },

    inputDistrict: {
        display: 'flex',
        backgroundColor: theme.colors.white,
        fontFamily: theme.fonts.medium,
        borderRadius: 20,
        width: 208,
        height: 36,
        marginLeft: 24,
        marginTop: 5,
        paddingLeft: 16,
    },

    labelRua: {
        display: 'flex',
        fontFamily: theme.fonts.regular,
        fontSize: 16,
        color: theme.colors.white,
        lineHeight: 24,
        marginLeft: 41,
        marginTop: 5,
    },

    inputRua: {
        display: 'flex',
        fontSize: 16,
        fontFamily: theme.fonts.medium,
        backgroundColor: theme.colors.white,
        borderRadius: 20,
        width: 330,
        height: 36,
        marginRight: 24,
        marginTop: 5,
        marginLeft: 24,
        paddingLeft: 16,
    },

    labelComplement: {
        display: 'flex',
        fontFamily: theme.fonts.regular,
        fontSize: 16,
        color: theme.colors.white,
        lineHeight: 24,
        marginLeft: 41,
        marginTop: 5,
    },

    inputComplement: {
        display: 'flex',
        fontSize: 16,
        fontFamily: theme.fonts.medium,
        backgroundColor: theme.colors.white,
        borderRadius: 20,
        width: 330,
        height: 36,
        marginRight: 24,
        marginTop: 5,
        marginLeft: 24,
        paddingLeft: 16,
    },

    switch: {
        display: 'flex',
        fontFamily: theme.fonts.regular,
        fontSize: 16,
        color: theme.colors.white,
        paddingRight: 30,
        marginTop: 5,
    },
});