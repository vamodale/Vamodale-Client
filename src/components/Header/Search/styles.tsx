import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
    backgroundIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: theme.colors.white,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
});