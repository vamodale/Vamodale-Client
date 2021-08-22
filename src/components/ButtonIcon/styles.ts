import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 40,
        backgroundColor: theme.colors.white,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: theme.fonts.medium,       
        color: theme.colors.darkGrey,
        fontSize: 16,      
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 16,
    }
});