import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 80,
        borderWidth: 1,
        borderColor: theme.colors.darkPurple,
        marginTop: 10
    },
    attributeLabel: {
        fontFamily: theme.fonts.regular,
        fontSize: 16,
        color: theme.colors.white,
    },
});