import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';




export const styles = StyleSheet.create({
    container: {
        width: '300px',
        height: 40,
        backgroundColor: theme.colors.white,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0px 4px 0px ${theme.colors.lightGrey}`,     
    },
    text: {
        fontFamily: theme.fonts.regular,       
        color: theme.colors.darkGrey,
        fontSize: 16,      
    },   
    icon: {
        width: 24,
        height: 24,
        marginRight: 16,
    }
});