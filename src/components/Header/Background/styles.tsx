import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 128,
        backgroundColor: theme.colors.green,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        display: 'flex',
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        paddingBottom: 24
    },
});