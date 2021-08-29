import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: 40,
        backgroundColor: theme.colors.green,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    text: {
        fontFamily: theme.fonts.medium,       
        color: theme.colors.white,
        fontSize: 16,      
    },
});