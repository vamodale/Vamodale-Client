import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';



export const styles = StyleSheet.create({
    container: {
        width: '300px',
        height: 40,
        backgroundColor: theme.colors.white,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 0px #DDDDDD',     
    },
    title: {
        fontFamily: theme.fonts.title400,       
        color: theme.colors.mainblack,
        fontSize: 16,      
    },
    
    icon: {
        width: 24,
        height: 24,
        marginRight: 16,
    }
});