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
        marginBottom: 64,
        fontFamily: theme.fonts.bold,
        lineHeight: 24
    }
});