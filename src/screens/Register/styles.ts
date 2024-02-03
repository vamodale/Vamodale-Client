import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.green,
    },
    image: {
        width: 346,
        height: 223,
        marginBottom: 104
    },
    p1: {
        color: theme.colors.white,
        textAlign: 'center',
        fontSize: 16,
        marginTop: 20,
        fontFamily: theme.fonts.semibold,
        padding: 1
    },
    p2: {
        color: theme.colors.white,
        fontSize: 16,
        textAlign: 'center',
        marginTop: -20,
        marginBottom: 64,
        fontFamily: theme.fonts.medium,
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
        paddingHorizontal: 20,
        paddingVertical: 7,
        backgroundColor: theme.colors.white,
        fontSize: 16
    },
    buttonLabel: {
        fontFamily: theme.fonts.regular,
        fontSize: 16,
        color: theme.colors.purple,
        paddingHorizontal: 20,
        paddingVertical: 7,
    },
    atributeWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 20
    },
    button: {
        marginTop: 40,
        width: '100%',
        backgroundColor: theme.colors.white,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});