import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
    backgroundIcon: {
        width: 72,
        height: 40,
        borderRadius: 20,
        backgroundColor: theme.colors.purple,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
});