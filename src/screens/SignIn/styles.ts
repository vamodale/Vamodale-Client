import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.maingreen,
    },
    image: {
        width: 346,
        height: 223,
        marginBottom: 104
    },
    title: {
        color: theme.colors.white,
        textAlign: 'center',
        fontSize: 16,
        marginTop: 20,
        fontFamily: theme.fonts.text600,
        padding: 1
    },
    subtitle: {
        color: theme.colors.white,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 64,
        fontFamily: theme.fonts.text700,
        lineHeight: 24
    }
});