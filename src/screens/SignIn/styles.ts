import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.lightgreen,
    },
    image: {
        width: '100%',
        height: 223,
    },
    content: {
        marginTop: 20,
        paddingHorizontal: 52
    },
    title: {
        color: theme.colors.white,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 16,
        fontFamily: theme.fonts.text600,
        lineHeight: 40,
        padding: 1
    },
    subtitle: {
        color: theme.colors.white,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
        fontFamily: theme.fonts.text700,
        lineHeight: 20
    }
});